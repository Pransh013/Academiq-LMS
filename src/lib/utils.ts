import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { UserRole } from "@/drizzle/schema";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const hasAdminAccess = ({ role }: { role: UserRole | undefined }) => {
  return role === "admin";
};