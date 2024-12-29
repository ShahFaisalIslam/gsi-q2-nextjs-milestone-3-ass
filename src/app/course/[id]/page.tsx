import Comments from "@/components/comments";
import { courses, Data } from "@/data";
import Image from "next/image";

export default function CoursePage({ params }: { params: { id: number } }) {
    const data: Data = courses[params.id];
    return (
        <div className="flex flex-col items-center py-10 min-h-screen">
            <div className="flex flex-col items-center text-center gap-4 w-full max-w-lg">
                <Image alt={data.title} src={data.imageLink} width={768} height={384} className="object-cover" />
                <h1>{data.title}</h1>
                <p>{data.description}</p>
            </div>
            <Comments />
        </div>
    )
}