'use client';

import TabButton from "@/components/TabButton";

const CommonTabArea = () => {

    return (
        <div className="lg:w-full">
            <div className="flex justify-end">
                <nav className="bg-paleBlue border-4 border-paleBlueGray px-5 py-2 rounded-2xl">
                    <ul className="flex gap-4">
                        <TabButton tabName="" />
                        <TabButton tabName="resume" />
                        <TabButton tabName="work" />
                        <TabButton tabName="contact" />
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default CommonTabArea;