"use client";

import Link from "next/link";
import Image from "next/image";

<Link href="/" className="flex items-center gap-2">
    <Image src="/logo.png" alt="Logo" width={48} height={48}/>
    <span className="font-bold text-xl">Tecnología de Williams</span>
</Link>
export default function Navbar() {
    return (
    <nav className="w-full py-4 bg-blue-600 text-white flex justify-between px-10">
        <Link href="/" className="font-bold text-xl">
        Tecnología de Williams
        </Link>

        <div className="flex gap-6">
        <Link href="/pricing">Precios</Link>
        <Link href="/inventory">Inventarios</Link>
        <Link href="/holiday">Decoración</Link>
        </div>
        </nav>
    );
}
