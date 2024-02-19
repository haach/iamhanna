/** @type {import('@remix-run/dev').AppConfig} */

const config = {
	appDirectory: 'src',
	ignoredRouteFiles: ['.*', '**/*.css', '**/*.test.{js,jsx,ts,tsx}'],
	future: {},
	serverModuleFormat: 'esm',
	serverBuildTarget: 'vercel',
	browserNodeBuiltinsPolyfill: {
		modules: {crypto: true, path: true, os: true, fs: true},
	},
	// server: process.env.NODE_ENV === 'development' ? undefined : './server.ts',
};

export default config;
