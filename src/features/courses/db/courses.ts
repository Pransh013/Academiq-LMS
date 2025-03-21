import { CourseTable } from "@/drizzle/schema";
import { db } from "@/drizzle/db";
import { revalidateCourseCache } from "./cache";

export async function insertCourse(data: typeof CourseTable.$inferInsert) {
  const [newCourse] = await db.insert(CourseTable).values(data).returning();

  if (!newCourse) throw new Error("Failed to create course");
  revalidateCourseCache(newCourse.id);
  return newCourse;
}
