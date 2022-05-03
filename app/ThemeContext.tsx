import {FC, useEffect, useState, createContext} from 'react';

interface ThemeContext {
  darkMode: {system: boolean | null; userSelection: boolean | null};
  switchDarkMode(): void;
}

export const ThemeContext = createContext<ThemeContext>({
  darkMode: {system: null, userSelection: null},
  switchDarkMode: () => null,
});

export const ThemeContextProvider: FC = ({children}) => {
  const [{system, userSelection}, setDarkMode] = useState<{system: boolean; userSelection: boolean}>({
    system: true,
    userSelection: true,
  });
  useEffect(() => {
    const isDarkMode = window && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode({system: isDarkMode, userSelection: isDarkMode});
  }, []);
  return (
    <ThemeContext.Provider
      value={{
        darkMode: {
          system,
          userSelection,
        },
        switchDarkMode: () => setDarkMode({system, userSelection: !userSelection}),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
