import React from 'react';

const ToggleThemeButton = ({ toggleTheme, theme }) => {
  return (
    <button onClick={toggleTheme} className="toggle-theme-button">
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

export default ToggleThemeButton;
