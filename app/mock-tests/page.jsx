import React from 'react';
import { PageHeader } from '../_components';
import { Card, Cta, MockTest } from '@/components';

export const metadata = {
    title: 'Practice Tests',
};

const content = [
    {
        id: 1,
        title: 'Reading',
        desc: 'Test your skills with our comprehensive IELTS practice tests. Each test simulates the real exam format, helping you to familiarize yourself with the question types and time constraints.',
        img: '/featured1.jpg',
    },
    {
        id: 2,
        title: 'Writing',
        desc: 'Test your skills with our comprehensive IELTS practice tests. Each test simulates the real exam format, helping you to familiarize yourself with the question types and time constraints.',
        img: '/featured2.jpg',
    },
    {
        id: 3,
        title: 'Listening',
        desc: 'Test your skills with our comprehensive IELTS practice tests. Each test simulates the real exam format, helping you to familiarize yourself with the question types and time constraints.',
        img: '/featured3.jpg',
    },
];

const headerContent = {
    id: 1,
    title: 'Mock Test',
    subtitle: 'Test your skills with our comprehensive IELTS practice tests.',
    img: '/test-bg.jpg',
};

const MockTestsPage = () => {
    return (
        <>
            <PageHeader
                pageTitle={headerContent.title}
                subtitle={headerContent.subtitle}
                img={headerContent.img}
            />
            <MockTest
                content={content}
                title={'Free Practice Tests'}
                linkText={'Start Practicing'}
                linkUrl={'/mock-tests/'}
            />
            <MockTest
                content={content}
                title={'Try Our Premium Practice Tests'}
                bgAlt={true}
                linkText={'Start Practicing'}
                linkUrl={'/mock-tests/'}
            />
            <Cta />
        </>
    );
};

export default MockTestsPage;
