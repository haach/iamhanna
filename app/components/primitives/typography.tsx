import classNames from 'classnames';
import {FC} from 'react';

interface BaseTypoProps {
  noMargin?: boolean;
  noSpacing?: boolean;
  className?: string; // Don't abuse this overwrite backdoor
}
interface TypoProps extends BaseTypoProps {
  lght?: boolean;
  regular?: boolean;
  bold?: boolean;
  underline?: boolean;
  uppercase?: boolean;
  capitalize?: boolean;
}

const commonClasssNames = (typoProps: TypoProps) => ({
  'font-thin': typoProps?.lght,
  'font-regular': typoProps?.regular,
  'font-bold': typoProps?.bold,
  underline: typoProps?.underline,
  uppercase: typoProps?.uppercase,
  capitalize: typoProps?.capitalize,
  'mb-0': typoProps?.noMargin,
  'leading-0': typoProps?.noSpacing,
});

const themeColorSwitch = 'text-black dark:text-white';

export const H1: FC<BaseTypoProps> = ({children, ...typoProps}) => {
  const className = classNames(
    'font-title uppercase text-5xl mb-14 font-thin tracking-tight text-yellow',
    commonClasssNames(typoProps),
    typoProps.className
  );
  return <h1 className={className}>{children}</h1>;
};
export const H2: FC<BaseTypoProps> = ({children, ...typoProps}) => {
  const className = classNames(
    'font-title uppercase text-2xl mb-10 leading-none font-light text-black-light dark:text-gray',
    commonClasssNames(typoProps),
    typoProps.className
  );
  return <h2 className={className}>{children}</h2>;
};
export const H3: FC<BaseTypoProps> = ({children, ...typoProps}) => {
  const className = classNames(
    'font-serif text-3xl mb-8 text-orange italic font-black',
    commonClasssNames(typoProps),
    typoProps.className
  );
  return <h3 className={className}>{children}</h3>;
};
export const H4: FC<BaseTypoProps> = ({children, ...typoProps}) => {
  const className = classNames(
    'font-serif text-2xl mb-6 italic font-black text-gray-dark dark:text-gray-dark',
    commonClasssNames(typoProps),
    typoProps.className
  );
  return <h4 className={className}>{children}</h4>;
};
export const P: FC<TypoProps> = ({children, ...typoProps}) => {
  const className = classNames(
    'font-thin leading-7 mb-6',
    themeColorSwitch,
    commonClasssNames(typoProps),
    typoProps.className
  );
  return <p className={className}>{children}</p>;
};
export const SPAN: FC<TypoProps> = ({children, ...typoProps}) => {
  const className = classNames(
    'font-thin leading-7 mb-6',
    themeColorSwitch,
    commonClasssNames(typoProps),
    typoProps.className
  );
  return <span className={className}>{children}</span>;
};
