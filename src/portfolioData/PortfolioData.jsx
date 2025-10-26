import {
    FaCss3,
    FaFacebook,
    FaGithub,
    FaGoogle,
    FaHtml5,
    FaJs,
    FaLinkedin,
    FaNodeJs,
    FaPython,
    FaReact,
} from "react-icons/fa";
import { PiFileCSharpBold } from "react-icons/pi";
import { SiDocker, SiGit, SiGithubactions, SiMongodb, SiMysql } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";

//Data home page
const socialNetwork = {
    githupLink: "https://github.com/minhChuongTM",
    iconGithub: <FaGithub />,
    linkEdinLink: "www.linkedin.com/in/minh-chuong-undefined-10a025248",
    iconLinkedIn: <FaLinkedin />,
    facebookLink: "https://www.facebook.com/chuongminh.669155/",
    iconFacebook: <FaFacebook />,
    iconGooggle: <FaGoogle />,
};
const iconFullStackDev = {
    title: "Full Stack Development",
    iconHTML: <FaHtml5 />,
    iconCss: <FaCss3 />,
    iconJs: <FaJs />,
    iconReact: <FaReact />,
    iconNodeJs: <FaNodeJs />,
    iconCsharp: <PiFileCSharpBold />,
    ionPython: <FaPython />,
    iconMySQL: <SiMysql />,
    iconMongoDB: <SiMongodb />,
    iconGit: <SiGit />,
    iconDocker: <SiDocker />,
    iconSQLServer: <DiPostgresql />,
    iconGitAcction: <SiGithubactions />,
};
const greeting = {
    title: "Hello 👋.",
    title2: "Minh Chuong",
    logo_name: "dev.Minh_Chuong()",
    full_name: "Trinh Minh Chuong",
    subTitle: "Backend Developer, Open Source Enthusiast 🔥. Always learning.",
    email: "minhchuongit76@gmail.com",
};
const fullStackDev = {
    data: [
        {
            title: "Full Stack Development",
            fileName: "FullStackImg",
            skills: [
                "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
                "⚡ Building responsive website front end using ReactJS",
                "⚡ Developing mobile applications using Flutter and Android",
                "⚡ Creating application backend in Node, Express & Flask",
                "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean",
            ],
        },
        {
            title: "Cloud Infra-Architecture",
            fileName: "CloudInfraImg",
            skills: [
                "⚡ Experience working on multiple cloud platforms",
                "⚡ Experience hosting and managing websites",
                "⚡ Experience with Continuous Integration",
            ],
        },
    ],
};

// education page
const educationPage = {
    title1: "Education",
    title2: "Basic Qualification and Certifications",
    descriptions:
        "I actively participate in hackathons and other tech-related activities. Below are some of my major certifications.",
};
const degreesReceived = {
    title: "Degrees Received",
    data: [
        {
            title1: "Shantilal Shah Engineering College",
            title2: "Bachelor in Information Technology",
            year: "2025 - 2026",
            descriptions: [
                "⚡ I have studied core subjects like Machine Learning, Computer Vision, Advanced Web Development.",
                "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course.",
                "⚡ I participated in many hackathons and won more than 5 hackathons.",
            ],
        },
        {
            title1: "Shantilal Shah Engineering College",
            title2: "Bachelor in Information Technology",
            year: "2026 - 2027",
            descriptions: [
                "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
                "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
                "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
                "⚡ I have secured 9.82 CGPA.",
            ],
        },
    ],
};
//expereine page
const experience = {
    title: "Experience",
    subTitle: "Work, Internship and Volunteership",
    descriptions:
        "As a Node.js Backend Developer, I have worked with real projects for over two years. I've mostly done projects on my own. I love organizing workshops to share my knowledge with others.",
    header_image_path: "experience.svg",
    section: [
        {
            title: "Work Experience",
            experiences: [
                {
                    title: "Software Engineer",
                    company: "Crest Infosystems Pvt. Ltd.",
                    company_url: "https://www.crestinfosystems.com/",
                    logo_path: "crest.png",
                    duration: "Jan 2024 - Present",
                    location: "Surat, Gujarat",
                    description: `Worked on enterprise-level software solutions including employee
                        activity tracking system, point of sale system and support ticket
                        systems, utilizing full-stack technologies and custom integrations. Improved system efficiency and user experience across
                        multiple projects by developing and maintaining full-stack web apps
                        with modern technologies like Electron.js, React.js, Node.js, and
                        Sequelize. Designed and implemented custom solutions for tracking employee
                        activity and database optimizations, resulting in improvement in
                        performance.`,
                    color: "#0071C5",
                },
            ],
        },
    ],
};

