import {MetaFunction} from '@remix-run/node';
import {ContainerInner} from '~/components/molecules/Layout';
import {PageLayout} from '~/components/molecules/PageLayout';
import {Typo} from '~/components/primitives/typography';

export const meta: MetaFunction = () => ({
  title: 'i am hanna - design system',
});

export default function DesignSystem() {
  return (
    <PageLayout title="Design system" subTitle="Typography">
      <ContainerInner>
        <Typo.h1>Typo.headline 1 - Roboto Condensed, sans-serif</Typo.h1>
        <Typo.h2>Typo.headline 2 - Roboto Condensed, sans-serif</Typo.h2>
        <Typo.h3>Typo.headline 3 - Roboto Condensed, sans-serif</Typo.h3>
        <Typo.h4>Typo.headline 4 - Cormorant Infant, serif</Typo.h4>
        <Typo.h5>Typo.headline 5 - Cormorant Infant, serif</Typo.h5>
        <Typo.p>
          Typo.p - Roboto Condensed, sans-serif
          <br />I am a filler text Bacon ipsum dolor amet bresaola salami drumstick pancetta jowl andouille alcatra
          cTypo.huck turkey sTypo.houlder. Tongue tri-tip filet mignon ground round, Typo.ham Typo.hock tenderloin pork
          cTypo.hop rump drumstick biltong cupim porcTypo.hetta cTypo.huck boudin. Ground round venison beef ribs t-bone
          swine, doner cow fatback cupim strip steak sTypo.hankle pastrami burgdoggen cTypo.hislic meatball. Pastrami
          pork turkey, picanTypo.ha sTypo.hank tail cTypo.hislic meatball sTypo.houlder. Landjaeger biltong picanTypo.ha
          capicola sTypo.hank bresaola alcatra brisket fatback turducken filet mignon.
        </Typo.p>
        <Typo.caption>Typo.caption - Roboto Condensed, sans-serif</Typo.caption>
      </ContainerInner>
    </PageLayout>
  );
}
