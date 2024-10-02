import { Button } from '.';
import Image from 'next/image';

const Cta = () => {
    return (
        <section className='py-24 relative bg-[#A9A9A9] overflow-hidden z-10'>
            <div className='absolute w-full h-full top-0 left-0 z-[-1]'>
                <Image
                    src='/noise-accent.png'
                    alt=''
                    width={1920}
                    height={500}
                    className='h-full w-full object-cover'
                />
            </div>
            <div className='absolute w-full h-full top-0 left-0 z-[-2] blur-md scale-[1.1] '>
                <Image
                    src='/cta-bg.jpg'
                    alt=''
                    width={1920}
                    height={500}
                    className='h-full w-full object-cover saturate-[15%]'
                />
            </div>
            <div className='container mx-auto flex flex-col md:flex-row justify-between px-4 lg:px-0'>
                <div className='w-full md:w-[70%] text-white'>
                    <h2 className='text-2xl md:text-4xl font-bold mb-2'>
                        Elevate Your IELTS Preparation with Premium Practice
                    </h2>
                    <p>
                        Test your skills with our premium IELTS practice tests, designed to mirror
                        the real exam. Get detailed feedback, track your progress, and identify
                        areas for improvement. With timed sessions and authentic question formats,
                        you’ll be fully prepared for test day.
                    </p>
                </div>
                <div className='w-full md:w-[30%] flex justify-start md:justify-end items-center mt-4 md:mt-0'>
                    <Button href='/register' className=' shadow-md' size='lg'>
                        Enroll Now
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Cta;
