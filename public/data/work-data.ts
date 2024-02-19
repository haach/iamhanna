import type {ReactNode} from 'react';

export enum LinkType {
	GITHUB = 'GITHUB',
	DEMO = 'DEMO',
	DETAIL = 'DETAIL',
}

type Link = {type: LinkType; href: string};

interface WorkItem {
	id: string;
	img: string;
	title: string;
	text: ReactNode;
	links?: Array<Link>;
	tags: Array<string>;
}

export const workItems: Array<WorkItem> = [
	{
		id: 'brute-force',
		img: 'brute-force-password.gif',
		title: 'Brute force password',
		text: "This is a small project that I created to learn more about brute force attacks. I was wondering how easy it really is to write such an algorithm and how long it would need to 'guess' certain passwords. The actual computation is ran inside a separate JS thread using a web worker, so that the UI stays actionable and the function can be cancelled at any time. The code is available on Github and the preview is deployed on Vercel.",
		links: [
			{
				type: LinkType.GITHUB,
				href: 'https://github.com/haach/brute-force-password',
			},
			{type: LinkType.DEMO, href: 'https://brute-force-password.vercel.app/'},
		],
		tags: ['React', 'Vite', 'Web worker'],
	},
	{
		id: 'iamhanna',
		img: 'iamhanna_dark_light.gif',
		title: 'iamhanna.de',
		text: 'For this portfolio, I tried the React + Remix + Vercel combo for the first time and was instantly hooked. I used tailwind to reduce the overhead of creating styled components and am super happy with the outcome. The code can be found on my Github repo, feel free to take a look!',
		links: [{type: LinkType.GITHUB, href: 'https://github.com/haach/iamhanna'}],
		tags: ['React', 'Remix', 'Serverless', 'Tailwind'],
	},
	{
		id: 'pizza',
		img: 'pizza.jpg',
		title: 'Freestyle pizza creator',
		text: 'The pizza creator was originally a small coding challenge that I decided to have some fun with by incorporating elements from one of my favorite childhood computer games: Pizza Connection 2. My goal was to create something that made the reviewers smile, and apparently it worked! Over time, I added more features but never got to perfect the code (meanwhile I was also fighting the outdated dependency monster). This code is also available on Github, plus there is a demo deployed on Vercel. Enjoy, and try to not get hungry ;)',
		links: [
			{type: LinkType.GITHUB, href: 'https://github.com/haach/pizza'},
			{type: LinkType.DEMO, href: 'https://pizza-haach.vercel.app/'},
		],
		tags: ['React', 'CRA', 'Styled Components', 'CSS animations'],
	},
	{
		id: 'chair',
		img: 'chair/tiny-chair-cover.jpg',
		title: 'The tiny chair',
		text: 'As a child, I grew up with wood working and still enjoy the endless possibilities that wood offers as a material. The ability to create something out of nothing with your own hands is a welcome change from my daily work on the computer.',
		links: [{type: LinkType.DETAIL, href: '/detail/tiny-chair'}],
		tags: ['Wood working', 'Model making', 'Miniature furniture'],
	},
	{
		id: 'CSV parser',
		img: 'watermaze.jpg',
		title: 'Water maze PDF to CSV parser',
		text: 'After watching my partner hand-transfer data from hundreds of PDFs into a spreadsheet, I decided to come up with an efficient solution that also reduced the chance of transfer errors. The PDFs are created by a software solution, which records experiments and then auto generates the PDF file based on some input parameters. Using the pdf2json and csv-writer packages, I wrote a small node script that parses the data from the PDFs into JSON, and then writes the data for all experiments into a single CSV output file. The CSV file can then be imported into Excel, which is the preferred software for analysis by experimental biologists. This tool is now used by employees of the Department of Experimental Neurology at Charité Universitätsmedizin Berlin to process data from this specific experiment setup, which was previously done by hand.',
		links: [
			{
				type: LinkType.GITHUB,
				href: 'https://github.com/haach/watermaze-pdf-parser',
			},
		],
		tags: ['Node', 'Parser'],
	},
	{
		id: 'lana',
		img: 'lana/poly_lana.jpg',
		title: 'Lana del Rey polygone art',
		text: "A polygone artwork based on the 'Born to Die' album cover in Adobe Photoshop and Illustrator composed of 10 hours of work, 2680 shapes drawn and a 24 Euro print.",
		links: [{type: LinkType.DETAIL, href: '/detail/lana-del-rey-polygone'}],
		tags: ['Digital artwork', 'Polygone art'],
	},
	{
		id: 'qtb',
		img: 'qtb/qtb_logo.jpg',
		title: 'Design competition: CD for the QTB institute',
		text: 'A new logo, business card, and business paper design were my contributions to the design competition launched by the Institute for Quantitative and Theoretical Biology of the Heinrich-Heine-Universität Düsseldorf. You can see all products and read more on the detail page.',
		links: [{type: LinkType.DETAIL, href: '/detail/qtb'}],
		tags: ['Corporate design', 'Logo', 'Design competition'],
	},
];
