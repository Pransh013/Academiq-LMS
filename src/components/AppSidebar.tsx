"use client";

import { Command } from "lucide-react";
import { NavMain } from "@/components/NavMain";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { adminSidebarData, consumerSidebarData } from "@/constants";
import { Badge } from "./ui/badge";
import { usePathname } from "next/navigation";

export default function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");
  const sidebarData = isAdminRoute ? adminSidebarData : consumerSidebarData;
  console.log(isAdminRoute, pathname);

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild className="h-20">
              <Link href={isAdminRoute ? "/admin" : "/"}>
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Command className="size-4" />
                </div>
                <div className="grid relative flex-1 text-left text-sm leading-tight">
                  <span className="truncate text-xl font-medium">
                    AcademiQ LMS
                  </span>
                  {isAdminRoute && (
                    <Badge className="absolute right-0 bottom-full z-50">
                      Admin
                    </Badge>
                  )}
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={sidebarData.navMain} />
      </SidebarContent>
    </Sidebar>
  );
}
