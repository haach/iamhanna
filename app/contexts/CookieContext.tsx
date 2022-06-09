import {createContext, useContext, useEffect, useState} from 'react';
import {ComponentWithChildren} from '~/components';

interface CookieContext {
  consent: boolean | null;
  setConsent(userInput: boolean): void;
}

const CookieContext = createContext<CookieContext>({
  consent: null,
  setConsent: () => null,
});

/* Custom hook for better usability */
export const useCookieConsent = () => {
  const context = useContext(CookieContext);
  if (!context) {
    throw new Error('useCookieConsent must be called from CookieContextProvider child');
  }
  return context;
};

export const CookieContextProvider: ComponentWithChildren = ({children}) => {
  const [consent, setConsent] = useState<CookieContext['consent']>(true);

  const getCookie = (name: string): string | null => {
    if (document.cookie.length < 1) return null;
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts && parts.length === 2) return parts.pop()?.split(';').shift() ?? null;
    return null;
  };

  const persistSetting = (userInput: boolean) => {
    const newCookie = `cookieConsent=${userInput}; max-age=31536000; secure;`;
    document.cookie = newCookie;
    setConsent(userInput);
  };

  useEffect(() => {
    // check if cookies is set
    const currentCookie = getCookie('cookieConsent');
    if (currentCookie === 'true' || currentCookie === 'false') setConsent(JSON.parse(currentCookie));
  }, []);

  return (
    <CookieContext.Provider
      value={{
        consent,
        setConsent: (userInput) => persistSetting(userInput),
      }}
    >
      {children}
    </CookieContext.Provider>
  );
};
