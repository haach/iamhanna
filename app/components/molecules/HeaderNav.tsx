import {Link} from '@remix-run/react';
import {FC} from 'react';
import {Typo} from '~/components/primitives/typography';

/**
 *
 * @returns the inline header nav
 */
export const HeaderNav: FC = () => {
  const links = [
    ['home', '/'],
    ['cv', '/cv'],
    ['contact', '/contact'],
  ];
  return (
    <nav className="print:hidden">
      <ul className="flex flex-row justify-start gap-4">
        {links.map(([routeName, to]) => {
          const isActive =
            routeName === 'contact' ? window.location?.pathname.includes(to) : window.location?.pathname === to;
          return (
            <li key={routeName}>
              <Typo.linkInternal block isActive={isActive} to={to}>
                {routeName}
              </Typo.linkInternal>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
