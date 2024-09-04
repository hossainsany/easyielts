import { ResourceCard } from '.';

const resourceItem = [
    {
        id: 1,
        title: 'Free Practice Tests',
        desc: 'Test your skills with our comprehensive IELTS practice tests. Each test simulates the real exam format, helping you to familiarize yourself with the question types and time constraints. ',
        img: '/featured3.jpg',
    },
    {
        id: 2,
        title: 'Guides and Tips',
        desc: 'Test your skills with our comprehensive IELTS practice tests. Each test simulates the real exam format, helping you to familiarize yourself with the question types and time constraints. ',
        img: '/featured2.jpg',
    },
    {
        id: 3,
        title: 'Webinar Recordings',
        desc: 'Test your skills with our comprehensive IELTS practice tests. Each test simulates the real exam format, helping you to familiarize yourself with the question types and time constraints. ',
        img: '/featured1.jpg',
    },
];

const FreeResources = () => {
    return (
        <section className='py-24 md:py-36 bg-white'>
            <div className='container mx-auto px-4 xl:px-0'>
                <h2 className='text-2xl lg:text-4xl font-bold mb-6 md:mb-12'>
                    Free Resources to Boost Your IELTS Preparation
                </h2>
                <div className='flex flex-col lg:flex-row gap-8 justify-between '>
                    {resourceItem.map((item) => (
                        <ResourceCard
                            key={item.id}
                            title={item.title}
                            desc={item.desc}
                            img={item.img}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FreeResources;
