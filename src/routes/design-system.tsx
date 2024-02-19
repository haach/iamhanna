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
					<br />I am a filler text Bacon ipsum dolor amet bresaola salami salami
					drumstick pancetta jowl andouille alcatra cTypo.Huck turkey
					sTypo.Houlder. Tongue tri-tip filet mignon ground round, Typo.Ham
					Typo.Hock tenderloin pork cTypo.Hop rump drumstick biltong cupim
					porcTypo.Hetta cTypo.Huck boudin. Ground round venison beef ribs
					t-bone swine, doner cow fatback cupim strip steak sTypo.Hankle
					pastrami burgdoggen cTypo.Hislic meatball. Pastrami pork turkey,
					picanTypo.Ha sTypo.Hank tail cTypo.Hislic meatball sTypo.Houlder.
					Landjaeger biltong picanTypo.Ha capicola sTypo.Hank bresaola alcatra
					brisket fatback turducken filet mignon.
				</Typo.P>
				<Typo.Caption>Typo.Caption - Roboto Condensed, sans-serif</Typo.Caption>
			</ContainerInner>
		</PageLayout>
	);
}

export {meta};
