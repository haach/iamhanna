import {FC, useEffect, useState, createContext, useContext} from 'react';
import {WindowContext} from '~/WindowContext';

interface ThemeContext {
  darkMode: boolean | null;
  switchDarkMode(): void;
}

export const ThemeContext = createContext<ThemeContext>({
  darkMode: null,
  switchDarkMode: () => null,
});

export const ThemeContextProvider: FC = ({children}) => {
  const [darkMode, setDarkMode] = useState<ThemeContext['darkMode']>(null);
  const windowContext = useContext(WindowContext);

  useEffect(() => {
    if (windowContext) {
      const isDarkMode = !!windowContext.localStorage.getItem('darkMode')
        ? JSON.parse(windowContext.localStorage.getItem('darkMode') ?? 'false')
        : windowContext.matchMedia && windowContext.matchMedia('(prefers-color-scheme: dark)').matches;
      persistSetting(isDarkMode);
    }
  }, [windowContext]);

  const persistSetting = (isDarkMode: boolean) => {
    setDarkMode(isDarkMode);
    window.localStorage.setItem('darkMode', String(isDarkMode));
  };

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        switchDarkMode: () => persistSetting(!darkMode),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
