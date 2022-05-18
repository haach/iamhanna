import classNames from 'classnames';
import {FC} from 'react';
import {ReactProps} from '~/components';

export const blackBorder = 'border-solid border-bl dark:border-white';
export const link =
  'flex flex-row items-center text-bl dark:text-white hover:text-gd dark:hover:text-gd transistion-colors';
export const input =
  'font-thin bg-transparent border border-bl dark:border-white focus:border-o focus-within:border-o rounded-md px-2 py-1 h-10 outline-none';
export const hideLineOverflow = 'h-8 overflow-hidden';
export const btn = 'uppercase rounded-md px-2 py-1 h-10 w-full max-w-xs';
export const btn_small = 'uppercase rounded-md px-2 py-1 h-6 w-full max-w-[8rem] text-xs';
export const btn_primary =
  'bg-y hover:bg-yellow-500 focus:bg-o focus-within:bg-o disabled:bg-g focus:disabled:bg-g text-black outline-none transition-colors';
export const btn_secondary = `${blackBorder} bg-transparent hover:bg-gl dark:hover:bg-bl border focus:border-g focus-within:border-g disabled:bg-gl dark:disabled:bg-bl focus:disabled:bg-gl dark:focus:disabled:bg-bl text-black dark:text-white outline-none transition-colors`;
export const pill = 'bg-gl text-black dark:bg-neutral-700 dark:text-white rounded-full px-3 py-1';

/**
 *
 * @param className pass className thru
 * @param style pass style object thru
 * @returns a black (white in dark mode) horizontal line
 */
export const HR: FC<ReactProps> = ({className = '', style}) => (
  <hr className={classNames('border-t-2 w-full', blackBorder, className)} style={{...style /*  maxWidth: '480px' */}} />
);
