import {MetaFunction} from '@remix-run/node';
import {H1, H2, H3, H4, P} from '~/components/primitives/typography';

export const meta: MetaFunction = () => ({
  title: 'i am hanna - typography',
});

export default function Typography() {
  return (
    <div>
      <H1>Headline 1 - Bebas Neue, sans-serif</H1>
      <H2>Headline 2 - Bebas Neue, sans-serif</H2>
      <H3>Headline 3 - Playfair Display, serif</H3>
      <H4>Headline 4 - Playfair Display, serif</H4>
      <P>
        Paragraph - Roboto Condensed, sans-serif
        <br />I am a filler text Bacon ipsum dolor amet bresaola salami drumstick pancetta jowl andouille alcatra chuck
        turkey shoulder. Tongue tri-tip filet mignon ground round, ham hock tenderloin pork chop rump drumstick biltong
        cupim porchetta chuck boudin. Ground round venison beef ribs t-bone swine, doner cow fatback cupim strip steak
        shankle pastrami burgdoggen chislic meatball. Pastrami pork turkey, picanha shank tail chislic meatball
        shoulder. Landjaeger biltong picanha capicola shank bresaola alcatra brisket fatback turducken filet mignon.
      </P>
      {/* <h1 className={'text-6xl italic font-serif font-black'}>Present 2018</h1> */}
    </div>
  );
}
