import {useGTMDispatch} from '@elgorditosalsero/react-gtm-hook';
import classNames from 'classnames';
import {FC} from 'react';
import {ReactProps} from '~/components';
import {Typo} from '~/components/primitives/typography';
import {useTheme} from '~/contexts/ThemeContext';

export const DarkModeSwitch: FC<ReactProps> = ({className, style}) => {
	const {darkMode, switchDarkMode} = useTheme();
	const sendDataToGTM = useGTMDispatch();
	return (
		<button
			style={style}
			onClick={() => {
				sendDataToGTM({event: `toggle_darkmode`, value: !darkMode});
				switchDarkMode();
			}}
			className={classNames(
				'flex flex-row content-center items-center text-xs print:hidden',
				className,
			)}
		>
			<Typo.Caption className="mt-0 mr-2">Dark mode</Typo.Caption>
			<div
				className={classNames(
					'grid grid-cols-2 rounded-full border-1 border-solid box-border transition-colors ',
					{
						'bg-y border-y': darkMode,
						'bg-white  border-g': !darkMode,
					},
				)}
				style={{width: '36px', height: '18px', borderWidth: '1px'}}
			>
				<div
					className={classNames(
						'flex flex-row justify-center items-center rounded-full box-border transition-colors',
						{
							'bg-white hover:bg-neutral-200': darkMode,
							'bg-g hover:bg-gd': !darkMode,
						},
					)}
					style={{
						gridColumn: darkMode ? 2 : 1,
						margin: '2px',
					}}
				/>
			</div>
		</button>
	);
};
