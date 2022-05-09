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
      subTitle="Contact"
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
        I created my first website during my web design classes in high school back in 2006. Since then, I began with an
        autodidactic approach to web development, and then in 2014, I completed my degree in media design. <br />
        The wide variety of possibilies offered by web technology fascinates me ever since and therefore, I strive to
        develop applications that solve tricky issues and have the potential to make their users lives easier and more
        entertaining. Coming from a design and architecture influen- ced background, I endeavour to make every product
        unique, aesthetic and usable for its specific target group.
      </Typo.p>
    </PageLayout>
  );
};

export default Contact;
