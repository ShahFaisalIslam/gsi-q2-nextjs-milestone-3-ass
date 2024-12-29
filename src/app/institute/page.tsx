import Card from "@/components/card";
import { institutes } from "@/data";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="px-4 py-4">
      <Link href="/institute">
        <h2  className="text-2xl mb-4 max-sm:text-center">Institutes</h2>
      </Link>
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
