interface Entry {
  from: string;
  to: string;
  title: string;
}
interface Experiences {
  [id: string]: Entry & {
    list?: Array<string>;
    footer?: Array<string>;
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
    title: 'Frontend engineer at Back Technologies gmbh',
    list: ['Lirum larum'],
  },
  neugelb: {
    from: 'May 2018',
    to: 'December 2019',
    title: 'Frontend Developer at Neugelb Studios gmbh (Commerzbank)',
    list: [
      'Setting up and implementing web applications with ReactJS, Gatsby, TypeScript & Flow and data storages in Redux or GraphQL',
      'Developing a component library for the Commerzbank web department using ReactJS,  React-Redux, Redux-Form and Styled Components',
      'Translating complex designs in code and taking a key position in structuring and organising the interdisciplinary communication with the design team',
      'Building modular and performant frotend components and build state of the art animations with Lottie and Anime.js',
      'Building data models and managinng content delivery over the headless CMS Contentful',
      'Creating small NodeJS backends with REST APIs',
      'Solving basic dev ops tasks for a continous integration on Microsoft Azure and Jenkins',
    ],
  },
  autentek_2: {
    from: 'March 2016',
    to: 'May 2018',
    title: 'Frontend Developer and UI/UX Designer at autentek gmbh',
    list: [
      'Developing mobile friendly, cross browser web applications and hybrid web apps using Angular JS 2/4, Ionic 3, TypeScript, Flexbox, Twitter Bootstrap and jQuery',
      'Creating unique conceptual designs for a wide variety of customers such as Zalando, Volkswagen Deutschland, EFOY by SFC Energy, Realisto, Goethe University Frankfurt or Chal-Tec',
      'Creating web animations, which support the user experience using SVGs and jQuery or Google Web Designer for clients like Spotify, Deezer and Netflix',
      'The interdisciplinary role also involved communication with clients, sketching and wireframing of concepts and new ideas, detailed designing of graphics and icons for user interfaces and finally the involvement in the project management / agile process',
    ],
    footer: [
      'During this period, I also worked 10 months (Nov 2016 - July 2017) as an external frontend developer and UI/UX designer for the 21t real Estate GmbH. Throughout this time the team created a multi-mirco service Scala/Ruby backend with several Angular JS applications and later also React JS in the frontend. The application followed Google‘s Material Design standard and was therefore running the Angular Material framework.',
      'I also covered the scrum master role during for a some time, which included organizing the scrum meetings, taking care of the boards and moderating the team communication. ',
    ],
  },
  autentek_1: {
    from: '2014',
    to: 'March 2016',
    title: 'Apprentice for media design 2014 at autentek gmbh',
    footer: [
      'During my two year apprenticeship at Autentek I improved my existing skills in building static web sites using HTML and CSS, with focus on responsiveness and browser compatibility. Sub- sequently I started basic JavasScript programming using jQuery to create multi-page applica- tions and PhoneGab apps.',
      'When my company switched to using the newer cordova hybrid technology, ionic, I got introdu- ced to single-page app technology using AngularJS.',
      'Throughout my apprenticeship, I was included in conceptualizing, designing and developing multiple apps of that kind.',
      'In March 2016 I achieved my degree one year ahead of class with a final grade of 1.2',
    ],
  },
};

export const educations: Education = {
  ernst: {
    from: '2014',
    to: '2016',
    title: 'IHK Berlin & Ernst-\nlitfaß-schule',
    footer: 'Degree in Media Design:\n digital & print',
  },
  tu: {
    from: '2009',
    to: '2013',
    title: 'Technical University of Berlin',
    footer: 'Bachelors Degree in\n Landscape Architecture',
  },
  august: {
    from: '2006',
    to: '2009',
    title: 'August-Bebel-Schule Offenbach',
    footer: 'Highschool & Abitur,\n School for Design and Media Technology',
  },
  grimmels: {
    from: '2000',
    to: '2006',
    title: 'Grimmelshausen Gymnasium Gelnhausen',
    footer: 'Middle school',
  },
};
