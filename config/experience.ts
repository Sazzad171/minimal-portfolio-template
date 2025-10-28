import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "tn",
    position: "Software Engineer",
    company: "TechnoNext Ltd.",
    location: "Dhaka, Bangladesh",
    startDate: new Date("2023-07-01"),
    endDate: "Present",
    description: [
      "Develop and maintain high-performance web applications using ReactJs, NextJS etc.",
      "Collaborate with product managers and designers to define and implement new features and enhancements.",
      "Integrate RESTful APIs, third-party services to extend website functionality and improve userexperience.",
      "Participate in Agile/Scrum processes and daily stand-ups."
    ],
    achievements: [
      "Collaborated closely with product owners and designers for user-centric features, improving usability and trader workflows.",
      "Optimized web application performance and delivered scalable, user-centric features."
    ],
    skills: ["Typescript", "React", "Next.js", "Javascript", "Tailwind CSS"],
    companyUrl: "https://technonext.com",
    logo: "/experience/tn-logo.jpg",
  },
  {
    id: "tcl",
    position: "Jr. Frontend Developer",
    company: "TechCloud Ltd.",
    location: "Dhaka, Bangladesh",
    startDate: new Date("2022-01-01"),
    endDate: new Date("2023-06-01"),
    description: [
      "Design and develop client projects with custom solutions or WordPress, focusing on performance and user experience.",
      "Address client requirements, including bug fixes and performance optimization, to meet project needs and deliver high-quality results",
      "Email template design, PDF template design for clients.",
    ],
    achievements: [
      "Delivered high-quality custom client solutions.",
      "Enhanced client deliverables with custom design assets."
    ],
    skills: ["Javascript", "React", "Figma", "Wordpress Theme Customization", "HTML 5", "CSS 3"],
    companyUrl: "https://techcloudltd.com",
    logo: "/experience/tcl-logo.jpg",
  },
];
