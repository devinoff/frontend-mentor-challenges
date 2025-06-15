import {ReactElement} from "react";
import './style.css';
import Image from "next/image";
import {Figtree} from 'next/font/google';

const figtree = Figtree({ subsets: ['latin-ext'] });

export default function BlogCardPreview(): ReactElement {
    return (
        <main className={`w-full min-h-screen bg-dvx-yellow flex justify-center items-center p-6 font-medium ${figtree.className}`}>
            <div className='max-w-96 bg-white rounded-[20px] border border-dvx-gray-950 p-6 flex flex-col gap-6 shadow-[8px_8px_0_0_rgba(0,0,0,1)]'>
                <Image src='/blog-preview-card/illustration.svg' alt='Blog illustration' width={336} height={200} className='rounded-[10px] w-full h-auto' />
                <div className='flex flex-col items-start gap-3'>
                    <span className='font-extrabold px-3 py-1 bg-dvx-yellow rounded-sm'>Learning</span>
                    <span>Published 21 Dec 2023</span>
                    <h1 className='text-2xl font-extrabold transition-colors duration-200 ease-in-out hover:text-dvx-yellow cursor-pointer'>HTML & CSS foundations</h1>
                    <p className='text-dvx-gray-500'>These languages are the backbone of every website, defining structure, content, and presentation.</p>
                </div>
                <div className='flex gap-3 items-center'>
                    <Image src='/blog-preview-card/avatar.webp' alt='Avatar' width={32} height={32} className='rounded-full' />
                    <span className='font-extrabold'>Greg Hooper</span>
                </div>
            </div>
        </main>
    );
}