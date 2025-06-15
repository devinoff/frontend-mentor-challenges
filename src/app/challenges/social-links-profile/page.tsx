import {ReactElement} from "react";
import Link from "next/link";
import {Inter} from 'next/font/google';
import Image from "next/image";
import {Metadata, Viewport} from "next";

const inter = Inter({ subsets: ['latin-ext'] });

export const metadata: Metadata = {
    title: 'Social links profile'
};

// bg color
export const viewport: Viewport = {
    themeColor: '#141414'
};

export default function SocialLinksProfile(): ReactElement {
    const links: { title: string, url: string }[] = [{
        title: 'GitHub',
        url: 'https://github.com'
    }, {
        title: 'Frontend Mentor',
        url: 'https://www.frontendmentor.io'
    }, {
        title: 'LinkedIn',
        url: 'https://linkedin.com'
    }, {
        title: 'Twitter',
        url: 'https://twitter.com'
    }, {
        title: 'Instagram',
        url: 'https://instagram.com'
    }];

    return (
        <main className={`w-full min-h-dvh bg-slp-gray-900 text-white flex flex-col justify-center items-center py-12 px-6 text-sm ${inter.className}`}>
            <section className='w-full max-w-96 flex flex-col items-center bg-slp-gray-800 rounded-xl p-10'>
                <Image src='/social-links-profile/avatar.jpeg' alt='Avatar' width={88} height={88} className='rounded-full' />
                <h1 className='mt-8 text-2xl font-semibold'>Jessica Randall</h1>
                <h2 className='mt-2 text-slp-green font-semibold'>London, United Kingdom</h2>
                <p className='mt-6 text-gray-200'>&#34;Front-end developer and avid reader.&#34;</p>
                <div className='mt-7 w-full flex flex-col gap-4'>
                    {links.map((link) => (
                        <Link key={link.title} href={link.url} className='w-full h-11 bg-slp-gray-700 rounded-md flex justify-center items-center font-semibold transition-colors duration-300 ease-in-out hover:bg-slp-green hover:text-slp-gray-700'>
                            {link.title}
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}