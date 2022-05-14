import debounce from 'just-debounce';
import {FC, useEffect, useMemo, useState, createContext} from 'react';

type WindowContext = {width: number; height: number} | null;

export const WindowContext = createContext<WindowContext>(null);

/**
 *
 * @returns a context which centralizes the check for the global window object, which would only be present on ther client
 */
export const WindowContextProvider: FC = ({children}) => {
  const [windowObject, setWindowObject] = useState<WindowContext>(null);

  // Handler to call on window resize
  const handleResize = () => {
    // Set window to state
    window && setWindowObject({width: window.innerWidth, height: window.innerHeight});
  };

  // Handler to call on window resize
  const debouncedHandleResize = useMemo(() => debounce(() => handleResize(), 200), []);

  useEffect(() => {
    // Add event listener
    window.addEventListener('resize', debouncedHandleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', debouncedHandleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return <WindowContext.Provider value={windowObject}>{children}</WindowContext.Provider>;
};
