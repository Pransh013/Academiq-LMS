import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "AcademiQ LMS",
  description:
    "AcademiQ LMS - Empowering Learning with Seamless Course Management and User-Friendly Experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="antialiased">
          {children}
          <Toaster richColors/>
        </body>
      </html>
    </ClerkProvider>
  );
}
