import ComingSoon from '@/components/ComingSoon';
import { PageHeader } from '../_components';

const headerContent = {
    id: 1,
    title: 'Free Resources',
    subtitle: 'Test your skills with our comprehensive IELTS practice tests.',
    img: '/test-bg.jpg',
};

const FreeResourcesPage = () => {
    return (
        <>
            <PageHeader
                pageTitle={headerContent.title}
                subtitle={headerContent.subtitle}
                img={headerContent.img}
            />
            <ComingSoon title={'Resources'} />
        </>
    );
};

export default FreeResourcesPage;
