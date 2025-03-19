import { BookOpen, Bot, SquareTerminal } from "lucide-react";

export const adminSidebarData = {
  navMain: [
    {
      title: "Courses",
      url: "/admin/courses",
      icon: SquareTerminal,
    },
    {
      title: "Products",
      url: "/admin/products",
      icon: Bot,
    },
    {
      title: "Sales",
      url: "/admin/sales",
      icon: BookOpen,
    },
  ],
};

export const consumerSidebarData = {
  navMain: [
    {
      title: "My Courses",
      url: "/courses",
      icon: SquareTerminal,
    },
    {
      title: "Products",
      url: "/products",
      icon: BookOpen,
    },
    {
      title: "Purchases",
      url: "/purchases",
      icon: Bot,
    },
  ],
};
