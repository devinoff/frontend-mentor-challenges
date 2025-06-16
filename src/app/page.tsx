import {ReactElement} from 'react';
import ChallengeCard from '@/components/homepage/ChallengeCard';
import {Viewport} from 'next';
import {Onest} from 'next/font/google';

const onest = Onest({ subsets: ['latin-ext'] });

// bg color
export const viewport: Viewport = {
    themeColor: '#171717'
};

export default function Home(): ReactElement {
    const challenges: { url: string, image: string, title: string, description: string }[] = [{
        url: '/challenges/social-links-profile',
        image: '/homepage/social-links-profile.png',
        title: 'Social links profile',
        description: 'Minimal profile page with clickable social media links.'
    }, {
        url: '/challenges/blog-preview-card',
        image: '/homepage/blog-preview-card.png',
        title: 'Blog preview card',
        description: 'Compact blog card with image, title, and author details.'
    }, {
        url: '/challenges/faq-accordion',
        image: '/homepage/faq-accordion.png',
        title: 'FAQ accordion',
        description: 'Interactive FAQ section with toggleable answers and smooth transitions.'
    }, {
        url: '/challenges/results-summary-component',
        image: '/homepage/results-summary-component.png',
        title: 'Results summary component',
        description: 'Dynamically populated result summary component.'
    }, {
        url: '/challenges/product-preview-card-component',
        image: '/homepage/product-preview-card-component.png',
        title: 'Product preview card component',
        description: 'Responsive product display card.'
    }, {
        url: '/challenges/interactive-rating-component',
        image: '/homepage/interactive-rating-component.png',
        title: 'Interactive rating component',
        description: 'Interactive component with selectable scores and a dynamic thank-you screen.'
    }];

    return (
        <main className={`w-full min-h-dvh flex flex-col justify-center items-center gap-2 bg-neutral-900 text-white py-8 px-8 ${onest.className}`}>
            <h1 className='text-xl font-semibold'>dvx.lv/portfolio</h1>
            <h2 className='text-lg font-medium'>All code is available on <a href='https://github.com/devinoff/frontend-mentor-challenges' className='text-blue-300'>GitHub</a></h2>
            <div className='mt-6 w-full max-w-[1280px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {challenges.map((challenge) => (
                    <ChallengeCard key={challenge.title} url={challenge.url} image={challenge.image} title={challenge.title} description={challenge.description}/>)
                )}
            </div>
        </main>
    );
}
