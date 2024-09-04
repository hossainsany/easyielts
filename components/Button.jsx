import Link from 'next/link';

const Button = ({ children }) => {
    return (
        <Link
            href='/'
            className='py-3 px-6 rounded-md bg-accent hover:bg-accent-dark text-white font-medium inline-block transition-all cursor-pointer'
        >
            {children}
        </Link>
    );
};

export default Button;
