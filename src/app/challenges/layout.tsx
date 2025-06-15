import Link from 'next/link';
import {ArrowLeftIcon} from "@phosphor-icons/react/ssr";

export default function ChallengesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            {children}
            <Link href='/' className='fixed top-5 left-5 rounded-full p-3 bg-white border-2 border-neutral-700 transition-[opacity,scale] duration-300 ease-in-out opacity-80 hover:opacity-100 hover:scale-105' aria-label='Back'>
                <ArrowLeftIcon size={24} weight='bold' className='text-neutral-700' />
            </Link>
        </>
    );
}