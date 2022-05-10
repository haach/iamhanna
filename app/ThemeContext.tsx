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
    // check if window is initialised
    if (windowContext) {
      let isDarkMode = false;
      if (window.matchMedia && window.matchMedia('print').matches) {
        // print mode
        // TODO: this no ork :( try dis https://stackoverflow.com/questions/1234008/detecting-browser-print-event
        isDarkMode = true;
      } else if (!!window.localStorage.getItem('darkMode')) {
        // setting previously saved in localStorage
        isDarkMode = JSON.parse(window.localStorage.getItem('darkMode') ?? 'false');
      } else {
        // check system preference
        isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
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
