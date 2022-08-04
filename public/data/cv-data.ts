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
    from: 'February 2020',
    to: 'March 2022',
    title: 'Frontend engineer at Back Technologies',
    company: [
      'As a young tech startup, Back focused on developing a web tool that functioned as a request funnel for people OPs teams. This web tool offered automation for employee journeys, and facilitated the delivery of relevant knowledge documents using a natural language processing AI.',
      'Users interacted with this tool via their usual communication channels (i.e. Slack, MS Teams, email). The experts would then process incoming requests, and reply to the employees on a web interface.',
    ],
    link: 'https://backhq.com',
    team: [
      'The product team setup was cross-functional, and consisted of a total of six frontend and backend engineers, a product designer, and a product owner.',
    ],
    list: [
      'Translating features from Figma designs into the frontend using React, TypeScript, Emotion CSS and CSX',
      'Connecting frontend functionality to the GRPC API using Apollo GraphQL and Protobuf',
      'Developing reusable components, or abstracting them from within the existing code base and streamlining them with the UI design guidelines',
      'Setup and maintenance of the storybook documentation',
      'Writing unit and integration tests with the React testing library and Jest, as well as end-to-end tests using Cypress',
      'Conducting hiring tasks, such as reviewing coding challenges and giving feedback to potential candidates, and doing technical interviews',
      'Improving frontend architecture and tooling to better developer experience and performance',
    ],
    reflection: [
      'Coming from an agency background, I was delighted to get a chance to get into all the nitty-gritty details that come with working in product development. I grew to enjoy working on tech depth, software architecture decisions, and performance improvements, as these were the tasks that most facilitated my professional growth.',
      'At Back I had the opportunity to work on a state-of-the-art tech setup, and the close cooperation within the small team was something I really valued. As all the engineers were very familiar with the product, we were included early in the development process of new features. As such, my design background was an added benefit to the company, and was often called upon.',
    ],
  },
  neugelb: {
    name: 'Neugelb',
    from: 'June 2018',
    to: 'December 2019',
    title: 'Frontend Developer at Neugelb Studios (Commerzbank)',
    company: [
      'Neugelb is a midsized design studio and a subsidiary of the Commerzbank. As such, many, but not all, of their projects are commissioned by the bank itself.',
    ],
    link: 'https://neugelb.com',
    team: [
      'The team setup was usually cross-functional, and included the UI and UX designer, web developer, tester, project management and sometimes a member of the content team.',
    ],
    list: [
      'Setting up and implementing web applications with ReactJS, Gatsby, TypeScript & Flow and data storage in Redux or GraphQL',
      'Developing a component library for the Commerzbank web department using ReactJS, React-Redux, Redux-Form and Styled Components',
      'Translating complex designs in code and playing a key role in structuring and organizing interdisciplinary communication with the design team',
      'Creating modular and performant frontend components and building state-of-the-art animations with Lottie and Anime.js',
      'Building data models and managing content delivery over the headless CMS Contentful',
      'Creating small NodeJS backends with REST APIs',
      'Solving basic DevOps tasks for a continuous integration on Microsoft Azure and Jenkins',
    ],
    reflection: [
      'I really enjoyed working so closely with members of other teams, as well as being able to greatly impact a project at an early stage. During my 1.5 year tenure, I worked on various projects with different technological setups, each with very distinct design specifications. This helped enhance my ability to dissect tricky requirements into small subtasks and solve them with a versatile set of libraries and technologies.',
    ],
  },
  autentek_2: {
    name: 'Autentek',
    from: 'April 2016',
    to: 'May 2018',
    title: 'Frontend Developer and UI/UX Designer at autentek',
    link: 'https://autentek.de',
    company: [
      'At the time, Autentek was a small agency offering the planning, design, and development of web and mobile applications. They had clients from a wide range of industries, and the projects were often very different from one another.',
    ],
    team: [
      "Due to the agency's size, the entire team used to work on one or two projects at a time together in a cross-functional setup consisting of web and mobile developer, tester, and project management. As a media designer, I was also responsible for the UI/UX design.",
    ],
    list: [
      'Developing mobile friendly, cross browser web applications and hybrid web apps using Angular JS 2/4, Ionic 3, TypeScript, Bootstrap and jQuery',
      'Creating unique conceptual designs for a wide variety of customers, such as Zalando, Volkswagen Deutschland, EFOY by SFC Energy, Realisto, Goethe University Frankfurt, Chal-Tec',
      'Engaging in interdisciplinary tasks, including communicating with clients, sketching and wireframing of concepts and new ideas, creating graphics and icons for user interfaces, and finally the involvement in the project management / agile process',
    ],
    reflection: [
      'After the total of four years at Autentek, I am very grateful for the experience of building applications to control hardware devices, and the opportunity to work on many versatile technologies. It was an unique experience to have, especially so early on in my professional development, and at an agency of its size.',
      'In addition, being involved in the planning and design process of new products fostered my understanding of the full project lifecycle, and shaped my receptivity to UI and UX in my work today.',
    ],
  },
  autentek_1: {
    name: 'Autentek',
    from: 'April 2014',
    to: 'March 2016',
    title: 'Apprentice for media design at autentek',
    link: 'https://autentek.de',
    header: ['In March 2016 I achieved my degree with a final grade of 1.2, and one year ahead of schedule.'],
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
