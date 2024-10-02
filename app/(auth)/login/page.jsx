'use client';

import { FormCard } from '@/components';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const LoginPage = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        // try {
        //     setIsLoading(true);
        //     const response = await axios.post('/api/users/login', formData);
        //     console.log(response);
        //     router.push('/profile');
        // } catch (err) {
        //     console.log(err.message);
        // } finally {
        //     setIsLoading(false);
        // }
        console.log('coming soon');
    };

    return (
        <section className='py-24'>
            <div className='container mx-auto px-4 lg:px-0 flex justify-center items-center'>
                <FormCard
                    isLogin={true}
                    formData={formData}
                    setFormData={setFormData}
                    handleSubmit={handleSubmit}
                    isLoading={isLoading}
                />
            </div>
        </section>
    );
};

export default LoginPage;
