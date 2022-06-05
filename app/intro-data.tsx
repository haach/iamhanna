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
    title: 'Remix + Vercel',
    text: (
      <>
        Honestly, how amazing is it to be able to write a whole full stack app all in JS with serverless functions and
        continuous deployment in a one click setup? Web technology has come a long way and I like where this is going.
        (Full disclaimer: I also was over configuring webpack) This is the perfect setup for small projects right now.
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
        It seems most command line applications still look and feel like Vim. Because I am a strong proponent for
        usability and pleasing visuals, Warp filled a niche in my work setup, I never really knew existed — and I am so
        happy about it. (It also comes with loads of options for customization!)
      </>
    ),
    links: [{text: 'Warp terminal', href: 'https://www.warp.dev/'}],
  },
  {
    title: 'Syntax Podcast',
    text: (
      <>
        For a long time, I had a really hard time keeping up with the current web development trends while working a 9
        to 5 as well. Then I noticed that I probably spend around 15h every week just walking. With the body motor
        functions occupied, my mind is a lot sharper, and so I gave web dev podcasts a try. I eventually landed on
        Syntax, because the two hosts have just such a great way of presenting complex topics digestible and always keep
        it light and fun — I highly recommend!
      </>
    ),
    links: [{text: 'Syntax.fm', href: 'https://syntax.fm/'}],
  },
  {
    title: 'Just functions',
    text: (
      <>
        A set of hyper lightweight, fully tested, fully typed JS utility functions that possibly should be part of ES
        already. You can install the full set or just the ones you need. Bye bye Lodash!
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
        I can't even say this enough, how happy I am to have moved away from my good old espresso maker to a
        portafilter. After a small research, I went for the BEEM ESPRESSO GRIND PROFESSION with integrated grinder and
        milk frother. It took me a couple of days to figure the perfect settings out, but now my favorite oat milk flat
        white is served here at home, and it makes my day.
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
        Working can be pretty hard when there is a lot of ambient noise distracting you, but I don't always want to play
        music on my headphones to exclude the noise. Asoftmurmur is a simple page that let's you mix ambient sounds like
        rain or waves together for that soothing focus zone soundtrack.
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
