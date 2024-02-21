import type {MetaFunction} from '@remix-run/node';
import {ContainerInner} from '~/components/molecules/Layout';
import {PageLayout} from '~/components/molecules/PageLayout';
import {Typo} from '~/components/primitives/typography';

const meta: MetaFunction = () => [
	{
		title: 'i am hanna - design system',
	},
];

export default function DesignSystem() {
	return (
		<PageLayout title="Design system" subTitle="Typography">
			<ContainerInner>
				<Typo.H1>Typo.Headline 1 - Roboto Condensed, sans-serif</Typo.H1>
				<Typo.H2>Typo.Headline 2 - Roboto Condensed, sans-serif</Typo.H2>
				<Typo.H3>Typo.Headline 3 - Roboto Condensed, sans-serif</Typo.H3>
				<Typo.H4>Typo.Headline 4 - Cormorant Infant, serif</Typo.H4>
				<Typo.H5>Typo.Headline 5 - Cormorant Infant, serif</Typo.H5>
				<Typo.P>
					Typo.P - Roboto Condensed, sans-serif
					<br />I am a filler text Porchetta pastrami swine pork t-bone pancetta
					cupim spare ribs hamburger. Burgdoggen spare ribs chislic filet mignon
					jerky. Boudin tail tongue, pork loin filet mignon pig brisket swine
					venison beef ribs meatloaf t-bone. Salami pork buffalo alcatra
					andouille venison rump short loin tri-tip sirloin filet mignon short
					ribs capicola tongue. Tongue shankle tail, sirloin salami flank pork
					loin turkey ham drumstick.
				</Typo.P>
				<Typo.Caption>Typo.Caption - Roboto Condensed, sans-serif</Typo.Caption>
			</ContainerInner>
		</PageLayout>
	);
}

export {meta};
