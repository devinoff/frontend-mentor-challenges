import {MinusCircleIcon, PlusCircleIcon} from "@phosphor-icons/react";
import {ReactElement} from "react";

export interface ItemProps {
    isOpen: boolean;
    onToggle: () => void;
    title: string;
    text: string;
}

export default function Item({ isOpen, onToggle, title, text }: ItemProps): ReactElement {
    const panelId = `faq-panel-${title.replace(/\s+/g, '-').toLowerCase()}`;
    return (
        <div className='w-full py-4 md:py-6'>
            <button className='w-full text-left flex justify-between items-center gap-8 cursor-pointer group' onClick={onToggle} aria-expanded={isOpen} aria-controls={panelId}>
                <h2 className='md:text-lg font-semibold text-dvx-purple-950 transition-colors duration-200 ease-in-out group-hover:text-dvx-purple-600'>{title}</h2>
                <div className='relative w-[30px] h-[30px] shrink-0'>
                    <MinusCircleIcon size={30} weight='fill' className={`text-dvx-purple-950 absolute top-0 left-0 transition-opacity duration-200 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0'}`} aria-hidden='true' focusable='false' />
                    <PlusCircleIcon size={30} weight='fill' className={`text-dvx-purple-600 absolute top-0 left-0 transition-opacity duration-200 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`} aria-hidden='true' focusable='false' />
                </div>
            </button>
            <div className={`grid transition-[grid-template-rows,margin-top] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] mt-6' : 'grid-rows-[0fr] mt-0'}`} id={panelId} role='region' aria-hidden={!isOpen}>
                <div className='overflow-hidden'>
                    <p className={`text-sm md:text-base text-balance text-neutral-500 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100 ' : 'opacity-0 pointer-events-none'}`}>{text}</p>
                </div>
            </div>
        </div>
    );
}