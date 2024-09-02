import Image from 'next/image';

const Nav = () => {
    return (
        <section className='bg-light-gray'>
            <div className='container mx-auto'>
                <div className='logo'>
                    <Image src='/logo.png' alt='' height={20} width={150} />
                </div>
                <div className='links'></div>
                <div className='mobile-links'></div>
            </div>
        </section>
    );
};

export default Nav;
