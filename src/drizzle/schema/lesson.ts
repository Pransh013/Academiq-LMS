import { relations } from "drizzle-orm";
import { integer, pgEnum, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { createdAt, id, updatedAt } from "../schemaHelper";
import { CourseSectionTable } from "./courseSection";
import { UserLessonCompleteTable } from "./userLessionComplete";

export const lessonStatuses = ["private", "public", "preview"] as const;
export type LessonStatus = (typeof lessonStatuses)[number];
export const lessonStatusEnum = pgEnum("lession_status", lessonStatuses);

export const LessonTable = pgTable("lessons", {
  id,
  name: text().notNull(),
  description: text(),
  status: lessonStatusEnum().notNull().default("private"),
  sectionId: uuid()
    .notNull()
    .references(() => CourseSectionTable.id, { onDelete: "cascade" }),
  order: integer().notNull(),
  youtubeVideoId: text().notNull(),
  createdAt: createdAt,
  updatedAt: updatedAt,
});

export const LessonRelationships = relations(
  LessonTable,
  ({ one, many }) => ({
    section: one(CourseSectionTable, {
      fields: [LessonTable.sectionId],
      references: [CourseSectionTable.id],
    }),
      userLessonComplete: many(UserLessonCompleteTable)
  })
);
