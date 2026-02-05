import React from 'react'
import Link from "next/link";
import Image from "next/image";
import NavItem from "@/components/NavItem";
import UseDropdown from "@/components/UseDropdown";

const Header = () => {
    return (
        <header className='sticky top-0 header'>
            <div className='container header-wrapper'>
                <Link href='/'>
                    <Image src='/assets/icons/logo.svg' alt='StockPulse logo' width={140} height={32} className='h-8 w-auto' />
                </Link>
                <nav className='hidden sm:block'>
                    <NavItem/>
                </nav>
                <UseDropdown/>
            </div>
        </header>
    )
}
export default Header
