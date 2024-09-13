'use client';

import TabButton from "@/components/TabButton";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const CommonTabArea = () => {
    const pathname = usePathname()
    const [activeTab, setActiveTab] = useState('');

    useEffect(() => {
        setActiveTab(pathname.split('/')[1]);
    }, [pathname]);

    return (
        <div className="lg:w-full">
            <div className="flex justify-end">
                <nav className="bg-paleBlue border-4 border-paleBlueGray px-5 py-2 rounded-2xl">
                    <ul className="flex gap-4">
                        <TabButton isActive={activeTab === ''} tabName="" />
                        <TabButton isActive={activeTab === 'resume'} tabName="resume" />
                        <TabButton isActive={activeTab === 'work'} tabName="work" />
                        <TabButton isActive={activeTab === 'contact'} tabName="contact" />
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default CommonTabArea;