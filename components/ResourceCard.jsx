import Image from 'next/image';
import { Button } from '.';

const ResourceCard = ({ title, desc, img }) => {
    return (
        <div className='bg-light-gray p-5 rounded-lg'>
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
                <Button>Learn More</Button>
            </div>
        </div>
    );
};

export default ResourceCard;
