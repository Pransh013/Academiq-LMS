import { relations } from "drizzle-orm";
import { integer, pgEnum, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { createdAt, id, updatedAt } from "../schemaHelper";
import { CourseTable } from "./course";
import { LessonTable } from "./lesson";

export const courseSectionStatuses = ["private", "public"] as const;
export type CourseSectionStatus = (typeof courseSectionStatuses)[number];
export const courseSectionStatusEnum = pgEnum(
  "course_section_status",
  courseSectionStatuses
);

export const CourseSectionTable = pgTable("course_sections", {
  id,
  name: text().notNull(),
  status: courseSectionStatusEnum().notNull().default("private"),
  courseId: uuid()
    .notNull()
    .references(() => CourseTable.id, { onDelete: "cascade" }),
  order: integer().notNull(),
  createdAt: createdAt,
  updatedAt: updatedAt,
});

export const CourseSectionRelationships = relations(
  CourseSectionTable,
  ({ one, many }) => ({
    course: one(CourseTable, {
      fields: [CourseSectionTable.id],
      references: [CourseTable.id],
    }),
    lessons: many(LessonTable),
  })
);
