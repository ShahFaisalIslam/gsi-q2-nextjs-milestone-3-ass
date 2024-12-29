"use client";
import Image from "next/image";
import Link from "next/link";
import style from "./header.module.css"
import { usePathname } from "next/navigation";
import { useEffect } from "react";

interface HeaderItem {
    id: number,
    title: string,
    url: string,
    className?: string
};

let headerItems: HeaderItem[] = [{
    id: 1,
    title: "Home",
    url: "/"
}, {
    id: 2,
    title: "About",
    url: "/about"
}, {
    id: 3,
    title: "Contact",
    url: "/contact"
}];

export default function Header() {
    const pathname = usePathname();

    for (let item of headerItems) {
        if (item.url == pathname)
            item.className = style["header-item-active"];
        else
            item.className = undefined;
    }

    function toggleVisibility() {
        let headerItems: HTMLElement | null = document.getElementById('header-items');
        if (headerItems) {
            let currentClass: string = headerItems.className;
            if (currentClass == style["header-visible"])
                headerItems.className = style["header-default"];
            else
                headerItems.className = style["header-visible"];
        }
    }

    return (
        <>
            <div id="header" className="px-4 sm:px-8 py-4 bg-green-700 text-white w-full flex justify-between flex-wrap items-center">
                <Link href={"/"}><p className="text-2xl font-extrabold">AboutEducation</p></Link>
                <button className="sm:hidden" onClick={toggleVisibility}>
                    <Image src="/hamburger-icon.svg" width={40} height={40} alt="" />
                </button>
                <ul className="max-sm:hidden sm:flex sm:items-center sm:gap-4">
                    {headerItems.map((headerItem: HeaderItem) => {
                        if (!headerItem.className) {
                            return (
                                <li key={headerItem.id}><Link href={headerItem.url}>{headerItem.title}</Link></li>
                            )
                        } else {
                            return (
                                <li key={headerItem.id} className={headerItem.className}><Link href={headerItem.url}>{headerItem.title}</Link></li>
                            )
                        }
                    })}
                </ul>
            </div>
            <ul id="header-items" className={style["header-default"]}>
                {headerItems.map((headerItem: HeaderItem) => {
                    if (!headerItem.className) {
                        return (
                            <li key={headerItem.id}><Link href={headerItem.url}>{headerItem.title}</Link></li>
                        )
                    } else {
                        return (
                            <li key={headerItem.id} className={headerItem.className}><Link href={headerItem.url}>{headerItem.title}</Link></li>
                        )
                    }
                })}
            </ul>
        </>
    );
}