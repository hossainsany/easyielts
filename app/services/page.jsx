import React from 'react';
import { PageHeader } from '../_components';
import ComingSoon from '@/components/ComingSoon';

export const metadata = {
    title: 'Services',
};

const headerContent = {
    id: 1,
    title: 'Services',
    subtitle: 'Test your skills with our comprehensive IELTS practice tests.',
    img: '/test-bg.jpg',
};

const ServicesPage = () => {
    return (
        <>
            <PageHeader
                pageTitle={headerContent.title}
                subtitle={headerContent.subtitle}
                img={headerContent.img}
            />
            <ComingSoon title={'Services'} />
        </>
    );
};

export default ServicesPage;
