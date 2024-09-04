import Image from 'next/image';
import { Button } from '.';

const Hero = () => {
    return (
        <section className='py-36 bg-white'>
            <div className='container mx-auto px-4 md:px-0 flex justify-between items-center'>
                <div className='flex-1'>
                    <h1 className='text-5xl leading-[56px] font-bold mb-12'>
                        Achieve Your IELTS Dream with Expert Coaching at{' '}
                        <span className='text-accent font-extrabold'>EasyIELTS</span>.
                    </h1>
                    <p className='text-base mb-12'>
                        Master the IELTS exam with personalized coaching from experienced
                        instructors. Whether you’re aiming for a high score for university,
                        immigration, or professional purposes, we offer tailored strategies and
                        practice to help you succeed. Join our community of achievers and turn your
                        aspirations into reality.
                    </p>
                    <Button>Enroll Now</Button>
                </div>
                <div className='flex-1 flex justify-end'>
                    <div className='w-[500px] h-[500px] rounded-2xl overflow-hidden'>
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
