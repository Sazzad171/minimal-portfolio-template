import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@Sazzad171",
    icon: Icons.gitHub,
    link: "https://github.com/sazzad171",
  },
  {
    name: "LinkedIn",
    username: "Sazzad Bin Jafor",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/sazzad-bin-jafor",
  },
  {
    name: "Gmail",
    username: "sazzadbinjafor",
    icon: Icons.gmail,
    link: "mailto:sazzadbinjafor@gmail.com",
  },
];
