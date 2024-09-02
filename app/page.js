import { Nav } from '@/components';
import Image from 'next/image';

export default function Home() {
    return (
        <main className='h-screen w-full flex justify-center items-center'>
            <div className='flex justify-center items-center'>
                <Image src='/logo.png' alt='easy ielts logo' height={500} width={1000} />
            </div>

            {/* <Nav /> */}
        </main>
    );
}
