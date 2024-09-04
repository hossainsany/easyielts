import Image from 'next/image';

const FeatureCard = ({ title, desc, img, isFirst }) => {
    return (
        <div
            className={`flex first:flex-col  first:items-start items-center bg-white overflow-hidden rounded-lg first:row-span-2`}
        >
            <div className='p-8 '>
                <h3 className='text-xl font-semibold mb-4'>{title}</h3>
                <p>{desc}</p>
            </div>
            <div className={`bg-accent h-full shrink-0  ${isFirst ? 'w-full' : 'w-[40%]'}`}>
                <Image
                    src={img}
                    alt=''
                    width={400}
                    height={400}
                    className='w-full h-full object-cover'
                />
            </div>
        </div>
    );
};

export default FeatureCard;
