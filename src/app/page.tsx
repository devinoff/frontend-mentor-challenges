import {ReactElement} from 'react';
import ChallengeCard from '@/components/homepage/ChallengeCard';
import {Viewport} from 'next';
import {Onest} from 'next/font/google';
import Link from "next/link";

const onest = Onest({ subsets: ['latin-ext'] });

// bg color
export const viewport: Viewport = {
    themeColor: '#171717'
};

interface ChallengeInterface { url: string, difficulty: number, image: string, title: string, description: string }

export default async function Home({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }): Promise<ReactElement> {
    const challenges: ChallengeInterface[] = [{
        url: '/challenges/blog-preview-card',
        difficulty: 1,
        image: '/homepage/blog-preview-card.png',
        title: 'Blog preview card',
        description: 'Compact blog card with image, title, and author details.'
    }, {
        url: '/challenges/social-links-profile',
        difficulty: 2,
        image: '/homepage/social-links-profile.png',
        title: 'Social links profile',
        description: 'Minimal profile page with clickable social media links.'
    }, {
        url: '/challenges/product-preview-card-component',
        difficulty: 3,
        image: '/homepage/product-preview-card-component.png',
        title: 'Product preview card component',
        description: 'Responsive product display card.'
    }, {
        url: '/challenges/faq-accordion',
        difficulty: 4,
        image: '/homepage/faq-accordion.png',
        title: 'FAQ accordion',
        description: 'Interactive FAQ section with toggleable answers and smooth transitions.'
    }, {
        url: '/challenges/results-summary-component',
        difficulty: 5,
        image: '/homepage/results-summary-component.png',
        title: 'Results summary component',
        description: 'Dynamically populated result summary component.'
    }, {
        url: '/challenges/ping-single-column-coming-soon-page',
        difficulty: 6,
        image: '/homepage/ping-single-column-coming-soon-page.png',
        title: 'Ping single column coming soon page',
        description: 'Ping single column coming soon page'
    }, {
        url: '/challenges/interactive-rating-component',
        difficulty: 6,
        image: '/homepage/interactive-rating-component.png',
        title: 'Interactive rating component',
        description: 'Interactive component with selectable scores and a dynamic thank-you screen.'
    }, {
        url: '/challenges/intro-component-with-sign-up-form',
        difficulty: 7,
        image: '/homepage/intro-component-with-sign-up-form.png',
        title: 'Intro component with sign-up form',
        description: 'Intro component with sign-up form'
    }];

    const sort = (await searchParams).sort;

    const isAscending: boolean = sort === 'asc';

    // if url params sort is 'asc' sort ascending, otherwise descending
    const sortedChallenges = [...challenges].sort((x, y) => isAscending ? x.difficulty - y.difficulty : y.difficulty - x.difficulty);

    return (
        <main className={`w-full min-h-dvh flex flex-col justify-center items-center bg-neutral-900 text-white py-8 px-8 ${onest.className}`}>
            <h1 className='text-2xl font-semibold'>dvx.lv/portfolio</h1>
            <h2 className='mt-8 text-xl font-medium'>Real world projects</h2>
            <div className='mt-2 max-w-[500px]'>
                <ChallengeCard url='https://skydiscounter.com' image='/homepage/skydiscounter.png' title='skyDiscounter.com' description='Built a dynamic web platform with Next.js, Tailwind CSS, and an Express.js API. Features full internationalization (next-intl) and is heavily SEO-optimized with custom meta tags and structured data.' />
            </div>
            <div className='max-w-[1280px] w-full mt-16 lg:px-8 flex flex-col lg:flex-row justify-between items-center gap-4'>
                <div>
                    <h2 className='text-xl font-medium'>Frontend Mentor challenges</h2>
                    <p className='text-lg font-medium'>All code is available on <a href='https://github.com/devinoff/frontend-mentor-challenges' className='text-blue-300'>GitHub</a></p>
                </div>
                <Link href={isAscending ? '/?sort=desc' : '?sort=asc'} className='w-full lg:w-fit bg-neutral-700 rounded-xl px-6 py-3 cursor-pointer font-medium text-center transition-colors duration-200 ease-in-out hover:bg-neutral-700/80'>
                    {isAscending ? 'Sort by difficulty in descending order' : 'Sort by difficulty in ascending order'}
                </Link>
            </div>
            <div className='mt-6 w-full max-w-[1280px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {sortedChallenges.map((challenge: ChallengeInterface) => (
                    <ChallengeCard key={challenge.title+'_'+challenge.url} url={challenge.url} image={challenge.image} title={challenge.title} description={challenge.description}/>)
                )}
            </div>
        </main>
    );
}
