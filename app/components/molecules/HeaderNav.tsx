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
