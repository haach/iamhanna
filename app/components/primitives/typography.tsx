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
interface TypoColorProps {
  black?: boolean;
  blackLight?: boolean;
  grayDark?: boolean;
  gray?: boolean;
  grayLight?: boolean;
  yellow?: boolean;
  orange?: boolean;
}

const colorClasses = (typoProps: TypoColorProps) => ({
  'text-black dark:text-white': typoProps?.black,
  'text-bl dark:text-g': typoProps?.blackLight,
  'text-gd dark:text-gl': typoProps?.grayDark,
  'text-g dark:text-g': typoProps?.gray,
  'text-gl dark:text-gd': typoProps?.grayLight,
  'text-y dark:text-y': typoProps?.yellow,
  'text-o dark:text-o': typoProps?.orange,
});

const H1: FC<BaseTypoProps> = ({children, ...typoProps}) => {
  const className = classNames(
    'font-title uppercase text-5xl mb-14 font-thin tracking-tight',
    commonClasssNames(typoProps),
    colorClasses({yellow: true}),
    typoProps.className
  );
  return <h1 className={className}>{children}</h1>;
};
const H2: FC<BaseTypoProps> = ({children, ...typoProps}) => {
  const className = classNames(
    'font-title uppercase text-2xl mb-10 leading-none font-light',
    commonClasssNames(typoProps),
    colorClasses({blackLight: true}),
    typoProps.className
  );
  return <h2 className={className}>{children}</h2>;
};
const H3: FC<BaseTypoProps> = ({children, ...typoProps}) => {
  const className = classNames(
    'font-serif text-3xl mb-8 italic font-black',
    colorClasses({orange: true}),
    commonClasssNames(typoProps),
    typoProps.className
  );
  return <h3 className={className}>{children}</h3>;
};
const H4: FC<BaseTypoProps> = ({children, ...typoProps}) => {
  const className = classNames(
    'font-serif text-2xl mb-6 italic font-black',
    commonClasssNames(typoProps),
    colorClasses({grayDark: true}),
    typoProps.className
  );
  return <h4 className={className}>{children}</h4>;
};
const P: FC<TypoProps & TypoColorProps> = ({children, ...typoProps}) => {
  const className = classNames(
    'font-thin leading-7 mb-6',
    commonClasssNames(typoProps),
    colorClasses(typoProps),
    typoProps.className
  );
  return <p className={className}>{children}</p>;
};
const SPAN: FC<TypoProps & TypoColorProps> = ({children, ...typoProps}) => {
  const className = classNames('font-thin', commonClasssNames(typoProps), colorClasses(typoProps), typoProps.className);
  return <span className={className}>{children}</span>;
};
const CAPTION: FC<TypoProps & TypoColorProps> = ({children, ...typoProps}) => {
  const className = classNames(
    'text-xs font-thin',
    commonClasssNames(typoProps),
    colorClasses(typoProps),
    typoProps.className
  );
  return <span className={className}>{children}</span>;
};

export const Typo = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  p: P,
  span: SPAN,
  caption: CAPTION,
} as const;
