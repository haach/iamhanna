import {MetaFunction} from '@remix-run/node';
import classNames from 'classnames';
import {FC} from 'react';
import {HiHeart} from 'react-icons/hi';
import {HeadlineWithDivider} from '~/components/molecules/HeadlineWithDivider';
import {ContainerInner, TwoColumnText} from '~/components/molecules/Layout';
import {PageLayout} from '~/components/molecules/PageLayout';
import {pill} from '~/components/primitives';
import {Typo} from '~/components/primitives/typography';
import {loves} from '~/intro-data';
import {useWindow} from '~/WindowContext';

export const meta: MetaFunction = () => ({
  title: 'i am hanna',
});

const tags = [
  'React',
  'TypeScript',
  'Styled Components 💅',
  'Emotion',
  'CSS modules',
  'Git',
  'Radix',
  'Remix',
  'Vite',
  'Gatsby',
  'Next',
  'Anime',
  'Node',
  'Python',
  'yarn 🧶',
  'npm',
  'Tailwind',
  'Redux',
];

const Index: FC = () => {
  const windowContext = useWindow();
  return (
    <PageLayout
      title="Hanna Achenbach"
      subTitle="Frontend engineer"
      sideBar={
        windowContext?.width &&
        windowContext?.width >= 768 && (
          <ContainerInner>
            <HeadlineWithDivider title="The tech stack" className="md:text-right" />
            <div
              className="flex flex-row flex-wrap md:justify-end gap-2 pl-0 lg:pl-5 xl:pl-10"
              style={{maxWidth: 'fit-content'}}
            >
              {tags.map((tag) => (
                <Typo.caption className={classNames(pill, 'text-xs')} key={tag}>
                  {tag}
                </Typo.caption>
              ))}
            </div>
          </ContainerInner>
        )
      }
    >
      <ContainerInner>
        <HeadlineWithDivider title="Intro" />
        <TwoColumnText>
          <Typo.p>
            After taking a little deture and getting my B.o.S. in landscape architecture in 2013 I decided for a career
            change, got an intership in a small agency and eventually completed my degree in media design. Prior to
            starting my studies in Berlin I had already created my first website in high school and from that moment
            onwards my interest developed into a real passion.
          </Typo.p>
          <Typo.p>
            This particular background has shaped the way I am working today as a frontend engineer. I strive to develop
            applications that solve issues for their users without adding complexity to their workflows. For me this
            principle goes hand in hand with great usability and visul bla bla.
          </Typo.p>
          <Typo.p>
            Even though I consider myself mainly a frontend engineer, I also have a growing interest in apllication
            architecture designand and am going more into a full stack direction as well. - If this sparks joy pop me a
            message <Typo.linkInternal to="/contact">here</Typo.linkInternal>
          </Typo.p>
        </TwoColumnText>
      </ContainerInner>
      {windowContext?.width && windowContext?.width < 768 && (
        <ContainerInner>
          <HeadlineWithDivider title="The tech stack" className="md:text-right" />
          <div
            className="flex flex-row flex-wrap md:justify-end gap-2 pl-0 lg:pl-5 xl:pl-10"
            style={{maxWidth: 'fit-content'}}
          >
            {tags.map((tag) => (
              <Typo.caption className={classNames(pill)} key={tag}>
                {tag}
              </Typo.caption>
            ))}
          </div>
        </ContainerInner>
      )}
      <ContainerInner>
        <HeadlineWithDivider
          title={
            <>
              Things I currently <HiHeart className="h-5 inline-block align-text-bottom" />
            </>
          }
        />

        {loves.map(({title, text, links}) => (
          <div key={title} className="flex flex-col gap-1 sm:gap-2">
            <Typo.h3>{title}</Typo.h3>
            <Typo.p>
              {text}
              {(links && links.length > 0 ? links : []).map(({text: linkText, href}) => (
                <span key={linkText} className="ml-2" style={{whiteSpace: 'nowrap'}}>
                  <span className="text-xs">🔗</span>
                  <Typo.linkExternal href={href} title={linkText} className="ml-2 inline-block">
                    {linkText}
                  </Typo.linkExternal>
                </span>
              ))}
            </Typo.p>
          </div>
        ))}
      </ContainerInner>
    </PageLayout>
  );
};

export default Index;
