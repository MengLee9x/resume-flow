"use client";

import SectionHeader from "@/components/SectionHeader";
import { skillContent } from "@/constant/HomeComponentDetails";
import ContentCard from "@/components/ContentCard";
import StyledWrapper from "@/components/common/MainContentWrapper";
import { withAdminAuth } from "@/hooks/withAdminAuth";

const HomePage = () => {
  return (<StyledWrapper height="100%">
    <SectionHeader header="ABOUT ME" />
    <p className="text-black mb-6 mt-6 font-medium text-base">
      Hello there! I'm thrilled to welcome you to my portfolio. I am a
      passionate and versatile full-stack developer with a keen
      interest in exploring the latest cutting-edge technologies. My
      journey in the world of web development has been nothing short
      of exhilarating, and I constantly strive to enhance my skills
      and embrace emerging trends in the industry.
    </p>
    <h3 className="text-black text-3xl font-semibold mb-8">What I do!</h3>
    <div className="grid grid-cols-2 gap-6 mt-4">
      {skillContent.map(skill => {
        const { profession, description, color, id, imageName } = skill
        return <ContentCard title={profession} content={description} classname={color} key={id} image={imageName} />
      })}
    </div>
  </StyledWrapper>
  )
};

export default withAdminAuth(HomePage);
