import {Link} from '@remix-run/react';
import classNames from 'classnames';
import {FC, ReactNode, useContext} from 'react';
import {blackBorder} from '~/components/primitives';
import {Typo} from '~/components/primitives/typography';
import {ThemeContext} from '~/ThemeContext';
import {WindowContext} from '~/WindowContext';

const HeaderNav: FC = () => {
  const globalWindow = useContext(WindowContext);
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
                yellow={globalWindow?.location?.pathname === to}
                className={
                  globalWindow?.location?.pathname === to
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
    <button onClick={switchDarkMode} className=" flex flex-row content-center items-center text-xs">
      <Typo.caption className="mt-0 mr-2">Dark mode</Typo.caption>
      <div
        className={classNames('grid grid-cols-2 rounded-full border-1 border-solid box-border transition-colors', {
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
  const {darkMode} = useContext(ThemeContext);

  // prevent loading in wrong color schema before context is up
  if (darkMode === null) return null;

  return (
    <div>
      <div className="relative">
        <div
          className={`${blackBorder} border-b-2 -z-10 absolute`}
          style={{left: 0, right: 0, top: 0, transform: 'translate3d(0px, 100px, 0)'}}
        />
        <div className="container mx-auto max-w-screen-xl">
          <header className="flex flex-row justify-end mt-6">
            <DarkModeSwitch />
          </header>

          <div className="flex flex-row z-10 justify-between gap-12 container">
            {/* LEFT */}
            <div className="flex flex-col items-end gap-20" style={{flex: '1 1 25%'}}>
              <div
                className={`inline-block border-2 rounded-full bg-white dark:bg-black p-1 aspect-square ${blackBorder}`}
                style={{width: '75%', minWidth: '150px', maxWidth: '500px'}}
              >
                <img src="portrait.jpg" className="rounded-full" />
              </div>
              {sideBar}
            </div>

            {/* RIGHT */}
            <div className="flex flex-col gap-12" style={{flex: '1 1 65%'}}>
              <div className="flex items-end justify-between pb-4" style={{height: '100px'}}>
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

              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
