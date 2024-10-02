import Image from 'next/image';

const PageHeader = ({ pageTitle, subtitle, img }) => {
    return (
        <section className='py-32 relative'>
            <div className='absolute w-full h-full left-0 top-0 z-[-1]'>
                <Image
                    src='/noise-accent.png'
                    width={1920}
                    height={500}
                    className='w-full h-full object-cover'
                    alt=''
                />
            </div>
            <div className='absolute w-full h-full left-0 top-0 z-[-2] blur-md scale-[1.1]'>
                <Image
                    src={img}
                    width={1920}
                    height={500}
                    className='w-full h-full object-cover'
                    alt=''
                />
            </div>
            <div className='container mx-auto text-white'>
                <h1 className='text-4xl md:text-5xl md:leading-[56px] font-bold text-center'>
                    {pageTitle}
                </h1>
                <p className='text-center text-base'>{subtitle}</p>
            </div>
        </section>
    );
};

export default PageHeader;
