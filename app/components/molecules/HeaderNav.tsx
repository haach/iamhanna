import {Link} from '@remix-run/react';
import {FC} from 'react';
import {Typo} from '~/components/primitives/typography';
import {useCookieConsent} from '~/contexts/CookieContext';
import GoogleAnalytics from 'react-ga';

/**
 *
 * @returns the inline header nav
 */
export const HeaderNav: FC = () => {
  const {consent} = useCookieConsent();
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
              <Typo.h2>
                <Typo.linkInternal
                  block
                  isActive={isActive}
                  to={to}
                  onClick={
                    consent === true
                      ? () =>
                          GoogleAnalytics.send({
                            type: 'Navigation clicked',
                            from: window.location?.pathname,
                            to: to,
                          })
                      : undefined
                  }
                >
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
