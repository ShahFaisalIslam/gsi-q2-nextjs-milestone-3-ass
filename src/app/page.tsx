import Card from "@/components/card";
import { courses, institutes } from "@/data";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Courses */}
      <div className="px-4 py-4">
        <Link href="/course">
          <h2 className="text-2xl mb-4 max-sm:text-center">Courses</h2>
        </Link>
        <div className="flex max-sm:justify-center flex-wrap gap-4">
          {courses.map((course, id) => {
            return (
              <Card key={`course-${id}`} id={`course-${id}`} cardData={course} href={`/course/${id}`} />
            )
          })}
        </div>
      </div>

      <div className="px-4 py-4">
      <Link href="/institute">
        <h2 className="text-2xl mb-4 max-sm:text-center">Institutes</h2>
      </Link>
        <div className="flex max-sm:justify-center flex-wrap gap-4">
          {institutes.map((institute, id) => {
            return (
              <Card key={`institute-${id}`} id={`institute-${id}`} cardData={institute} href={`/institute/${id}`} />
            )
          })}
        </div>
      </div>
    </div>
  );
}
