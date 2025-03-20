import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Suspense } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
import AdminLink from "@/components/AdminLink";

export default function ConsumerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 justify-between items-center gap-2 border-b">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex border w-1/2 justify-between items-center">
            <Suspense>
              <SignedIn>
                <AdminLink />
                <div className="size-10">
                  <UserButton
                    appearance={{
                      elements: {
                        userButtonAvatarBox: { width: "100%", height: "100%" },
                      },
                    }}
                  />
                </div>
              </SignedIn>
            </Suspense>
            <Suspense>
              <SignedOut>
                <Button className="bg-foreground cursor-pointer" asChild>
                  <SignInButton />
                </Button>
              </SignedOut>
            </Suspense>
          </div>
        </header>
        <div className="flex flex-1 px-8 py-4">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
