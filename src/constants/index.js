import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  starbucks,
  tesla,
  weatherapp,
  jobit,
  tripguide,
  threejs,
  crypto,
  twitter,
  blogapp,
  bracket,
  rypl,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Tutor",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Rypl",
    icon: rypl,
    iconBg: "#383E56",
    date: "August 2021 - Current",
    points: [
      "Developing and maintaining web applications using React.js, Node.js, Springboot and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Freelance",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "September 2021 - Feb 2022",
    points: [
      "Developing iOS and Android applications using React Native and Springboot",
      "Handled all aspects of the project including sourcing technologies to speed up development and managing the project from start to finish",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "DCentralized Crypto",
    description:
      "A platform to view top crypto coins on the market.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "crypto-api",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: crypto,
    sourceCodeLink: "https://benjicoder02.github.io/Decentralized_crypto/",
  },
  {
    name: "Blog App",
    description:
      "A simple blog application that lets user add, update and delete entries.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: blogapp,
    sourceCodeLink: "https://bk-daily-journal-blog.herokuapp.com",
  },
  {
    name: "Twitter page",
    description:
      "A twitter page clone that lets you add a new post along with an image link which is stored to Firebase database",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: twitter,
    sourceCodeLink: "https://react-twitter-clone-944e5.web.app",
  },
  {
    name: "2024 NCAA Bracket Contest",
    description:
      "The most exciting project I worked on at Rypl.com. It was built for the 2024 NCAA March Madness basketball contest. Users could make their predictions for the whole tournament when the games were announced. Then as games proceeded the picks would update in realtime and show you whether the pick was correct or wrong. I also built a leaderboard which updated in realtime to show which users were leading and let users view their current position.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: 'Springboot',
        color: 'blue-text-gradient'
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: bracket,
    sourceCodeLink: "#",
  },
];

export { services, technologies, experiences, testimonials, projects };

