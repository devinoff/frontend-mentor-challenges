import {ReactElement} from "react";
import {Hanken_Grotesk} from "next/font/google";
import {BrainIcon, ChatCircleTextIcon, EyeIcon, LightningIcon} from "@phosphor-icons/react/ssr";
import {Metadata, Viewport} from "next";

const hankenGrotesk = Hanken_Grotesk({ subsets: ['latin-ext'] });

export const metadata: Metadata = {
    title: 'Results summary component'
};

// bg color
export const viewport: Viewport = {
    themeColor: '#7857ff'
};

// bg-rsc-red/5 bg-rsc-yellow/5 bg-rsc-teal/5 bg-rsc-blue/5 text-rsc-red text-rsc-yellow text-rsc-teal text-rsc-blue

interface SummaryCardProps {
    color: 'red' | 'yellow' | 'teal' | 'blue';
    icon: ReactElement;
    text: string;
    points: number;
}


const resultData: SummaryCardProps[] = [{
    color: 'red',
    icon: <LightningIcon weight='bold' />,
    text: 'Reaction',
    points: 80
},
    {
        color: 'yellow',
        icon: <BrainIcon weight='bold' />,
        text: 'Memory',
        points: 92
    },
    {
        color: 'teal',
        icon: <ChatCircleTextIcon weight='bold' />,
        text: 'Verbal',
        points: 61
    },
    {
        color: 'blue',
        icon: <EyeIcon weight='bold' />,
        text: 'Visual',
        points: 73
    }];

const resultAveragePoints: number = Math.round(resultData.map(result => result.points).reduce((sum, points) => sum + points, 0) / resultData.length);

const SummaryCard = ({ color, icon, text, points }: SummaryCardProps) => (
    <div className={`w-full h-14 bg-rsc-${color}/5 rounded-[10px] flex justify-between items-center px-4`}>
        <div className={`flex items-center gap-3 text-rsc-${color}`}>
            {icon}
            {text}
        </div>
        <span className='text-neutral-400 font-bold'>
            <span className='text-black'>{points}</span> / 100
        </span>
    </div>
);

export default function ResultsSummaryComponent(): ReactElement {
    return (
        <main className={`w-full md:min-h-dvh text-lg font-medium bg-rsc-bg-slate-blue md:bg-rsc-pale-blue flex justify-center items-center ${hankenGrotesk.className}`}>
            <div className='grid grid-cols-1 md:grid-cols-2 w-[768px] bg-white rounded-b-[28px] md:rounded-[28px] overflow-hidden shadow-xl'>
                <div className='flex flex-col items-center bg-gradient-to-b from-rsc-bg-slate-blue to-rsc-bg-royal-blue rounded-b-[28px] md:rounded-[28px] px-14 py-[38px]'>
                    <span className='text-rsc-lavender text-2xl font-bold'>Your Result</span>
                    <div className='flex flex-col justify-center items-center gap-1.5 bg-gradient-to-b from-rsc-circle-violet-blue to-rsc-circle-persian-blue rounded-full w-[210px] h-[210px] mt-[34px]'>
                        <span className='text-white text-7xl font-extrabold'>{resultAveragePoints}</span>
                        <span className='text-rsc-lavender text-lg'>of 100</span>
                    </div>
                    <span className='text-white text-[32px] font-bold leading-8 mt-6'>Great</span>
                    <span className='text-rsc-lavender text-center leading-[23.5px] mt-[18px]'>You scored higher than 65% of the people who have taken these tests.</span>
                </div>
                <div className='flex flex-col px-10 py-[38px] gap-7'>
                    <span className='text-rsc-dark-gray-blue text-2xl font-bold'>Summary</span>
                    <div className='flex flex-col gap-4'>
                        {resultData.map((result) => (<SummaryCard key={result.text} color={result.color} icon={result.icon} text={result.text} points={result.points} />))}
                    </div>
                    <button className='relative w-full h-14 bg-rsc-dark-gray-blue rounded-full text-white font-bold mt-3 cursor-pointer overflow-hidden group'>
                        <span className='relative z-10'>
                            Continue
                        </span>
                        <span className='absolute inset-0 bg-gradient-to-b from-rsc-bg-slate-blue to-rsc-bg-royal-blue opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100'>
                        </span>
                    </button>
                </div>
            </div>
        </main>
    );
}