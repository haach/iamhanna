import {createContext, useContext, useEffect, useState} from 'react';
import {ComponentWithChildren} from '~/components';
import {useWindow} from '~/contexts/WindowContext';
import {STORAGE_ITEMS} from '~/utils/constants';

interface ThemeContext {
	darkMode: boolean | null;
	systemDarkMode: boolean | null;
	switchDarkMode(): void;
}

const ThemeContext = createContext<ThemeContext>({
	darkMode: null,
	systemDarkMode: null,
	switchDarkMode: () => null,
});

/* Custom hook for better usability */
export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error('useTheme must be called from ThemeContextProvider child');
	}
	return context;
};

export const ThemeContextProvider: ComponentWithChildren = ({children}) => {
	const [darkMode, setDarkMode] = useState<ThemeContext['darkMode']>(null);
	const [systemDarkMode, setSystemDarkMode] =
		useState<ThemeContext['systemDarkMode']>(null);
	const windowContext = useWindow();

	useEffect(() => {
		// check if window is initialised
		if (windowContext) {
			const system = window.matchMedia('(prefers-color-scheme: dark)').matches;
			setSystemDarkMode(system);
			let isDarkMode = false;
			const stored = window.localStorage.getItem(STORAGE_ITEMS.DARK_MODE);
			if (!!stored) {
				// setting previously saved in localStorage
				isDarkMode = JSON.parse(stored ?? 'false');
			} else {
				// check system preference
				isDarkMode = system;
			}
			persistSetting(isDarkMode);
		}
	}, [windowContext]);

	const persistSetting = (isDarkMode: boolean) => {
		setDarkMode(isDarkMode);
		window.localStorage.setItem(STORAGE_ITEMS.DARK_MODE, String(isDarkMode));
	};

	return (
		<ThemeContext.Provider
			value={{
				darkMode,
				systemDarkMode,
				switchDarkMode: () => persistSetting(!darkMode),
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};
