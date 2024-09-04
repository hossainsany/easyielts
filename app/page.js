import { Faq, Featured, Footer, FreeResources, Hero, Nav } from '@/components';

export default function Home() {
    return (
        <main>
            <Hero />
            <Featured />
            <FreeResources />
            <Faq />
        </main>
    );
}
