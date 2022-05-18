import {useLocation} from '@remix-run/react';
import {FC} from 'react';
import ReactGA from 'react-ga';
import {Typo} from '~/components/primitives/typography';
import {useCookieConsent} from '~/contexts/CookieContext';

/**
 *
 * @returns the inline header nav
 */
export const HeaderNav: FC = () => {
  const {consent} = useCookieConsent();
  const location = useLocation();
  const links = [
    ['home', '/'],
    ['cv', '/cv'],
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
                <Typo.linkInternal
                  block
                  isActive={isActive}
                  to={to}
                  onClick={
                    consent === true
                      ? () =>
                          ReactGA.send({
                            type: 'Navigation clicked',
                            from: location.pathname,
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
