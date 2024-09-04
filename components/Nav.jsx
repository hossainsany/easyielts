'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { DesktopNav, MobileNav } from '.';

const navLinks = [
    { id: 1, name: 'home', url: '/' },
    { id: 2, name: 'services', url: '/services' },
    { id: 3, name: 'mock test', url: '/mock' },
    { id: 4, name: 'free resources', url: '/free' },
    { id: 5, name: 'about', url: '/about' },
    { id: 6, name: 'login', url: '/login' },
    { id: 7, name: 'register', url: '/register' },
];

const Nav = () => {
    const [isMobile, setIsMobile] = useState(false);
    const currentUrl = usePathname();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1025);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className='bg-light-gray py-8 lg:py-5 relative'>
            <div className='container mx-auto flex items-center justify-between px-4 lg:px-0'>
                <div className='logo'>
                    <Link href='/'>
                        <Image src='/logo.png' alt='' height={0} width={180} />
                    </Link>
                </div>
                <DesktopNav links={navLinks} currentUrl={currentUrl} />
                <MobileNav links={navLinks} isMobile={isMobile} currentUrl={currentUrl} />
            </div>
        </section>
    );
};

export default Nav;
