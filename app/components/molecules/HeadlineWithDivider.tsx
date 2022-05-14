import {FC, ReactNode} from 'react';
import {ReactProps} from '~/components';
import {HR} from '~/components/primitives';
import {Typo} from '~/components/primitives/typography';
/**
 *
 * @param title a string rendered as the h2
 * @param align the hor. alignment of both elements
 * @returns an h2 with underline and consistent sacing
 */
export const HeadlineWithDivider: FC<{title: ReactNode} & ReactProps> = ({title, className, style, key}) => {
  return (
    <div className={'flex flex-col gap-1 sm:gap-2'} key={key}>
      <Typo.h2 yellow className={className} style={style}>
        {title}
      </Typo.h2>
      <HR />
    </div>
  );
};
