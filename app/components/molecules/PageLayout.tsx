import {Link} from '@remix-run/react';
import {FC, ReactNode, useContext, useEffect, useMemo, useState} from 'react';
import {DarkModeSwitch} from '~/components/molecules/DarkModeSwitch';
import {HeaderNav} from '~/components/molecules/HeaderNav';
import {ContainerOuter} from '~/components/molecules/Layout';
import {blackBorder, HR} from '~/components/primitives';
import {Typo} from '~/components/primitives/typography';
import {WindowContext} from '~/WindowContext';

export const defaultSpacing = 240;

interface PageLayoutProps {
  title: string;
  subTitle?: string;
  sideBar?: ReactNode;
}

const MobileLayout: FC<PageLayoutProps> = ({children, title, subTitle, sideBar}) => {
  const imageSize = 150;
  return (
    <div className="relative py-8print:py-5">
      <HR className="-z-10" style={{transform: `translate3d(0px, ${imageSize / 2}px, 0)`}} />
      <div className="container mx-auto max-w-screen-xl border-box pl-5 pr-5 print:px-10 zoomOutForPrint">
        <div className="flex flex-col justify-between gap-10">
          <div className="flex flex-col justify-between gap-4">
            <div
              className={`inline-block border-2 rounded-full bg-white dark:bg-black m-auto aspect-square z-10 ${blackBorder}`}
              style={{width: `${150}px`}}
            >
              <img src="/portrait.jpg" className="rounded-full " />
            </div>
            <Typo.h1>{title}</Typo.h1>
            {subTitle && (
              <Typo.h2 className="-mt-4">
                {'// '}
                {subTitle}
              </Typo.h2>
            )}
            <DarkModeSwitch />
            <HeaderNav />
          </div>

          {/* BOTTOM */}
          <ContainerOuter>{children}</ContainerOuter>
          <ContainerOuter className="flex-1">{sideBar}</ContainerOuter>
        </div>
      </div>
    </div>
  );
};

const TabletLayout: FC<PageLayoutProps> = ({children, title, subTitle, sideBar}) => {
  const imageSize = 150;
  return (
    <div className="relative py-8 print:py-5">
      <HR className="-z-10" style={{transform: `translate3d(0px, ${imageSize / 2}px, 0)`}} />
      <div className="container mx-auto max-w-screen-xl border-box pl-5 pr-5 sm:pl-8 sm:pr-8print:px-10 zoomOutForPrint">
        <div className="flex flex-col justify-between gap-10 sm:gap-10">
          {/* TOP */}
          <div className="sm:flex sm:flex-row justify-between gap-10 sm:gap-10 ">
            <div className="flex flex-col">
              <div
                className={`inline-block border-2 rounded-full bg-white dark:bg-black m-auto sm:ml-8 p-1 aspect-square z-10 ${blackBorder}`}
                style={{width: `${imageSize}px`}}
              >
                <img src="/portrait.jpg" className="rounded-full " />
              </div>
            </div>
            <div className="flex flex-1 flex-col">
              <div className="flex items-end justify-between pb-4" style={{height: `${imageSize / 2}px`}}>
                <div>
                  <Typo.h1 className="mb-2">{title}</Typo.h1>
                  {subTitle && (
                    <Typo.h2>
                      {'// '}
                      {subTitle}
                    </Typo.h2>
                  )}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between mt-6">
                <DarkModeSwitch className="mb-4" />
                <HeaderNav />
              </div>
            </div>
          </div>

          {/* BOTTOM */}
          <ContainerOuter>{children}</ContainerOuter>
          <ContainerOuter className="flex-1">{sideBar}</ContainerOuter>
        </div>
      </div>
    </div>
  );
};

const Layout: FC<PageLayoutProps> = ({children, title, subTitle, sideBar}) => {
  const windowContext = useContext(WindowContext);
  const [imageSize, setImageSize] = useState<number>(defaultSpacing);
  const width = windowContext?.width ?? 0;

  const calcSizeFn = useMemo(
    () => () => {
      let calcSize = defaultSpacing;
      // TODO this does work :/ https://bugs.chromium.org/p/chromium/issues/detail?id=401179
      if (width && window.matchMedia('print').matches) calcSize = 10;
      else if (width && width > 1024) calcSize = defaultSpacing;
      else if (width && width < 1024) {
        const scaled = width * 0.2;
        // min width
        if (scaled < 150) calcSize = 150;
        else calcSize = scaled;
      } else calcSize = 200;
      setImageSize(calcSize);
    },
    [width]
  );

  useEffect(() => {
    calcSizeFn();
  }, [width]);

  return (
    <div className="relative py-8 lg:py-10 print:py-5">
      <HR className="-z-10" style={{transform: `translate3d(0px, ${imageSize / 2}px, 0)`}} />
      <div className="container mx-auto max-w-screen-xl border-box pl-5 pr-5 md:pl-8 md:pr-8 lg:pl-0 lg:pr-10 xl:pl-0 xl:pr-20 print:px-10 zoomOutForPrint">
        <div className="flex flex-row justify-between md:gap-14 lg:gap-14 xl:gap-20 ">
          {/* LEFT */}
          <div className="flex flex-col">
            <div
              className={`inline-block border-2 rounded-full bg-white dark:bg-black md:ml-10 lg:ml-10 xl:ml-20 p-1 aspect-square z-10 ${blackBorder}`}
              style={{width: `${imageSize}px`}}
            >
              <img src="/portrait.jpg" className="rounded-full " />
            </div>
            <ContainerOuter className="flex-1">{sideBar}</ContainerOuter>
          </div>

          {/* RIGHT */}
          <div className="flex flex-1 flex-col">
            <div className="flex items-end justify-between pb-4" style={{height: `${imageSize / 2}px`}}>
              <div>
                <Typo.h1 className="mb-2">{title}</Typo.h1>
                {subTitle && (
                  <Typo.h2>
                    {'// '}
                    {subTitle}
                  </Typo.h2>
                )}
              </div>
              <div className="flex flex-col justify-between items-end">
                <DarkModeSwitch className="mb-4" />
                <HeaderNav />
              </div>
            </div>

            {/* CONTENT HERE  */}
            <ContainerOuter>{children}</ContainerOuter>
          </div>
        </div>
      </div>
    </div>
  );
};

export const PageLayout: FC<PageLayoutProps> = ({title, subTitle, sideBar, children}) => {
  const globalWindow = useContext(WindowContext);
  return (
    <>
      {globalWindow?.width && globalWindow?.width < 640 && (
        <MobileLayout title={title} subTitle={subTitle} sideBar={sideBar}>
          {children}
        </MobileLayout>
      )}
      {globalWindow?.width && globalWindow?.width >= 640 && globalWindow?.width < 768 && (
        <TabletLayout title={title} subTitle={subTitle} sideBar={sideBar}>
          {children}
        </TabletLayout>
      )}
      {globalWindow?.width && globalWindow?.width >= 768 && (
        <Layout title={title} subTitle={subTitle} sideBar={sideBar}>
          {children}
        </Layout>
      )}
    </>
  );
};
