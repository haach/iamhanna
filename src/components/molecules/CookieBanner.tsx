import {useLocation, useNavigate} from '@remix-run/react';
import classNames from 'classnames';
import type {FC} from 'react';
import {btn_primary, btn_secondary, btn_small} from '~/components/primitives';
import {Typo} from '~/components/primitives/typography';
import {useCookieConsent} from '~/contexts/CookieContext';

interface CookieBanner {
	onAccept(): void;
	onReject(): void;
}

const CookieBanner: FC = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const {consent, setConsent} = useCookieConsent();
	if (consent !== null) return null;

	return (
		<div
			className={classNames(
				'min-h-full min-w-full fixed top-0 bottom-0 left-0 right-0 z-50',
				{
					' bg-neutral-900/50 dark:bg-neutral-300/25':
						location.pathname !== '/cookie-consent',
				},
			)}
		>
			<div className="flex flex-col min-h-full justify-end">
				<div className="bg-white text-black dark:bg-black dark:text-white">
					<div className="flex flex-col gap-2 min-h-100 max-w-2xl mx-auto px-10 py-5">
						<Typo.P>
							🍪 We use tasty cookies and Google Analytics on this site for
							statistical purposes
							{location.pathname !== '/cookie-consent' && (
								<>
									{' '}
									-{' '}
									<Typo.LinkInternal to="/cookie-consent">
										Read more
									</Typo.LinkInternal>
								</>
							)}
						</Typo.P>
						<div className="flex flex-row gap-3">
							<button
								className={classNames(btn_small, btn_secondary)}
								onClick={() => {
									setConsent(false);
									location.pathname === '/cookie-consent' && navigate('/');
								}}
							>
								Reject
							</button>
							<button
								className={classNames(btn_small, btn_primary)}
								onClick={() => {
									setConsent(true);
									location.pathname === '/cookie-consent' && navigate('/');
								}}
							>
								Accept
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CookieBanner;
