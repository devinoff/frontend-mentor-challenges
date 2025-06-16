import {ReactElement} from "react";
import {Metadata, Viewport} from "next";

export const metadata: Metadata = {
    title: 'Template'
};

// bg color
export const viewport: Viewport = {
    themeColor: '#ff0000'
};

export default function Template(): ReactElement {
    return (
        <main className='w-full min-h-dvh'>
        </main>
    );
}