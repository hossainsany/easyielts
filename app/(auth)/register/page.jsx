'use client';

import { useState } from 'react';
import { FormCard } from '@/components';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const RegisterPage = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        // try {
        //     setIsLoading(true);
        //     const response = await axios.post('/api/users/signup', formData);
        //     console.log(response.data);
        //     router.push('/login');
        // } catch (err) {
        //     console.log('Something went wrong. ' + err.message);
        // } finally {
        //     setIsLoading(false);
        // }

        console.log('coming soon');
    };

    return (
        <section className=' py-24'>
            <div className='container mx-auto px-4 lg:px-0 flex justify-center items-center'>
                <FormCard
                    isLogin={false}
                    formData={formData}
                    setFormData={setFormData}
                    handleSubmit={handleSubmit}
                    isLoading={isLoading}
                />
            </div>
        </section>
    );
};

export default RegisterPage;
