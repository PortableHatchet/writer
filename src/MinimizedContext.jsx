// MinimizedContext.js
import { createContext, useContext, useState } from 'react';

const MinimizedContext = createContext();

export const MinimizedProvider = ({ children }) => {
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleMinimized = () => {
    setIsMinimized((prev) => !prev);
  };

  return (
    <MinimizedContext.Provider value={{ isMinimized, toggleMinimized }}>
      {children}
    </MinimizedContext.Provider>
  );
};

export const useMinimized = () => {
  return useContext(MinimizedContext);
};
