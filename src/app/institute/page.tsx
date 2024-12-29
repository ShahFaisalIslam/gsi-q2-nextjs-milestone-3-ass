import Card from "@/components/card";
import Header from "@/components/header";
import { courses, institutes } from "@/data";

export default function Home() {
  return (
    <>
      <div className="px-4 py-4">
        <h2>Institutes</h2>
        <div className="flex max-sm:justify-center flex-wrap gap-4">
          {institutes.map((institute, id) => {
            return (
              <Card key={`institute-${id}`} id={`institute-${id}`} cardData={institute} href={`/institute/${id}`} />
            )
          })}
        </div>
      </div>
    </>
  );
}
