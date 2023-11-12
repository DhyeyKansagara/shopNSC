"use client";

import React from 'react'
import Link from "next/link"
import {usePathname} from "next/navigation";
import { Button } from '@/components/ui/button';

const links = [
    {name: 'Home', href: '/'},
    {name: 'Men', href: '/Men'},
    {name: 'Women', href: '/Women'},
    {name: 'Accessories', href: '/Accessories'}
];

export default function Navbar() {
  const pathname = usePathname();
  return (
        <header className="mb-8 border-b">
            <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
                <Link href="/">
                    <h1 className="text-4xl font-bold">
                        Shop<span className="text-primary">NSC</span>
                    </h1>
                </Link>

                <nav className="hidden gap-12 lg:flex 2xl:ml-16"> 
                    {links.map((link,idx) => (
                        <div key={idx}>
                            {pathname === link.href ? (
                                <Link className="text-lg font-semibold text-primary" href={link.href}>
                                    {link.name}
                                </Link>
                            ): (
                                <Link href={link.href} className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary">
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>

                <div className="flex divide-x border-r sm:border-l">
                        <Button> Hey </Button>
                </div>
            </div>
        </header>
    );
}
