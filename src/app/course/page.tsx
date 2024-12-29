import Card from "@/components/card";
import Header from "@/components/header";
import { courses, institutes } from "@/data";

export default function Home() {
  return (
    <>
      {/* Courses */}
      <div className="px-4 py-4">
        <h2>Courses</h2>
        <div className="flex max-sm:justify-center flex-wrap gap-4">
          {courses.map((course, id) => {
            return (
              <Card key={`course-${id}`} id={`course-${id}`} cardData={course} href={`/course/${id}`} />
            )
          })}
        </div>
      </div>
    </>
  );
}
