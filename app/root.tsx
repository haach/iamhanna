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
  const [{system, userSelection}, setDarkMode] = useState<{system: boolean; userSelection: boolean}>({
    system: true,
    userSelection: true,
  });
  useEffect(() => {
    const isDarkMode = window && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode({system: isDarkMode, userSelection: isDarkMode});
  }, []);

  return (
    <html lang="en" className={userSelection ? 'dark' : ''}>
      <head>
        <Meta />
        <Links />
        <link rel="icon" href={system ? 'dog_light.svg' : 'dog.svg'} />
      </head>
      <body className="bg-white dark:bg-black text-black dark:text-white">
        <button onClick={() => setDarkMode({system, userSelection: !userSelection})}>
          {userSelection ? <RiSunLine /> : <RiSunFill />}
        </button>
        <LiveReload />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
