import { relations } from "drizzle-orm";
import { pgEnum, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { createdAt, id, updatedAt } from "../schemaHelper";
import { CourseSectionTable } from "./courseSection";
import { UserCourseAccessTable } from "./userCourseAccess";

export const userRoles = ["admin", "user"] as const;
export type UserRole = (typeof userRoles)[number];
export const userRoleEnum = pgEnum("user_role", userRoles);

export const UserTable = pgTable("users", {
  id,
  name: text().notNull(),
  email: text().notNull(),
  clerkUserId: text().notNull().unique(),
  role: userRoleEnum().notNull().default("user"),
  imageUrl: text(),
  deletedAt: timestamp({ withTimezone: true }),
  createdAt: createdAt,
  updatedAt: updatedAt,
});

export const UserRelationships = relations(UserTable, ({ many }) => ({
  userCourseAccess: many(UserCourseAccessTable),
}));
