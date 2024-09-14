"use client"

import React from 'react';
import SectionHeader from "@/components/SectionHeader"
import StyledWrapper from "@/components/common/MainContentWrapper"
import Image from "next/image";
import styled from 'styled-components';

const StyledResumeSection = styled.div`
    border-radius: 0 0 16px 16px;
    padding: 0 4rem;
    background: #F8FBFB;
`

const ResumeSection = ({ title, items, icon }) => (
    <div className="mb-6">
        <div className='flex flex-row gap-2 mb-7'>
            <Image src={`/images/${icon}.svg`} alt={icon} width={32} height={32} />
            <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
        </div>
        <div className="space-y-5 gap-10">
            {items.map((item, index) => (
                <div key={index} className="bg-orange-100 px-3 py-5 rounded-lg">
                    <p className="text-sm text-translucentDarkBrown">{item.year}</p>
                    <p className="text-lg text-black font-semibold mb-1">{item.title}</p>
                    <p className="text-sm text-black ">{item.institution}</p>
                </div>
            ))}
        </div>
    </div>
);

const SkillSection = ({ title, skills, icon }) => (
    <div className="mb-6">
        <h2 className="text-3xl font-bold mb-3 mt-3 text-gray-800">{title}</h2>
        <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
                <span key={index} className="
                    bg-paleBlueGray 
                    inline-flex
                    items-center
                    justify-center
                    rounded-[8px]
                    h-[52px]
                    px-3
                    py-1
                    text-sm
                    font-semibold
                    text-gray-700
                    mr-2
                    mb-2
                    whitespace-nowrap"
                >
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

const ResumeTab = () => {
    const education = [
        { year: '2020-2021', title: 'Software Development', institution: 'Moringa School' },
        { year: '2015-2019', title: 'Disaster Management', institution: 'Masinde Muliro University' },
    ];

    const experience = [
        { year: '2022 - Present', title: 'Technical Mentor', institution: 'Moringa School' },
        { year: '2021-2022', title: 'Website Development', institution: 'Village 2 Nation' },
    ];

    const workSkills = ['HTML', 'ReactJs', 'HTML 5', 'CSS 3', 'Figma', 'JavaScript', 'Mongo DB', 'SQL', 'Angular', 'Android', 'Git'];
    const softSkills = ['Time Management', 'Mentorship', 'Impeccable Communication', 'Flexibility', 'Research', 'Writing'];

    return (
        <>
            <StyledWrapper bottomLeft="0" bottomRight="0">
                <SectionHeader header="Resume" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <ResumeSection title="Education" items={education} icon="degree_hat" />
                    <ResumeSection title="Experience" items={experience} icon="humbleicons_briefcase" />
                </div>
            </StyledWrapper>
            <StyledResumeSection>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <SkillSection title="Work Skills" skills={workSkills} />
                    <SkillSection title="Soft Skills" skills={softSkills} />
                </div>
            </StyledResumeSection>
        </>

    );
};

export default ResumeTab;