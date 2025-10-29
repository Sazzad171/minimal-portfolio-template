import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "Quicky",
    companyName: "Quicky Ecommerce",
    type: "Personal",
    category: ["Web Dev", "UI/UX"],
    shortDescription:
      "Developed and optimized a high-performing website catering to over 4000 users, emphasizing efficiency and maintainability.",
    websiteLink: "https://quickybd.com",
    techStack: [
      "Next.js",
      "React",
      "Zustand",
      "Material UI",
    ],
    startDate: new Date("2024-09-01"),
    endDate: new Date("2025-03-10"),
    companyLogoImg: "/projects/quicky/1.PNG",
    pagesInfoArr: [
      
    ],
    descriptionDetails: {
      paragraphs: [
        "Modern multivendor Ecommerce where customer can shopping easily."
      ],
      bullets: [
        "Developed and optimized a high-performing website catering to over 4000 users.",
        "Collaborated closely with the product team to implement cutting-edge features.",
        "Created an intuitive admin dashboard to efficiently manage and announce contest winners.",
        "Leveraged Next.js, React for captivating front-end experiences.",
      ],
    },
  },
  {
    id: "FirstTrip",
    companyName: "FirstTrip",
    type: "Professional",
    category: ["Web Dev", "UI/UX"],
    shortDescription:
      "Developed and optimized a high-performing website catering to over 4000 users, emphasizing efficiency and maintainability.",
    websiteLink: "https://firsttrip.com",
    techStack: [
      "Next.js",
      "React",
      "Shadecn",
      "Zustand",
    ],
    startDate: new Date("2024-09-01"),
    endDate: new Date("2025-03-10"),
    companyLogoImg: "/projects/firsttrip/firsttrip.jpg",
    pagesInfoArr: [
      
    ],
    descriptionDetails: {
      paragraphs: [
        "Modern Online Travel Agency."
      ],
      bullets: [
        "Developed and optimized a high-performing website catering to over 4000 users.",
        "Collaborated closely with the product team to implement cutting-edge features.",
        "Created an intuitive admin dashboard to efficiently manage and announce contest winners.",
        "Leveraged Next.js, React for captivating front-end experiences.",
      ],
    },
  },
  {
    id: "GuardianPublications",
    companyName: "Guardian Publications",
    type: "Personal",
    category: ["Web Dev", "UI/UX"],
    shortDescription:
      "Developed and optimized a high-performing website catering to over 4000 users, emphasizing efficiency and maintainability.",
    websiteLink: "https://www.guardianpubs.com",
    techStack: [
      "React",
      "Material UI",
    ],
    startDate: new Date("2022-09-01"),
    endDate: new Date("2023-03-10"),
    companyLogoImg: "/projects/guardian/guardian.jpg",
    pagesInfoArr: [
      
    ],
    descriptionDetails: {
      paragraphs: [
        "Modern book publication website."
      ],
      bullets: [
        "Developed and optimized a high-performing website catering to over 4000 users.",
        "Collaborated closely with the product team to implement cutting-edge features.",
        "Created an intuitive admin dashboard to efficiently manage and announce contest winners.",
        "Leveraged Next.js, React for captivating front-end experiences.",
      ],
    },
  },
  {
    id: "hugeicon",
    companyName: "Hugeicon",
    type: "Personal",
    category: ["Web Dev", "UI/UX"],
    shortDescription:
      "Developed and optimized a high-performing website catering to over 4000 users, emphasizing efficiency and maintainability.",
    websiteLink: "https://hugeicons.com/icons",
    techStack: [
      "Next.js",
      "React",
      "Zustand",
      "Shadecn",
    ],
    startDate: new Date("2023-09-01"),
    endDate: new Date("2024-03-10"),
    companyLogoImg: "/projects/hugeicon/hugeicon.jpg",
    pagesInfoArr: [
      
    ],
    descriptionDetails: {
      paragraphs: [
        "Modern premium icon website."
      ],
      bullets: [
        "Developed and optimized a high-performing website catering to over 4000 users.",
        "Collaborated closely with the product team to implement cutting-edge features.",
        "Created an intuitive admin dashboard to efficiently manage and announce contest winners.",
        "Leveraged Next.js, React for captivating front-end experiences.",
      ],
    },
  },
  {
    id: "NatureLoversBD",
    companyName: "Nature Lovers BD",
    type: "Personal",
    category: ["Web Dev", "UI/UX"],
    shortDescription:
      "Developed and optimized a high-performing website catering to over 4000 users, emphasizing efficiency and maintainability.",
    websiteLink: "https://nature-lovers-bd.netlify.app/",
    techStack: [
      "React",
      "Bootstrap",
    ],
    startDate: new Date("2023-09-01"),
    endDate: new Date("2024-03-10"),
    companyLogoImg: "/projects/nature/nature.jpg",
    pagesInfoArr: [
      
    ],
    descriptionDetails: {
      paragraphs: [
        "Modern travel guide site."
      ],
      bullets: [
        "Developed and optimized a high-performing website catering to over 4000 users.",
        "Collaborated closely with the product team to implement cutting-edge features.",
        "Created an intuitive admin dashboard to efficiently manage and announce contest winners.",
        "Leveraged Next.js, React for captivating front-end experiences.",
      ],
    },
  },
  {
    id: "vatican",
    companyName: "Vatican Tickets Tour",
    type: "Personal",
    category: ["Web Dev", "UI/UX"],
    shortDescription:
      "Developed and optimized a high-performing website catering to over 4000 users, emphasizing efficiency and maintainability.",
    websiteLink: "https://vaticanticketstour.com",
    techStack: [
      "Javascript",
      "Bootstrap",
    ],
    startDate: new Date("2023-09-01"),
    endDate: new Date("2024-03-10"),
    companyLogoImg: "/projects/vatican/vatican.jpg",
    pagesInfoArr: [
      
    ],
    descriptionDetails: {
      paragraphs: [
        "Modern tour package website."
      ],
      bullets: [
        "Developed and optimized a high-performing website catering to over 4000 users.",
        "Collaborated closely with the product team to implement cutting-edge features.",
        "Created an intuitive admin dashboard to efficiently manage and announce contest winners.",
        "Leveraged Next.js, React for captivating front-end experiences.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
