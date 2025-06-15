import {ReactElement} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {ImageIcon} from '@phosphor-icons/react/ssr';

interface ChallengeCardProps {
    url: string;
    image: string;
    title: string;
    description: string;
}

export default function ChallengeCard({ url, image, title, description }: ChallengeCardProps): ReactElement {
    const cardInnerContent = (
        <>
            <div className='relative w-full aspect-[16/9] bg-neutral-700 overflow-hidden'>
                {image ? (
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className='object-cover transition-transform duration-300 ease-in-out group-hover:scale-110'
                        sizes='(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw'
                    />
                ) : (
                    <div className='w-full h-full flex items-center justify-center text-neutral-400'>
                        <ImageIcon size={64} />
                    </div>
                )}
            </div>

            <div className='p-5 flex flex-col flex-grow'>
                <h3 className='text-xl font-semibold text-neutral-100 mb-2 truncate'>
                    {title}
                </h3>
                <p className='text-neutral-300 line-clamp-3 text-balance flex-grow'>
                    {description}
                </p>
            </div>
        </>
    )

    const cardBaseClasses = 'w-full bg-neutral-800 rounded-xl overflow-hidden flex flex-col group';

    if (!url) {
        return (
            <div className={`${cardBaseClasses} cursor-default`}>
                {cardInnerContent}
            </div>
        )
    }

    return (
        <Link href={url} className={cardBaseClasses}>
            {cardInnerContent}
        </Link>
    )
}