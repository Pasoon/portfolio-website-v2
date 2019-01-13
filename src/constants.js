import welbiImage from './images/welbi.png';
import welbiLogo from './images/welbilogo.jpg';
import nokiaImage from './images/nokia.png';
import nokiaLogo from './images/nokialogo.png';
import signiantImage from './images/signiant.png'
import signiantLogo from './images/signiantlogo.png';
import telferImage from './images/telfer.png';
import telferLogo from './images/telferlogo.png';


import munchiesImage from './images/munchies.png';
import munchiesLogo from './images/munchieslogo.png';
import munchiesPics from './images/munchiespics.png';
import gradedImage from './images/graded.png';
import gradedLogo from './images/gradedlogo.png';
import gradedPics from './images/gradedpics.png';

// ------------ INTERNSHIPS -------------
export const WELBI = {
    title: 'Welbi',
    role: 'Full Stack Developer',
    date: 'Apr 2018 - Aug 2018',
    logo: welbiLogo,
    image: welbiImage,
    description: 'As a full stack developer part of a team of five at Welbi I was given the lead on huge features for both mobile and web. With very limited help from peers it was my duty to use all resources at my disposal to complete these tasks. The start-up culture in general requires you to work extremely hard, think on your feet and continually research solutions to all your problems. I had the opportunity to work with React.js, Redux and Router.',
    color: '',
    tasks: [
        {
            title: 'Web Dev',
            emoji: 'desktop_computer'
        },
        {
            title: 'Mobile Dev',
            emoji: 'iphone'
        },
        {
            title: 'Designing',
            emoji: 'man_artist'
        },
        {
            title: 'Concepting',
            emoji: 'pencil2'
        },
        {
            title: 'Prototyping',
            emoji: 'recycle'
        },
        {
            title: 'Test-Driven Dev',
            emoji: 'hammer_and_wrench'
        },
    ]
}

export const NOKIA = {
    title: 'Nokia',
    role: 'Software Designer',
    date: 'Sep 2017 - Dec 2017',
    logo: nokiaLogo,
    image: nokiaImage,
    description: 'As a software designer with Nokia, I had the pleasure to take part in multiple roles. Our Teams main responsibility was feature implementation for ESM (Subscriber Management) which involved working with the SAM client. The SAM client is Java GUI based application designed to help clients manage their nodes (routers etc) with ease and accessibility. The code behind the SAM client involved two main languages. Java and XML. ',
    color: '#12438B',
    tasks: [
        {
            title: 'Web Dev',
            emoji: 'desktop_computer'
        },
        {
            title: 'Designing',
            emoji: 'man_artist'
        },
        {
            title: 'Requirement Gathering',
            emoji: 'ear'
        },
        {
            title: 'Testing-Driven Dev',
            emoji: 'hammer_and_wrench'
        },

    ]
}

export const SIGNIANT = {
    title: 'Signiant',
    role: 'Software Developer',
    date: 'Jan 2017 - Apr 2017',
    logo: signiantLogo,
    image: signiantImage,
    description: 'At Signiant I was apart of Team Voyager which consisted of around 5-6 members.  My role consisted of various tasks but primarily it was work on the Signiant App (C++), Signiant’s Media Shuttle Cloud (Java), and The Transfer Api (Javascript). I also had the pleasure to design a web application that facilitated testing for all developers at the company. As well as development experience, I had the opportunity to get fully trained in agile work flow, attend daily scrums, and participate in bi-weekly iteration demos. ',
    color: '#2194D0',
    tasks: [
        {
            title: 'Web Dev',
            emoji: 'desktop_computer'
        },
        {
            title: 'Concepting',
            emoji: 'man_artist'
        },
        {
            title: 'Testing-Driven Dev',
            emoji: 'hammer_and_wrench'
        },

    ]
}

export const TELFER = {
    title: 'Telfer',
    role: 'Junior Programmer',
    date: 'Jun 2016 - Sep 2016',
    logo: telferLogo,
    image: telferImage,
    description: 'My role was to work on the CV System. This CV system is used by Professors at the Telfer School of Management to create their own resumes and present their credentials to those who are interested in viewing them, as well as assisting in the school’s accreditation process. During my time here I designed the user documentation for this new CV system by using the old user guide as a reference. I also was able to help develop certain features using PHP and test this new system by the guidance of the Lead Programmer.',
    color: '#872032',
    tasks: [
        {
            title: 'Web Dev',
            emoji: 'desktop_computer'
        },
        {
            title: 'Documenting',
            emoji: 'pencil2'
        },
        {
            title: 'Requirement Gathering',
            emoji: 'ear'
        },
        {
            title: 'Testing',
            emoji: 'man_scientist'
        },

    ]
}

// ------------ PROJECTS -------------
export const MUNCHIES = {
    title: 'munchies',
    type: 'Web Application',
    stack: 'React.js / Flask',
    logo: munchiesLogo,
    image: munchiesImage,
    overviewImages: munchiesPics,
    githubLink: 'https://github.com/Pasoon/munchies-react',
    description: 'Munchies is a web application designed for my database design course which allows users to view the ratings and menus of restaurants. Because the application was to be designed in the scope of the course the database was populated with restaurants locally. The website was designed by focusing on finding what users want to eat fast and in a beautiful way. Once the user searches for a type of food or restaurant the website will bring them to a restaurant page that shows all the relevant information including the menu.',
    color: '#35E9A7',
    tools: ''
}

export const GRADED = {
    title: 'graded',
    type: 'Mobile Application',
    stack: 'Android',
    logo: gradedLogo,
    image: gradedImage,
    overviewImages: gradedPics,
    githubLink: 'https://github.com/Pasoon/graded-app',
    description: 'Graded is a android application designed to help students keep track of their grades throughout the semester. It was designed with the user experience in mind and because of this the app was kept very simple and user friendly. The application was the final project of my User Experience course and allowed my partner and I to do user research on fellow students, mock up designs and finally code the app in Android Studio. As university students the most important aspect of our lives often revolve around making sure our studies and grades are kept up. Often times because of the many different deliverables and items each course offers it becomes difficult to manage what needs to be done and gauge how one is really doing in each course.',
    color: '#33BDEB',
    tools: ''
}
