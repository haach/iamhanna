interface Entry {
  from: string;
  to: string;
  title: string;
}
interface Experiences {
  [id: string]: Entry & {
    name: string;

    company?: Array<string>;
    team?: Array<string>;
    link: string;

    header?: Array<string>;

    list?: Array<string>;
    reflection?: Array<string>;
  };
}
interface Education {
  [id: string]: Entry & {
    footer: string;
  };
}

export const experiences: Experiences = {
  back: {
    name: 'Back',
    from: 'January 2020',
    to: 'March 2022',
    title: 'Frontend engineer at Back Technologies',
    company: [
      'As a young tech startup, Back worked on developing a web tool, which functions as a request funnel for people OPs teams and offers automation for employee journeys and the sending of relevant knowledge documents using a natural language processing Ai.',
      'Users interact with this tool via their usual communication channels like Slack, MS Teams or email. The experts would process incoming requests and reply to the employees on a web interface.',
    ],
    link: 'https://backhq.com',
    team: [
      'The product team setup was cross-functional and consisted of six engineers on frontend and backend side, a product designer and a product owner.',
    ],
    /*  header: [
      'After working exclusively at agencies up until 2020 I stepped first into product development at Back Technologies.',
    ], */
    list: [
      'Translating features from Figma designs into the frontend using React, TypeScript, Emotion CSS and CSX',
      'Connecting the frontend functionality to the GRPC API using Apollo GraphQL and Protobuf',
      'Developing reusable components or abstracting them from within the existing code base and streamlining them with the UI design guidelines',
      'Setup and maintenance of the storybook documentation',
      'Writing unit and integration tests with React testing library and Jest as well as end-to-end tests using Cypress',
      'Hiring tasks such as reviewing coding challenges and giving feedback to potential candidates or doing technical interviews',
      'Improvements to the frontend architecture and tooling in favor of a better developer experience or performance',
    ],
    reflection: [
      'Coming from an agency background, I was really grateful to get into the nitty-gritty details, that come with the work in product development. I began to enjoy dealing with tech depth, software architecture decisions or performance improvements, because those were the tasks, that made me grow the most.',
      'Back gave me the opportunity to work on a state of the art tech setup and I really enjoyed the close cooperation within the small team. As we all knew the product very well, engineers were included early in the process of developing new features, where my design background was valued many times.',
    ],
  },
  neugelb: {
    name: 'Neugelb',
    from: 'May 2018',
    to: 'December 2019',
    title: 'Frontend Developer at Neugelb Studios (Commerzbank)',
    company: [
      'Neugelb is a midsized design studio and as such a subsidiary of the Commerzbank, which means that many but not all of their projects are commissioned by the bank itself.',
    ],
    link: 'https://neugelb.com',
    team: [
      'The team setup was usually cross-functional and included the UI and UX designer, web developer, tester, project management and sometimes someone from the content team.',
    ],
    list: [
      'Setting up and implementing web applications with ReactJS, Gatsby, TypeScript & Flow and data storage in Redux or GraphQL',
      'Developing a component library for the Commerzbank web department using ReactJS, React-Redux, Redux-Form and Styled Components',
      'Translating complex designs in code and taking a key position in structuring and organizing the interdisciplinary communication with the design team',
      'Creating modular and performant frontend components and build state-of-the-art animations with Lottie and Anime.js',
      'Building data models and managing content delivery over the headless CMS Contentful',
      'Creating small NodeJS backends with REST APIs',
      'Solving basic DevOps tasks for a continuous integration on Microsoft Azure and Jenkins',
    ],
    reflection: [
      'I really enjoyed working this closely with members of other teams and having a high impact on a project at an early stage. During my 1.5 year tenure, I got the opportunity to work on various projects with different technological setups and very distinct design specifications. Due to this, I gained the ability to dissect a tricky requirement into small subtasks and solve them with a versatile set of libraries and technologies.',
    ],
  },
  autentek_2: {
    name: 'Autentek',
    from: 'March 2016',
    to: 'May 2018',
    title: 'Frontend Developer and UI/UX Designer at autentek',
    link: 'https://autentek.de',
    header: [
      'After finishing my apprenticeship at Autentek, I worked at this agency for two more years in a similar setup.',
    ],
    list: [
      'Developing mobile friendly, cross browser web applications and hybrid web apps using Angular JS 2/4, Ionic 3, TypeScript, Flexbox, Twitter Bootstrap and jQuery',
      'Creating unique conceptual designs for a wide variety of customers such as Zalando, Volkswagen Deutschland, EFOY by SFC Energy, Realisto, Goethe University Frankfurt or Chal-Tec',
      'The interdisciplinary role also involved communication with clients, sketching and wireframing of concepts and new ideas, detailed designing of graphics and icons for user interfaces and finally the involvement in the project management / agile process',
    ],
    reflection: [
      'After the total four years at Autentek I am most grateful for the experience of building applications to control hardware devices and the opportunity to work on such versatile technologies. It was a unique experience so early on in my professional development that, I would not have been able to get at many other agencies of that size.',
      'In addition to that, it was very helpful to be involved in the planning and design process of new products. This helped my understanding of the full project lifecycle and shaped the way I am receptive to UI and UX in my work today.',
    ],
  },
  autentek_1: {
    name: 'Autentek',
    from: '2014',
    to: 'March 2016',
    title: 'Apprentice for media design at autentek',
    company: [
      'At the time Autentek was a small agency offering planing, design and development of web and mobile applications. They had clients from a wide range of industries, and the projects were often very different from one another.',
      'In March 2016 I achieved my degree one-year ahead of class with a final grade of 1.2.',
    ],
    link: 'https://autentek.de',
    team: [
      "Due to the agency's size, the entire team used to work on one or two projects at a time together in a cross-functional setup consisting of web and mobile developer, tester, and project management. Being an apprentice for media design, I therefore was also responsible for the UI/UX design at that time.",
    ],
    list: [
      'Improving my existing skills in building static websites using HTML and CSS, with focus on responsiveness and browser compatibility',
      'Basic JavasScript programming using jQuery to create multi-page applications and manipulate the DOM',
      'Conceptualizing, designing and developing multiple hybrid mobile Apps using PhoneGab and Ionic (AngularJS)',
    ],
  },
};

export const educations: Education = {
  ernst: {
    from: '2014',
    to: '2016',
    title: 'IHK Berlin & Ernst-litfaß-schule',
    footer: 'Degree in Media Design: digital & print',
  },
  tu: {
    from: '2009',
    to: '2013',
    title: 'Technical University of Berlin',
    footer: 'Bachelors Degree in Landscape Architecture',
  },
  august: {
    from: '2006',
    to: '2009',
    title: 'August-Bebel-Schule Offenbach',
    footer: 'Highschool & Abitur, School for Design and Media Technology',
  },
  grimmels: {
    from: '2000',
    to: '2006',
    title: 'Grimmelshausen Gymnasium Gelnhausen',
    footer: 'Middle school',
  },
};
