import React, { useEffect, useMemo, useRef, useState } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';
import ColorizeIcon from '@mui/icons-material/Colorize';
import { NumberField } from '@base-ui/react/number-field';

const PRESET_COLORS = [
  '#ffffff',
  '#3d5afe',
  '#ff9800',
  '#ff5722',
  '#e91e63',
  '#f44336',
  '#9c27b0',
  '#64ffda',
  '#c0ca33',
];

const STORAGE_KEY = 'ribbon_settings_v1';

const isValidHex = (v) => /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(v);

export default function Settings({ onChange, anchorBelowRef }) {
  /* ----------------- initial state ----------------- */
  const initial = useMemo(() => {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch {}
    return {
      count: 3,
      colors: PRESET_COLORS,
      selected: PRESET_COLORS.slice(0, 3),
    };
  }, []);

  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(initial.count);
  const [colors, setColors] = useState(initial.colors);
  const [selected, setSelected] = useState(initial.selected);

  /* ----------------- persist + notify ----------------- */

  const handleToggle = () => {
    setOpen(prev => !prev);
  };

  useEffect(() => {
    const payload = { count, colors, selected };
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch {}
    onChange?.(payload);
  }, [count, colors, selected, onChange]);

  /* ----------------- clamp selected ----------------- */
  useEffect(() => {
    if (selected.length > count) {
      setSelected((prev) => prev.slice(0, count));
    }
  }, [count]);

  /* ----------------- anchor positioning ----------------- */
  const [pos, setPos] = useState({ left: 16, top: 16 });
  const [isPositionReady, setIsPositionReady] = useState(false);

  useEffect(() => {
    let rafId;

    const updatePos = () => {
      if (!anchorBelowRef?.current) return;

      const r = anchorBelowRef.current.getBoundingClientRect();
      setPos({
        left: r.left + (r.width / 2) - 22,
        top: r.bottom + 16,
      });

      // Mark as ready after first successful measurement
      if (!isPositionReady) {
        setIsPositionReady(true);
      }
    };

    updatePos(); // try immediately

    const onChange = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updatePos);
    };

    window.addEventListener('resize', onChange);
    window.addEventListener('scroll', onChange, { passive: true });

    // Force one more try after mount (covers React StrictMode double-render)
    const timer = setTimeout(updatePos, 0);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onChange);
      window.removeEventListener('scroll', onChange);
      clearTimeout(timer);
    };
  }, [anchorBelowRef, isPositionReady]);

  /* ----------------- handlers ----------------- */
  const toggleColor = (c) => {
    setSelected((prev) => {
      if (prev.includes(c)) return prev.filter((x) => x !== c);
      if (prev.length >= count) return prev;
      return [...prev, c];
    });
  };

  const addColor = (c) => {
    if (!isValidHex(c)) return;
    setColors((prev) => (prev.includes(c) ? prev : [...prev, c]));
  };

  /* ----------------- UI ----------------- */
  return (
    <>
      {/* Floating Settings Button - matched size to Resume button */}

      {isPositionReady && (
        <button
          aria-label="Settings"
          onClick={() => setOpen(true)}
          style={{
            left: `${pos.left}px`,
            top: `${pos.top}px`,
            width: '44px',
            height: '44px',
          }}
          className="fixed z-50 flex items-center justify-center rounded-full
          bg-white/30 dark:bg-black/30 backdrop-blur-md
          border border-gray-300 dark:border-gray-600
          text-[#F2E9E4] shadow-xl hover:scale-105 transition-all duration-200"
        >
          <SettingsIcon fontSize="medium" />
        </button>
      )}

      

      {/* Backdrop */}
      {open && (
        <>
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={() => setOpen(false)}
        />
      
          <div
            className="
              fixed z-50 bottom-4 left-24 w-80 max-h-[70vh] overflow-y-auto
              rounded-xl bg-white/25 dark:bg-black/35 backdrop-blur-lg
              border border-gray-400/30 dark:border-gray-600/40
              shadow-2xl text-[#F2E9E4] transition-all duration-200
              animate-in fade-in slide-in-from-bottom-4
            "
            style={{
              // ~5mm gap from icon (bottom-24 ≈ icon bottom + 20px + icon height)
              // You can use calc() if you want more precision
            }}
            onClick={e => e.stopPropagation()} // prevent closing when clicking inside
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/15">
              <h3 className="text-lg font-medium">Settings</h3>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close settings"
                className="text-[#C9ADA7] hover:text-white transition-colors"
              >
                <CloseIcon fontSize="small" />
              </button>
            </div>

            {/* Content */}
            <div className="p-5 space-y-6">
              {/* Color count */}
              <div>
                <p className="text-sm uppercase text-[#C9ADA7] mb-2">Modify Ribbons</p>
                <div className="flex items-center gap-4">
                  <span>Color count</span>
                  <NumberField.Root
                    value={count}
                    min={1}
                    max={99}
                    onValueChange={v => {
                      const n = Number(v);
                      if (!Number.isNaN(n)) setCount(Math.max(1, Math.min(99, n)));
                    }}
                    className="flex items-center gap-2 bg-white/15 border border-white/20 rounded-lg px-3 py-1.5"
                  >
                    <NumberField.Decrement aria-label="Decrease">−</NumberField.Decrement>
                    <NumberField.Input className="w-14 text-center bg-transparent outline-none" />
                    <NumberField.Increment aria-label="Increase">+</NumberField.Increment>
                  </NumberField.Root>
                </div>
              </div>

              {/* Color chips – unchanged, but wrapped for better scrolling */}
              <div>
                <p className="text-sm uppercase text-[#C9ADA7] mb-2">Select Colors</p>
                <div className="flex flex-wrap gap-2.5 max-h-40 overflow-y-auto pr-2">
                  {colors.map(c => (
                    <button
                      key={c}
                      onClick={() => toggleColor(c)}
                      className={`w-9 h-9 rounded-full border transition-all
                        ${selected.includes(c) ? 'ring-2 ring-white/70 scale-105' : 'hover:scale-105'}`}
                      style={{ backgroundColor: c }}
                    />
                  ))}
                  <label className="relative flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 border border-white/20 cursor-pointer hover:bg-white/15">
                    <ColorizeIcon fontSize="small" />
                    <input
                      type="color"
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      onChange={e => addColor(e.target.value)}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>        
        </>
      )}
    </>
  );
}