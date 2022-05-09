import {MetaFunction} from '@remix-run/node';
import {PageLayout} from '~/components/molecules/PageLayout';
import {HR} from '~/components/primitives';
import {Typo} from '~/components/primitives/typography';

export const meta: MetaFunction = () => ({
  title: 'i am hanna - cv',
});

export default function CV() {
  return (
    <div>
      <PageLayout
        title="Hanna Achenbach"
        subTitle="Frontend engineer"
        sideBar={
          <>
            <div className="flex flex-col items-end w-full">
              <Typo.h2 yellow>LEFT Hanna Achenbach</Typo.h2>
              <HR />
              <Typo.p>LEFT Hanna Achenbach</Typo.p>
            </div>
            <div className="flex flex-col items-end w-full">
              <Typo.h2 yellow>LEFT Hanna Achenbach</Typo.h2>
              <HR />
              <Typo.p>LEFT Hanna Achenbach</Typo.p>
            </div>
          </>
        }
      />
      {/* <Typo.h1>Hanna Achenbach</Typo.h1> */}
      {/* <h1 className={'text-6xl italic font-serif font-black'}>Present 2018</h1> */}
    </div>
  );
}
