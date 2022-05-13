import classNames from 'classnames';
import {FC, HTMLAttributes} from 'react';

export const ContainerOuter: FC<React.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = ({
  children,
  className,
}) => {
  return (
    <div className={classNames('flex flex-col py-10 sm:py-15 md:py-20 gap-5 sm:gap-10 md:gap-15 lg:gap-20', className)}>
      {children}
    </div>
  );
};

export const ContainerInner: FC<React.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = ({
  children,
  className,
}) => {
  return <div className={classNames('flex flex-col gap-3 sm:gap-5 md:gap-8 lg:gap-10', className)}>{children}</div>;
};

export const TwoColumnText: FC<React.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = ({
  children,
  className,
}) => {
  return <div className={classNames('resonsive-columns', className)}>{children}</div>;
};
