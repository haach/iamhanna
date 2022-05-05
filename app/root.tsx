import type {LinksFunction, MetaFunction} from '@remix-run/node';
import {Link, Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration} from '@remix-run/react';
import {FC, useContext, useEffect, useState} from 'react';
import styles from './styles/app.css';
import {RiSunFill, RiSunLine} from 'react-icons/ri';
import {ThemeContext, ThemeContextProvider} from '~/ThemeContext';
import {H1, P, SPAN} from '~/components/primitives/typography';
import classNames from 'classnames';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  viewport: 'width=device-width,initial-scale=1',
});

export const links: LinksFunction = () => {
  return [{rel: 'stylesheet', href: styles}];
};

const Layout: FC = ({children}) => {
  const {darkMode, switchDarkMode} = useContext(ThemeContext);
  const [location, setLocation] = useState<Location>();

  useEffect(() => {
    //TODO: Make context?
    window && window.location && setLocation(window.location);
  }, []);

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
            {links.map(([routeName, to]) => {
              const isActive = location?.pathname === to;
              console.log('isActive', isActive);
              return (
                <li key={routeName}>
                  <Link to={to}>
                    <SPAN
                      uppercase
                      className={
                        isActive
                          ? 'text-yellow dark:text-yellow cursor-default'
                          : 'hover:text-gray dark:hover:text-gray transition-colors'
                      }
                    >
                      {routeName}
                    </SPAN>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <button onClick={switchDarkMode}>
          <SPAN>{darkMode.userSelection ? <RiSunFill /> : <RiSunLine />}</SPAN>
        </button>
      </header>
      <div>{children}</div>
    </div>
  );
};

const Document: FC = ({children}) => {
  const {darkMode} = useContext(ThemeContext);
  const className = classNames('min-h-full', {
    dark: darkMode.userSelection,
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
    <ThemeContextProvider>
      <Document>
        <Layout>
          <div className="flex flex-col items-center content-center">
            <div className="max-w-md">
              <H1>...oh dang 😖</H1>
              <P>something went south.</P>
              <P>{error.message}</P>
            </div>
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
  );
};

export default App;
