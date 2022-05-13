import {FC, ReactNode} from 'react';
import {HR} from '~/components/primitives';
import {Typo} from '~/components/primitives/typography';
/**
 *
 * @param title a string rendered as the h2
 * @param align the hor. alignment of both elements
 * @returns an h2 with underline and consistent sacing
 */
export const HeadlineWithDivider: FC<{title: ReactNode; align?: 'left' | 'right'}> = ({title, align = 'left'}) => {
  return (
    <div className="flex flex-col gap-1 sm:gap-2">
      <Typo.h2 yellow className={`text-${align}`}>
        {title}
      </Typo.h2>
      <HR />
    </div>
  );
};
