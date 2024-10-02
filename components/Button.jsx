import Link from 'next/link';

const Button = ({
    children,
    onClick,
    href,
    varient = 'full',
    size = 'md',
    disabled = false,
    className = '',
}) => {
    const baseStyles =
        'font-semibold rounded-md focus:outline-none border-2 border-accent hover:border-accent-dark transition-all ';

    const sizes = {
        sm: 'px-6 py-2 text-sm',
        md: 'px-6 py-3',
        lg: 'px-12 py-3 text-lg',
        wide: 'py-3 w-full',
    };

    const varients = {
        full: 'bg-accent hover:bg-accent-dark text-white',
        outline: 'text-black bg-transparent  ',
    };

    const sizeStyles = sizes[size];
    const varientStyles = varients[varient];

    if (href) {
        return (
            <Link
                className={`${baseStyles} ${varientStyles} ${sizeStyles} ${className} inline-block ${
                    disabled ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                onClick={onClick}
                disabled={disabled}
                href={href}
            >
                {children}
            </Link>
        );
    } else {
        return (
            <button
                className={`${baseStyles} ${varientStyles} ${sizeStyles} ${className} ${
                    disabled ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                onClick={onClick}
                disabled={disabled}
            >
                {children}
            </button>
        );
    }
};

export default Button;
