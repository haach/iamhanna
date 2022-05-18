import type {LinksFunction, MetaFunction} from '@remix-run/node';
import {Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useCatch, useLoaderData} from '@remix-run/react';
import classNames from 'classnames';
import dotenv from 'dotenv';
import {FC, useEffect} from 'react';
import ReactGA from 'react-ga';
import {CookieBanner} from '~/components/molecules/CookieBanner';
import {Typo} from '~/components/primitives/typography';
import {CookieContextProvider, useCookieConsent} from '~/contexts/CookieContext';
import {ThemeContextProvider, useTheme} from '~/contexts/ThemeContext';
import {WindowContextProvider} from '~/contexts/WindowContext';
import styles from './styles/app.css';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  viewport: 'width=device-width,initial-scale=1',
});

export const links: LinksFunction = () => {
  return [{rel: 'stylesheet', href: styles}];
};
export const loader = () => {
  dotenv.config({path: `.env`});
  const TRACKING_ID = process?.env.TRACKING_ID;
  return TRACKING_ID;
};

const Layout: FC = ({children}) => {
  const {darkMode} = useTheme();
  const {consent} = useCookieConsent();
  const TRACKING_ID = useLoaderData();

  useEffect(() => {
    // only initialise tracking after consent
    if (consent === true) {
      TRACKING_ID && ReactGA.initialize(TRACKING_ID);
    }
  }, [consent]);

  // prevent loading in wrong color schema before context is up
  if (darkMode === null) return null;
  return (
    <>
      {children}
      <CookieBanner />
    </>
  );
};

const Document: FC = ({children}) => {
  const {darkMode, systemDarkMode} = useTheme();
  const className = classNames('min-h-full', {
    dark: darkMode,
  });
  return (
    <html lang="en" className={className}>
      <head>
        <Meta />
        <link rel="icon" href={systemDarkMode ? '/dog_light.svg' : '/dog.svg'} />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Infant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <Links />
      </head>
      <body className="bg-white dark:bg-bl min-h-full font-thin text-black dark:text-white ">
        {process.env.NODE_ENV === 'development' && <LiveReload />}
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
};

const Wrapper: FC = ({children}) => {
  return (
    <WindowContextProvider>
      <ThemeContextProvider>
        <Document>
          <CookieContextProvider>
            <Layout>{children}</Layout>
          </CookieContextProvider>
        </Document>
      </ThemeContextProvider>
    </WindowContextProvider>
  );
};

export const ErrorBoundary: FC<{error: Error}> = ({error}) => {
  const {consent} = useCookieConsent();
  useEffect(() => {
    if (consent === true) {
      ReactGA.exception({
        description: 'An error ocurred',
        message: error.message,
        stack: error.stack,
        fatal: true,
      });
    }
  }, [consent]);
  return (
    <Wrapper>
      <div className="flex flex-col items-center content-center justify-center">
        <div className="py-10 px-10 w-max-sm">
          <Typo.h1>...oh dang 😖</Typo.h1>
          <Typo.p>something went south.</Typo.p>
          <Typo.p className="text-red-600">Error: {error.message}</Typo.p>
          {process.env.NODE_ENV === 'development' && <pre className="text-red-600">Stack: {error.stack}</pre>}
        </div>
      </div>
    </Wrapper>
  );
};

export const CatchBoundary: FC = () => {
  const caught = useCatch();

  const {consent} = useCookieConsent();
  useEffect(() => {
    if (consent === true) {
      ReactGA.exception({
        description: 'A 404 error ocurred',
        fatal: false,
      });
    }
  }, [consent]);

  return (
    <Wrapper>
      <div className="flex flex-col items-center content-center justify-center">
        <div className="py-10 px-10 w-max-sm">
          <Typo.h1>... oh oh a {caught.status} 😖</Typo.h1>
          <Typo.p className="text-red-600"> {caught.statusText}</Typo.p>
        </div>
      </div>
    </Wrapper>
  );
};

const App: FC = () => {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
};

export default App;
