interface Entry {
  from: string;
  to: string;
  title: string;
}
interface Experiences {
  [id: string]: Entry & {
    header?: Array<string>;
    list?: Array<string>;
    footer?: Array<string>;
    link?: string;
  };
}
interface Education {
  [id: string]: Entry & {
    footer: string;
  };
}

export const experiences: Experiences = {
  back: {
    from: 'January 2020',
    to: 'March 2022',
    title: 'Frontend engineer at Back Technologies',
    header: [
      'After working exclusively at agencies up until 2020 I stepped first into product development at Back Technologies. The jung startup was working on a web tool to funnel internal requests for the people ops teams, automate employee journies and knowledge douments.',
      'Users would interact with this tool via their usual communication channels like Slack, team or email. The experts would process incoming requests on a web application.',
      'The product team usually consisted of three frontend and the same amount of backend engineers, a designer and a product owner. As a member of the frontend team my daily tasks included:',
    ],
    list: [
      'Translating features from Figma designs into the frontend using React, TypeScript, Emotion CSS and CSX.',
      'Connecting the frontend functionality to the GRPC api using GraphQL Apollo and Protobuf.',
      'Developing reuseable components or abstracting them from within the existing code base and streamlining them with the ui design guide lines.',
      'Setup and maintainance of the storybook documentation.',
      'Writing unit and integration tests with React testing library and Jest as well as end to end tests using Cypress.',
      'Hiring tasks such as reviewing coding challenges and giving feedback to potential candidates or doing technical interviews.',
      'Improvements to the frontend architecture in favor of a better developer experience or performance.',
    ],
    footer: [
      'Coming from an agency background I was really grateful to get into the nitty gritty details of a product. I began to enjoy deaing with tech depth, software architecture decisions or performance improvements, because these were the tasks that made me grow the most.',
      'Back gave me the opportunity to work on a state of the art setup and I reallyenjoyed the close cooperation in the team. As we all knew the product very well, engineers were included early in the process of developing new features were my design background was valued many times.',
    ],
    link: 'https://backhq.com',
  },
  neugelb: {
    from: 'May 2018',
    to: 'December 2019',
    title: 'Frontend Developer at Neugelb Studios (Commerzbank)',
    header: [
      'Neugelb is a midsized design studio and as such a subsidiary of the Commerzbank, which means that many but not all of their projects are commissioned by the bank itself.',
      'During 1.5year tenure I worked on various projects with different technical setups depending on the project specific requirements. The team setup was usually cross-functional and included the ui and ux designer, web developer, tester, project management and sometimes someone from the content team.',
      'I really enjoyed working this closely with members of other teams, having a high impact at an early stage and getting the opportunity to work on many different projects.',
    ],
    list: [
      'Setting up and implementing web applications with ReactJS, Gatsby, TypeScript & Flow and data storages in Redux or GraphQL',
      'Developing a component library for the Commerzbank web department using ReactJS,  React-Redux, Redux-Form and Styled Components',
      'Translating complex designs in code and taking a key position in structuring and organising the interdisciplinary communication with the design team',
      'Building modular and performant frotend components and build state of the art animations with Lottie and Anime.js',
      'Building data models and managinng content delivery over the headless CMS Contentful',
      'Creating small NodeJS backends with REST APIs',
      'Solving basic dev ops tasks for a continous integration on Microsoft Azure and Jenkins',
    ],
    link: 'https://neugelb.com',
  },
  autentek_2: {
    from: 'March 2016',
    to: 'May 2018',
    title: 'Frontend Developer and UI/UX Designer at autentek',
    header: [
      'After I finished my apprenticeship, I worked at Autentek for two more years. As a full time member of team my focus shiftet towards development tasks like:',
    ],
    list: [
      'Developing mobile friendly, cross browser web applications and hybrid web apps using Angular JS 2/4, Ionic 3, TypeScript, Flexbox, Twitter Bootstrap and jQuery',
      'Creating unique conceptual designs for a wide variety of customers such as Zalando, Volkswagen Deutschland, EFOY by SFC Energy, Realisto, Goethe University Frankfurt or Chal-Tec',
      'The interdisciplinary role also involved communication with clients, sketching and wireframing of concepts and new ideas, detailed designing of graphics and icons for user interfaces and finally the involvement in the project management / agile process',
    ],
    footer: [
      'During the four years at Autentek I appreaciated the opportunity to work on many different projects and technologies the most. Being involved in the planning and design process of new prdocuts shaped the way I am receptive to ui/ux in my work today.',
    ],
    link: 'https://autentek.de',
  },
  autentek_1: {
    from: '2014',
    to: 'March 2016',
    title: 'Apprentice for media design at autentek',
    header: [
      'At the time Autentek was a small agency offering planing, design and developent of web and mobile applictions. They had clients from a wide range of industries and the projects were often very different.',
      "Due to the agncy's size the entire team used to work on one or two projects at a time together in a cross-functional setup consisting of web and mobile developer, tester and project management. Being a apprentice for media design I therefore was also responsible for the ui/ux design at that time.",
    ],
    footer: [
      'During my two year apprenticeship at Autentek I improved my existing skills in building static web sites using HTML and CSS, with focus on responsiveness and browser compatibility. Sub- sequently I started basic JavasScript programming using jQuery to create multi-page applications and PhoneGab apps.',
      'When my company switched to using the newer cordova hybrid technology, ionic, I got introduced to single-page app technology using AngularJS. So that throughout my apprenticeship, I was included in conceptualizing, designing and developing multiple apps of that kind and in March 2016 I achieved my degree one year ahead of class with a final grade of 1.2.',
    ],
    link: 'https://autentek.de',
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
