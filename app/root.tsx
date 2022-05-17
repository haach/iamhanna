import type {LinksFunction, MetaFunction} from '@remix-run/node';
import {Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useCatch, useLoaderData} from '@remix-run/react';
import classNames from 'classnames';
import {FC, useContext} from 'react';
import {Typo} from '~/components/primitives/typography';
import {ThemeContext, ThemeContextProvider} from '~/ThemeContext';
import {WindowContextProvider} from '~/WindowContext';
import styles from './styles/app.css';
import ReactGA from 'react-ga';
import dotenv from 'dotenv';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  viewport: 'width=device-width,initial-scale=1',
});

export const links: LinksFunction = () => {
  return [{rel: 'stylesheet', href: styles}];
};

const Layout: FC = ({children}) => {
  const {darkMode} = useContext(ThemeContext);
  // prevent loading in wrong color schema before context is up
  if (darkMode === null) return null;
  return <div>{children}</div>;
};

export const loader = () => {
  dotenv.config({path: `.env`});
  const TRACKING_ID = process?.env.TRACKING_ID;
  TRACKING_ID && ReactGA.initialize(TRACKING_ID);
  return TRACKING_ID;
};

const Document: FC = ({children}) => {
  const {darkMode, systemDarkMode} = useContext(ThemeContext);
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

export const ErrorBoundary: FC<{error: Error}> = ({error}) => {
  ReactGA.exception({
    description: 'An error ocurred',
    message: error.message,
    stack: error.stack,
    fatal: true,
  });
  return (
    <WindowContextProvider>
      <ThemeContextProvider>
        <Document>
          <Layout>
            <div className="flex flex-col items-center content-center justify-center">
              <div className="py-10 px-10 w-max-sm">
                <Typo.h1>...oh dang 😖</Typo.h1>
                <Typo.p>something went south.</Typo.p>
                <Typo.p className="text-red-600">Error: {error.message}</Typo.p>
                {process.env.NODE_ENV === 'development' && <pre className="text-red-600">Stack: {error.stack}</pre>}
              </div>
            </div>
          </Layout>
        </Document>
      </ThemeContextProvider>
    </WindowContextProvider>
  );
};

export const CatchBoundary: FC = () => {
  const caught = useCatch();
  ReactGA.exception({
    description: 'A 404 error ocurred',
    fatal: false,
  });
  return (
    <WindowContextProvider>
      <ThemeContextProvider>
        <Document>
          <Layout>
            <div className="flex flex-col items-center content-center justify-center">
              <div className="py-10 px-10 w-max-sm">
                <Typo.h1>... oh oh a {caught.status} 😖</Typo.h1>
                <Typo.p className="text-red-600"> {caught.statusText}</Typo.p>
              </div>
            </div>
          </Layout>
        </Document>
      </ThemeContextProvider>
    </WindowContextProvider>
  );
};

const App: FC = () => {
  return (
<<<<<<< HEAD
    <ThemeContextProvider>
      <Document>
        <div>
          <h1 className="text-3xl font-bold underline">Hey there! ✌️</h1>
          <p className="text-m">
            I am currently reworking my website. Please come back in a couple of days or hit me up on{' '}
            <a href="https://www.linkedin.com/in/hanna-achenbach/" className="underline">
              LinkedIn
            </a>{' '}
            meanwhile.
          </p>
        </div>
      </Document>
    </ThemeContextProvider>
=======
    <WindowContextProvider>
      <ThemeContextProvider>
        <Document>
          <Layout>
            <Outlet />
          </Layout>
        </Document>
      </ThemeContextProvider>
    </WindowContextProvider>
>>>>>>> 91cffe9 (create a context for global Window obj check)
  );
};

export default App;
