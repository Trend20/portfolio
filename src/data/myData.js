import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { v4 as uuidv4 } from "uuid";
import bruImg from "../assets/images/bru.png";
import zedImg from "../assets/images/zed.png";

export const navData = [
  { title: "About", id: 1, link: "about" },
  { title: "Experience", id: 2, link: "experience" },
  { title: "Work", id: 3, link: "work" },
  { title: "Contact", id: 4, link: "contact" },
];

// social links
export const socialLinkData = [
  {
    name: "Github",
    socialLink: "https://github.com/Trend20",
    id: uuidv4(),
    icon: <FiGithub />,
  },
  {
    name: "LinkedIn",
    socialLink: "https://www.linkedin.com/in/enock-omondi/",
    id: uuidv4(),
    icon: <FiLinkedin />,
  },
  {
    name: "Twitter",
    socialLink: "https://twitter.com/dev_enock",
    id: uuidv4(),
    icon: <FiTwitter />,
  },
];

// work section

export const workData = [
  {
    img: bruImg,
    description:
      "Brú Finance Is Building A DeFi Lending Platform To Create Bankless Finance Options For Owners Of Real-World Assets Across The Globe.",
    title: "BruFinance",
    projectLink: "https://bru.finance/",
  },
  {
    img: bruImg,
    description:
      "Brú Finance Is Building A DeFi Lending Platform To Create Bankless Finance Options For Owners Of Real-World Assets Across The Globe.",
    title: "BruFinance",
    projectLink: "https://bru.finance/",
  },
  {
    img: bruImg,
    description:
      "Brú Finance Is Building A DeFi Lending Platform To Create Bankless Finance Options For Owners Of Real-World Assets Across The Globe.",
    title: "BruFinance",
    projectLink: "https://bru.finance/",
  },
  {
    img: bruImg,
    description:
      "Brú Finance Is Building A DeFi Lending Platform To Create Bankless Finance Options For Owners Of Real-World Assets Across The Globe.",
    title: "BruFinance",
    projectLink: "https://bru.finance/",
  },
];
