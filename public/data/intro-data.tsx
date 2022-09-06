import {ReactNode} from 'react';

export const tags = [
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
  'React Testing library',
  'Node',
  'Python',
  'yarn 🧶',
  'npm',
  'Tailwind',
  'Redux',
];

export const loves: Array<{
  title: string;
  text: ReactNode;
  links?: Array<{text: string; href: string}>;
}> = [
  {
    title: 'Next / Remix + Vercel',
    text: (
      <>
        Honestly, how great is it to be able to write a whole "full stack" app, all in JS, with serverless functions,
        and continuous deployment in a one click setup? Web technology has come a long way and I like where it is going
        (full disclosure: I'd had enough of configuring webpack). This is definitely the setup I will be using for small
        projects from here on out.
      </>
    ),
    links: [
      {text: 'Next.js', href: 'https://nextjs.org/'},
      {text: 'Remix.run', href: 'https://remix.run/'},
      {text: 'Vercel', href: 'https://vercel.com/'},
    ],
  },
  {
    title: 'Warp Terminal',
    text: (
      <>
        It seems most command line applications still look and feel like Vim. I am a strong proponent for usability and
        pleasing visuals, so Warp filled a niche in my work setup I never really knew was there. It has transformed my
        working experience; plus, Warp also comes with loads of options for customization!
      </>
    ),
    links: [{text: 'Warp terminal', href: 'https://www.warp.dev/'}],
  },
  {
    title: 'Syntax Podcast',
    text: (
      <>
        For a long time, I found it hard to keep up with current trends in web development while working a 9 to 5. I
        spend around 15h every week just walking, and having my motor functions occupied actually makes my mind a lot
        sharper. So, I gave web dev podcasts a try and eventually landed on Syntax. The two hosts have such a great way
        of presenting complex topics in a digestible way, and always keep it light and fun. I highly recommend!
      </>
    ),
    links: [{text: 'Syntax.fm', href: 'https://syntax.fm/'}],
  },
  {
    title: 'Just functions',
    text: (
      <>
        A set of hyper lightweight, fully tested, fully typed JS utility functions that should really already be part of
        ES. You can install the full set, or just the ones you need - bye bye Lodash!
      </>
    ),
    links: [
      {
        text: 'just on Github',
        href: 'https://github.com/angus-c/just',
      },
    ],
  },
  {
    title: 'My portafilter machine',
    text: (
      <>
        I can't stress enough how happy I am to have retired my old espresso maker in exchange for a portafilter
        machine. After some research, I got the BEEM espresso machine that comes with an integrated grinder and a milk
        frother. It took me a couple of days to get the settings just right, but now my favorite oat milk flat white is
        served from right here at home.
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
        Working in a noisy environment, whether at home or in the office, is challanging. However, I don't always want
        to play music on my headphones to exclude the noise. Asoftmurmur offers a simple sulution: a webpage that allows
        you to mix ambient sounds, like rain or ocean waves, in order to create your ideal focus-zone soundtrack.
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
