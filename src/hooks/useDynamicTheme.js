import { useState, useEffect } from 'react';

const ████ = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const handleThemeChange = (event) => {
      setTheme(event.matches ? 'dark' : 'light');
    };

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', handleThemeChange);

    return () => mediaQuery.removeEventListener('change', handleThemeChange);
  }, []);

  return theme;
};

export default ████;
