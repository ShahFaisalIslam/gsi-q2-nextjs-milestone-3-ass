import Image from "next/image"
import Link from "next/link"

interface CardData {
    title: string,
    description: string,
    imageLink: string,
};

interface CardProps {
    id: string,
    cardData: CardData,
    href:string
};

export default function Card( params : CardProps) {
    const cardData = params.cardData;
    return(
        <div className="w-full max-w-72 bg-green-900 hover:bg-green-950 text-white rounded-2xl">
            <Image src={cardData.imageLink} alt={cardData.title} width={288} height={100} className="w-72 h-[150px] object-cover rounded-t-2xl"/>
            <div className="px-4 py-4 w-full h-40 flex flex-col items-center text-center gap-2">                
                <h3 className="text-lg">{cardData.title}</h3>
                <p className="h-20 overflow-y-hidden">{cardData.description}</p>
                <button className="px-4 py-2 rounded-md bg-green-700 hover:bg-green-800"><Link href={params.href}>Read More</Link></button>
            </div>
        </div>
    )
}