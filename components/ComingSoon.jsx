import React from 'react';

const ComingSoon = ({ title, vh = false }) => {
    return (
        <section className={`bg-white ${vh ? '' : 'py-24'}`}>
            <div
                className={`container px-4 lg:px-0 mx-auto text-center flex justify-center items-center flex-col ${
                    vh ? 'min-h-[60vh]' : ''
                } `}
            >
                <h2 className='text-4xl font-bold text-accent'>{title} Page is Coming Soon!</h2>
                <p className='mt-2 '>Exciting Things Are on the Way – Stay Tuned for Our Launch!</p>
            </div>
        </section>
    );
};

export default ComingSoon;
