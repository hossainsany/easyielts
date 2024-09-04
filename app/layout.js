import { Inter } from 'next/font/google';
import './globals.css';
import { Footer, Nav } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'EasyIELTS',
    description:
        'Boost your IELTS score with EasyIELTS! Our expert coaching offers personalized lessons, practice tests, and proven strategies to help you succeed. Start your journey to achieving your desired band score today!',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <Nav />
                {children}
                <Footer />
            </body>
        </html>
    );
}
