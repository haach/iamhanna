import {Link} from '@remix-run/react';
import classNames from 'classnames';
import type {FC} from 'react';
import type {ReactPropsWithChildren} from '~/components';

interface BaseTypoProps extends ReactPropsWithChildren {
	dense?: boolean;
}
interface TypoProps extends BaseTypoProps {
	underline?: boolean;
	uppercase?: boolean;
	capitalize?: boolean;
}

const commonClassNames = (typoProps: TypoProps) => ({
	'underline': typoProps?.underline,
	'uppercase': typoProps?.uppercase,
	'capitalize': typoProps?.capitalize,
	'leading-tight': typoProps?.dense,
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
	'text-bl dark:text-gl': typoProps?.blackLight,
	'text-gd dark:text-gl': typoProps?.grayDark,
	'text-g dark:text-g': typoProps?.gray,
	'text-gl dark:text-gd': typoProps?.grayLight,
	'text-y dark:text-y': typoProps?.yellow,
	'text-o dark:text-o': typoProps?.orange,
});

const H1: FC<BaseTypoProps> = ({children, ...typoProps}) => {
	const className = classNames(
		'uppercase text-2xl sm:text-2xl md:text-3xl lg:text-5xl',
		commonClassNames(typoProps),
		colorClasses({yellow: true}),
		typoProps.className,
	);
	return (
		<h1 className={className} style={typoProps.style}>
			{children}
		</h1>
	);
};
const H2: FC<BaseTypoProps & Pick<TypoColorProps, 'yellow'>> = ({
	children,
	...typoProps
}) => {
	const className = classNames(
		'uppercase text-1xl lg:text-2xl leading-none font-medium',
		commonClassNames(typoProps),
		colorClasses({blackLight: true, ...typoProps}),
		typoProps.className,
	);
	return (
		<h2 className={className} style={typoProps.style}>
			{children}
		</h2>
	);
};
const H3: FC<BaseTypoProps & Pick<TypoColorProps, 'yellow'>> = ({
	children,
	...typoProps
}) => {
	const className = classNames(
		'uppercase lg:text-1xl leading-none font-medium',
		commonClassNames(typoProps),
		colorClasses({blackLight: true, ...typoProps}),
		typoProps.className,
	);
	return (
		<h2 className={className} style={typoProps.style}>
			{children}
		</h2>
	);
};
const H4: FC<BaseTypoProps> = ({children, ...typoProps}) => {
	const className = classNames(
		'font-serif text-3xl font-bold italic',
		colorClasses({orange: true}),
		commonClassNames(typoProps),
		typoProps.className,
	);
	return (
		<h3 className={className} style={typoProps.style}>
			{children}
		</h3>
	);
};
const H5: FC<BaseTypoProps> = ({children, ...typoProps}) => {
	const className = classNames(
		'font-serif text-1xl leading-none italic',
		commonClassNames(typoProps),
		colorClasses({grayDark: true}),
		typoProps.className,
	);
	return (
		<h4 className={className} style={typoProps.style}>
			{children}
		</h4>
	);
};
const P: FC<TypoProps & TypoColorProps> = ({children, ...typoProps}) => {
	const className = classNames(
		'font-thin text-justify',
		{'leading-7': !typoProps.dense},
		commonClassNames(typoProps),
		colorClasses(typoProps),
		typoProps.className,
	);
	return (
		<p className={className} style={typoProps.style}>
			{children}
		</p>
	);
};
const SPAN: FC<TypoProps & TypoColorProps> = ({children, ...typoProps}) => {
	const className = classNames(
		'font-thin',
		commonClassNames(typoProps),
		colorClasses(typoProps),
		typoProps.className,
	);
	return <span className={className}>{children}</span>;
};
const LINK_INTERNAL: FC<
	BaseTypoProps & {
		to: string;
		replace?: boolean;
		block?: boolean;
		isActive?: boolean;
		onClick?(): void;
	}
> = ({children, to, replace, block, isActive, onClick, ...typoProps}) => {
	const className = classNames(
		'font-size-inherit font-weight-inherit',
		{
			'cursor-default text-y': isActive,
			'hover:text-gd dark:hover:text-gd transition-colors cursor-pointer ':
				!isActive,
			'underline': !block,
			'uppercase': block,
		},
		typoProps.className,
	);
	return (
		<Link to={to} replace={replace} onClick={onClick}>
			<span className={className}>{children}</span>
		</Link>
	);
};
const LINK_EXTERNAL: FC<
	BaseTypoProps &
		React.DetailedHTMLProps<
			React.AnchorHTMLAttributes<HTMLAnchorElement>,
			HTMLAnchorElement
		>
> = ({children, href, ...typoProps}) => {
	const className = classNames(
		'font-thin underline pointer hover:text-gd dark:hover:text-gd transition-colors cursor-pointer ',
		typoProps.className,
	);
	return (
		<a
			{...typoProps}
			href={href}
			className={className}
			target="_blank"
			rel="noopener noreferrer"
		>
			{children}
		</a>
	);
};
const CAPTION: FC<TypoProps & TypoColorProps> = ({children, ...typoProps}) => {
	const className = classNames(
		'text-sm font-thin',
		commonClassNames(typoProps),
		colorClasses(typoProps),
		typoProps.className,
	);
	return (
		<span className={className} style={typoProps.style}>
			{children}
		</span>
	);
};

export const Typo = {
	H1,
	H2,
	H3,
	H4,
	H5,
	P,
	SPAN,
	LinkInternal: LINK_INTERNAL,
	LinkExternal: LINK_EXTERNAL,
	Caption: CAPTION,
} as const;
