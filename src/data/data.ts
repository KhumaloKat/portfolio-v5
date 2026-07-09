import { Star, Award, ShieldCheck, LucideIcon } from 'lucide-react';

export interface Experience {
  company: string;
  duration: string;
  role: string;
  desc: string;
  dotColor: string;
}

export interface IconAndText {
  icon: LucideIcon;
  name: string;
}

export interface Blog {
  image: string;
  button: string;
  name: string;
  date: string;
  title: string;
}

export interface PortfolioItem {
  image: string;
  title: string;
  href: string;
  desc: string;
}

export interface Review {
  name: string;
  role: string;
  rating: number;
  text: string;
}

export interface CardData {
  title: string;
  imageSrc: string;
}



export const experiences: Experience[] = [
  {
    company: "TUT 4IR WIL",
    duration: "2024 - 2025",
    role: "Computer Vision",
    desc: "Applied theoretical knowledge to real-world projects in computer vision, machine learning, and software development. Designed and executed end-to-end drone workflows, integrating data acquisition, processing, and analysis to deliver practical solutions.",
    dotColor: "bg-[#7b7d7a]",
  },
  {
    company: "TUT 4IR LAB",
    duration: "2025 - 2026",
    role: "Drone Pilot Intern",
    desc: "Configured Pixhawk systems and operated drones for photogrammetry. Planned missions to capture accurate aerial data for analysis. Ensured safe flight operations and data collection for downstream processing.",
    dotColor: "bg-[#7b7d7a]",
  },
];

export const buttons: string[] = [
  "Software Development",
  "Computer Vision",
  "Machine Learning",
  "Web Development",
  "Computer Architecture",
  "Systems Design",
  "BVLOS Drone Operations",
];

export const iconAndText: IconAndText[] = [
  {
    icon: Star,
    name: "4.9 Average Rating",
  },
  {
    icon: Award,
    name: "25+ Winning Awards",
  },
  {
    icon: ShieldCheck,
    name: "Certified Product Design",
  },
];

export const skills: string[] = [
  "Python",
  "JavaScript",
  "Web Technologies",
  "UAS Mission Planning",
  "Aerial Data Acquisition",
  "Autonomous Flight Operations",
  "System Integration",
];

export const blogs: Blog[] = [
  {
    image: "/Rectangle 6.svg",
    button: "Read More",
    name: "Mahesh Pokale",
    date: "10 Nov, 2024",
    title: "Design Unraveled: Behind the Scenes of UI/UX Magic",
  },
  {
    image: "/Frame 60.svg",
    button: "Explore",
    name: "Sarah Johnson",
    date: "12 Dec, 2024",
    title: "Mastering Tailwind: Tips for Clean UI Development",
  },
  {
    image: "/Rectangle 6 (1).svg",
    button: "Check Now",
    name: "John Doe",
    date: "1 Jan, 2025",
    title: "Modern Web Development in 2025",
  },
];

export const portfolioData: PortfolioItem[] = [
  {
    image: "/Frame 26.svg",
    title: "Drone Data Workflow",
    href: "/project-1",
    desc: "Designed and executed end-to-end drone workflows for aerial data capture, processing, and analysis.",
  },
  {
    image: "/Frame 26.svg",
    title: "Computer Vision Systems",
    href: "/project-2",
    desc: "Built practical computer vision solutions to extract insights from imagery and automate analysis.",
  },
  {
    image: "/Frame 26.svg",
    title: "Machine Learning Apps",
    href: "/project-3",
    desc: "Applied ML models to real-world problems, integrating them into usable web and software systems.",
  },
  {
    image: "/Frame 26.svg",
    title: "System Integration",
    href: "/project-4",
    desc: "Developed integrated systems that combine hardware, software, and mission planning for reliable operations.",
  },
];

export const reviews: Review[] = [
  {
    name: "Computer Vision",
    role: "Expertise",
    rating: 5,
    text: "Strong practical experience in building vision systems, analyzing imagery, and delivering automation solutions.",
  },
  {
    name: "UAS Mission Planning",
    role: "Expertise",
    rating: 5,
    text: "Skilled in Pixhawk configuration, BVLOS operations, and aerial data acquisition for accurate drone missions.",
  },
  {
    name: "Software Development",
    role: "Expertise",
    rating: 5,
    text: "Adept at integrating software systems, web applications, and ML models into practical engineering workflows.",
  },
  {
    name: "System Integration",
    role: "Expertise",
    rating: 5,
    text: "Experienced in connecting hardware, software, and mission processes to deliver reliable end-to-end solutions.",
  },
];

export const cardData: CardData[] = [
  { title: "Software Development", imageSrc: "/Rectangle 7.svg" },
  { title: "Computer Vision", imageSrc: "/Rectangle 7.svg" },
  { title: "Machine Learning", imageSrc: "/Rectangle 7.svg" },
  { title: "Web Development", imageSrc: "/Rectangle 7.svg" },
  { title: "System Integration", imageSrc: "/Rectangle 7.svg" },
  { title: "BVLOS Operations", imageSrc: "/Rectangle 7.svg" },
];
