import {MetaFunction} from '@remix-run/node';
import {PageLayout} from '~/components/molecules/PageLayout';
import {HR} from '~/components/primitives';
import {Typo} from '~/components/primitives/typography';

export const meta: MetaFunction = () => ({
  title: 'i am hanna - cv',
});

export default function CV() {
  return (
    <PageLayout
      title="Hanna Achenbach"
      subTitle="Curriculum vitae"
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
}
