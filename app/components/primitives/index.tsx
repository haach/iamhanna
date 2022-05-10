import {FC} from 'react';
import {ReactProps} from '~/components';

export const blackBorder = 'border-solid border-black dark:border-white';

/**
 *
 * @param className pass className thru
 * @param style pass style object thru
 * @returns a black (white in dark mode) horizontal line
 */
export const HR: FC<ReactProps> = ({className = '', style}) => (
  <hr className={`border-t-2 w-full ${blackBorder} ${className}`} style={style} />
);
