import type {LinksFunction, MetaFunction} from '@remix-run/node';
import {Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration} from '@remix-run/react';
import {useEffect, useState} from 'react';
import styles from './styles/app.css';
import {RiSunFill, RiSunLine} from 'react-icons/ri';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
});

export const links: LinksFunction = () => {
  return [
    {rel: 'stylesheet', href: styles},
    // from https://remix.run/docs/en/v1/api/conventions#links
  ];
};

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  useEffect(() => {
    setIsDarkMode(window && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  }, []);
  return (
    <html lang="en" className={isDarkMode ? 'dark' : ''}>
      <head>
        <Meta />
        <Links />
        <link rel="icon" href={isDarkMode ? 'dog_light.svg' : 'dog.svg'} />
      </head>
      <body className="bg-white dark:bg-black text-black dark:text-white">
        <button onClick={() => setIsDarkMode(!isDarkMode)}>{isDarkMode ? <RiSunLine /> : <RiSunFill />}</button>
        <LiveReload />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
