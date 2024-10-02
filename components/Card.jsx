import Image from 'next/image';
import { Button } from '.';

const Card = ({ title, desc, img, linkText, linkUrl, bgAlt = false }) => {
    return (
        <div className={`p-5 rounded-lg ${bgAlt ? 'bg-white' : 'bg-light-gray'}`}>
            <div className='rounded-md overflow-hidden mb-4'>
                <Image
                    src={img}
                    height={300}
                    width={300}
                    className='w-full h-full object-cover'
                    alt=''
                />
            </div>
            <div className=''>
                <h3 className='text-xl font-semibold mb-4'>{title}</h3>
                <p className='text-base mb-6'>{desc}</p>
                <Button href={linkUrl}>{linkText}</Button>
            </div>
        </div>
    );
};

export default Card;
