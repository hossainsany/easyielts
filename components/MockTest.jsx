import { Card } from '.';

const MockTest = ({ content, title, bgAlt, linkText, linkUrl }) => {
    return (
        <section className={`py-24 ${bgAlt ? 'bg-light-gray' : 'bg-white'}`}>
            <div className='container mx-auto'>
                <h2 className='text-2xl lg:text-4xl font-bold mb-6 lg:mb-12'>{title}</h2>
                <div className='flex flex-col lg:flex-row gap-8 justify-between'>
                    {content.map((item) => (
                        <Card
                            key={item.id}
                            title={item.title}
                            desc={item.desc}
                            img={item.img}
                            linkText={linkText}
                            linkUrl={linkUrl}
                            bgAlt={bgAlt}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MockTest;
