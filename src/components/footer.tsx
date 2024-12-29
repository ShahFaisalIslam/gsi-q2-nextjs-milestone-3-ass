import Link from "next/link";

export default function Footer() {
    return(
        <div className="px-4 lg:px-40 py-8 lg:py-10 bg-green-800 text-gray-100 flex max-lg:flex-col max-lg:items-center justify-center lg:justify-between gap-8">
            <div className="flex flex-col items-center max-lg:justify-center lg:mt-2 text-center">
                <Link href={"/"}><p className="text-2xl font-extrabold">AboutEducation</p></Link>
                <p>Cover your bases on education here!</p>
            </div>
            {/* Categories */}
            <ul className="flex flex-col items-center text-center gap-2">
                <li><p className="text-lg font-bold">Categories</p></li>
                <li><Link href={"/institute"}>Institutes</Link></li>
                <li><Link href={"/course"}>Courses</Link></li>
            </ul>
            {/* Useful Links */}
            <ul className="flex flex-col items-center text-center gap-2">
                <li><p className="text-lg font-bold">Useful Links</p></li>
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/about"}>About</Link></li>
                <li><Link href={"/contact"}>Contact</Link></li>
            </ul>
        </div>
    );
}