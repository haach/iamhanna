import classNames from 'classnames';
import {FC} from 'react';
import {ReactProps} from '~/components';

export const blackBorder = 'border-solid border-black dark:border-white';
export const link =
  'border-b border-b-transparent hover:border-b-black dark:hover:border-b-white flex flex-row gap-2 items-center';
export const input =
  'font-thin bg-transparent border border-black dark:border-white focus:border-o focus-within:border-o rounded-md px-2 py-1 h-10 outline-none';
export const hideLineOverflow = 'h-8 overflow-hidden';
export const button_primary =
  'uppercase bg-y focus:bg-o focus-within:bg-o text-black rounded-md px-2 py-1 h-10 outline-none max-w-12';

/**
 *
 * @param className pass className thru
 * @param style pass style object thru
 * @returns a black (white in dark mode) horizontal line
 */
export const HR: FC<ReactProps> = ({className = '', style}) => (
  <hr className={classNames('border-t-2 w-full', blackBorder, className)} style={{...style /*  maxWidth: '480px' */}} />
);
