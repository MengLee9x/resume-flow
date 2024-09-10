"use client";

import { useTab } from '@/contexts/TabContext';
import Home from '@/components/Home';
import ResumeTab from '@/components/ResumeTab';

const TabContent = () => {
    const { activeTab } = useTab();

    switch (activeTab) {
        case 'home':
            return <Home />;
        case 'resume':
            return <ResumeTab />;
        case 'work':
            return null;
        case 'contact':
            return null;
        default:
            return <Home />;
    }
};

export default TabContent;