"use client";

import { hasAdminAccess } from "@/lib/utils";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { Button } from "./ui/button";

export default function AdminLink() {
  const { user } = useUser();
  if (!user?.publicMetadata.role) return null;
  const isAdmin = hasAdminAccess(user?.publicMetadata.role);
  if (!isAdmin) return null;
  return (
    <Button variant="outline" className="border-muted">
      <Link href="/admin">Admin</Link>
    </Button>
  );
}
