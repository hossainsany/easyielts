'use client';

import { useState } from 'react';

const FaqItem = ({ ques, ans }) => {
    const [faqToggled, setFaqToggled] = useState(false);

    const handleToggle = () => {
        setFaqToggled((prev) => !prev);
    };

    return (
        <div className='w-full bg-white mb-4 p-4 rounded-md cursor-pointer' onClick={handleToggle}>
            <div className=' flex justify-between items-center w-full cursor-pointer'>
                <h3 className='text-xl font-semibold'>{ques}</h3>
                <div className=''>
                    {faqToggled ? (
                        <div className=''>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 384 512'
                                className='h-[20px] w-[20px] fill-accent'
                            >
                                <path d='M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z' />
                            </svg>
                        </div>
                    ) : (
                        <div className=''>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 448 512'
                                className='h-[24px] w-[24px] fill-accent'
                            >
                                <path d='M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z' />
                            </svg>
                        </div>
                    )}
                </div>
            </div>

            <div className={faqToggled ? `block` : 'hidden'}>
                <p className='text-base pt-4'>{ans}</p>
            </div>
        </div>
    );
};

export default FaqItem;
