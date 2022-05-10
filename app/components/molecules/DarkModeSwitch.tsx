import classNames from 'classnames';
import {FC, useContext} from 'react';
import {Typo} from '~/components/primitives/typography';
import {ThemeContext} from '~/ThemeContext';

export const DarkModeSwitch: FC = () => {
  const {darkMode, switchDarkMode} = useContext(ThemeContext);
  return (
    <button onClick={switchDarkMode} className="flex flex-row content-center items-center text-xs print:hidden">
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
