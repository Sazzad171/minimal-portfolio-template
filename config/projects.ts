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
    companyLogoImg: "/projects/builtdesign/logo.png",
    pagesInfoArr: [
      {
        title: "Landing Page",
        description:
          "Modern multivendor Ecommerce where customer can shopping easily.",
        imgArr: [
          "/projects/builtdesign/landing_1.webp",
          "/projects/builtdesign/landing_3.webp",
          "/projects/builtdesign/landing_5.webp",
          "/projects/builtdesign/landing_6.webp",
          "/projects/builtdesign/landing_2.webp",
          "/projects/builtdesign/landing_4.webp",
        ],
      },
      {
        title: "Custom PDF Reader and optimizer",
        description:
          "Specialized PDF viewer with optimization features for improved performance and user experience",
        imgArr: ["/projects/builtdesign/pdf_opt.webp"],
      },
      {
        title: "Clients Dashboard",
        description:
          "Comprehensive client portal with project tracking, document management, and communication tools",
        imgArr: [
          "/projects/builtdesign/cli_dashboard_1.webp",
          "/projects/builtdesign/cli_dashboard_2.webp",
          "/projects/builtdesign/cli_dashboard_3.webp",
        ],
      },
      {
        title: "Admin Dashboard",
        description:
          "Powerful administrative interface for managing users, projects, and system settings",
        imgArr: ["/projects/builtdesign/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Modern multivendor Ecommerce where customer can shopping easily."
      ],
      bullets: [
        "Developed and optimized a high-performing website catering to over 4000 users.",
        "Collaborated closely with the product team to implement cutting-edge features.",
        "Created an intuitive admin dashboard to efficiently manage and announce contest winners.",
        "Leveraged Next.js, React  for captivating front-end experiences.",
      ],
    },
  },
  
];

export const featuredProjects = Projects.slice(0, 3);
