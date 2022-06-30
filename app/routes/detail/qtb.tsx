import {MetaFunction} from '@remix-run/node';
import {FC} from 'react';
import {HeadlineWithDivider} from '~/components/molecules/HeadlineWithDivider';
import {ContainerInner, SpacedCols} from '~/components/molecules/Layout';
import {PageLayout} from '~/components/molecules/PageLayout';
import {Typo} from '~/components/primitives/typography';
import {Helmet} from 'react-helmet';

export const meta: MetaFunction = () => ({
  title: 'Corporate design of the QTB institute HH University Düsseldorf',
});

const QTB: FC = () => (
  <>
    <Helmet>
      <meta property="og:image" content="/work_samples/qtb/qtb_logo.jpg" />
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
              The institute for Quantitative and Theoretical Biology at the Heinrich-Heine-University of Düsseldorf
              launched a design competition for the redesign of their existing corporate design, including a logo, a
              business card and business paper, based on the university's general template.
            </Typo.p>
            <Typo.p>
              Though my proposal didn't win, I still believe that it was a good idea and worth the mention on my
              portfolio.
            </Typo.p>
            <Typo.p>
              <span className="ml-2" style={{whiteSpace: 'nowrap'}}>
                <span className="text-xs">🔗</span>
                <Typo.linkExternal
                  href={'https://www.qtb.hhu.de/en/'}
                  title={'QTB website'}
                  className="ml-2 inline-block"
                >
                  qtb.hhu.de
                </Typo.linkExternal>
              </span>
            </Typo.p>
          </div>
        </ContainerInner>
      }
    >
      <ContainerInner>
        <HeadlineWithDivider title="Corporate design elements" />
        <SpacedCols>
          <div className="flex flex-col gap-4">
            <Typo.h3>The new logo</Typo.h3>
            <img src="/work_samples/qtb/qtb_logo.jpg" />
            <Typo.p>
              The main research focus of the QTB institute is to find mathematical models for biological processes.
              Within this focus, much of their research happens around DNA. For the primary graphic of the new logo I
              therefore abstracted the double helix shape into a geometric symbol.
            </Typo.p>
            <Typo.p>
              Due to the interdisciplinary nature of the institute between biology and mathematics, I picked two colors
              that, in my opinion, are generally associated with both subjects: green and blue. By mixing those two
              together, I created the dark turquoise tone that features throughout my rendition of their corporate
              design.
            </Typo.p>
            <Typo.p>
              In terms of typography, I felt that a minimalistic, geometric font was the best fit; thus I chose 'Bebas
              Neue' (FYI: now also the Netflix font).
            </Typo.p>
          </div>
          <div className="flex flex-col gap-6">
            <Typo.h3>Business card</Typo.h3>
            <img src="/work_samples/qtb/visi_mockup.jpg" />
            <Typo.p>
              For the business card I placed the new logo on a light, geometric background in grayscale colors.
            </Typo.p>
          </div>
          <div className="flex flex-col gap-6">
            <Typo.h3>Business paper</Typo.h3>
            <img src="/work_samples/qtb/geschaeftspapier_mockup.jpg" />
          </div>
          <Typo.p style={{whiteSpace: 'nowrap'}}>
            <span className="text-xs">← </span> <Typo.linkInternal to="/work">Back to the overview</Typo.linkInternal>
          </Typo.p>
        </SpacedCols>
      </ContainerInner>
    </PageLayout>
  </>
);

export default QTB;
