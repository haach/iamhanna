import {FC} from 'react';

export const blackBorder = 'border-solid border-black dark:border-white';
export const HR: FC = () => <hr className={`border-t-2 w-full ${blackBorder}`} />;
