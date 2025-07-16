import {useLocation} from '@remix-run/react';
import {ContactReason} from '~/types/contact';

/**
 * Custom hook to determine the contact reason based on the current URL pathname.
 * @returns ContactReason based on the current URL pathname
 */
export function useContactReasonFromURL(): ContactReason {
	const {pathname} = useLocation();

	switch (pathname) {
		case '/contact/job-opportunity':
			return ContactReason.JOB;
		case '/contact/freelance':
			return ContactReason.FREELANCE;
		case '/contact/hello':
			return ContactReason.HELLO;
		default:
			return ContactReason.UNSET;
	}
}
