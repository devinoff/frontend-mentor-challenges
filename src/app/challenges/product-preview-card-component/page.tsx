import {ReactElement} from "react";
import {Metadata, Viewport} from "next";
import {Fraunces, Montserrat} from "next/font/google";
import Image from "next/image";
import {ShoppingCartIcon} from "@phosphor-icons/react/ssr";

const montserrat = Montserrat({ subsets: ['latin-ext'] });
const fraunces = Fraunces({ subsets: ['latin-ext'] });

export const metadata: Metadata = {
    title: 'Product preview card component'
};

// bg color
export const viewport: Viewport = {
    themeColor: '#f2ebe3'
};

export default function ProductPreviewCardComponent(): ReactElement {
    return (
        <main className={`w-full min-h-dvh bg-prcc-cream text-sm flex justify-center items-center font-medium px-4 py-7 ${montserrat.className}`}>
            <div className='max-w-[600px] bg-white rounded-[10px] overflow-hidden flex flex-col sm:flex-row'>
                <Image src='/product-preview-card-component/product-mobile.jpg' alt='Product image' width={686} height={480} className='w-full h-auto sm:hidden' />
                <div className='max-sm:hidden relative flex-1/2'>
                    <Image src='/product-preview-card-component/product-desktop.jpg' alt='Product image' fill className='object-cover' />
                </div>
                <div className='sm:flex-1/2 flex flex-col pl-[31.5px] pr-[32px] pt-[22px] pb-6 sm:py-[30px]'>
                    <small className='text-[13px] text-prcc-grey tracking-[4.2px]'>PERFUME</small>
                    <h1 className={`mt-3 sm:mt-[19px] text-prcc-black text-[32px] font-bold text-balance leading-[32px] -tracking-[0.2px] ${fraunces.className}`}>Gabrielle Essence Eau De Parfum</h1>
                    <p className='mt-[14px] sm:mt-6 text-prcc-grey leading-[23px] text-balance'>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
                    <div className='mt-4 sm:mt-[22px] flex flex-col prcc-xxs:flex-row prcc-xxs:items-center prcc-xxs:gap-5'>
                        <span className={`text-[32px] font-bold text-prcc-green-500 -tracking-[0.2px] ${fraunces.className}`}>$149.99</span>
                        <span className='text-[13px] text-prcc-grey line-through'>$169.99</span>
                    </div>
                    <button className='flex justify-center items-center w-full h-12 bg-prcc-green-500 mt-4 sm:mt-[23px] rounded-[8px] text-white font-bold gap-2 cursor-pointer transition-colors duration-200 ease-in-out hover:bg-prcc-green-700'>
                        <ShoppingCartIcon size={18} weight='bold' />
                        Add to Cart
                    </button>
                </div>
            </div>
        </main>
    );
}