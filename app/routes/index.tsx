import {MetaFunction} from '@remix-run/node';
import classNames from 'classnames';
import {FC, Fragment, ReactNode} from 'react';
import {FiHeart} from 'react-icons/fi';
import {SiCpanel} from 'react-icons/si';
import {HeadlineWithDivider} from '~/components/molecules/HeadlineWithDivider';
import {PageLayout} from '~/components/molecules/PageLayout';
import {link, pill} from '~/components/primitives';
import {Typo} from '~/components/primitives/typography';

export const meta: MetaFunction = () => ({
  title: 'i am hanna',
});

const tags = [
  'React',
  'TypeScript',
  'Emotion',
  'Git',
  'Styled Components 💅',
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

const loves: Array<{
  title: string;
  text: ReactNode;
  links?: Array<{text: string; href: string}>;
}> = [
  {
    title: 'Remix on Vercel',
    text: (
      <>
        Honestly, how amazing is it to be able to write a full stack app all in JS, all in one repo, even all in one
        file. And on top you have continous deployment in a one click setup on top of that? Web technology has come a
        long way and I like were this is going. (Full disclaimer: I also hated configuring webpack)
      </>
    ),
    links: [
      {text: 'Remix.run', href: 'https://remix.run/'},
      {text: 'Vercel', href: 'https://vercel.com/'},
    ],
  },
  {
    title: 'Warp Terminal',
    text: (
      <>
        It seems most command line apps still look and feel like OG Vim. Because I am a strong proponent for useability
        and pleasing visuals, Warp filled a nieche in my work setup, I never really knew existed - and I am very happy
        about it.(It also comes with loads of options for customization!)
      </>
    ),
    links: [{text: 'Warp terminal', href: 'https://www.warp.dev/'}],
  },
  {
    title: 'Syntax Podcast',
    text: (
      <>
        For a long time I had a really hard time keeping up with current web development trends while working a 9 to 5
        as well. Then I noticed that I probably spend around 15h a week on my daily walks with the dog. With the body
        motor functions occupied my mind seemed a lot sharper so I gave web dev podcasts a try and landed on Syntax. The
        two hosts have a great way of presenting complex topics in a digestable way and keeping it light - I highly
        recommend!
      </>
    ),
    links: [{text: 'Syntax.fm', href: 'https://syntax.fm/'}],
  },
  {
    title: 'My portafilter machine',
    text: (
      <>
        I can't even say this enough how happy I am to move away from my good old mocca maker to a portafilter. After a
        small research I went for the BEEM ESPRESSO-GRIND-PROFESSION with intigrated grinder and milk frapper. It took
        me a couple of days tofigure the perfect setting out, but now my favourite oat milk flat white is served at
        home.
      </>
    ),
    links: [
      {
        text: 'BEEM',
        href: 'https://beem.de/products/espresso-grind-profession-siebtragermaschine?variant=41409181581471&currency=EUR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&gclid=Cj0KCQjwg_iTBhDrARIsAD3Ib5iII73DQXDBRVMIZsuXrXV0kHckZ-cF8vIxXNhwFQmuQzDfRsFDqMoaApAnEALw_wcB',
      },
    ],
  },
  {
    title: 'A soft murmur',
    text: (
      <>
        Working can be pretty hard when there is a lot of ambient noise distracting you. I am easily distracted, but I
        don't always want to play music on my head phones to get into the focus zone. Asoftmurmur is a simple age that
        let's you mix ambient sounds like rain or waves into for that soothing hyper focus sound.
      </>
    ),
    links: [
      {
        text: 'asoftmurmur',
        href: 'https://asoftmurmur.com/',
      },
    ],
  },
];

const Index: FC = () => {
  return (
    <PageLayout
      title="Hanna Achenbach"
      subTitle="Frontend engineer"
      sideBar={
        <>
          <HeadlineWithDivider title="The tech stack" align="right" />
          <div className="flex flex-row flex-wrap justify-end gap-2" style={{maxWidth: 'fit-content'}}>
            {tags.map((tag) => (
              <div className={classNames(pill, 'text-xs')} key={tag}>
                {tag}
              </div>
            ))}
          </div>
        </>
      }
    >
      <HeadlineWithDivider title="Intro" />
      {/* TODO: unify spacing with cv  */}
      <div className="flex flex-col gap-8">
        <Typo.p>How I got here</Typo.p>
        <Typo.p>
          I created my first website during my web design classes in high school back in 2006. Since then, I began with
          an autodidactic approach to web development, and then in 2014, I completed my degree in media design. <br />
          The wide variety of possibilies offered by web technology fascinates me ever since and therefore, I strive to
          develop applications that solve tricky issues and have the potential to make their users lives easier and more
          entertaining. Coming from a design and architecture influen- ced background, I endeavour to make every product
          unique, aesthetic and usable for its specific target group.
        </Typo.p>
        <Typo.p>What I recently focus on</Typo.p>
      </div>
      <HeadlineWithDivider
        title={
          <div className="flex">
            Things I currently <FiHeart className="h-5" />
          </div>
        }
      />
      <div className="flex flex-col gap-3 sm:gap-5">
        {loves.map(({title, text, links}) => (
          <div key={title} className="flex flex-col gap-1 sm:gap-2">
            <Typo.h3>{title}</Typo.h3>
            <Typo.p>
              {text}
              {/* {links && links.length > 0 && ' 🔗'} */}
              {(links && links.length > 0 ? links : []).map(({text: linkText, href}) => (
                <span key={linkText} className="ml-2">
                  <span className="text-xs">🔗</span>
                  <Typo.linkExternal href={href} title={linkText} className="ml-2 inline-block">
                    {linkText}
                  </Typo.linkExternal>{' '}
                </span>
              ))}
            </Typo.p>
          </div>
        ))}{' '}
        {/* 
          <div key={title} className="flex flex-row gap-5 sm:gap-10"><div className="flex-1">
              <img src={imgSrc} alt={title} className="object-cover h-44 w-72" />
            </div>
            <div className="flex-auto w-64">
              <Typo.h3>{title}</Typo.h3>
              <Typo.p>
                {text}
                {(links && links.length > 0 ? links : []).map(({text: linkText, href}) => (
                  <Typo.linkExternal key={linkText} href={href} title={linkText} className="ml-2">
                    {linkText}
                  </Typo.linkExternal>
                ))}
              </Typo.p>
            </div> 
          </div>*/}
      </div>
    </PageLayout>
  );
};

export default Index;
