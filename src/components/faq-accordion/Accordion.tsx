'use client';

import {useState} from "react";
import Item from "@/components/faq-accordion/Item";

export default function Accordion() {
    const [openItemId, setOpenItemId] = useState<number|null>(null);
    const items: { id: number, title: string, text: string }[] = [{
        id: 1,
        title: 'What is Frontend Mentor, and how will it help me?',
        text: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
    }, {
        id: 2,
        title: 'Is Frontend Mentor free?',
        text: "The majority of our challenges are free, yes. We also have premium challenges that require a subscription. Premium challenges include design files (Figma/Sketch) and a professional design system."
    }, {
        id: 3,
        title: 'Can I use Frontend Mentor projects in my portfolio?',
        text: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
    }, {
        id: 4,
        title: "How can I get help if I'm stuck on a challenge?",
        text: "The best place to get help is inside Frontend Mentor's Discord community. There are thousands of developers ready to help you, and you can ask questions publicly or privately."
    }];

    const handleToggle = (itemId: number) => {
        setOpenItemId(openItemId === itemId ? null : itemId);
    };

    return (
        <div className='flex flex-col divide-y divide-neutral-100'>
            {items.map((item) => (
                <Item key={item.id} isOpen={openItemId === item.id} onToggle={() => handleToggle(item.id)} title={item.title} text={item.text} />
            ))}
        </div>
    )
}