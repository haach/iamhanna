import {MetaFunction} from '@remix-run/node';
import {FC} from 'react';
import {H1, P} from '~/components/primitives/typography';

export const meta: MetaFunction = () => ({
  title: 'i am hanna',
});

const Index: FC = () => {
  return (
    <div>
      <H1>Welcome to Remix</H1>
      <P>
        I am a filler text Bacon ipsum dolor amet bresaola salami drumstick pancetta jowl andouille alcatra chuck turkey
        shoulder. Tongue tri-tip filet mignon ground round, ham hock tenderloin pork chop rump drumstick biltong cupim
        porchetta chuck boudin. Ground round venison beef ribs t-bone swine, doner cow fatback cupim strip steak shankle
        pastrami burgdoggen chislic meatball. Pastrami pork turkey, picanha shank tail chislic meatball shoulder.
        Landjaeger biltong picanha capicola shank bresaola alcatra brisket fatback turducken filet mignon.
      </P>
    </div>
  );
};

export default Index;
