import Link from 'next/link';
import { Button } from '.';

const FormCard = ({ isLogin, formData, setFormData, handleSubmit, isLoading }) => {
    return (
        <div className=' min-h-[40vh] w-[350px] bg-light-gray rounded-lg p-6 flex flex-col justify-between'>
            <div className=''>
                <div className=''>
                    <h1 className='text-2xl font-semibold mb-8'>
                        {isLogin ? 'Login' : 'Register'}
                    </h1>
                </div>
                <form
                    className='flex flex-col justify-center items-center gap-4'
                    onSubmit={handleSubmit}
                >
                    {!isLogin && (
                        <input
                            type='text'
                            className='w-full py-3 rounded-md px-3'
                            placeholder='Full Name'
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    )}
                    <input
                        type='email'
                        className='w-full py-3 rounded-md px-3'
                        placeholder='Email'
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    <input
                        type='password'
                        className='w-full py-3 rounded-md px-3'
                        placeholder='Password'
                        required
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                    <Button size='wide' disabled={isLoading ? true : false}>
                        {isLoading ? (
                            <span className='flex justify-center items-center'>
                                <svg
                                    className='animate-spin h-[24px] w-[24px] fill-white'
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 512 512'
                                >
                                    <path d='M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z' />
                                </svg>
                            </span>
                        ) : isLogin ? (
                            'Login'
                        ) : (
                            'Register'
                        )}
                    </Button>
                </form>
            </div>

            <div className='flex justify-between mt-4'>
                <p>{isLogin ? 'Dont Have an Account?' : 'Already have an account?'}</p>{' '}
                <Link
                    href={isLogin ? '/register' : '/login'}
                    className='text-accent font-semibold hover:underline'
                >
                    {isLogin ? 'Register Now' : 'Login'}
                </Link>
            </div>
        </div>
    );
};

export default FormCard;
