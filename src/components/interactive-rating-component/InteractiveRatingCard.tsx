'use client';

import {ReactElement, useState} from "react";
import {StarIcon} from "@phosphor-icons/react";
import Image from "next/image";

function RatingView({ handleSubmit, handleRatingSelect, rating, maxRating }: { handleSubmit: () => void, handleRatingSelect: (newRating: number) => void, rating: number | null, maxRating: number }): ReactElement {
    const ratingViewMax = 5;
    const allRatingNumbers = Array.from({ length: maxRating }, (_, i) => i + 1);

    const rows: number[][] = [];
    for (let i = 0; i < allRatingNumbers.length; i += ratingViewMax) {
        rows.push(allRatingNumbers.slice(i, i + ratingViewMax));
    }

    return (
        <div className='flex flex-col p-6 gap-5'>
            <div className='w-[40px] h-[40px] flex justify-center items-center rounded-full bg-irc-grey-900 text-irc-orange'>
                <StarIcon size={14} weight='fill'/>
            </div>
            <h1 className='text-2xl text-white font-medium'>How did we do?</h1>
            <p className='text-sm md:text-[15px] text-irc-grey-500'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            <div className='mt-2 flex flex-col gap-3'>
                {rows.map((row, index) => (
                    <div key={index} className={`flex ${row.length === ratingViewMax ? 'justify-between' : 'justify-around'}`}>
                        {row.map((number) => (
                            <button key={number} className={`w-[40px] h-[40px] flex justify-center items-center rounded-full text-xs font-bold cursor-pointer transition-colors duration-200 ease-in-out ${rating === number ? 'bg-white text-irc-grey-900': 'bg-irc-grey-900 text-irc-grey-500'} hover:bg-irc-orange hover:text-irc-grey-900`} onClick={() => handleRatingSelect(number)}>
                                <span className='leading-none pt-px'>
                                    {number}
                                </span>
                            </button>
                        ))}
                    </div>
                ))}
            </div>
            <button className='mt-2 w-full h-11 bg-irc-orange flex justify-center items-center rounded-full tracking-widest font-extrabold text-irc-grey-900 text-sm transition-colors duration-300 ease-in-out hover:bg-white cursor-pointer' onClick={handleSubmit}>
                <span className='leading-none pt-px'>
                    SUBMIT
                </span>
            </button>
        </div>
    );
}

function ThankYouView({ rating, maxRating }: { rating: number, maxRating: number }): ReactElement {
    return (
        <div className='flex flex-col items-center px-4 md:px-10 py-8 gap-5 text-center'>
            <Image src='/interactive-rating-component/illustration.svg' alt='Illustration' width={162} height={108} className='object-cover' />
            <small className='flex justify-center items-center bg-irc-grey-900 text-irc-orange px-3 py-2 rounded-full tracking-[0.1px] text-sm'>
                <span className='leading-none pt-px'>
                    You selected {rating} out of {maxRating}
                </span>
            </small>
            <h1 className='mt-2 text-2xl text-white font-medium'>Thank you!</h1>
            <p className='text-sm md:text-[15px] text-irc-grey-500 text-balance'>We appreciate you taking the time to give a rating. If you ever need more support, don&#39;t hesitate to get in touch!</p>
        </div>
    );
}

export default function InteractiveRatingCard({ maxRating }: { maxRating: number }): ReactElement {
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [rating, setRating] = useState<number | null>(null);

    const handleSubmit = () => {
        setIsSubmitted(!!rating);
    };

    const handleRatingSelect = (newRating: number) => {
        setRating(newRating);
    };

    return !isSubmitted ? <RatingView handleSubmit={handleSubmit} handleRatingSelect={handleRatingSelect} rating={rating} maxRating={maxRating} /> : rating ? <ThankYouView rating={rating} maxRating={maxRating} /> : <div>Error</div>;
}