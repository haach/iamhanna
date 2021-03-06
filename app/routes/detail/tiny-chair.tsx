import {MetaFunction} from '@remix-run/node';
import {FC} from 'react';
import {HeadlineWithDivider} from '~/components/molecules/HeadlineWithDivider';
import {ContainerInner, SpacedCols} from '~/components/molecules/Layout';
import {PageLayout} from '~/components/molecules/PageLayout';
import {Typo} from '~/components/primitives/typography';
import {Helmet} from 'react-helmet';

const title = 'Building a wooden miniature chair';
export const meta: MetaFunction = () => ({
  title,
});

const TinyChair: FC = () => {
  return (
    <>
      <Helmet>
        <meta property="og:image" content="/work_samples/chair/tiny-chair-cover.jpg" />
        <meta property="og:title" content={title} />
      </Helmet>
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
                In May 2021 I got myself into trouble by saying that "building a miniature chair is an easy task". More
                as a joke and because I then had to provide proof, the first tiny chair was build.
              </Typo.p>
              <Typo.p>
                I have to admit the miniature interlocks were pretty challenging after all, but building this very first
                tiny chair still kicked off the new hobby of building more miniature furniture.
              </Typo.p>
              <Typo.p>The chair measures 10 cm in height and weights about 25 grams.</Typo.p>
            </div>
          </ContainerInner>
        }
      >
        <ContainerInner>
          <HeadlineWithDivider title="The tiny chair" />
          <SpacedCols>
            <div className="flex flex-col gap-4">
              <Typo.p>I started off by building the skeleton using 10 mm by 10 mm wooden strips.</Typo.p>
              <img src="/work_samples/chair/tiny-chair-01.jpg" />
              <Typo.p>
                The legs are connected to the top frame using interlocks and the seat is covered in 15 mm wide spruce
                wood plates. I rounded the ends of the backrest using sand paper and gave it a rattan look by wrapping
                it with a hemp yarn. Finally, a coat of natural wood oil gives the chair the glossy look and protects
                the material from UV light.
              </Typo.p>
              <img src="/work_samples/chair/tiny-chair-02.jpg" />
              <Typo.p>Here are some close-up shots from the seat and the interlocks.</Typo.p>
              <img src="/work_samples/chair/tiny-chair-03.jpg" />
            </div>
            <Typo.p style={{whiteSpace: 'nowrap'}}>
              <span className="text-xs">??? </span> <Typo.linkInternal to="/work">Back to the overview</Typo.linkInternal>
            </Typo.p>
          </SpacedCols>
        </ContainerInner>
      </PageLayout>
    </>
  );
};

export default TinyChair;
