/* eslint-disable no-undef */
import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation.json";

const greeting = {
  username: "Manish Tiwari", // rename it with your name
  title: "Hi there, ",
  prefix: " I'm",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/15gYg7n4eV3aeQc-fc3c_MPMe2hzPnqxn/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true, // Set false to hide this section, defaults to true
};

const socialMediaLinks = {
  github: "https://github.com/manishtmtmt",
  linkedin: "https://www.linkedin.com/in/wdmanisht/",
  gmail: "manisht.mt.mt@gmail.com",
  youtube: "https://www.youtube.com/@webdevyt",
  twitter: "twitter.com/manisht_mt",
  instagram: "https://www.instagram.com/manishtmtmt/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true, // Set true to display this section, defaults to false
};

const illustration = {
  animated: true, // Set to false to use static SVG
};

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "mongo-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

const projects = {
  title: "Projects",
  subtitle: "SOME OF MY PROJECTS THAT I WORKED UPON",
  projects: [
    {
      image:
        "https://user-images.githubusercontent.com/46663132/262534431-9a05224e-3d3d-4672-8c76-01bdf5915769.png",
      projectName: "Genius",
      projectDesc:
        "Genius is an AI-based application that offers various functionalities, including AI chat, image generation, video generation, music generation, and code generation.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://genius-two.vercel.app/",
        },
        {
          name: "Github",
          url: "https://github.com/manishtmtmt/ai-saas",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image:
        "https://user-images.githubusercontent.com/46663132/202083172-3ed644aa-ebdf-428f-9dd4-8c865fe640e6.png",
      projectName: "Chat-Wave",
      projectDesc:
        "Chat App is a real-time chat application where you can do group chatting with people.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://chat-app-15798.web.app/",
        },
        {
          name: "Github",
          url: "https://github.com/manishtmtmt/chat-app",
        },
      ],
    },
    {
      image:
        "https://user-images.githubusercontent.com/46663132/262546451-153f404d-c23c-49c3-9636-0c66710f4b92.jpeg",
      projectName: "Alan AI News App",
      projectDesc:
        "The Alan AI News App is a platform that leverages AI technology to provide users with quick access to news from various categories.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://alanainewsappmt.netlify.app/",
        },
        {
          name: "Github",
          url: "https://github.com/manishtmtmt/alan_ai_news_app",
        },
      ],
    },
    {
      image:
        "https://user-images.githubusercontent.com/46663132/221346560-809836ed-a83f-4e5e-9dc7-06261853981f.png",
      projectName: "FS Blog App",
      projectDesc:
        "Welcome to my blog app project, developed using React, React Native, and Node.js! This project provides an intuitive and customizable platform for users to create and manage their own blog posts.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://my-fs-blog-admin.vercel.app/",
        },
        {
          name: "Github",
          url: "https://github.com/manishtmtmt/fs-blog-app",
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+92-0000000000",
  email_address: "manisht.mt.mt@gmail.com",
};

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000, // Set animation duration as per your animation
};

export {
  greeting,
  socialMediaLinks,
  illustration,
  skillsSection,
  projects,
  contactInfo,
  splashScreen,
};
