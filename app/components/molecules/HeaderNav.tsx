import {useLocation} from '@remix-run/react';
import {FC} from 'react';
import {Typo} from '~/components/primitives/typography';

/**
 *
 * @returns the inline header nav
 */
export const HeaderNav: FC = () => {
  const location = useLocation();
  const links = [
    ['home', '/'],
    ['cv', '/cv'],
    ['work', '/work'],
    ['contact', '/contact'],
  ];
  return (
    <nav className="print:hidden">
      <ul className="flex flex-row justify-start gap-4">
        {links.map(([routeName, to]) => {
          const isActive = routeName === 'contact' ? location.pathname.includes(to) : location.pathname === to;
          return (
            <li key={routeName}>
              <Typo.h2>
                <Typo.linkInternal block isActive={isActive} to={to} className="font-thin">
                  {routeName}
                </Typo.linkInternal>
              </Typo.h2>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
