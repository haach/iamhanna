import {useLocation} from '@remix-run/react';
import type {FC} from 'react';
import {useCallback, useEffect, useState} from 'react';
import {useWindow} from '~/contexts/WindowContext';

/**
 *
 * @returns a custom component to restore scroll position and make it feel like a single page app
 */
export const ScrollPosition: FC = () => {
	const {pathname} = useLocation();
	const windowContext = useWindow();
	const [currentPathname, setCurrentPathname] = useState<string>(pathname);

	const resetScrollPosition = useCallback(
		(
			_pathname: string,
			_currentPathname: string,
			_windowContext: ReturnType<typeof useWindow>,
		) => {
			if (_windowContext && _currentPathname !== _pathname) {
				debugger;
				window.scroll(0, _windowContext.pageYOffset);
				setCurrentPathname(_pathname);
			}
		},
		[],
	);

	useEffect(() => {
		resetScrollPosition(pathname, currentPathname, windowContext);
	}, [pathname, currentPathname, windowContext, resetScrollPosition]);

	return null;
};
