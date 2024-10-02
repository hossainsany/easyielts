import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <section className='bg-white'>
            <div className='container mx-auto px-4 md:px-0 min-h-[60vh] flex flex-col justify-center items-center'>
                <h1 className='text-4xl font-bold pb-6 text-accent'>404 - Not Found!</h1>
                <p>Website still under construction, some features may not work as expected.</p>
                <p>
                    Return{' '}
                    <Link href='/' className='text-accent hover:underline'>
                        Home
                    </Link>
                </p>
            </div>
        </section>
    );
};

export default NotFound;
