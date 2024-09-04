'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const MobileNav = ({ links, isMobile, currentUrl }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        setIsOpen((prev) => (isMobile ? false : prev));
    }, [isMobile]);

    return (
        <div className={`${isMobile ? 'block' : 'hidden'}`}>
            <div className='relative  h-[26px] w-[35px] cursor-pointer' onClick={handleToggle}>
                <div className='w-[35px] h-[5px] bg-accent rounded absolute top-0 left-0'></div>
                <div className='w-[35px] h-[5px] bg-accent rounded absolute top-[50%] left-0 translate-y-[-50%]'></div>
                <div className='w-[35px] h-[5px] bg-accent rounded absolute bottom-0 left-0'></div>
            </div>
            <ul
                className={`absolute w-full md:w-[30%] h-auto left-0 md:left-[70%] top-[90px] bg-light-gray/[70%] backdrop-blur-md py-8 flex flex-col justify-center items-center md:justify-end md:items-center md:rounded-md gap-4 ${
                    isOpen ? 'flex' : 'hidden'
                }`}
            >
                {links.map((link) => (
                    <li key={link.id} className=' md:min-w-[165px] md:text-right'>
                        <Link
                            href={link.url}
                            className={`capitalize font-medium ${
                                currentUrl === link.url ? 'text-accent' : ''
                            }`}
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MobileNav;
