import {MetaFunction} from '@remix-run/node';
import {FC} from 'react';
import {HeadlineWithDivider} from '~/components/molecules/HeadlineWithDivider';
import {ContainerInner} from '~/components/molecules/Layout';
import {PageLayout} from '~/components/molecules/PageLayout';
import {Typo} from '~/components/primitives/typography';

export const meta: MetaFunction = () => ({
  title: 'i am hanna - QTB corporate design',
});

const QTB: FC = () => {
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
              The institute for Quantitative and Theoretical Biology at the University of Heinrich-Heine-Universität
              Düsseldorf launched a design competition for the redesign of their corporate design including a logo, a
              business card and business paper based on the universities general template.
            </Typo.p>
            <Typo.p>
              My proposal didn't win, but I still believe that it was a good idea and well worth having a mention on my
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
        <>
          <HeadlineWithDivider title="Corporate design elements" />
          <Typo.p style={{whiteSpace: 'nowrap'}}>
            <span className="text-xs">← </span> <Typo.linkInternal to="/work">Back to the overview</Typo.linkInternal>
          </Typo.p>
          <div className="flex flex-col gap-4">
            <Typo.h3>The new logo</Typo.h3>
            <img src="/work/qtb/qtb_logo.jpg" />
            <Typo.p>
              The main research focus of the QTB institute is to find mathematical models for biological processes.
              Within this focus, much of their research happens around DNA. For the primary graphic of the new logo I
              therefore abstracted the double helix shape into a geometric symbol.
            </Typo.p>
            <Typo.p>
              Because of the interdisciplinary role of the institute between biology and mathematics, I picked two
              colors that in my opinion are generally associated with both subjects, green and blue. Through mixing
              those two together, I created the dark turquoise tone.
            </Typo.p>
            <Typo.p>
              In terms of typography I felt a minimalistic, geometric font was the best fit and I thus chose 'Bebas
              Neue' (FYI: Now also the Netflix brand font).
            </Typo.p>
          </div>
          <div className="flex flex-col gap-6">
            <Typo.h3>Business card</Typo.h3>
            <img src="/work/qtb/visi_mockup.jpg" />
            <Typo.p>
              For the businesscard I placed the new logo on a light, geometric background in grayscale colors.
            </Typo.p>
          </div>
          <div className="flex flex-col gap-6">
            <Typo.h3>Business paper</Typo.h3>
            <img src="/work/qtb/geschaeftspapier_mockup.jpg" />
          </div>
        </>
      </ContainerInner>
    </PageLayout>
  );
};
export default QTB;