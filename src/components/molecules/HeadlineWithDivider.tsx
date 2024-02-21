import classNames from 'classnames';
import type {FC, ReactNode} from 'react';
import type {ReactProps} from '~/components';
import {HR} from '~/components/primitives';
import {Typo} from '~/components/primitives/typography';
/**
 *
 * @param title a string rendered as the h2
 * @param align the hor. alignment of both elements
 * @returns an h2 with underline and consistent sacing
 */
export const HeadlineWithDivider: FC<{title: ReactNode} & ReactProps> = ({
	title,
	className,
	style,
	key,
}) => {
	return (
		<div key={key} className="flex flex-col gap-1 sm:gap-2 mb-6 md:mb-8">
			<Typo.H2
				yellow
				className={classNames('gap-1 sm:gap-2 w-full', className)}
				style={style}
			>
				{title}
			</Typo.H2>
			<HR />
		</div>
	);
};
