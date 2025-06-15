import {ReactElement} from "react";
import ChallengeCard from "@/components/homepage/ChallengeCard";

export default function Home(): ReactElement {
    const challenges: { url: string, image: string, title: string, description: string }[] = [{
        url: '/challenges/social-links-profile',
        image: '/homepage/social-links-profile.png',
        title: 'Social links profile',
        description: 'A simple profile page with social media links.'
    }, {
        url: '/challenges/blog-preview-card',
        image: '/homepage/blog-preview-card.png',
        title: 'Blog preview card',
        description: 'A simple preview card for a blog post.'
    }, {
        url: '',
        image: '',
        title: 'Challenge 3: Coming Soon',
        description: 'Another exciting challenge is on its way!'
    }];

    return (<main
        className='w-full min-h-screen flex flex-col justify-center items-center bg-neutral-900 text-white py-12 px-8'>
        <div className='w-full max-w-[1280px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {challenges.map((challenge) => (
                <ChallengeCard key={challenge.title} url={challenge.url} image={challenge.image} title={challenge.title} description={challenge.description}/>)
            )}
        </div>
    </main>);
}
