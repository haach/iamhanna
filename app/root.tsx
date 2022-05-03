import type {LinksFunction, MetaFunction} from '@remix-run/node';
import {Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration} from '@remix-run/react';
import {FC, useContext} from 'react';
import styles from './styles/app.css';
import {RiSunFill, RiSunLine} from 'react-icons/ri';
import {ThemeContext, ThemeContextProvider} from '~/ThemeContext';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  viewport: 'width=device-width,initial-scale=1',
});

export const links: LinksFunction = () => {
  return [{rel: 'stylesheet', href: styles}];
};

const Layout: FC = ({children}) => {
  const {darkMode, switchDarkMode} = useContext(ThemeContext);
  return (
    <div>
      <header>
        <nav>NAVIGATION</nav>
        <button onClick={switchDarkMode}>{darkMode.userSelection ? <RiSunLine /> : <RiSunFill />}</button>
      </header>
      {children}
    </div>
  );
};

const Document: FC = ({children}) => {
  const {darkMode} = useContext(ThemeContext);
  return (
    <html lang="en" className={darkMode.userSelection ? 'dark' : ''}>
      <head>
        <Meta />
        <link rel="icon" href={darkMode.system ? 'dog_light.svg' : 'dog.svg'} />
        <Links />
      </head>
      <body className="bg-white dark:bg-black text-black dark:text-white">
        {process.env.NODE_ENV === 'development' && <LiveReload />}
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
};

export const ErrorBoundary: FC<{error: Error}> = ({error}) => {
  console.log('There was an error\n', error);
  return (
    <ThemeContextProvider>
      <Document>
        <Layout>
          <div>
            <h1 className="text-3xl font-bold underline">...oh dang 😖</h1>
            <p className="text-m">something went south.</p>
            <p className="text-m">{error.message}</p>
          </div>
        </Layout>
      </Document>
    </ThemeContextProvider>
  );
};

const App: FC = () => {
  return (
    <ThemeContextProvider>
      <Document>
        <Layout>
          <Outlet />
        </Layout>
      </Document>
    </ThemeContextProvider>
  );
};

export default App;
