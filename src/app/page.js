"use client";

import SectionHeader from "@/components/SectionHeader";
import { skillContent } from "@/constant/HomeComponentDetails";
import ContentCard from "@/components/ContentCard";


const HomePage = () => {
  return (<div>
    <SectionHeader header="ABOUT ME" />
    <p className="text-black mb-6 mt-6">
      Hello there! I'm thrilled to welcome you to my portfolio. I am a
      passionate and versatile full-stack developer with a keen
      interest in exploring the latest cutting-edge technologies. My
      journey in the world of web development has been nothing short
      of exhilarating, and I constantly strive to enhance my skills
      and embrace emerging trends in the industry.
    </p>
    <h3 className="text-black text-3xl font-semibold">What I do!</h3>
    <div className="grid grid-cols-2 gap-8 mt-4">
      {skillContent.map(skill => {
        const { profession, description, color, id } = skill
        return <ContentCard title={profession} content={description} classname={color} key={id} />
      })}
    </div>
  </div>
  )
};

export default HomePage;
