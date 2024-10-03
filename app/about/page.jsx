import { PageHeader } from '../_components';

export const metadata = {
    title: 'About Us',
};

const headerContent = {
    id: 1,
    title: 'About Us',
    subtitle: 'Test your skills with our comprehensive IELTS practice tests.',
    img: '/test-bg.jpg',
};

const AboutPage = () => {
    return (
        <>
            <PageHeader
                pageTitle={headerContent.title}
                subtitle={headerContent.subtitle}
                img={headerContent.img}
            />
        </>
    );
};
export default AboutPage;
