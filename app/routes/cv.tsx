import {MetaFunction} from '@remix-run/node';
import {Typo} from '~/components/primitives/typography';

export const meta: MetaFunction = () => ({
  title: 'i am hanna - cv',
});

export default function CV() {
  return (
    <div>
      <Typo.h1>Hanna Achenbach</Typo.h1>
      {/* <h1 className={'text-6xl italic font-serif font-black'}>Present 2018</h1> */}
    </div>
  );
}
