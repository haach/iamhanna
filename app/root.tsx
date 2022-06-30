import {GTMProvider, useGTMDispatch} from '@elgorditosalsero/react-gtm-hook';
import type {LinksFunction, MetaFunction} from '@remix-run/node';
import {Links, LiveReload, Meta, Outlet, Scripts, useCatch, useLoaderData, useLocation} from '@remix-run/react';
import classNames from 'classnames';
import dotenv from 'dotenv';
import {FC, useEffect, useState} from 'react';
import {Helmet} from 'react-helmet';
import {ComponentWithChildren} from '~/components';
import {CookieBanner} from '~/components/molecules/CookieBanner';
import {SrollPosition} from '~/components/molecules/SrollPosition';
import {Typo} from '~/components/primitives/typography';
import {CookieContextProvider, useCookieConsent} from '~/contexts/CookieContext';
import {ThemeContextProvider, useTheme} from '~/contexts/ThemeContext';
import {WindowContextProvider} from '~/contexts/WindowContext';
import styles from './styles/app.css';

const description =
  'I am a Berlin based frontend engineer and artist coming from a design driven background. On this portfolio you can find my cv and career path, a collection of things I currently love, some of my work and a way to contact me for job offers.';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  viewport: 'width=device-width,initial-scale=1',
  title: 'i am hanna - portfolio of Hanna Achenbach',
  description: description,
  keywords:
    'Hanna Achenbach software frontend full-stack fullstack engineer developer web technology web-apps apps application website PWA progressivve web app design artist',
});

export const links: LinksFunction = () => {
  return [{rel: 'stylesheet', href: styles}];
};

export const loader = () => {
  dotenv.config({path: `.env`});
  return process?.env.TRACKING_ID;
};
/**
 *
 * @returns A component that automatically track GTM navigation events if user consented
 */
const PageViewTracker: FC = () => {
  const [oldPathname, setOldPathname] = useState<string>('/');
  const {pathname} = useLocation();
  const sendDataToGTM = useGTMDispatch();
  useEffect(() => {
    sendDataToGTM({event: 'navigate', 'gtm.oldUrl': oldPathname, 'gtm.newUrl': pathname});
    setOldPathname(pathname);
  }, [pathname]);
  return null;
};

const Layout: ComponentWithChildren = ({children}) => {
  const {darkMode} = useTheme();
  const {consent} = useCookieConsent();
  const TRACKING_ID = useLoaderData();

  const gtmParams = {
    id: TRACKING_ID,
  };

  // prevent loading in wrong color schema before context is up
  if (darkMode === null) return null;
  if (consent === true) {
    return (
      <GTMProvider state={gtmParams}>
        <PageViewTracker />
        {children}
      </GTMProvider>
    );
  }
  return (
    <GTMProvider state={{id: ''}}>
      {children}
      <CookieBanner />
    </GTMProvider>
  );
};

const Document: ComponentWithChildren = ({children}) => {
  const {darkMode, systemDarkMode} = useTheme();
  const className = classNames('min-h-full', {
    dark: darkMode,
  });
  return (
    <html lang="en" className={className}>
      <head>
        <Meta />
        <Helmet>
          <meta property="og:title" content="i am hanna - portfolio of Hanna Achenbach" />
          <meta property="og:image" content="/work_samples/iamhanna_dark_light.gif" />
          <meta property="og:description" content={description} />
        </Helmet>
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
        <Scripts />
        <SrollPosition />
        {/* <ScrollRestoration /> */}
      </body>
    </html>
  );
};

const Wrapper: ComponentWithChildren = ({children}) => {
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
/**
 *
 * @param err error send to GA
 * @returns
 */
const GTMErrorTracker: FC<{err: string}> = ({err}) => {
  const sendDataToGTM = useGTMDispatch();
  const {pathname} = useLocation();
  useEffect(() => {
    sendDataToGTM({event: 'gtm.pageError', 'gtm.errorMessage': err, 'gtm.errorUrl': pathname});
  }, []);
  return null;
};

export const ErrorBoundary: FC<{error: Error}> = ({error}) => {
  return (
    <Wrapper>
      <GTMErrorTracker err={error.message} />
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
  return (
    <Wrapper>
      <GTMErrorTracker err={`status: ${caught.status} statusText: ${caught.statusText}`} />
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
