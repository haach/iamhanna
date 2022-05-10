import {Link} from '@remix-run/react';
import classNames from 'classnames';
import {FC, ReactNode, useContext, useEffect, useState} from 'react';
import {blackBorder} from '~/components/primitives';
import {Typo} from '~/components/primitives/typography';
import {ThemeContext} from '~/ThemeContext';
import {WindowContext} from '~/WindowContext';

export const defaultSpacing = 240;

const HeaderNav: FC = () => {
  const links = [
    ['home', '/'],
    ['cv', '/cv'],
    ['contact', '/contact'],
  ];
  return (
    <nav>
      <ul className="flex flex-row justify-start gap-4">
        {links.map(([routeName, to]) => (
          <li key={routeName}>
            <Link to={to}>
              <Typo.span
                uppercase
                yellow={window.location?.pathname === to}
                className={
                  window?.location?.pathname === to
                    ? 'cursor-default'
                    : 'hover:text-g dark:hover:text-g transition-colors'
                }
              >
                {routeName}
              </Typo.span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const DarkModeSwitch: FC = () => {
  const {darkMode, switchDarkMode} = useContext(ThemeContext);
  return (
    <button onClick={switchDarkMode} className="flex flex-row content-center items-center text-xs">
      <Typo.caption className="mt-0 mr-2">Dark mode</Typo.caption>
      <div
        className={classNames('grid grid-cols-2 rounded-full border-1 border-solid box-border transition-colors ', {
          'bg-y border-y': darkMode,
          'bg-white  border-g': !darkMode,
        })}
        style={{width: '36px', height: '18px', borderWidth: '1px'}}
      >
        <div
          className={classNames('flex flex-row justify-center items-center rounded-full box-border transition-colors', {
            'bg-white hover:bg-neutral-200': darkMode,
            'bg-g hover:bg-gd': !darkMode,
          })}
          style={{
            gridColumn: darkMode ? 2 : 1,
            margin: '2px',
          }}
        />
      </div>
    </button>
  );
};

export const PageLayout: FC<{title: string; subTitle?: string; sideBar?: ReactNode}> = ({
  title,
  subTitle,
  sideBar,
  children,
}) => {
  const globalWindow = useContext(WindowContext);
  const [imageSize, setImageSize] = useState<number>(defaultSpacing);
  useEffect(() => {
    const calcSize =
      globalWindow && globalWindow.width > 1024
        ? defaultSpacing
        : globalWindow && globalWindow.width < 1024
        ? globalWindow.width * 0.2
        : 200;
    setImageSize(calcSize);
    console.log('calcSize', calcSize);
  }, [globalWindow]);

  return (
    <div>
      <div className="relative">
        <div
          className={`${blackBorder} border-b-2 -z-10 absolute`}
          style={{left: 0, right: 0, top: 0, transform: `translate3d(0px, ${imageSize / 2 + 58}px, 0)`}}
        />
        <div className="container mx-auto max-w-screen-xl border-box px-20 py-10">
          <header className="flex flex-row justify-end">
            <DarkModeSwitch />
          </header>

          <div className="flex flex-row z-10 justify-between gap-20">
            {/* LEFT */}
            <div className="flex flex-col items-end" style={{width: `${imageSize + 50}px`}}>
              <div
                className={`inline-block border-2 rounded-full bg-white dark:bg-black ml-24 p-1 aspect-square ${blackBorder}`}
                style={{width: `${imageSize}px`}}
              >
                <img src="portrait.jpg" className="rounded-full" />
              </div>
              {sideBar}
            </div>

            {/* RIGHT */}
            <div className="flex flex-1 flex-col">
              <div className="flex items-end justify-between pb-4" style={{height: `${imageSize / 2}px`}}>
                <div>
                  <Typo.h1>{title}</Typo.h1>
                  {subTitle && (
                    <Typo.h2>
                      {'// '}
                      {subTitle}
                    </Typo.h2>
                  )}
                </div>
                <HeaderNav />
              </div>

              {/* CONTENT HERE  */}
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
