import CourseForm from "@/components/CourseForm";

export default function NewCoursePage() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold my-4">New Course</h1>
      <CourseForm />
    </div>
  );
}
