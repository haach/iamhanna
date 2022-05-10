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
  const {darkMode} = useContext(ThemeContext);
  // prevent loading in wrong color schema before context is up
  if (darkMode === null) return null;
  return <div>{children}</div>;
};

const Document: FC = ({children}) => {
  const {darkMode} = useContext(ThemeContext);
  const className = classNames('min-h-full', {
    dark: darkMode,
  });
  return (
    <html lang="en" className={className}>
      <head>
        <Meta />
        <link rel="icon" href={darkMode ? 'dog_light.svg' : 'dog.svg'} />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <Links />
      </head>
      <body className="bg-white dark:bg-black min-h-full font-thin text-black dark:text-white ">
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
            <div className="flex flex-col items-center content-center px-32 py-24">
              <div>
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
