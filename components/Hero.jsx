'use client';

import Image from 'next/image';
import { Button } from '.';

const Hero = () => {
    return (
        <section className='py-24 md:py-36 bg-white'>
            <div className='container mx-auto px-4 xl:px-0 flex flex-col lg:flex-row justify-between items-center'>
                <div className='flex-1 order-2 lg:order-1'>
                    <h1 className='text-4xl md:text-5xl md:leading-[56px] font-bold mb-8 mt-8 lg:mt-0 lg:mb-12'>
                        Achieve Your IELTS Dream with Expert Coaching at{' '}
                        <span className='text-accent font-extrabold'>EasyIELTS</span>.
                    </h1>
                    <p className='text-base mb-8 lg:mb-12'>
                        Master the IELTS exam with personalized coaching from experienced
                        instructors. Whether you’re aiming for a high score for university,
                        immigration, or professional purposes, we offer tailored strategies and
                        practice to help you succeed. Join our community of achievers and turn your
                        aspirations into reality.
                    </p>
                    <Button href='/register'>Enroll Now</Button>
                </div>
                <div className='flex-1 flex justify-end order-1 lg:order-2'>
                    <div className='w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-2xl overflow-hidden'>
                        <Image
                            src='/hero.jpg'
                            height={500}
                            width={500}
                            alt='people in a class'
                            className='w-full h-full object-cover'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
