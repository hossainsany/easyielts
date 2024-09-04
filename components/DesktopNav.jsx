import Link from 'next/link';

const DestopNav = ({ links, currentUrl }) => {
    return (
        <ul className='hidden lg:flex justify-start items-center'>
            {links.map((link) => (
                <li key={link.id} className='ml-6'>
                    <Link
                        href={link.url}
                        className={`capitalize font-medium hover:text-accent transition-all ${
                            currentUrl === link.url ? 'text-accent' : ''
                        }`}
                    >
                        {link.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default DestopNav;
