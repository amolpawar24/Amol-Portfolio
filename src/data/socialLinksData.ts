import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaXTwitter,
  FaDev,
  FaMedium,
  FaEnvelope,
  FaFileLines,
  FaGlobe,
} from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

//? ================= SOCIAL LINKS =================
// Single source of truth — used by both Connect.tsx and Footer.tsx
// `color` = brand color, used for the icon hover background

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/amolpawar24",
    icon: FaGithub,
    color: "#111111",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/amolpawar24", // update if this isn't correct
    icon: FaLinkedin,
    color: "#0A66C2",
  },
  {
    name: "X",
    url: "https://x.com/AmolPawar2404",
    icon: FaXTwitter,
    color: "#000000",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/amolpawar.24/",
    icon: FaInstagram,
    color: "#E1306C",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/people/Amol-Pawar/pfbid0qvP4QRR65irXCDVeZwYMJakAPcpimmx8k8J7bjd3Q4kCSith7ctZ8n5pwYCxHk48l/",
    icon: FaFacebook,
    color: "#1877F2",
  },
  {
    name: "DEV.to",
    url: "https://dev.to/amolpawar24",
    icon: FaDev,
    color: "#0A0A0A",
  },
  {
    name: "Medium",
    url: "https://medium.com/@amolpawar.me",
    icon: FaMedium,
    color: "#000000",
  },
  {
    name: "LeetCode",
    url: "#", // add your real LeetCode profile URL
    icon: SiLeetcode,
    color: "#FFA116",
  },
  {
    name: "Email",
    url: "mailto:amolpawar.me@gmail.com",
    icon: FaEnvelope,
    color: "#DC2626",
  },
  {
    name: "Resume",
    url: "#", // add your Google Drive resume link
    icon: FaFileLines,
    color: "#DC2626",
  },
  {
    name: "Portfolio",
    url: "https://amolpawar.netlify.app/", // note: your plan doc lists amolpawar24.vercel.app — pick the current live one
    icon: FaGlobe,
    color: "#DC2626",
  },
];