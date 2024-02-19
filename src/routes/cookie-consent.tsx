import type {MetaFunction} from '@remix-run/node';
import type {FC} from 'react';
import {Typo} from '~/components/primitives/typography';

const meta: MetaFunction = () => [
	{
		title: 'About those cookies 🍪',
	},
];
const CookieConsent: FC = () => {
	return (
		<div className="flex flex-col items-center content-center justify-center">
			<div className="py-10 px-10 max-w-lg">
				<Typo.H1>About those cookies 🍪</Typo.H1>
				<Typo.P>
					We use Google Analytics for statistical purpose to distinguish unique
					users as well as unique sessions from a single user.
				</Typo.P>
				<Typo.P>
					You can find more info on how Google uses your cookies here:{' '}
					<Typo.LinkExternal href="https://support.google.com/analytics/answer/11397207?hl=en">
						support.google.com/analytics/
					</Typo.LinkExternal>
				</Typo.P>
			</div>
		</div>
	);
};

export default CookieConsent;

export {meta};
