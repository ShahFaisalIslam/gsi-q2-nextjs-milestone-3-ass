import Image from "next/image";

export default function About() {
    return(
        <div className="px-4 sm:px-8 py-4 flex flex-col items-center min-h-screen">
            <div className="w-full flex flex-col max-md:items-center max-md:text-center">
                <h1 className="text-3xl mb-4">About</h1>
                <div className="flex max-md:flex-wrap-reverse w-full items-center justify-center md:justify-between mb-8 gap-8">
                    <p className="text-3xl w-1/2">Think about it: How clear are we about what education is? How clear are we about what it <strong>isn&apos;t</strong>? Why just let it be when it shapes the rest of our lives?</p>
                    <Image src="/about/graduation-cap.png" alt="Education" className="w-96 object-contain" width={1920} height={1273} />
                </div>
                <h2 className="text-2xl mb-2">This is where we come in!</h2>
                <p>This blog is all about what education is, by looking into various courses consituting it as well as the institutes providing it.</p>
            </div>
        </div>
    )
}