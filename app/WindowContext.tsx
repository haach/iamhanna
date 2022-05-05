import {FC, useEffect, useState, createContext} from 'react';

type WindowContext = Window | null;

export const WindowContext = createContext<WindowContext>(null);

/**
 *
 * @returns a context which centralizes the check for the global window object, which would only be present on ther client
 */
export const WindowContextProvider: FC = ({children}) => {
  const [windowObject, setWindowObject] = useState<WindowContext>(null);

  useEffect(() => {
    window && setWindowObject(window);
  }, []);

  return <WindowContext.Provider value={windowObject}>{children}</WindowContext.Provider>;
};
