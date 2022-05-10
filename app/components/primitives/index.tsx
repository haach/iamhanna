import {FC} from 'react';

export const blackBorder = 'border-solid border-black dark:border-white';

/**
 *
 * @param className pass className thru
 * @returns a black (white in dark mode) horizontal line
 */
export const HR: FC<{className?: string}> = ({className = ''}) => (
  <hr className={`border-t-2 w-full ${blackBorder} ${className}`} />
);
