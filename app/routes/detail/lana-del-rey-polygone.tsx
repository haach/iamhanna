import {MetaFunction} from '@remix-run/node';
import {FC} from 'react';
import {Helmet} from 'react-helmet';
import {HeadlineWithDivider} from '~/components/molecules/HeadlineWithDivider';
import {ContainerInner, SpacedCols} from '~/components/molecules/Layout';
import {PageLayout} from '~/components/molecules/PageLayout';
import {Typo} from '~/components/primitives/typography';

const title = 'A Lana Del Rey polygone art';
export const meta: MetaFunction = () => ({
  title,
});
const sideBar = (
  <ContainerInner>
    <HeadlineWithDivider title="About this work" className="md:text-right" />
    <div
      className="flex flex-row flex-wrap md:justify-end gap-2 pl-0 lg:pl-5 xl:pl-10"
      style={{maxWidth: 'fit-content'}}
    >
      <Typo.p>
        I absolutely adored the early Lana Del Rey albums; in particular, I was obsessed with 'Born to Die'. The album
        cover art is really amazing, so I wanted to create my own artistic rendition of it, and have it nicely displayed
        in my home as a physical print.
      </Typo.p>
      <Typo.p>
        In total I spent around 10 hours on its creation, but I am really pleased with the way it turned out, and love
        seeing it hanging in my kitchen.
      </Typo.p>
    </div>
  </ContainerInner>
);

const Lana: FC = () => {
  return (
    <>
      <Helmet>
        <meta property="og:image" content="/work_samples/lana/poly_lana.jpg" />
        <meta property="og:title" content={title} />
      </Helmet>
      <PageLayout title="Hanna Achenbach" subTitle="Frontend engineer" sideBar={sideBar}>
        <ContainerInner>
          <HeadlineWithDivider title="Process" />
          <SpacedCols>
            <div className="flex flex-col gap-4">
              <Typo.h3>Original image</Typo.h3>
              <img src="/work_samples/lana/album_cover.jpg" />
            </div>
            <div className="flex flex-col gap-6">
              <Typo.h3>Creating polygone shapes - Illustrator</Typo.h3>
              <img src="/work_samples/lana/lines.jpg" />
              <Typo.p>I first hand drew 2680 shapes along the edges of the original image.</Typo.p>
            </div>
            <div className="flex flex-col gap-6">
              <Typo.h3>Filling the shapes - Photohop</Typo.h3>
              <img src="/work_samples/lana/poly_lana.jpg" />
              <Typo.p>
                Then I placed both the orginal image and the shapes on two Photoshop layers, and wrote a small
                automation that calculates the midtone of the image in an area based on the shape, then fills the shape
                with said tone.
              </Typo.p>
            </div>
            <Typo.p style={{whiteSpace: 'nowrap'}}>
              <span className="text-xs">← </span> <Typo.linkInternal to="/work">Back to the overview</Typo.linkInternal>
            </Typo.p>
          </SpacedCols>
        </ContainerInner>
      </PageLayout>
    </>
  );
};
export default Lana;
