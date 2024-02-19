import type {MetaFunction} from '@remix-run/node';
import classNames from 'classnames';
import {LinkType, workItems} from 'public/data/work-data';
import type {FC} from 'react';
import {HeadlineWithDivider} from '~/components/molecules/HeadlineWithDivider';
import {ContainerInner, SpacedCols} from '~/components/molecules/Layout';
import {PageLayout} from '~/components/molecules/PageLayout';
import {SuspenseImage} from '~/components/molecules/SuspenseImage';
import {pill} from '~/components/primitives';
import {Typo} from '~/components/primitives/typography';

const meta: MetaFunction = () => [
	{
		title: 'Take a look at my coding projects and artwork',
	},
];

const Work: FC = () => {
	return (
		<PageLayout
			title="Hanna Achenbach"
			subTitle="Frontend engineer"
			sideBar={
				<ContainerInner>
					<HeadlineWithDivider title="On the side" className="md:text-right" />
					<SpacedCols>
						<div
							className="flex flex-row flex-wrap md:justify-end gap-2 pl-0 lg:pl-5 xl:pl-10"
							style={{maxWidth: 'fit-content'}}
						>
							<Typo.P>
								Due to my diverse background, not all of my work is strictly
								limited to coding. In this section, you'll find some of my
								creations from all sectors of work and life.
							</Typo.P>
						</div>
					</SpacedCols>
				</ContainerInner>
			}
		>
			<ContainerInner>
				<HeadlineWithDivider title="Work samples" />
				<SpacedCols>
					{workItems.map(item => (
						<div className="flex flex-col gap-4" key={item.id}>
							<Typo.H3>{item.title}</Typo.H3>
							<SuspenseImage
								src={`/work_samples/${item.img}`}
								className="max-w-full border border-solid border-gl dark:border-gd"
								height="420px"
							/>
							<Typo.P>{item.text}</Typo.P>

							<div className="flex flex-row gap-2">
								{item.tags.map((tag, idx) => (
									<Typo.Caption
										className={classNames(pill, 'text-xs')}
										key={`tag-${item.id}-${idx}`}
									>
										{tag}
									</Typo.Caption>
								))}
							</div>
							{!!item.links?.length && (
								<div className="flex flex-row gap-4">
									{item.links.map((link, idx) => {
										const linkText =
											link.type === LinkType.GITHUB
												? 'Check the code on Github'
												: link.type === LinkType.DEMO
													? 'Go to live demo'
													: 'See detail page';
										return (
											<span
												key={`link-${item.id}-${idx}`}
												style={{whiteSpace: 'nowrap'}}
											>
												<span className="text-xs">🔗</span>
												{link.type === LinkType.DETAIL ? (
													<Typo.LinkInternal
														to={link.href}
														className="ml-2 inline-block"
													>
														{linkText}
													</Typo.LinkInternal>
												) : (
													<Typo.LinkExternal
														href={link.href}
														title={linkText}
														className="ml-2 inline-block"
													>
														{linkText}
													</Typo.LinkExternal>
												)}
											</span>
										);
									})}
								</div>
							)}
						</div>
					))}
				</SpacedCols>
			</ContainerInner>
		</PageLayout>
	);
};

export default Work;

export {meta};
