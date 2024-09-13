"use client"

import React from 'react';
import SectionHeader from "@/components/SectionHeader"
import styled from 'styled-components';



const ResumeSection = ({ title, items }) => (
    <div className="mb-6">
        <h2 className="text-3xl font-bold mb-5 text-gray-800">{title}</h2>
        <div className="space-y-5">
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

const SkillSection = ({ title, skills }) => (
    <div className="mb-6">
        <h2 className="text-3xl font-bold mb-3 mt-3 text-gray-800">{title}</h2>
        <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
                <span key={index} className="
                    bg-paleBlueGray inline-flex
                    items-center
                    justify-center
                    rounded-[8px]
                    h-[52px]
                    px-3
                    py-1
                    text-sm
                    font-semibold
                    bg-gray-200
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
        <div className="bg-white p-5 rounded-2xl">
            <SectionHeader header="Resume" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ResumeSection title="Education" items={education} />
                <ResumeSection title="Experience" items={experience} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SkillSection title="Work Skills" skills={workSkills} />
                <SkillSection title="Soft Skills" skills={softSkills} />
            </div>
        </div>
    );
};

export default ResumeTab;