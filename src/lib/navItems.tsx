import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { Award, BriefcaseBusiness } from "lucide-react";

export const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Serviços",
    link: "servicos",
    icon: (
      <BriefcaseBusiness className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
  {
    name: "Sobre",
    link: "about",
    icon: <Award className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Contato",
    link: "/faleconosco",
    icon: (
      <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
];