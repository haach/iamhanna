import {Link} from '@remix-run/react';
import {FC, ReactNode, useContext, useEffect, useState} from 'react';
import {DarkModeSwitch} from '~/components/molecules/DarkModeSwitch';
import {HeaderNav} from '~/components/molecules/HeaderNav';
import {blackBorder, HR} from '~/components/primitives';
import {Typo} from '~/components/primitives/typography';
import {WindowContext} from '~/WindowContext';

export const defaultSpacing = 240;

export const PageLayout: FC<{title: string; subTitle?: string; sideBar?: ReactNode}> = ({
  title,
  subTitle,
  sideBar,
  children,
}) => {
  const globalWindow = useContext(WindowContext);
  const [imageSize, setImageSize] = useState<number>(defaultSpacing);

  useEffect(() => {
    let calcSize = defaultSpacing;
    // TODO this does work :/ https://bugs.chromium.org/p/chromium/issues/detail?id=401179
    if (globalWindow && window.matchMedia('print').matches) calcSize = 10;
    else if (globalWindow && globalWindow.width > 1024) calcSize = defaultSpacing;
    else if (globalWindow && globalWindow.width < 1024) {
      const scaled = globalWindow.width * 0.2;
      // min width
      if (scaled < 150) calcSize = 150;
      else calcSize = scaled;
    } else calcSize = 200;
    setImageSize(calcSize);
  }, [globalWindow]);

  return (
    <div>
      <div className="relative">
        <HR
          className="-z-10"
          /* style={{left: 0, right: 0, top: 0, transform: `translate3d(0px, ${imageSize / 2 + 58}px, 0)`}} */
          style={{transform: `translate3d(0px, ${imageSize / 2 + 58}px, 0)`}}
        />
        <div className="container mx-auto max-w-screen-xl border-box px-5 sm:px-8 md:px-10 lg:px-20 print:px-10 py-3 sm:py-5 md:py-8 lg:py-10 print:py-5 zoomOutForPrint">
          <header className="flex flex-row justify-end print:hidden">
            <DarkModeSwitch />
          </header>

          <div className="flex flex-row justify-between gap-10 sm:gap-15 md-gap-20">
            {/* LEFT */}
            <div className="flex flex-col items-end">
              <div
                className={`inline-block border-2 rounded-full bg-white dark:bg-black ml-8 sm:ml-10 md:ml-15 lg:ml-20 p-1 aspect-square z-10 ${blackBorder}`}
                style={{width: `${imageSize}px`}}
              >
                <img src="/portrait.jpg" className="rounded-full " />
              </div>
              {sideBar}
            </div>

            {/* RIGHT */}
            <div className="flex flex-1 flex-col">
              <div className="flex items-end justify-between pb-4" style={{height: `${imageSize / 2}px`}}>
                <div>
                  <Typo.h1>{title}</Typo.h1>
                  {subTitle && (
                    <Typo.h2>
                      {'// '}
                      {subTitle}
                    </Typo.h2>
                  )}
                </div>
                <HeaderNav />
              </div>

              {/* CONTENT HERE  */}
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
