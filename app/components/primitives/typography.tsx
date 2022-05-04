import classNames from 'classnames';
import {FC} from 'react';

interface TypoProps {
  bold?: boolean;
  underline?: boolean;
  uppercase?: boolean;
  capitalize?: boolean;
}

const commonClasssNames = (typoProps: TypoProps) => ({
  'font-bold': typoProps?.bold,
  underline: typoProps?.underline,
  uppercase: typoProps?.uppercase,
  capitalize: typoProps?.capitalize,
});

export const H1: FC<TypoProps> = ({children, ...typoProps}) => {
  const className = classNames('text-3xl text-black dark:text-white', commonClasssNames(typoProps));
  return <h1 className={className}>{children}</h1>;
};
export const P: FC<TypoProps> = ({children, ...typoProps}) => {
  const className = classNames('text-black dark:text-white', commonClasssNames(typoProps));
  return <p className={className}>{children}</p>;
};
export const SPAN: FC<TypoProps> = ({children, ...typoProps}) => {
  const className = classNames('text-black dark:text-white', commonClasssNames(typoProps));
  return <span className={className}>{children}</span>;
};
