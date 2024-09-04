import { FeatureCard } from '.';

const feturedItems = [
    {
        id: 1,
        title: 'Helping With specific thing',
        desc: 'Free training and one-to-one advice from experts to help you outperform! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut pellentesque justo. Nam et erat et quam viverra mattis. ',
        img: '/featured3.jpg',
    },
    {
        id: 2,
        title: 'Helping With specific thing',
        desc: 'Free training and one-to-one advice from experts to help you outperform! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut pellentesque justo. Nam et erat et quam viverra mattis. ',
        img: '/featured2.jpg',
    },
    {
        id: 3,
        title: 'Helping With specific thing',
        desc: 'Free training and one-to-one advice from experts to help you outperform! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut pellentesque justo. Nam et erat et quam viverra mattis. ',
        img: '/featured1.jpg',
    },
];

const Featured = () => {
    return (
        <section className='py-24 md:py-36 bg-light-gray'>
            <div className='container mx-auto px-4 xl:px-0'>
                <h2 className='text-2xl md:text-4xl font-bold mb-6 md:mb-12'>
                    Why Choose EasyIELTS
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8'>
                    {feturedItems.map((item, i) => (
                        <FeatureCard
                            key={item.id}
                            title={item.title}
                            desc={item.desc}
                            img={item.img}
                            isFirst={i === 0}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Featured;
