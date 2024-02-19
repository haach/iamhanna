import {useLocation} from '@remix-run/react';
import {FC, useEffect, useState} from 'react';
import {useWindow} from '~/contexts/WindowContext';

/**
 *
 * @returns a custom component to restore scroll position and make it feel like a single page app
 */
export const SrollPosition: FC = () => {
	const {pathname} = useLocation();
	const windowContext = useWindow();
	const [currentPathname, setCurrentPathname] = useState<string>(pathname);

	useEffect(() => {
		if (windowContext && currentPathname !== pathname) {
			window.scroll(0, windowContext.pageYOffset);
			setCurrentPathname(pathname);
		}
	}, [pathname, windowContext]);

	return null;
};
