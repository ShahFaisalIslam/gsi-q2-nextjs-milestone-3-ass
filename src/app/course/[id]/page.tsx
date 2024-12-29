import { courses, Data } from "@/data";
import Image from "next/image";

export default function CoursePage({params} : {params: {id: number}}) {
    const data : Data = courses[params.id];
    return(
        <div className="flex flex-col gap-4">
            <Image alt={data.title} src={data.imageLink} width={300} height={300} className="object-cover"/>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
        </div>
    )
}