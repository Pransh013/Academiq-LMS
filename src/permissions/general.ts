import { UserRole } from "@/drizzle/schema";

export const hasAdminAccess = ({ role }: { role: UserRole | undefined }) => {
  return role === "admin";
};
