import { BookOpen, Bot, SquareTerminal } from "lucide-react";

export const adminSidebarData = {
  navMain: [
    {
      title: "Home",
      url: "/admin",
      icon: SquareTerminal,
    },
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
      title: "Home",
      url: "/",
      icon: SquareTerminal,
    },
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
      title: "Purchase History",
      url: "/purchases",
      icon: Bot,
    },
  ],
};
