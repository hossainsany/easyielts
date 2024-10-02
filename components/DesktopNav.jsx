import Link from 'next/link';

const DestopNav = ({ links, currentUrl }) => {
    return (
        <ul className='flex justify-start items-center gap-6'>
            {links.map((link) => (
                <li key={link.id}>
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
