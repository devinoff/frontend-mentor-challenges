import {ReactElement} from 'react';
import {Metadata, Viewport} from 'next';
import {Overpass} from 'next/font/google';
import InteractiveRatingCard from "@/components/interactive-rating-component/InteractiveRatingCard";

const overpass = Overpass({subsets: ['latin-ext']});

export const metadata: Metadata = {
    title: 'Interactive rating component'
};

// bg color
export const viewport: Viewport = {
    themeColor: '#121417'
};

export default function InteractiveRatingComponent(): ReactElement {
    return (
        <main className={`w-full min-h-dvh text-[15px] bg-irc-grey-950 flex justify-center items-center px-6 ${overpass.className}`}>
            <div className='max-w-[410px] bg-gradient-to-b from-irc-gradient-from to-irc-gradient-to rounded-xl md:rounded-4xl'>
                <InteractiveRatingCard maxRating={15} />
            </div>
        </main>
    );
}