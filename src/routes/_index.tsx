import type {MetaFunction} from '@remix-run/node';
import classNames from 'classnames';
import {tags, loves} from 'public/data/intro-data';
import type {FC} from 'react';
import {HiHeart} from 'react-icons/hi';

import {HeadlineWithDivider} from '~/components/molecules/HeadlineWithDivider';
import {
	ContainerInner,
	SpacedCols,
	TwoColumnText,
} from '~/components/molecules/Layout';
import {PageLayout} from '~/components/molecules/PageLayout';
import {pill} from '~/components/primitives';
import {Typo} from '~/components/primitives/typography';

const meta: MetaFunction = () => [
	{
		title: 'About me and things I currently love',
	},
];

const Index: FC = () => {
	return (
		<PageLayout
			title="Hanna Achenbach"
			subTitle="Frontend engineer"
			sideBar={
				<ContainerInner>
					<HeadlineWithDivider
						title="The tech stack"
						className="md:text-right"
					/>
					<SpacedCols>
						<div
							className="flex flex-row flex-wrap md:justify-end gap-2 pl-0 lg:pl-5 xl:pl-10"
							style={{maxWidth: 'fit-content'}}
						>
							{tags.map(tag => (
								<Typo.Caption className={classNames(pill, 'text-xs')} key={tag}>
									{tag}
								</Typo.Caption>
							))}
						</div>
					</SpacedCols>
				</ContainerInner>
			}
		>
			<ContainerInner>
				<HeadlineWithDivider title="Intro" />
				<SpacedCols>
					<TwoColumnText>
						<Typo.P>
							Like many of the Myspace Generation™, my interest in web design
							started in high school, where I created my first website. After
							high school, however, I took a little detour and got a bachelor's
							degree in Landscape Architecture (so if you ever want some
							unsolicited commentary about the placement of greenery around
							Berlin, I'm your person).
							<br />
							<br />
						</Typo.P>
						<Typo.P>
							As exciting as irrigation and trees and dirt are, I decided to go
							back to my original passion following the completion of my
							bachelor's, and interned at a small software development agency
							before getting my degree in Media Design.
						</Typo.P>
						<Typo.P>
							While I've been working mainly as a frontend engineer, I'm
							inevitably creeping towards the fullstack direction. I have a
							growing interest in application architecture design, and have been
							doing more JavaScript fullstack side projects recently.
							<br />
							<br />
						</Typo.P>
						<Typo.P>
							If you've made it this far into my introduction, why not pop me a
							message <Typo.LinkInternal to="/contact">here</Typo.LinkInternal>;
							I look forward to working in a team of smart, fun, and motivated
							people to create some cool (and functional and beautiful) apps.
						</Typo.P>
					</TwoColumnText>
				</SpacedCols>
			</ContainerInner>
			<ContainerInner>
				<HeadlineWithDivider
					title={
						<span className="flex flex-row items-center gap-1">
							Things I currently <HiHeart className="h-4" />
						</span>
					}
				/>
				<SpacedCols>
					{loves.map(({title, text, links}) => (
						<div key={title} className="flex flex-col gap-1 sm:gap-2">
							<Typo.H3>{title}</Typo.H3>
							<Typo.P>
								{text}
								{(links && links.length > 0 ? links : []).map(
									({text: linkText, href}) => (
										<span
											key={linkText}
											className="ml-2"
											style={{whiteSpace: 'nowrap'}}
										>
											<span className="text-xs">🔗</span>
											<Typo.LinkExternal
												href={href}
												title={linkText}
												className="ml-2 inline-block"
											>
												{linkText}
											</Typo.LinkExternal>
										</span>
									),
								)}
							</Typo.P>
						</div>
					))}
				</SpacedCols>
			</ContainerInner>
		</PageLayout>
	);
};

export default Index;
export {meta};
