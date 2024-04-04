import type {MetaFunction} from '@remix-run/node';
import classNames from 'classnames';
import {educations, experiences} from 'public/data/cv-data';
import {useCallback, useEffect, useMemo, useState} from 'react';
import {HeadlineWithDivider} from '~/components/molecules/HeadlineWithDivider';
import {ContainerInner, SpacedCols} from '~/components/molecules/Layout';
import {PageLayout} from '~/components/molecules/PageLayout';
import {Typo} from '~/components/primitives/typography';
import {useWindow} from '~/contexts/WindowContext';
import {STORAGE_ITEMS} from '~/utils/constants';

const meta: MetaFunction = () => [
	{
		title: 'CV, experiences and education',
	},
];

type ExperienceId = keyof typeof experiences;

const sideBar = (
	<ContainerInner className="">
		<HeadlineWithDivider
			title="Education"
			className="print:text-right md:text-right"
		/>
		<SpacedCols>
			{Object.entries(educations).map(([key, education]) => (
				<div
					key={key}
					className="print:text-right md:text-right md:self-end pl-0 lg:pl-5 xl:pl-16 max-w-fit print:max-w-[200px]"
				>
					<Typo.H4>{education.to}</Typo.H4>
					<Typo.H5>{education.from}</Typo.H5>
					<Typo.H2 className="leading-tight my-3 sm:mb-0">
						{education.title}
					</Typo.H2>
					<Typo.P dense className="print:text-right md:text-right sm:pt-2">
						{education.footer}
					</Typo.P>
				</div>
			))}
		</SpacedCols>
	</ContainerInner>
);

const CV = () => {
	const windowContext = useWindow();

	const defaultState = useMemo(
		() =>
			new Map([
				[
					'aiven',
					windowContext?.width && windowContext.width < 768 ? true : false,
				],
				['back', false],
				['neugelb', false],
				['autentek_2', false],
				['autentek_1', false],
			]),
		[windowContext],
	);

	const [openSections, setOpenSections] = useState<
		Map<ExperienceId, boolean> | undefined
	>();

	const updateSections = useCallback(() => {
		const stored = window.localStorage.getItem(STORAGE_ITEMS.CV_SECTIONS);
		if (stored) {
			setOpenSections(new Map(JSON.parse(stored)));
		} else {
			setOpenSections(defaultState);
			window.localStorage.setItem(
				STORAGE_ITEMS.CV_SECTIONS,
				JSON.stringify(Array.from(defaultState.entries())),
			);
		}
	}, [setOpenSections, defaultState]);

	useEffect(() => {
		updateSections();
	}, [updateSections]);

	const persistSection = (section: ExperienceId) => {
		const isClose = !openSections?.get(section) === false;

		const updatedMap = new Map(
			openSections?.set(section, !openSections.get(section)),
		);
		setOpenSections(updatedMap);
		window.localStorage.setItem(
			STORAGE_ITEMS.CV_SECTIONS,
			JSON.stringify(Array.from(updatedMap.entries())),
		);

		const el = document.getElementById(section as string);
		if (isClose && el) {
			// scroll up to closed section
			setTimeout(() => {
				window.scroll({
					top: el.offsetTop - 30,
					behavior: 'smooth',
				});
			}, 0);
		}
	};

	const isMobile = Boolean(
		windowContext && windowContext.width && windowContext?.width < 768,
	);

	return (
		<PageLayout
			title="Hanna Achenbach"
			subTitle="Frontend engineer"
			sideBar={!isMobile && sideBar}
		>
			<ContainerInner>
				<HeadlineWithDivider title="Experience" />
				<SpacedCols>
					{/* <Typo.P>
            You can also{' '}
            <Typo.LinkExternal
              href="/hanna_achenbach_short_cv.pdf"
              download
              onClick={() => {
                sendDataToGTM({event: 'cvDownloaded'});
              }}
            >
              download the short version as PDF
            </Typo.LinkExternal>
          </Typo.P> */}
					{openSections &&
						Object.entries(experiences).map(([key, experience]) => (
							<div key={key} id={key}>
								<div className="flex flex-col w-full">
									<Typo.H2 className="leading-tight">
										{experience.from} - {experience.to}
									</Typo.H2>
									<Typo.H2 className="leading-tight">
										{experience.title}
									</Typo.H2>
									<div className="flex-auto pt-2 sm:pl-6 mb-3 sm:mb-0 lg:-mt-1"></div>
								</div>
								<div
									className={classNames(
										'flex flex-col gap-6 transition-[max-height] duration-900 overflow-hidden',
										{
											'max-h-[3000px]': openSections.get(key),
											'max-h-0': !openSections.get(key),
										},
									)}
								>
									{experience.company && (
										<section className="mt-4">
											<Typo.H3 className="mb-2">
												About {experience.name}
											</Typo.H3>
											<section className="flex flex-col gap-2">
												{experience.company.map((text, idx) => (
													<Typo.P key={text}>
														{text}{' '}
														{idx === (experience.company?.length ?? 0) - 1 && (
															<>
																<span className="text-xs">🔗</span>{' '}
																<Typo.LinkExternal href={experience.link}>
																	{experience.link.split('://')[1]}
																</Typo.LinkExternal>
															</>
														)}
													</Typo.P>
												))}
											</section>
										</section>
									)}

									{experience.team && (
										<section>
											<Typo.H3 className="mb-2">Team setup</Typo.H3>
											<section className="flex flex-col gap-2">
												{experience.team.map(text => (
													<Typo.P key={text}>{text}</Typo.P>
												))}
											</section>
										</section>
									)}

									{experience.header && (
										<section>
											<section className="flex flex-col gap-2">
												{experience.header.map(text => (
													<Typo.P key={text}>{text}</Typo.P>
												))}
											</section>
										</section>
									)}

									{experience.list && (
										<section>
											<Typo.H3 className="mb-2">Tasks</Typo.H3>
											<ul className="list-disc list-outside ml-6 resonsive-columns ">
												{experience.list.map(text => (
													<li key={text} className="mb-4">
														{text}
													</li>
												))}
											</ul>
										</section>
									)}

									{experience.reflection && (
										<section>
											<Typo.H3 className="mb-2">Reflection</Typo.H3>
											<section className="flex flex-col gap-2">
												{experience.reflection.map(text => (
													<Typo.P key={text}>{text}</Typo.P>
												))}
											</section>
										</section>
									)}
								</div>
								<button
									className="flex flex-row justify-center md:justify-start items-center cursor-pointer mt-4"
									onClick={_ => persistSection(key)}
								>
									<Typo.P className="text-g hover:underline">
										Show {openSections.get(key) ? 'less' : 'more'}
									</Typo.P>
								</button>
							</div>
						))}
				</SpacedCols>
			</ContainerInner>
			{isMobile && sideBar}
		</PageLayout>
	);
};
export default CV;

export {meta};
