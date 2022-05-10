import {MetaFunction} from '@remix-run/node';
import {FC} from 'react';
import {Typo} from '~/components/primitives/typography';
import dotenv from 'dotenv';
import {PageLayout} from '~/components/molecules/PageLayout';
import {HR} from '~/components/primitives';

export const meta: MetaFunction = () => ({
  title: 'i am hanna - contact',
});

export async function loader() {
  dotenv.config();
  //dotenv.config({path: `.env.${process.env.NODE_ENV}`});
  dotenv.config({path: `.env`});
  return process.env.EMAIL;
}

const Contact: FC = () => {
  return (
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
    >
      <Typo.p>
        You are interested in working with me? Then please fill the form below and drop me a short message.
      </Typo.p>
    </PageLayout>
  );
};

export default Contact;
