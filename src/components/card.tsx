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
        <div className="px-4 py-4 w-full max-w-72 bg-green-900 hover:bg-green-950 text-white rounded-2xl flex flex-col items-center">
            <Image src={cardData.imageLink} alt={cardData.title} width={288} height={200} className="object-cover"/>
            <div className="w-full h-28">                
                <h3 className="text-lg">{cardData.title}</h3>
                <p className="h-8 overflow-y-hidden">{cardData.description}</p>
            </div>
            <button><Link href={params.href}>Read More</Link></button>
        </div>
    )
}