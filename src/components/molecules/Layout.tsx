import classNames from 'classnames';
import type {ComponentWithChildren} from '~/components';

export const ContainerOuter: ComponentWithChildren = ({
	children,
	className,
}) => {
	return (
		<div
			className={classNames(
				'flex flex-col sm-0 md:py-10 lg:py-10 print:py-10 gap-10 sm:gap-10 md:gap-16 lg:gap-20',
				className,
			)}
		>
			{children}
		</div>
	);
};

export const ContainerInner: ComponentWithChildren = ({
	children,
	className,
}) => {
	return <div className={classNames('', className)}>{children}</div>;
};
export const SpacedCols: ComponentWithChildren = ({children, className}) => {
	return (
		<div
			className={classNames(
				'flex flex-col gap-12 md:gap-14 lg:gap-16',
				className,
			)}
		>
			{children}
		</div>
	);
};

export const TwoColumnText: ComponentWithChildren = ({children, className}) => {
	return (
		<div className={classNames('resonsive-columns', className)}>{children}</div>
	);
};
