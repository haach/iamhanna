import {FC, ReactNode} from 'react';
import {blackBorder} from '~/components/primitives';
import {Typo} from '~/components/primitives/typography';

export const PageLayout: FC<{title: string; subTitle?: string; sideBar?: ReactNode}> = ({title, subTitle, sideBar}) => {
  return (
    <div className="relative">
      <div
        className={`${blackBorder} border-b-2 -z-10 absolute`}
        style={{left: 0, right: 0, top: 0, transform: 'translate3d(0px, 100px, 0)'}}
      />
      <div className="flex flex-row z-10" style={{gap: '5%'}}>
        <div className="flex flex-col items-end gap-12" style={{flex: '1 1 25%'}}>
          <div
            className={`inline-block border-2 rounded-full bg-white dark:bg-black p-1 aspect-square ${blackBorder}`}
            style={{width: '75%', minWidth: '150px', maxWidth: '500px'}}
          >
            <img src="portrait.jpg" className="rounded-full" />
          </div>
          {sideBar}
        </div>
        <div style={{flex: '1 1 65%'}}>
          <div className="flex items-end justify-between" style={{height: '100px'}}>
            <Typo.h1>{title}</Typo.h1>
            {subTitle && (
              <Typo.h2 className="mb-1">
                {'// '}
                {subTitle}
              </Typo.h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
