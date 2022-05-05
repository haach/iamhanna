import type {LinksFunction, MetaFunction} from '@remix-run/node';
import {Link, Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration} from '@remix-run/react';
import {FC, useContext} from 'react';
import styles from './styles/app.css';
import {RiSunFill, RiSunLine} from 'react-icons/ri';
import {ThemeContext, ThemeContextProvider} from '~/ThemeContext';
import {Typo} from '~/components/primitives/typography';
import classNames from 'classnames';
import {WindowContext, WindowContextProvider} from '~/WindowContext';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  viewport: 'width=device-width,initial-scale=1',
});

export const links: LinksFunction = () => {
  return [{rel: 'stylesheet', href: styles}];
};

const Layout: FC = ({children}) => {
  const {darkMode, switchDarkMode} = useContext(ThemeContext);
  const globalWindow = useContext(WindowContext);

  // prevent loading in wrong color schema before context is up
  if (darkMode.system === null) return null;

  const links = [
    ['home', '/'],
    ['cv', '/cv'],
    ['contact', '/contact'],
  ];
  return (
    <div className="flex flex-col min-h-full px-10 py-6 gap-4">
      <header className="flex flex-row justify-between">
        <nav>
          <ul className="flex flex-row justify-start gap-4">
            {links.map(([routeName, to]) => (
              <li key={routeName}>
                <Link to={to}>
                  <Typo.span
                    uppercase
                    className={
                      globalWindow?.location?.pathname === to
                        ? 'text-yellow dark:text-yellow cursor-default'
                        : 'hover:text-gray dark:hover:text-gray transition-colors'
                    }
                  >
                    {routeName}
                  </Typo.span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button onClick={switchDarkMode} className="flex flex-row content-center items-center">
          <Typo.span>TURN ON/OFF</Typo.span>
          <Typo.span className="-mt-1 ml-2"> {darkMode.userSelection ? <RiSunFill /> : <RiSunLine />}</Typo.span>
        </button>
      </header>
      <div>{children}</div>
    </div>
  );
};

const Document: FC = ({children}) => {
  const {darkMode} = useContext(ThemeContext);
  const className = classNames('min-h-full', {
    dark: darkMode.userSelection || darkMode.system,
  });
  return (
    <html lang="en" className={className}>
      <head>
        <Meta />
        <link rel="icon" href={darkMode.system ? 'dog_light.svg' : 'dog.svg'} />
        <Links />
      </head>
      <body className="bg-white dark:bg-black min-h-full">
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
    <WindowContextProvider>
      <ThemeContextProvider>
        <Document>
          <Layout>
            <div className="flex flex-col items-center content-center">
              <div className="max-w-md">
                <Typo.h1>...oh dang 😖</Typo.h1>
                <Typo.p>something went south.</Typo.p>
                <Typo.p>{error.message}</Typo.p>
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
