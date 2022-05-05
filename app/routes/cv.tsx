import {MetaFunction} from '@remix-run/node';
import {H1, H2, H3, H4} from '~/components/primitives/typography';

export const meta: MetaFunction = () => ({
  title: 'i am hanna - cv',
});

export default function CV() {
  return (
    <div>
      <H1>H1 Hanna Achenbach</H1>
      <H2>
        H2 Frontend Developer
        <br />
        at Neugelb Studios gmbh (Commerzbank)
      </H2>
      <H3>H3 Present 2018</H3>
      <H4>H4 May 2018</H4>
      {/* <h1 className={'text-6xl italic font-serif font-black'}>Present 2018</h1> */}
    </div>
  );
}
