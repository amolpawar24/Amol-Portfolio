import { ProjectType } from "@/types/projectTypes";

const projectsData: ProjectType[] = [
  // =========================================================
  // 01. PULSE
  // =========================================================

  {
    id: 1,
    image: "/assets/images/projects/Pulse-Messaging.png",
    title: "PULSE",
    description:
      "Real-time messaging platform with secure authentication, one-to-one conversations, online presence, real-time messaging, typing indicators, message delivery and seen status, responsive UI, and production-ready cloud deployment.",

    tech: [
      "fab fa-react", // React
      "fas fa-code", // TypeScript
      "fab fa-sass", // SCSS
      "fas fa-layer-group", // Redux Toolkit
      "fas fa-database", // MySQL
      "fas fa-server", // FastAPI
      "fas fa-bolt", // WebSocket
      "fas fa-shield-alt", // JWT Authentication
      "fas fa-cloud", // Render
      "fas fa-globe", // Netlify
      "fas fa-mobile-screen", // Responsive Design
    ],

    categories: [
      "React",
      "TypeScript",
      "SCSS",
      "Redux Toolkit",
      "FastAPI",
      "Python",
      "MySQL",
      "SQLAlchemy",
      "WebSocket",
      "JWT Auth",
      "Render",
      "Netlify",
      "Responsive Design",
      "Frontend",
      "Backend",
      "Full Stack",
      "Real-Time",
    ],

    liveDemo: "https://pulse-messaging.netlify.app/chat",
    code: "https://github.com/amolpawar24/pulse-frontend",
  },

  // =========================================================
  // 02. BPL OFFICIAL
  // =========================================================

  {
    id: 2,
    image: "/assets/images/projects/BPL-OFFICIAL.png",
    title: "BPL OFFICIAL - WEBAPP",
    description:
      "Official website for the Bhalawani Premier League featuring player registration, team showcases, tournament schedules, announcements, real-time updates, secure online registrations, and modern fan engagement experiences.",

    tech: [
      "fab fa-react", // Next.js
      "fas fa-code", // TypeScript
      "fab fa-sass", // SCSS
      "fas fa-layer-group", // Redux Toolkit
      "fas fa-file-alt", // React Hook Form
      "fas fa-check-circle", // Formik
      "fas fa-shield-alt", // Yup / Zod
      "fas fa-bolt", // Socket.io
      "fas fa-magic", // Framer Motion
      "fas fa-bell", // Sonner
      "fas fa-image", // Sharp
      "fas fa-credit-card", // Razorpay
      "fas fa-rocket", // Vercel Deployment
      "fas fa-mobile-screen", // Responsive Design
    ],

    categories: [
      "Next.js",
      "TypeScript",
      "SCSS",
      "Redux Toolkit",
      "React Hook Form",
      "Formik",
      "Yup",
      "Zod",
      "Socket.io",
      "Framer Motion",
      "Sonner",
      "Sharp",
      "Razorpay",
      "Vercel",
      "Responsive Design",
      "Frontend",
    ],

    liveDemo: "https://bpl-official.vercel.app/",
    code: "https://github.com/AMOL-DEV-24/bpl-frontend",
  },

  // =========================================================
  // 03. BPL HUB
  // =========================================================

  {
    id: 3,
    image: "/assets/images/projects/BPL-HUB.png",
    title: "BPL HUB - ADMIN PANEL",
    description:
      "Enterprise-grade cricket tournament management platform built for administrators to manage players, teams, registrations, auctions, schedules, dashboards, statistics, and complete tournament operations from a centralized admin panel.",

    tech: [
      "fab fa-react", // Next.js
      "fas fa-code", // TypeScript
      "fab fa-sass", // SCSS
      "fas fa-layer-group", // Redux Toolkit
      "fas fa-plug", // RTK Query
      "fas fa-network-wired", // Axios
      "fas fa-chart-line", // Recharts
      "fas fa-cookie", // JS Cookie
      "fas fa-shield-alt", // JWT Auth
      "fas fa-bolt", // Socket.io
      "fas fa-calendar-alt", // DayJS
      "fas fa-check-circle", // Formik + Yup
      "fas fa-cloud", // Cloudflare Deployment
    ],

    categories: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "TypeScript",
      "SCSS",
      "Redux Toolkit",
      "RTK Query",
      "Axios",
      "Recharts",
      "JavaScript",
      "JWT Auth",
      "Socket.io",
      "DayJS",
      "Formik",
      "Yup",
      "Cloudflare",
      "Backend",
      "Full Stack",

    ],

    liveDemo: "https://bpl-hub-2026.bpl-official-in.workers.dev/",
    code: "https://github.com/AMOL-DEV-24/BPL-HUB",
  },

  // =========================================================
  // 04. PORTFOLIO 5
  // =========================================================

  {
    id: 4,
    image: "/assets/images/projects/Portfolio-5.png",
    title: "PORTFOLIO - 5",
    description:
      "Portfolio 5 is a personal portfolio Next.js website with modern design and animations.",

    tech: [
      "fab fa-react",
      "fas fa-wand-magic-sparkles",
      "fas fa-mobile-screen",
      "fas fa-bolt",
      "fas fa-code",
      "fas fa-palette",
    ],

    categories: [
      "Next.js",
      "React",
      "TypeScript",
      "Frontend",
      "Responsive Design",
      "Animation",
      "UI Design",
    ],

    liveDemo: "https://amolpawar24.vercel.app/",
    code: "#",
  },

  // =========================================================
  // 05. GYM APP
  // =========================================================

  {
    id: 5,
    image: "/assets/images/projects/Gym App.png",
    title: "GYM WEBAPP",
    description:
      "Modern fitness web app with workout categories, exercise details, and responsive UI.",

    tech: ["fab fa-css3-alt", "fab fa-react", "fas fa-bolt"],

    categories: ["React"],

    liveDemo: "https://gym24-webapp.netlify.app/",
    code: "https://github.com/amolpawar24/Gym-Webapp",
  },

  // =========================================================
  // 06. BIKE APP
  // =========================================================

  {
    id: 6,
    image: "/assets/images/projects/Bike App.png",
    title: "BIKE RENTAL - WEBSITE",
    description:
      "Bike booking and rental platform with smooth UI and responsive layouts.",

    tech: [
      "fas fa-wand-magic-sparkles",
      "fas fa-mobile-screen",
      "fas fa-css3-alt",
      "fas fa-js"
    ],

    categories: ["React", "CSS", "JavaScript", "Responsive Design"],

    liveDemo: "https://bike24-website.netlify.app/",
    code: "https://github.com/amolpawar24/Bike-Rental",
  },

  // =========================================================
  // 07. PEPSI APP
  // =========================================================

  {
    id: 7,
    image: "/assets/images/projects/Pepsi.png",
    title: "PEPSI CLONE WEBSITE",
    description:
      "Creative Pepsi inspired landing page with animations and modern design.",

    tech: [
      "fab fa-html5",
      "fab fa-css3-alt",
      "fab fa-js",
      "fas fa-wand-magic-sparkles",
      "fas fa-mobile-screen",
    ],

    categories: ["HTML", "CSS", "JavaScript", "Responsive Design", "Animation"],

    liveDemo: "https://pespsi24-website.netlify.app/",
    code: "https://github.com/amolpawar24/Pepsi-Website-Clone",
  },

  // =========================================================
  // 08. HMBOX 2023
  // =========================================================

  {
    id: 8,
    image: "/assets/images/projects/HmBox2023.png",
    title: "HMBOX 2023 WEBAPP",
    description:
      "Tiffin service web app for ordering home-cooked meals online.",

    tech: [
      "fab fa-php",
      "fas fa-database",
      "fab fa-bootstrap",
      "fas fa-server",
      "fas fa-utensils",
      "fas fa-mobile-screen",
      "fas fa-wand-magic-sparkles",
    ],

    categories: [
      "PHP",
      "MySQL",
      "Bootstrap",
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "Frontend",
      "Backend",
      "Full Stack",
    ],

    liveDemo: "https://hmbox2023.great-site.net/?i=1",
    code: "#",
  },

  // =========================================================
  // 09. PORTFOLIO 1
  // =========================================================

  {
    id: 9,
    image: "/assets/images/projects/portfolio 1.jpg",
    title: "Portfolio 1 WEBSITE",
    description:
      "Portfolio 1 is a personal portfolio React website with modern design and animations.",

    tech: [
      "fab fa-react",
      "fas fa-wand-magic-sparkles",
      "fas fa-mobile-screen",
      "fas fa-bolt",
      "fas fa-code",
      "fas fa-palette",
    ],

    categories: ["React", "Responsive Design", "Animation", "UI Design"],

    liveDemo: "https://amol-portfolio1.netlify.app/",
    code: "#",
  },

  // =========================================================
  // 10. PORTFOLIO 2
  // =========================================================

  {
    id: 10,
    image: "/assets/images/projects/Portfolio 2.png",
    title: "Portfolio 2 WEBSITE",
    description:
      "Portfolio 2 is a personal portfolio static website with modern Neophormism design and animations.",

    tech: [
      "fas fa-wand-magic-sparkles",
      "fas fa-mobile-screen",
      "fas fa-bolt",
      "fas fa-code",
      "fas fa-palette",
    ],

    categories: ["JavaScript", "Responsive Design", "Animation", "UI Design"],

    liveDemo: "https://amol-portfolio2.netlify.app/",
    code: "#",
  },

  // =========================================================
  // 11. PORTFOLIO 3
  // =========================================================

  {
    id: 11,
    image: "/assets/images/projects/Portfolio 3.png",
    title: "Portfolio 3 WEBSITE",
    description:
      "Portfolio 3 is a personal portfolio static website with modern design and animations.",

    tech: [
      "fas fa-wand-magic-sparkles",
      "fas fa-mobile-screen",
      "fas fa-bolt",
      "fas fa-code",
      "fas fa-palette",
    ],

    categories: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "Animation",
      "UI Design",
    ],

    liveDemo: "https://amol-portfolio3.netlify.app/",
    code: "#",
  },

  // =========================================================
  // 12. PORTFOLIO 4
  // =========================================================

  {
    id: 12,
    image: "/assets/images/projects/Portfolio 4.png",
    title: "Portfolio 4 WEBSITE",
    description:
      "Portfolio 4 is a personal portfolio static website with modern design and animations.",

    tech: [
      "fas fa-wand-magic-sparkles",
      "fas fa-mobile-screen",
      "fas fa-bolt",
      "fas fa-code",
      "fas fa-palette",
    ],

    categories: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "Animation",
      "UI Design",
    ],

    liveDemo: "https://amol-portfolio4.netlify.app/",
    code: "#",
  },

  // =========================================================
  // 13. GYMSO WEBAPP
  // =========================================================

  {
    id: 13,
    image: "/assets/images/projects/Gymso-WebApp.png",
    title: "GYMSO WEBSITE",
    description:
      "Responsive gym landing page with flexbox layouts and animations.",

    tech: ["fab fa-html5", "fab fa-css3-alt", "fas fa-mobile-screen"],

    categories: ["HTML", "CSS", "Responsive Design"],

    liveDemo: "https://gymso-website.netlify.app/",
    code: "https://github.com/amolpawar24/Gymso-Fitness-Website",
  },

  // =========================================================
  // 14. NEWSIFY
  // =========================================================

  {
    id: 14,
    image: "/assets/images/projects/Newsify.png",
    title: "NEWSIFY WEBSITE",
    description: "This news application builded using React to find news.",

    tech: [
      "fab fa-html5",
      "fab fa-css3-alt",
      "fas fa-mobile-screen",
      "fab fa-react",
    ],

    categories: ["HTML", "CSS", "React", "Responsive Design"],

    liveDemo: "https://newsify-webpp.netlify.app/",
    code: "#",
  },

  // =========================================================
  // 15. MOVIESPOT
  // =========================================================

  {
    id: 15,
    image: "/assets/images/projects/Moviespot.png",
    title: "MOVIESPOT WEBSITE",
    description:
      "This Moviespot webapp desgined for find infromation about popular, latest, treanding movies collection.",

    tech: [
      "fab fa-html5",
      "fab fa-css3-alt",
      "fas fa-mobile-screen",
      "fab fa-react",
    ],

    categories: ["HTML", "CSS", "React", "Responsive Design"],

    liveDemo: "https://moviespot24.netlify.app/",
    code: "#",
  },

  // =========================================================
  // 16. TODO APP
  // =========================================================

  {
    id: 16,
    image: "/assets/images/projects/Todo React App.png",
    title: "TODO APP",
    description:
      "It React Project to help to understand the how the CRUD is works.",

    tech: [
      "fas fa-mobile-screen",
      "fab fa-react",
    ],

    categories: ["React", "CRUD"],

    liveDemo: "https://todo24-react.netlify.app/",
    code: "#",
  },

  // =========================================================
  // 17. CUDA 1
  // =========================================================

  {
    id: 17,
    image: "/assets/images/projects/Cuda.png",
    title: "CUDA 1 WEBSITE",
    description: "Responsive business website hosted using GitHub Pages.",

    tech: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js"],

    categories: ["HTML", "CSS", "JavaScript", "Responsive Design"],

    liveDemo: "https://cuda-website.netlify.app/",
    code: "https://github.com/2404AMOL/CUDA",
  },

  // =========================================================
  // 18. CALCULATOR
  // =========================================================

  {
    id: 18,
    image: "/assets/images/projects/Calculator.png",
    title: "Calculator APP",
    description: "It is javascript project made with Neophormism design.",

    tech: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js"],

    categories: ["HTML", "CSS", "JavaScript", "UI Design"],

    liveDemo: "https://victorious-red-hhkheze5.edgeone.dev/",
    code: "#",
  },

  // =========================================================
  // 19. DIGITAL CLOCK
  // =========================================================

  {
    id: 19,
    image: "/assets/images/projects/Digital Clock.png",
    title: "Digital Clock APP",
    description: "Digital Clock unique css design.",

    tech: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js"],

    categories: ["HTML", "CSS", "JavaScript", "UI Design"],

    liveDemo: "https://eastern-black-o1cojojk.edgeone.dev/",
    code: "#",
  },

  // =========================================================
  // 20. GENERATE QR CODE
  // =========================================================

  {
    id: 20,
    image: "/assets/images/projects/Generate QR.png",
    title: "Generate QR Code APP",
    description: "Genarate QR made by with JS.",

    tech: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js"],

    categories: ["HTML", "CSS", "JavaScript"],

    liveDemo: "https://satisfactory-blue-brwi1wxj.edgeone.dev/",
    code: "#",
  },

  // =========================================================
  // 21. BULB USING JAVASCRIPT
  // =========================================================

  {
    id: 21,
    image: "/assets/images/projects/Bulb Javascript.png",
    title: "Bulb Using Javscript Action",
    description: "Bulb using Javascript Action turing On and Off.",

    tech: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js"],

    categories: ["HTML", "CSS", "JavaScript"],

    liveDemo: "https://usual-sapphire-4r5szl9f.edgeone.dev/",
    code: "#",
  },

  // =========================================================
  // 22. GLOWING CUBE
  // =========================================================

  {
    id: 22,
    image: "/assets/images/projects/Glowing Cube.png",
    title: "Glowing Cube",
    description: "It is Glowing sqaure Cube with attractive CSS design.",

    tech: ["fab fa-html5", "fab fa-css3-alt"],

    categories: ["HTML", "CSS"],

    liveDemo: "https://supporting-teal-bpqyz7mr.edgeone.dev/",
    code: "#",
  },

  // =========================================================
  // 23. WHEELS LANDING PAGE
  // =========================================================

  {
    id: 23,
    image: "/assets/images/projects/Wheels Landing Page.png",
    title: "WHEELS LANDING PAGE",
    description: "It Landing Page made with css without responsive.",

    tech: ["fab fa-html5", "fab fa-css3-alt"],

    categories: ["HTML", "CSS"],

    liveDemo: "https://consistent-salmon-bhn00ext.edgeone.dev/",
    code: "#",
  },

  // =========================================================
  // 24. APJ TRIBUTE PAGE
  // =========================================================

  {
    id: 24,
    image: "/assets/images/projects/APJ Tribute Page.png",
    title: "APJ TRIBUTE PAGE",
    description:
      "Tribute page for Dr. APJ Abdul Kalam with elegant UI and animations.",

    tech: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js"],

    categories: ["HTML", "CSS", "JavaScript", "Animation"],

    liveDemo: "https://great-scarlet-wnxksgtw.edgeone.dev/",
    code: "#",
  },

  // =========================================================
  // 25. SPOTIFY CLONE
  // =========================================================

  {
    id: 25,
    image: "/assets/images/projects/Spotify Clone.png",
    title: "SPOTIFY CLONE",
    description: "Spotify clone with elegant UI and animations.",

    tech: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js"],

    categories: ["HTML", "CSS", "JavaScript", "Animation"],

    liveDemo: "https://full-turquoise-2hwvvsqo.edgeone.dev/",
    code: "#"
  },

  // =========================================================
  // 26. NEOPHORMISM PROFILE CARD
  // =========================================================

  {
    id: 26,
    image: "/assets/images/projects/Neophormism  Profile Card.png",
    title: "Neophormism Profile Card",
    description: "Neophormism profile card with elegant UI and animations.",

    tech: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js"],

    categories: ["HTML", "CSS", "JavaScript", "Animation", "UI Design"],

    liveDemo: "https://main-yellow-fp4h8vov.edgeone.dev/",
    code: "#",
  },

  // =========================================================
  // 27. TRANSPARENT PROFILE CARD
  // =========================================================

  {
    id: 27,
    image: "/assets/images/projects/Transparent Profile Card.png",
    title: "TRANSPARENT PROFILE CARD",
    description: "Transparent profile card with elegant UI and animations.",

    tech: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js"],

    categories: ["HTML", "CSS", "JavaScript", "Animation", "UI Design"],

    liveDemo: "https://minimum-rose-zs4hparz.edgeone.dev/",
    code: "#",
  },

  // =========================================================
  // 28. INDIAN HISTORICAL PLACES
  // =========================================================

  {
    id: 28,
    image: "/assets/images/projects/Incredible India.png",
    title: "INDIAN HISTORICAL PLACES",
    description:
      "Incredible India landing page with elegant UI and animations.",

    tech: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js"],

    categories: ["HTML", "CSS", "JavaScript", "Animation"],

    liveDemo: "https://xenogeneic-amber-rtbwgspe.edgeone.dev/",
    code: "#",
  },

  // =========================================================
  // 29. INDIAN BEAUTIFUL PLACES
  // =========================================================

  {
    id: 29,
    image: "/assets/images/projects/Indian Beautiful Places.png",
    title: "INDIAN BEAUTIFUL PLACES",
    description:
      "Indian Beautiful Places landing page with elegant UI and animations.",

    tech: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js"],

    categories: ["HTML", "CSS", "JavaScript", "Animation"],

    liveDemo: "https://vocal-amaranth-kwklx009.edgeone.dev/",
    code: "#",
  },

  // =========================================================
  // 30. INDIAN CUISINE
  // =========================================================

  {
    id: 30,
    image: "/assets/images/projects/Indian Cuisine.png",
    title: "INDIAN CUISINE",
    description: "Indian Cuisine landing page with elegant UI and animations.",

    tech: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js"],

    categories: ["HTML", "CSS", "JavaScript", "Animation"],

    liveDemo: "https://instant-sapphire-q6vuushi.edgeone.dev/",
    code: "#",
  },

  // =========================================================
  // 31. IPL 2023 SCHEDULE
  // =========================================================

  {
    id: 31,
    image: "/assets/images/projects/IPL 2023 Schedule.png",
    title: "IPL 2023 SCHEDULE",
    description:
      "IPL 2023 Schedule landing page with elegant UI and animations.",

    tech: ["fab fa-html5", "fab fa-css3-alt"],

    categories: ["HTML", "CSS", "Animation"],

    liveDemo: "https://tight-tan-reobzydc.edgeone.dev/",
    code: "#",
  },

  // =========================================================
  // 32. BULB CSS
  // =========================================================

  {
    id: 32,
    image: "/assets/images/projects/Bulb Css.png",
    title: "BULB CSS",
    description: "Interactive bulb UI created using HTML and CSS.",

    tech: ["fab fa-html5", "fab fa-css3-alt"],

    categories: ["HTML", "CSS"],

    liveDemo: "https://bulb-css.tiiny.site/",
    code: "#",
  },

  // =========================================================
  // 33. INDIAN RESTAURENT
  // =========================================================

  {
    id: 33,
    image: "/assets/images/projects/indian-restro-html.png",
    title: "Indian Restaurent",
    description: "It is Fully static html page without CSS and JS.",

    tech: ["fab fa-html5"],

    categories: ["HTML"],

    liveDemo: "https://crimson-seal.staticdomains.app",
    code: "https://github.com/amolpawar24/HTML5/tree/main/PROJECTS/PROJECT%204",
  },
];

export default projectsData;