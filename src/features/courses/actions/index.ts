"use server";

import { redirect } from "next/navigation";
import { courseSchema, CourseSchemaType } from "../schema";
import { getCurrentUser } from "@/services/clerk";
import { canCreateCourses } from "../permissions";
import { insertCourse } from "../db/courses";

export async function createCourse(unsafeData: CourseSchemaType) {
  const { success, data } = courseSchema.safeParse(unsafeData);
  if (!success || !canCreateCourses(await getCurrentUser())) {
    return { error: true, message: "Error creating course" };
  }
  const course = await insertCourse(data);
  redirect(`/admin/courses/${course.id}/edit`);
}
