import {GTMProvider, useGTMDispatch} from '@elgorditosalsero/react-gtm-hook';
import type {LinksFunction, MetaFunction} from '@remix-run/node';
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	isRouteErrorResponse,
	useLoaderData,
	useLocation,
	useRouteError,
} from '@remix-run/react';
import classNames from 'classnames';
import dotenv from 'dotenv';
import type {FC} from 'react';
import {useCallback, useEffect, useState} from 'react';
import {Helmet} from 'react-helmet';
import type {ComponentWithChildren} from '~/components';
import {Typo} from '~/components/primitives/typography';
import tailwindStyles from '~/styles/tailwind.css';
import {
	CookieContextProvider,
	useCookieConsent,
} from '~/contexts/CookieContext';
import {ThemeContextProvider, useTheme} from '~/contexts/ThemeContext';
import {WindowContextProvider} from '~/contexts/WindowContext';
import CookieBanner from './components/molecules/CookieBanner';
import {formatErrorForUser, logError} from '~/utils/errorHandling';

const description =
	'I am a Berlin based frontend engineer and artist coming from a design driven background. On this portfolio you can find my cv and career path, a collection of things I currently love, some of my work and a way to contact me for job offers.';

const meta: MetaFunction = () => [
	{charset: 'utf-8'},
	/* {viewport: 'width=device-width,initial-scale=1'}, */ {
		title: 'i am hanna - portfolio of Hanna Achenbach',
	},
	{description: description},
	{
		keywords:
			'Hanna Achenbach software frontend full-stack fullstack engineer developer web technology web-apps apps application website PWA progressivve web app design artist',
	},
];

const links: LinksFunction = () => {
	const links = [
		{
			rel: 'stylesheet',
			href: tailwindStyles,
		},
	];

	return links;
};

export const loader = () => {
	dotenv.config({path: `.env`});
	return process?.env.TRACKING_ID;
};
/**
 *
 * @returns A component that automatically track GTM navigation events if user consented
 */
const PageViewTracker: FC = () => {
	const [oldPathname, setOldPathname] = useState<string>('/');
	const {pathname} = useLocation();
	const sendDataToGTM = useGTMDispatch();

	const trackNavigation = useCallback(() => {
		sendDataToGTM({
			'event': 'navigate',
			'gtm.oldUrl': oldPathname,
			'gtm.newUrl': pathname,
		});
		setOldPathname(pathname);
	}, [oldPathname, pathname, sendDataToGTM]);

	useEffect(() => {
		trackNavigation();
	}, [trackNavigation]);

	return null;
};

const Layout: ComponentWithChildren = ({children}) => {
	const {darkMode} = useTheme();
	const {consent} = useCookieConsent();
	const TRACKING_ID = useLoaderData();

	const gtmParams = {
		id: String(TRACKING_ID),
		injectScript: consent ?? false,
	};

	// prevent loading in wrong color schema before context is up
	if (darkMode === null) return null;
	return (
		<GTMProvider state={gtmParams}>
			<PageViewTracker />
			{children}
			{consent === null && <CookieBanner />}
		</GTMProvider>
	);
};

const Document: ComponentWithChildren = ({children}) => {
	const {darkMode, systemDarkMode} = useTheme();
	const className = classNames('min-h-full', {
		dark: darkMode,
	});
	return (
		<html lang="en" className={className}>
			<head>
				<Meta />
				<Helmet>
					<meta
						property="og:title"
						content="i am hanna - portfolio of Hanna Achenbach"
					/>
					<meta
						property="og:image"
						content="/work_samples/iamhanna_dark_light.gif"
					/>
					<meta property="og:description" content={description} />
				</Helmet>
				<link
					rel="icon"
					href={systemDarkMode ? '/dog_light.svg' : '/dog.svg'}
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Cormorant+Infant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
					rel="stylesheet"
				/>
				<Links />
			</head>
			<body className="bg-white dark:bg-bl min-h-full font-thin text-black dark:text-white ">
				{process.env.NODE_ENV === 'development' && <LiveReload />}
				{children}
				<Scripts />
			</body>
		</html>
	);
};

const Wrapper: ComponentWithChildren = ({children}) => {
	return (
		<WindowContextProvider>
			<ThemeContextProvider>
				<Document>
					<CookieContextProvider>
						<Layout>{children}</Layout>
					</CookieContextProvider>
				</Document>
			</ThemeContextProvider>
		</WindowContextProvider>
	);
};
/**
 *
 * @param err error send to GA
 * @returns
 */
const GTMErrorTracker: FC<{err: string}> = ({err}) => {
	const sendDataToGTM = useGTMDispatch();
	const {pathname} = useLocation();
	useEffect(() => {
		if (err && pathname) {
			sendDataToGTM({
				'event': 'gtm.pageError',
				'gtm.errorMessage': err,
				'gtm.errorUrl': pathname,
			});
		}
	}, [sendDataToGTM, err, pathname]);
	return null;
};

export const ErrorBoundary: FC<{error: Error}> = ({error}) => {
	logError(error, 'ErrorBoundary');
	const errorInfo = formatErrorForUser(error);

	if (!error) return null;

	return (
		<Wrapper>
			<GTMErrorTracker err={error.message} />
			<div className="flex flex-col items-center content-center justify-center">
				<div className="py-10 px-10 w-max-sm">
					<Typo.H1>...oh dang 😖</Typo.H1>
					<Typo.P>something went south.</Typo.P>
					<Typo.P className="text-red-600">Error: {errorInfo.message}</Typo.P>
					{errorInfo.showDetails && error.stack && (
						<pre className="text-red-600 text-sm mt-4 overflow-auto max-h-64">
							Stack: {error.stack}
						</pre>
					)}
				</div>
			</div>
		</Wrapper>
	);
};

export const CatchBoundary: FC = () => {
	const error = useRouteError();
	logError(error, 'CatchBoundary');

	if (!error) return null;

	if (isRouteErrorResponse(error)) {
		return (
			<Wrapper>
				<GTMErrorTracker
					err={`status: ${error.status} statusText: ${error.statusText}`}
				/>
				<div className="flex flex-col items-center content-center justify-center">
					<div className="py-10 px-10 w-max-sm">
						<Typo.H1>... oh oh a {error.status} 😖</Typo.H1>
						<Typo.P className="text-red-600"> {error.statusText}</Typo.P>
						<Typo.P>{error.data}</Typo.P>
					</div>
				</div>
			</Wrapper>
		);
	} else if (error instanceof Error) {
		const errorInfo = formatErrorForUser(error);
		return (
			<Wrapper>
				<GTMErrorTracker
					err={`message: ${error.message} stack: ${error.stack}`}
				/>
				<div className="flex flex-col items-center content-center justify-center">
					<div className="py-10 px-10 w-max-sm">
						<Typo.H1>{errorInfo.title} 😖</Typo.H1>
						<Typo.P className="text-red-600">{errorInfo.message}</Typo.P>
						{errorInfo.showDetails && error.stack && (
							<pre className="text-red-600 text-sm mt-4 overflow-auto max-h-64">
								{error.stack}
							</pre>
						)}
					</div>
				</div>
			</Wrapper>
		);
	} else {
		return <h1>Unknown Error</h1>;
	}
};

const App: FC = () => {
	return (
		<Wrapper>
			<Outlet />
		</Wrapper>
	);
};

export default App;
export {links, meta};
