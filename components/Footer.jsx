import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className='pt-24 md:pt-36 pb-8 md:pb-10 bg-[#d9d9d9]'>
            <div className='container mx-auto px-4 xl:px-0 flex flex-col md:flex-row justify-between '>
                <div className='w-full md:w-[40%] mb-8 md:mb-0'>
                    <div className='w-[350px] mb-4'>
                        <Image
                            src={'/logo.png'}
                            alt=''
                            height={50}
                            width={500}
                            className='w-full h-full object-cover'
                        />
                    </div>
                    <p>
                        EasyIELTS is an online IELTS coaching center offering personalized courses,
                        expert guidance, and proven strategies to boost your band score. Prepare for
                        the IELTS exam with flexible, interactive lessons, practice tests, and tips
                        to succeed. Join EasyIELTS today!
                    </p>
                </div>
                <div className='flex flex-col md:flex-row gap-x-20'>
                    <ul className='mb-8 md:mb-0'>
                        <h4 className='text-xl font-bold mb-2'>Important Links</h4>
                        <li>
                            <Link href='' className='hover:text-accent transition-all'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href='' className='hover:text-accent transition-all'>
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link href='' className='hover:text-accent transition-all'>
                                Mock Tests
                            </Link>
                        </li>
                        <li>
                            <Link href='' className='hover:text-accent transition-all'>
                                Free Resources
                            </Link>
                        </li>
                        <li>
                            <Link href='' className='hover:text-accent transition-all'>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <ul className=''>
                        <h4 className='text-xl font-bold mb-2'>Socials</h4>
                        <li>
                            <a
                                href='https://www.facebook.com/profile.php?id=61566000464121'
                                className='hover:text-accent transition-all'
                            >
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://www.instagram.com/easyieltsbd/'
                                className='hover:text-accent transition-all'
                            >
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a
                                href='mailto:easyieltsofficial@gmail.com'
                                className='hover:text-accent transition-all'
                            >
                                Email
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://youtube.com/@easyieltsbd'
                                className='hover:text-accent transition-all'
                            >
                                Youtube
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <p className='text-center pt-20 text-sm opacity-70'>
                All rights reserved{' '}
                <span className='text-accent font-medium'>© 2024 EasyIELTS</span>.
            </p>
            <p className='text-center text-sm opacity-70'>
                Developed by{' '}
                <a href='https://webexis.net' className='text-accent font-medium hover:underline'>
                    Webexis
                </a>
                .
            </p>
        </footer>
    );
};

export default Footer;
