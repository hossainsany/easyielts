'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Button, DesktopNav, MobileNav } from '.';
import axios from 'axios';

const navLinks = [
    { id: 1, name: 'home', url: '/' },
    { id: 2, name: 'services', url: '/services' },
    { id: 3, name: 'mock tests', url: '/mock-tests' },
    { id: 4, name: 'free resources', url: '/free-resources' },
    { id: 5, name: 'contact', url: '/contact' },
];

const Nav = () => {
    const router = useRouter();
    const currentUrl = usePathname();
    const [isMobile, setIsMobile] = useState(false);
    const token = false;

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1280);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {});

    const handleLogout = async () => {
        try {
            await axios.get('/api/users/logout');
            router.push('/login');
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <nav className='bg-light-gray py-6 lg:py-4 sticky top-0 shadow-md z-50'>
            <div className='container mx-auto flex items-center justify-between px-4 xl:px-0'>
                <div className='logo flex justify-center items-center w-[256px] max-h-[30px] overflow-hidden'>
                    <div className='max-h-[30px] max-w-[256px]'></div>
                    <Link href='/' className='w-full h-full inline-block'>
                        <Image
                            src='/logo.png'
                            alt='easyielts logo'
                            height={30}
                            width={180}
                            className='h-full w-full object-cover'
                        />
                    </Link>
                </div>
                {!isMobile && <DesktopNav links={navLinks} currentUrl={currentUrl} />}
                {!isMobile && (
                    <ul className='flex justify-end items-center gap-4 w-[256px]'>
                        {token ? (
                            <li>
                                <Button size='sm' onClick={handleLogout}>
                                    Logout
                                </Button>
                            </li>
                        ) : (
                            <>
                                <li>
                                    <Button href='/login' size='sm' varient='outline'>
                                        Login
                                    </Button>
                                </li>
                                <li>
                                    <Button href='/register' size='sm'>
                                        Register
                                    </Button>
                                </li>{' '}
                            </>
                        )}
                    </ul>
                )}
                {isMobile && (
                    <MobileNav links={navLinks} isMobile={isMobile} currentUrl={currentUrl} />
                )}
            </div>
        </nav>
    );
};

export default Nav;
