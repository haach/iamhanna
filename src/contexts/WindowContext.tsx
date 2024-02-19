import debounce from 'just-debounce';
import {
	createContext,
	FC,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react';
import {ComponentWithChildren} from '~/components';

type WindowContext = {
	width: number;
	height: number;
	pageYOffset: number;
} | null;

const WindowContext = createContext<WindowContext>(null);

/* Custom hook for better usability */
export const useWindow = () => {
	const context = useContext(WindowContext);
	return context;
};

/**
 *
 * @returns a context which centralizes the check for the global window object, which would only be present on ther client
 */
export const WindowContextProvider: ComponentWithChildren = ({children}) => {
	const [windowObject, setWindowObject] = useState<WindowContext>(null);

	// Handler to call on window resize
	const handleResize = () => {
		// Set window to state
		window &&
			setWindowObject({
				width: window.innerWidth,
				height: window.innerHeight,
				pageYOffset: window.pageYOffset,
			});
	};

	// Handler to call on window resize
	const debouncedHandleResize = useMemo(
		() => debounce(() => handleResize(), 200),
		[],
	);

	useEffect(() => {
		// Add event listener
		window.addEventListener('resize', debouncedHandleResize);
		window.addEventListener('scroll', debouncedHandleResize);
		// Call handler right away so state gets updated with initial window size
		handleResize();
		// Remove event listener on cleanup
		return () => {
			window.removeEventListener('resize', debouncedHandleResize);
			window.removeEventListener('scroll', debouncedHandleResize);
		};
	}, []); // Empty array ensures that effect is only run on mount

	return (
		<WindowContext.Provider value={windowObject}>
			{children}
		</WindowContext.Provider>
	);
};