//project page
const projectsHeader = {
    title: "Projects",
    description:
        "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, Python Scripts, and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
};
const projects = {
    data: [
        {
            id: "0",
            name: "Keep Calm and Carry On",
            url: "https://github.com/harikanani/Keep-Calm-and-Carry-On.github.io",
            description:
                "This platform enables users to practice Augmented Reality meditation, play stress burster games, track task completion and engage in motivational exercises to cope with stress and anxiety at work.  ",
            languages: [
                {
                    name: "HTML5",
                    iconifyClass: "logos-html-5",
                },
                {
                    name: "CSS3",
                    iconifyClass: "logos-css-3",
                },
                {
                    name: "NodeJs",
                    iconifyClass: "logos-nodejs",
                },
                {
                    name: "Augmented Reality",
                    iconifyClass: "bi:badge-ar",
                },
            ],
            links: [
                {
                    name: "Github",
                    url: "https://github.com/harikanani/Keep-Calm-and-Carry-On.github.io",
                    iconifyClass: "ri:github-fill",
                },
                {
                    name: "Devpost",
                    url: "https://devpost.com/software/keep-calm-and-carry-on",
                    iconifyClass: "fluent:window-dev-edit-20-filled",
                },
                {
                    name: "Live Demo",
                    url: "https://akshitagupta15june.github.io/Keep-Calm-and-Carry-On.github.io/",
                    iconifyClass: "mdi:web",
                },
            ],
        },
        {
            id: "1",
            name: "YOG4LIFE SOCIAL APP",
            url: "https://github.com/kevalvavaliya/Yog4Life",
            description:
                "An app for helping people their healthy life. Yog4Life Has a feed feature which is help to get information from the folks, Yog4Life has an anonymous chat room to get connected with the world.",
            languages: [
                {
                    name: "Flutter",
                    iconifyClass: "logos-flutter",
                },
                {
                    name: "NodeJs",
                    iconifyClass: "logos-nodejs",
                },
            ],
            links: [
                {
                    name: "Github",
                    url: "https://github.com/kevalvavaliya/Yog4Life",
                    iconifyClass: "ri:github-fill",
                },
                {
                    name: "Devfolio",
                    url: "https://devfolio.co/projects/yoglife-b20d",
                    iconifyClass: "fluent:window-dev-edit-20-filled",
                },
            ],
        },
        {
            id: "2",
            name: "Adoptisity",
            url: "https://github.com/kevalvavaliya/Adoptisity",
            description:
                "Our mission is to spread awareness about the benefits of adoption and to support LGBT families so that everyone has the chance to have a loving home environment.",
            languages: [
                {
                    name: "HTML5",
                    iconifyClass: "logos-html-5",
                },
                {
                    name: "CSS3",
                    iconifyClass: "logos-css-3",
                },
                {
                    name: "JavaScript",
                    iconifyClass: "logos-javascript",
                },
                {
                    name: "Wix",
                    iconifyClass: "bxl:wix",
                },
            ],
            links: [
                {
                    name: "Github",
                    url: "https://github.com/harikanani/Adoptisity",
                    iconifyClass: "ri:github-fill",
                },
                {
                    name: "Devpost",
                    url: "https://devpost.com/software/adoptisity",
                    iconifyClass: "fluent:window-dev-edit-20-filled",
                },
                {
                    name: "Live Demo",
                    url: "https://rajmahadevwala1.wixsite.com/adoptisity",
                    iconifyClass: "mdi:web",
                },
            ],
        },
        {
            id: "3",
            name: "FinSplit",
            url: "https://github.com/rajmahadev8/Fin-Split",
            description:
                "Split your bills with your friends without any hassle. Manage Group Expenses, Track your expenses, and much more.",
            languages: [
                {
                    name: "ReactJS",
                    iconifyClass: "logos-react",
                },
                {
                    name: "NodeJs",
                    iconifyClass: "logos-nodejs",
                },
            ],
            links: [
                {
                    name: "Github",
                    url: "https://github.com/rajmahadev8/Fin-Split",
                    iconifyClass: "ri:github-fill",
                },
                {
                    name: "Devpost",
                    url: "https://devpost.com/software/finsplit",
                    iconifyClass: "fluent:window-dev-edit-20-filled",
                },
            ],
        },
        {
            id: "4",
            name: "Emosic",
            url: "https://github.com/kevalvavaliya/Emosic",
            description:
                "An app that plays music according to your mood. Created a playlist management UI and used SpotifyAPI to control player client based on mood detection using ml model.",
            languages: [
                {
                    name: "HTML5",
                    iconifyClass: "logos-html-5",
                },
                {
                    name: "CSS3",
                    iconifyClass: "logos-css-3",
                },
                {
                    name: "Python",
                    iconifyClass: "logos-python",
                },
            ],
            links: [
                {
                    name: "Github",
                    url: "https://github.com/kevalvavaliya/Emosic",
                    iconifyClass: "ri:github-fill",
                },
                {
                    name: "Devpost",
                    url: "https://devpost.com/software/emosic",
                    iconifyClass: "fluent:window-dev-edit-20-filled",
                },
            ],
        },
        {
            id: "5",
            name: "Fileblok",
            url: "https://github.com/harikanani/Fileblok",
            description:
                "Keep your projects moving with seamless transfer experice. FileBlok is a file transfer app that allows you to transfer files from one device to another without any hassle. We built this app using Flutter, Node.js and StoryBlok.",
            languages: [
                {
                    name: "Flutter",
                    iconifyClass: "logos-flutter",
                },
                {
                    name: "NodeJs",
                    iconifyClass: "logos-nodejs",
                },
                {
                    name: "Storyblok",
                    iconifyClass: "logos-storyblok-icon",
                },
            ],
            links: [
                {
                    name: "Github",
                    url: "https://github.com/harikanani/Fileblok",
                    iconifyClass: "ri:github-fill",
                },
                {
                    name: "Devpost",
                    url: "https://devpost.com/software/fileblok",
                    iconifyClass: "fluent:window-dev-edit-20-filled",
                },
            ],
        },
        {
            id: "6",
            name: "BAUDDIK-GEEKS PORTFOLIO",
            url: "https://github.com/Bauddhik-Geeks/Bauddhik-Geeks.github.io",
            description: "Awesome Community Portfolio website for Bauddhik-Geeks community",
            languages: [
                {
                    name: "HTML5",
                    iconifyClass: "vscode-icons:file-type-html",
                },
                {
                    name: "CSS3",
                    iconifyClass: "vscode-icons:file-type-css",
                },
                {
                    name: "JavaScript",
                    iconifyClass: "logos-javascript",
                },
            ],
            links: [
                {
                    name: "Github",
                    url: "https://github.com/Bauddhik-Geeks/Bauddhik-Geeks.github.io",
                    iconifyClass: "ri:github-fill",
                },
                {
                    name: "Live Demo",
                    url: "https://bauddhikgeeks.co/",
                    iconifyClass: "mdi:web",
                },
            ],
        },
        {
            id: "7",
            name: "Votechain",
            url: "https://github.com/abhigoyani/votechain",
            description: "Awesome Community Portfolio website for Bauddhik-Geeks community",
            languages: [
                {
                    name: "Flask",
                    iconifyClass: "logos-flask",
                },
                {
                    name: "Python",
                    iconifyClass: "logos-python",
                },
                {
                    name: "HTML5",
                    iconifyClass: "logos-html-5",
                },
                {
                    name: "CSS3",
                    iconifyClass: "logos-css-3",
                },
                {
                    name: "MongoDB",
                    iconifyClass: "logos-mongodb-icon",
                },
            ],
            links: [
                {
                    name: "Github",
                    url: "https://github.com/abhigoyani/votechain",
                    iconifyClass: "ri:github-fill",
                },
            ],
        },
        {
            id: "8",
            name: "Swag Store",
            url: "https://github.com/harikanani/e-commerce-frontend",
            description:
                "An E-commerce website built using MERN[Mongo, Express, React, Node] stack and we have also added stripe payment gateway integration [in test mode].",
            languages: [
                {
                    name: "ReactJS",
                    iconifyClass: "logos-react",
                },
                {
                    name: "NodeJS",
                    iconifyClass: "logos-nodejs",
                },
                {
                    name: "MedusaJS",
                    iconifyClass: "logos-medusa-icon",
                },
            ],
            links: [
                {
                    name: "Github",
                    url: "https://github.com/harikanani/e-commerce-frontend",
                    iconifyClass: "ri:github-fill",
                },
            ],
        },
        {
            id: "9",
            name: "node-blockchain",
            url: "https://github.com/harikanani/node-blockchain",
            description:
                "A simple blockchain and cryptocurrency wallet implemented in Node.js and TypeScript (for learning purposes).",
            languages: [
                {
                    name: "NodeJS",
                    iconifyClass: "logos-nodejs",
                },
                {
                    name: "TypeScript",
                    iconifyClass: "skill-icons:typescript",
                },
            ],
            links: [
                {
                    name: "Github",
                    url: "https://github.com/harikanani/node-blockchain",
                    iconifyClass: "ri:github-fill",
                },
            ],
        },
        {
            id: "10",
            name: "Know Me Well",
            url: "https://github.com/harikanani/personal-portfolio",
            description: "A simple command line interface based quiz app to know more about me :).",
            languages: [
                {
                    name: "JavaScript",
                    iconifyClass: "logos-javascript",
                },
                {
                    name: "NodeJS",
                    iconifyClass: "logos-nodejs",
                },
                {
                    name: "Repl.it",
                    iconifyClass: "logos-replit-icon",
                },
            ],
            links: [
                {
                    name: "Github",
                    url: "https://github.com/harikanani/personal-portfolio",
                    iconifyClass: "ri:github-fill",
                },
            ],
        },
        {
            id: "11",
            name: "Bloggify",
            url: "https://github.com/harikanani/Bloggify",
            description: "A Simple REST API for Blog Application.",
            languages: [
                {
                    name: "NodeJS",
                    iconifyClass: "logos-nodejs",
                },
            ],
            links: [
                {
                    name: "Github",
                    url: "https://github.com/harikanani/Bloggify",
                    iconifyClass: "ri:github-fill",
                },
            ],
        },
        {
            id: "12",
            name: "Stargazzers",
            url: "https://github.com/harikanani/stargazers",
            description: "An Unofficial API for GitHub Repo Stars Count",
            languages: [
                {
                    name: "NodeJs",
                    iconifyClass: "logos-nodejs",
                },
            ],
            links: [
                {
                    name: "Github",
                    url: "https://github.com/harikanani/stargazers",
                    iconifyClass: "ri:github-fill",
                },
            ],
        },
        {
            id: "13",
            name: "GitHub Theme Portfolio",
            url: "https://github.com/harikanani/harikanani.github.io",
            description:
                "A Personal Portfolio Website that showcases my work and experience. which is hosted on Github Pages.",
            languages: [
                {
                    name: "HTML5",
                    iconifyClass: "vscode-icons:file-type-html",
                },
                {
                    name: "CSS3",
                    iconifyClass: "vscode-icons:file-type-css",
                },
                {
                    name: "JavaScript",
                    iconifyClass: "logos-javascript",
                },
                {
                    name: "SCSS",
                    iconifyClass: "vscode-icons:file-type-scss2",
                },
            ],
            links: [
                {
                    name: "Github",
                    url: "https://github.com/harikanani/harikanani.github.io",
                    iconifyClass: "ri:github-fill",
                },
                {
                    name: "Live Demo",
                    url: "https://harikanani.github.io/",
                    iconifyClass: "mdi:web",
                },
            ],
        },
        {
            id: "10",
            name: "COVID-19 Tracker",
            url: "https://github.com/harikanani/Covid19TrackerReact",
            description: "Simple Covid-19 Tracker made using React and deployed to Vercel.",
            languages: [
                {
                    name: "JavaScript",
                    iconifyClass: "logos-javascript",
                },
                {
                    name: "ReactJS",
                    iconifyClass: "logos-react",
                },
                {
                    name: "HTML5",
                    iconifyClass: "logos-html-5",
                },
                {
                    name: "CSS3",
                    iconifyClass: "logos-css-3",
                },
            ],
            links: [
                {
                    name: "Github",
                    url: "https://github.com/harikanani/Covid19TrackerReact",
                    iconifyClass: "ri:github-fill",
                },
            ],
        },
    ],
};

// Contact Page
const contactPageData = {
    contactSection: {
        title: "Contact Me",
        profile_image_path: "hari-crop.png",
        description:
            "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
    },
    blogSection: {
        title: "Blogs",
        subtitle:
            "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
        link: "https://twitter.com/Harikrushn9",
        avatar_image_path: "blogs_image.svg",
    },
};
export {
    socialNetwork,
    iconFullStackDev,
    greeting,
    fullStackDev,
    educationPage,
    degreesReceived,
    experience,
    projectsHeader,
    projects,
    contactPageData,
};
