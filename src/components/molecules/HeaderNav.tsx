import {useLocation} from '@remix-run/react';
import type {FC} from 'react';
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
					const isActive =
						routeName === 'contact'
							? location.pathname.includes(to)
							: location.pathname === to;
					return (
						<li key={routeName}>
							<Typo.H2>
								<Typo.LinkInternal
									block
									isActive={isActive}
									to={to}
									className="font-thin"
								>
									{routeName}
								</Typo.LinkInternal>
							</Typo.H2>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
