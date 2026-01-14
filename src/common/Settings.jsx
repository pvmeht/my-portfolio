import React, { useEffect, useMemo, useRef, useState } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';
import ColorizeIcon from '@mui/icons-material/Colorize';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import * as NumberField from '@base-ui-components/react/number-field'; // ← this is the key import

// Defaults and persistence key
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
const DEFAULT_COUNT = 1;
const DEFAULT_PRIMARY = '#3d5afe';
const SS_KEY = 'ribbon_settings_v1';

const PanelBackdrop = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50" aria-modal="true" role="dialog">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="absolute left-1/2 top-1/2 w-[92vw] max-w-[520px] -translate-x-1/2 -translate-y-1/2">
        {children}
      </div>
    </div>
  );
};

const Header = ({ onClose }) => (
  <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
    <h3 className="text-[#F2E9E4] text-lg font-semibold">Settings</h3>
    <button
      aria-label="Close"
      onClick={onClose}
      className="text-[#C9ADA7] hover:text-[#F2E9E4] transition-colors"
    >
      <CloseIcon />
    </button>
  </div>
);

const SectionTitle = ({ children }) => (
  <div className="text-sm tracking-wide uppercase text-[#C9ADA7] mb-2">
    {children}
  </div>
);

const ColorChip = ({ color, active, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    title={color}
    className={`w-8 h-8 rounded-full border transition-transform ${
      active
        ? 'ring-2 ring-offset-2 ring-offset-[#22223B] ring-white scale-105'
        : 'hover:scale-105'
    }`}
    style={{ backgroundColor: color, borderColor: 'rgba(255,255,255,0.25)' }}
  />
);

export default function Settings({ onChange, anchorBelowRef }) {
  // Load initial state from sessionStorage
  const initial = useMemo(() => {
    try {
      const raw = sessionStorage.getItem(SS_KEY);
      if (raw) return JSON.parse(raw);
    } catch {}
    return {
      count: DEFAULT_COUNT,
      colors: PRESET_COLORS,
      selected: [DEFAULT_PRIMARY],
    };
  }, []);

  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(initial.count);
  const [colors, setColors] = useState(initial.colors);
  const [selected, setSelected] = useState(initial.selected);

  // Persist to session and notify parent
  useEffect(() => {
    const payload = { count, colors, selected };
    try {
      sessionStorage.setItem(SS_KEY, JSON.stringify(payload));
    } catch {}
    if (onChange) onChange(payload);
  }, [count, colors, selected, onChange]);

  // Ensure selected array length tracks count
  useEffect(() => {
    if (selected.length > count) {
      setSelected((prev) => prev.slice(0, count));
    } else if (selected.length < count) {
      const padColor = selected[0] || DEFAULT_PRIMARY;
      setSelected((prev) => [
        ...prev,
        ...Array(Math.max(0, count - prev.length)).fill(padColor),
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  const handleToggleColor = (c) => {
    if (selected.includes(c)) {
      const next = selected.filter((x) => x !== c);
      setSelected(next.length ? next : [DEFAULT_PRIMARY]);
      return;
    }
    if (selected.length < count) {
      setSelected((prev) => [...prev, c]);
    } else {
      setSelected((prev) => [...prev.slice(0, -1), c]);
    }
  };

  const handleAddColor = (c) => {
    if (!c) return;
    const color = c.toLowerCase();
    if (!/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(color)) return;
    setColors((prev) => (prev.includes(color) ? prev : [...prev, color]));
    if (selected.length < count) {
      setSelected((prev) => [...prev, color]);
    }
  };

  const handleGlowBurst = () => {
    window.dispatchEvent(
      new CustomEvent('ribbons-glow-burst', { detail: { colors } })
    );
  };

  // Position settings button below the resume button (if provided)
  const [anchorPos, setAnchorPos] = useState({ left: 16, top: 16 });
  const measureTimerRef = useRef(null);

  const measureAnchor = () => {
    if (anchorBelowRef?.current) {
      const rect = anchorBelowRef.current.getBoundingClientRect();
      setAnchorPos({
        left: rect.left,
        top: rect.bottom + 12,
      });
    }
  };

  useEffect(() => {
    measureAnchor();
    const onResize = () => {
      // Debounce measurement a bit during resize
      clearTimeout(measureTimerRef.current);
      measureTimerRef.current = setTimeout(measureAnchor, 80);
    };
    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onResize, { passive: true });
    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onResize);
      clearTimeout(measureTimerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [anchorBelowRef, open]);

  return (
    <>
      {/* Floating Settings Button (positioned via anchorBelowRef) */}
      <button
        aria-label="Settings"
        onClick={() => setOpen(true)}
        className="fixed z-40 p-2 rounded-full bg-[#4A4E69] text-[#F2E9E4] hover:bg-[#4A4E69]/80 shadow-lg transition-colors"
        style={{ left: `${anchorPos.left}px`, top: `${anchorPos.top}px` }}
      >
        <SettingsIcon />
      </button>

      {/* Glassy Modal */}
      <PanelBackdrop open={open} onClose={() => setOpen(false)}>
        <div
          className="
            rounded-2xl overflow-hidden
            bg-white/30 dark:bg-black/30
            backdrop-blur-md
            border border-gray-300 dark:border-gray-600
            shadow-2xl
          "
        >
          <Header onClose={() => setOpen(false)} />

          <div className="px-5 py-4 space-y-6 text-[#F2E9E4]">
            {/* Modify Ribbons - Color count with fixed NumberField */}
            <div>
              <SectionTitle>Modify Ribbons</SectionTitle>
              <div className="flex items-center gap-4">
                <span>Color count</span>
                <div className="flex items-center gap-2">
                  <NumberField.Root
                    value={count}
                    min={1}
                    max={99}
                    onValueChange={(value) => {
                      const v = Number(value);
                      if (!Number.isNaN(v)) {
                        const clamped = Math.max(1, Math.min(99, v));
                        setCount(clamped);
                      }
                    }}
                    className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-2 py-1"
                  >
                    <NumberField.Decrement
                      className="px-2 py-1 rounded-md text-[#C9ADA7] hover:bg-white/10"
                      aria-label="Decrease"
                    >
                      –
                    </NumberField.Decrement>

                    <NumberField.Input
                      className="w-14 text-center bg-transparent outline-none text-[#F2E9E4]"
                      aria-label="Quantity Input"
                    />

                    <NumberField.Increment
                      className="px-2 py-1 rounded-md text-[#C9ADA7] hover:bg-white/10"
                      aria-label="Increase"
                    >
                      +
                    </NumberField.Increment>
                  </NumberField.Root>
                </div>
              </div>
              <p className="text-xs text-[#C9ADA7] mt-1">
                At a time how many colors we use.
              </p>
            </div>

            {/* Color selection */}
            <div>
              <SectionTitle>Select Colors</SectionTitle>
              <div className="flex flex-wrap gap-3">
                {colors.map((c) => (
                  <ColorChip
                    key={c}
                    color={c}
                    active={selected.includes(c)}
                    onClick={() => handleToggleColor(c)}
                  />
                ))}

                {/* Add color picker */}
                <label className="relative flex items-center gap-2 px-3 py-2 rounded-full cursor-pointer bg-white/5 border border-white/15 hover:bg-white/10 transition-colors">
                  <ColorizeIcon className="text-[#C9ADA7]" />
                  <span className="text-sm">Add</span>
                  <input
                    type="color"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    onChange={(e) => handleAddColor(e.target.value)}
                    aria-label="Add color"
                  />
                </label>
              </div>
              <p className="text-xs text-[#C9ADA7] mt-2">
                Default palette is preloaded; added colors are saved in session and shown here.
              </p>
            </div>

            {/* Glow Burst */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleGlowBurst}
                className="relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[#22223B] font-semibold overflow-hidden"
                style={{
                  background:
                    'linear-gradient(90deg, #ffffff, #3d5afe, #ff9800, #ff5722, #e91e63, #f44336, #9c27b0, #64ffda, #c0ca33)',
                  filter: 'drop-shadow(0 0 12px rgba(255,255,255,0.35))',
                }}
                aria-label="Glow Burst"
                title="Glow Burst"
              >
                <RocketLaunchIcon />
                Glow Burst
              </button>
              <p className="text-xs text-[#C9ADA7] mt-2">
                Triggers a brief burst effect using the full color array.
              </p>
            </div>
          </div>
        </div>
      </PanelBackdrop>
    </>
  );
}