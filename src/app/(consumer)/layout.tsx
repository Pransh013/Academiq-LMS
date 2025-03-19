import { Button } from "@/components/ui/button";
import { hasAdminAccess } from "@/lib/utils";
import { getCurrentUser } from "@/services/clerk";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Suspense } from "react";

export default function ConsumerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

const Navbar = () => {
  return (
    <header className="w-full flex items-center justify-between border px-20 py-6">
      <Link href="/">Academiq-LMS</Link>
      <nav className="flex border w-1/2 justify-between items-center">
        <Suspense>
          <SignedIn>
            <AdminLink />
            <Link href="/courses">My courses</Link>
            <Link href="/purchases">Purchase History</Link>
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
      </nav>
    </header>
  );
};

async function AdminLink() {
  const user = await getCurrentUser();
  if (!hasAdminAccess(user)) return null;
  return <Link href="/admin">Admin</Link>;
}
