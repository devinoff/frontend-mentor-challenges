import {ReactElement} from "react";
import {Metadata, Viewport} from "next";
import {Poppins} from "next/font/google";
import Image from "next/image";
import {WarningCircleIcon} from "@phosphor-icons/react/ssr";

const poppins = Poppins({ subsets: ['latin-ext'], weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
    title: 'Intro component with sign-up form'
};

// bg color
export const viewport: Viewport = {
    themeColor: '#ff7a7a'
};

export default function IntroComponentWithSignUpForm(): ReactElement {
    const inputs: { id: number, type: string, placeholder: string, error: string, minLength?: number }[] = [{
        id: 1,
        type: 'text',
        placeholder: 'First Name',
        error: 'First Name cannot be empty'
    }, {
        id: 2,
        type: 'text',
        placeholder: 'Last Name',
        error: 'Last Name cannot be empty'
    }, {
        id: 3,
        type: 'email',
        placeholder: 'Email Address',
        error: 'Looks like this is not an email'
    }, {
        id: 4,
        type: 'password',
        placeholder: 'Password',
        error: 'Password must be at least 8 characters long',
        minLength: 8
    }];

    return (
        <main className={`w-full min-h-dvh ${poppins.className} relative flex items-center justify-center bg-icwsuf-red text-white`}>
            <Image src='/intro-component-with-sign-up-form/bg-mobile.png' alt='Background image' fill className='absolute md:hidden top-0 left-0 w-full h-auto object-cover' />
            <Image src='/intro-component-with-sign-up-form/bg-desktop.png' alt='Background image' fill className='max-md:hidden absolute top-0 left-0 w-full h-auto object-cover' />
            <div className='max-w-[1200px] h-auto flex flex-col lg:flex-row items-center gap-16 z-10 px-6 sm:px-12 py-16 text-center lg:text-left'>
                <div className='flex-1/2 flex flex-col gap-8'>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold md:leading-14 text-balance'>Learn to code by watching others</h1>
                    <p className='leading-[26px] font-medium text-balance'>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
                </div>
                <div className='flex-1/2 flex flex-col gap-6'>
                    <button className='w-full py-5 bg-icwsuf-blue rounded-lg cursor-pointer text-balance px-8 shadow-[0px_8px_0_0_rgba(0,0,0,0.15)] transition-[background-color,box-shadow,translate] duration-200 ease-in-out hover:bg-icwsuf-blue/90 hover:shadow-[0px_0px_0_0_rgba(0,0,0,0.15)] hover:translate-y-2'><strong>Try it free for 7 days</strong> then €20/mo. thereafter</button>
                    <form className='w-full p-10 bg-white text-black rounded-lg flex flex-col gap-3 shadow-[0px_8px_0_0_rgba(0,0,0,0.15)]'>
                        {inputs.map((input) => (
                            <div key={input.id} className='relative w-full h-auto'>
                                <input type={input.type} placeholder={input.placeholder} minLength={input.minLength} className='w-full h-14 peer border border-gray-300 rounded-lg px-8 text-sm font-semibold transition-colors duration-200 ease-in-out focus:outline-none focus:border-black user-invalid:border-icwsuf-red' required />
                                <WarningCircleIcon size={32} weight='fill' className='absolute top-3 right-6 text-icwsuf-red transition-opacity duration-200 ease-in-out opacity-0  peer-user-invalid:opacity-100' />
                                <p className='mt-1 text-xs text-right text-icwsuf-red italic pr-2 transition-opacity duration-200 ease-in-out opacity-0 peer-user-invalid:opacity-100 text-balance'>{input.error}</p>
                            </div>
                        ))}
                        <button className='w-full py-4 bg-icwsuf-green text-white rounded-lg cursor-pointer font-medium px-8 text-balance shadow-[0px_4px_0_0_hsl(154,59%,46%,1)] transition-[background-color,box-shadow,translate] duration-200 ease-in-out hover:bg-icwsuf-green/90 hover:shadow-[0px_0px_0_0_hsl(154,59%,46%,1)] hover:translate-y-1'>CLAIM YOUR FREE TRIAL</button>
                        <p className='mt-1 text-icwsuf-grayish-blue text-[11px] text-center text-balance'>By clicking the button, you are agreeing to our <span className='text-icwsuf-red font-bold'>Terms and Services</span></p>
                    </form>
                </div>
            </div>
        </main>
    );
}