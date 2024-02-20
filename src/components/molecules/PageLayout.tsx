import type {ReactNode} from 'react';
import type {ComponentWithChildren} from '~/components';
import {DarkModeSwitch} from '~/components/molecules/DarkModeSwitch';
import {HeaderNav} from '~/components/molecules/HeaderNav';
import {SuspenseImage} from '~/components/molecules/SuspenseImage';
import {HR, blackBorder} from '~/components/primitives';
import {Typo} from '~/components/primitives/typography';

interface PageLayoutProps {
	title: string;
	subTitle?: string;
	sideBar?: ReactNode;
}

const Layout: ComponentWithChildren<PageLayoutProps> = ({
	children,
	title,
	subTitle,
	sideBar,
}) => {
	return (
		<div className="grid grid-cols-1 items-start justify-center">
			{/* HR */}
			<div className="layout-start-top w-full py-32 md:py-36 lg:py-44 ">
				<HR />
			</div>
			{/* TWO COLUMN GRID */}
			<div className="layout-start-top layout-container grid gap-10 p-10 md:gap-16 md:p-16 max-w-screen-xl mx-auto z-10 ">
				{/* HEADER */}
				<div className={`layout-profileImage flex justify-end`}>
					<div
						className={`max-w-44 md:max-w-64 border-2 rounded-full bg-white dark:bg-black p-1 aspect-square ${blackBorder} `}
					>
						<SuspenseImage src="/portrait.jpg" className="rounded-full" />
					</div>
				</div>

				<header className="grid grid-cols-1 gap-8 sm:gap-0 sm:grid-cols-2 items-end justify-center">
					<div>
						<Typo.H1 className="mb-2" style={{whiteSpace: 'nowrap'}}>
							{title}
						</Typo.H1>
						{subTitle && (
							<Typo.H2>
								{'// '}
								{subTitle}
							</Typo.H2>
						)}
					</div>
					<div className="flex flex-col justify-between sm:items-end">
						<DarkModeSwitch className="mb-4" />
						<HeaderNav />
					</div>
				</header>

				{/* SIDEBAR */}
				{sideBar && <aside className="layout-sidebar">{sideBar}</aside>}

				{/* CONTENT */}
				<main className="layout-content flex flex-col gap-14">{children}</main>
			</div>
		</div>
	);
};

export const PageLayout: ComponentWithChildren<PageLayoutProps> = ({
	title,
	subTitle,
	sideBar,
	children,
}) => {
	return (
		<Layout title={title} subTitle={subTitle} sideBar={sideBar}>
			{children}
		</Layout>
	);
};
