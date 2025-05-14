import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  threejs,
  mathwork,
  eduskill,
  nersh,
  nodeight,
  nova,
  perlas,
  typeit,
  movieweb,
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

export const services = [
  { title: "Java", icon: java },
  { title: "React.js", icon: reactjs },
  { title: "JavaScript", icon: javascript },
  { title: "HTML", icon: html },
  { title: "CSS", icon: css },
  { title: "Git", icon: git },
  { title: "Nodejs", icon: nodejs },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "Git", icon: git },
];

export const experiences = [
  {
    title: "Machine Operator",
    company_name: "Agro-King | Tema",
    icon: eduskill,
    iconBg: "#161329",
    date: "Apr 2023 - Sep 2023",
    points: [
      "Set up and ran machinery to produce exceptional products for industrial needs.",
      "Calibrated, tested, and adjusted machine settings or controls in preparation for production operations.",
      "Monitored machines during operation to detect sounds of malfunction or excessive vibration and adjusted machines to eliminate problems.",
      "Complied with company and OSHA safety rules and regulations.",
    ],
  },
  {
    title: "Codefest Competition",
    company_name: "Ho Technical University | Ho",
    icon: mathwork,
    iconBg: "#161329",
    date: "Jul 2023",
    points: [
      "Contributed to the documentation of the project",
      "Assisted in the front-end using React.js and back-end using Node.js and MySQL.",
    ],
  },
  {
    title: "Node Eight Foundation Intern",
    company_name: "Nodeeight Foundation | Ho",
    icon: edunet,
    iconBg: "#161329",
    date: "Feb 2025 - Apr 2025",
    points: [
      "Gained hands-on experience in frontend development and learned the importance of attention to detail – whether debugging minor syntax errors or implementing responsive designs.",
      "Developed responsive UIs from design mockups ensuring cross-device compatibility through rigorous testing.",
      "Contributed to open-source projects with co-interns to refine my skills.",
    ],
  },
];

export const projects = [
  {
    name: "GitNova",
    description:
      "A tool that simplifies Git commands through an interactive menu system, making version control more accessible.",
    tags: [
      { name: "shell", color: "blue-text-gradient" },
      { name: "Git", color: "green-text-gradient" },
    ],
    image: nova,
    source_code_link: "https://github.com/paren-thesis/GitNova",
  },
  {
    name: "Nersh",
    description:
      "A simple search space specifically designed for nerds, with a focus on technical content and developer resources.",
    tags: [
      { name: "Java", color: "blue-text-gradient"},
      { name: "HTML", color: "blue-text-gradient" },
      { name: "shell", color: "blue-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
    ],
    image: nersh,
    source_code_link: "https://github.com/paren-thesis/Nersh",
  },
  {
    name: "TypeIt",
    description:
      "A web-based typing guide designed to improve your typing skills through interactive challenges and real-time feedback.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "blue-text-gradient" },
      { name: "JavaScript", color: "blue-text-gradient" },
    ],
    image: typeit,
    source_code_link:
      "https://github.com/paren-thesis/TypeIt",
  },
  {
    name: "MovieWeb",
    description:
      "A movie streaming site hosted on GitHub Pages with a curated collection of films and an elegant browsing experience.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "blue-text-gradient" },
      { name: "JavaScript", color: "blue-text-gradient" },
    ],
    image: movieweb,
    source_code_link: "https://github.com/paren-thesis/ViewVault",
  },
  {
    name: "Perla's",
    description:
      "A simple static food ordering system with an intuitive interface and streamlined ordering process.",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
    ],
    image: perlas,
    source_code_link: "https://github.com/paren-thesis/Perla-s",
  },
  {
    name: "Node Eight Projects",
    description:
      "Mini projects I developed during my internship at Node Eight Foundation.",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
    ],

    image: nodeight,
    source_code_link: "https://github.com/paren-thesis/N8de-Projects",
  },
];
