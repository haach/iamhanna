import {MetaFunction} from '@remix-run/node';
import {FC} from 'react';
import {HeadlineWithDivider} from '~/components/molecules/HeadlineWithDivider';
import {ContainerInner, SpacedCols} from '~/components/molecules/Layout';
import {PageLayout} from '~/components/molecules/PageLayout';
import {Typo} from '~/components/primitives/typography';

export const meta: MetaFunction = () => ({
  title: 'i am hanna - Lana Del Rey polygone art',
});

const Lana: FC = () => {
  return (
    <PageLayout
      title="Hanna Achenbach"
      subTitle="Frontend engineer"
      sideBar={
        <ContainerInner>
          <HeadlineWithDivider title="About this work" className="md:text-right" />
          <div
            className="flex flex-row flex-wrap md:justify-end gap-2 pl-0 lg:pl-5 xl:pl-10"
            style={{maxWidth: 'fit-content'}}
          >
            <Typo.p>
              It is probably fair to say that I absolutely love the early Lana Del Rey albums and that I was
              particularly obsessed with 'Born to Die'. The album cover art is really amazing and therefore wanted to
              hang up some nice artwork of it.
            </Typo.p>
            <Typo.p>
              In total I probably spent around 10 hours on this, but now I have a unique print hanging in my kitchen.
            </Typo.p>
          </div>
        </ContainerInner>
      }
    >
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
            <Typo.p>In many hours of work I hand drew 2680 shapes along the edges of the original image.</Typo.p>
          </div>
          <div className="flex flex-col gap-6">
            <Typo.h3>Filling the shapes - Photohop</Typo.h3>
            <img src="/work_samples/lana/poly_lana.jpg" />
            <Typo.p>
              Afterwards I placed both the orginal image and the shapes on two Photoshop layers and wrote a small
              automation, that based on the shape calculates the midtone of the image in that area and fills the shape
              with it.
            </Typo.p>
          </div>
          <Typo.p style={{whiteSpace: 'nowrap'}}>
            <span className="text-xs">← </span> <Typo.linkInternal to="/work">Back to the overview</Typo.linkInternal>
          </Typo.p>
        </SpacedCols>
      </ContainerInner>
    </PageLayout>
  );
};
export default Lana;
