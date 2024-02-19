import type {MetaFunction} from '@remix-run/node';
import type {FC} from 'react';
import {HeadlineWithDivider} from '~/components/molecules/HeadlineWithDivider';
import {ContainerInner, SpacedCols} from '~/components/molecules/Layout';
import {PageLayout} from '~/components/molecules/PageLayout';
import {Typo} from '~/components/primitives/typography';
import {Helmet} from 'react-helmet';
import {SuspenseImage} from '~/components/molecules/SuspenseImage';

const title = 'Corporate design of the QTB institute HH University Düsseldorf';
const meta: MetaFunction = () => [
	{
		title,
	},
];

const QTB: FC = () => (
	<>
		<Helmet>
			<meta property="og:image" content="/work_samples/qtb/qtb_logo.jpg" />
			<meta property="og:title" content={title} />
		</Helmet>
		<PageLayout
			title="Hanna Achenbach"
			subTitle="Frontend engineer"
			sideBar={
				<ContainerInner>
					<HeadlineWithDivider
						title="About this work"
						className="md:text-right"
					/>
					<div
						className="flex flex-row flex-wrap md:justify-end gap-2 pl-0 lg:pl-5 xl:pl-10"
						style={{maxWidth: 'fit-content'}}
					>
						<Typo.P>
							The institute for Quantitative and Theoretical Biology at the
							Heinrich-Heine-University of Düsseldorf launched a design
							competition for the redesign of their existing corporate design,
							including a logo, a business card and business paper, based on the
							university's general template.
						</Typo.P>
						<Typo.P>
							Though my proposal didn't win, I still believe that it was a good
							idea and worth the mention on my portfolio.
						</Typo.P>
						<Typo.P>
							<span className="ml-2" style={{whiteSpace: 'nowrap'}}>
								<span className="text-xs">🔗</span>
								<Typo.LinkExternal
									href={'https://www.qtb.hhu.de/en/'}
									title={'QTB website'}
									className="ml-2 inline-block"
								>
									qtb.hhu.de
								</Typo.LinkExternal>
							</span>
						</Typo.P>
					</div>
				</ContainerInner>
			}
		>
			<ContainerInner>
				<HeadlineWithDivider title="Corporate design elements" />
				<SpacedCols>
					<div className="flex flex-col gap-4">
						<Typo.H3>The new logo</Typo.H3>
						<SuspenseImage
							src="/work_samples/qtb/qtb_logo.jpg"
							height="565px"
						/>
						<Typo.P>
							The main research focus of the QTB institute is to find
							mathematical models for biological processes. Within this focus,
							much of their research happens around DNA. For the primary graphic
							of the new logo I therefore abstracted the double helix shape into
							a geometric symbol.
						</Typo.P>
						<Typo.P>
							Due to the interdisciplinary nature of the institute between
							biology and mathematics, I picked two colors that, in my opinion,
							are generally associated with both subjects: green and blue. By
							mixing those two together, I created the dark turquoise tone that
							features throughout my rendition of their corporate design.
						</Typo.P>
						<Typo.P>
							In terms of typography, I felt that a minimalistic, geometric font
							was the best fit; thus I chose 'Bebas Neue' (FYI: now also the
							Netflix font).
						</Typo.P>
					</div>
					<div className="flex flex-col gap-6">
						<Typo.H3>Business card</Typo.H3>
						<SuspenseImage
							src="/work_samples/qtb/visi_mockup.jpg"
							height="480px"
						/>
						<Typo.P>
							For the business card I placed the new logo on a light, geometric
							background in grayscale colors.
						</Typo.P>
					</div>
					<div className="flex flex-col gap-6">
						<Typo.H3>Business paper</Typo.H3>
						<SuspenseImage
							src="/work_samples/qtb/geschaeftspapier_mockup.jpg"
							height="600px"
						/>
					</div>
					<Typo.P style={{whiteSpace: 'nowrap'}}>
						<span className="text-xs">← </span>{' '}
						<Typo.LinkInternal to="/work">
							Back to the overview
						</Typo.LinkInternal>
					</Typo.P>
				</SpacedCols>
			</ContainerInner>
		</PageLayout>
	</>
);

export default QTB;
export {meta};
