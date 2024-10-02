import { FaqItem } from '.';

const faqItems = [
    {
        id: 1,
        ques: 'What is EasyIELTS?',
        ans: 'EasyIELTS offers personalized coaching to help you achieve your desired score on the IELTS exam. Our experienced instructors provide tailored strategies and practice sessions to guide you through every step of your IELTS preparation, whether for university, immigration, or professional purposes.',
    },
    {
        id: 2,
        ques: 'How can EasyIELTS help me achieve my IELTS goals?',
        ans: 'Our expert coaches create customized study plans based on your individual strengths and areas for improvement. We offer targeted practice sessions, feedback, and strategies to maximize your performance in all sections of the IELTS exam: Listening, Reading, Writing, and Speaking.',
    },
    {
        id: 3,
        ques: 'Who are the instructors at EasyIELTS?',
        ans: ' Our instructors are highly experienced and qualified professionals with a deep understanding of the IELTS exam. They bring years of teaching experience and are dedicated to helping you achieve your best possible score.',
    },
    {
        id: 4,
        ques: 'What makes EasyIELTS different from other IELTS preparation programs?',
        ans: 'EasyIELTS stands out due to our personalized approach. We tailor our coaching to fit your specific needs and goals, offering one-on-one attention and strategies that address your unique challenges. Our focus is on providing practical, effective preparation that aligns with your personal aspirations.',
    },
    {
        id: 5,
        ques: 'What is the success rate of EasyIELTS students?',
        ans: 'Many of our students achieve their desired scores and go on to succeed in their academic, professional, or immigration pursuits. While individual results can vary, our tailored approach and expert coaching are designed to maximize your chances of success.',
    },
    {
        id: 6,
        ques: 'How can I contact EasyIELTS for more information?',
        ans: 'For more information or any specific queries, you can reach us through our website’s contact form, email us directly, or call our support team. We’re here to assist you and provide the information you need to start your IELTS preparation journey.',
    },
];

const Faq = () => {
    return (
        <section className='py-24 md:py-36 bg-light-gray'>
            <div className='container mx-auto px-4 xl:px-0'>
                <h2 className='text-2xl md:text-4xl font-bold mb-8 md:mb-12'>
                    Frequently Asked Questions (FAQ)
                </h2>
                <div className=''>
                    {faqItems.map((item) => (
                        <FaqItem key={item.id} ques={item.ques} ans={item.ans} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;
