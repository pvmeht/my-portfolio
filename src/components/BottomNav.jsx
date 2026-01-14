import React from 'react';

const navItems = [  
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const BottomNav = () => {
  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/30 dark:bg-black/30 backdrop-blur-md border border-gray-300 dark:border-gray-600 rounded-full px-4 py-2 flex gap-4 shadow-lg">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollTo(item.id)}
          className="text-sm text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition font-medium"
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default BottomNav;
