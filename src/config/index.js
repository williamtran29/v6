module.exports = {
  siteTitle: 'Chi | Software Engineer',
  siteDescription:
    'I am Chi - a Technical Architect who is very strong in software development with 9 years experience. If you want to get perfect quality result for your products, I will be a good fit for you.',
  siteKeywords:
    'Chi Tran, Chi, Tran, software engineer, front-end engineer, web developer, javascript, asia',
  siteUrl: 'https://reactioncommerce.app',
  siteLanguage: 'en_US',

  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',

  name: 'Chi Tran',
  location: 'Hue, Vietnam',
  email: 'chitran.whitecat@gmail.com',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/williamtran29/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/chitran29/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/chitranpuppy',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Experience',
      url: '#jobs',
    },
    {
      name: 'Work',
      url: '#projects',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  twitterHandle: '@chitranpuppy',
  googleAnalyticsID: 'UA-45666519-2',

  navHeight: 100,

  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
