// In React, context provides a way to pass data through the component
// tree without having to pass props manually at every level. It’s often
// used for global settings, themes, user data, etc.
// useContext Hook: useContext allows you to consume a context value 
// directly inside a functional component.


import React, { createContext, useState } from 'react';

// Create the context
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Default theme is light

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (

    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
