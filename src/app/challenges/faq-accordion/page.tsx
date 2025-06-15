import {ReactElement} from "react";
import './style.css';
import Image from "next/image";
import {StarIcon} from "@phosphor-icons/react/ssr";
import {Work_Sans} from 'next/font/google';
import Accordion from "@/components/faq-accordion/Accordion";

const workSans = Work_Sans({ subsets: ['latin-ext'] });

export default function Template(): ReactElement {
    return (
        <main className={`relative w-full min-h-screen bg-dvx-purple-100 flex justify-center items-center px-6 ${workSans.className}`}>
            <Image src='/faq-accordion/bg-mobile.svg' alt='Blog illustration' width={375} height={232} className='absolute md:hidden top-0 left-0 w-full h-auto' />
            <Image src='/faq-accordion/bg-desktop.svg' alt='Blog illustration' width={1440} height={320} className='max-md:hidden absolute top-0 left-0 w-full h-auto' />
            <div className='w-[600px] bg-white z-10 rounded-xl px-6 md:px-10 py-4 pb-1 md:pt-11 md:pb-5 flex flex-col md:gap-3 shadow-lg shadow-dvx-purple-950/20'>
                <div className='flex items-center gap-7'>
                    <StarIcon weight='fill' className='text-dvx-purple-600 text-[24px] md:text-[36px]' />
                    <h1 className='text-[36px] md:text-[56px] font-bold text-dvx-purple-950 leading-[56px]'>FAQs</h1>
                </div>
                <Accordion />
            </div>
        </main>
    );
}