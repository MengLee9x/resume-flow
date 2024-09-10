'use client';

import { useTab } from "@/contexts/TabContext";
import TabButton from "@/components/TabButton";

const CommonTabArea = () => {
    const { activeTab, setActiveTab } = useTab();

    return (
        <div className="lg:w-full flex-col">
            <div className="flex justify-end">
                <nav className="bg-paleBlue border-4 border-paleBlueGray px-5 py-2 rounded-2xl">
                    <ul className="flex gap-4">
                        <TabButton activeTab={activeTab} tabName="Home" onClick={() => setActiveTab('home')} />
                        <TabButton activeTab={activeTab} tabName="Resume" onClick={() => setActiveTab('resume')} />
                        <TabButton activeTab={activeTab} tabName="Work" disabled={true} />
                        <TabButton activeTab={activeTab} tabName="Contact" disabled={true} />
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default CommonTabArea;