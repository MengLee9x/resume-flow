import React from "react";
import Image from "next/image";
import SocialButton from "./SocialButton";
import { profileData } from "@/data/mockUserData";

const CommonInfoArea = () => {
  const { profileImage, name, position, socialLinks, phone, email, location } =
    profileData;

  return (
    <div className="max-w-md mx-auto">
      <div>
        <Image
          className="m-auto translate-y-10"
          src={profileImage}
          alt="beatrice-wambui"
          width={200}
          height={200}
        />
      </div>

      <div className="bg-white rounded-2xl px-8 py-10">
        <div className="text-center mb-4 mt-4">
          <h2 className="text-2xl font-bold text-black">{name}</h2>
          <p className="text-gray-600 mt-3">{position}</p>
        </div>

        <div className="flex justify-center space-x-2 mb-6">
          {socialLinks.facebook && (
            <SocialButton icon="Facebook" link={socialLinks.facebook} />
          )}
          {socialLinks.linkedin && (
           <SocialButton icon="Linkedin" link={socialLinks.linkedin} />
          )}
          {socialLinks.twitter && (
            <SocialButton icon="Twitter" link={socialLinks.twitter} />
          )}
          {socialLinks.github && (
            <SocialButton icon="Github" link={socialLinks.github} />
          )}
        </div>

        <div className="bg-background rounded-lg p-8 m-[12px]">
          <div className="flex items-center mb-2">
            <span className="text-black">{phone}</span>
          </div>
          <div className="flex items-center mb-2">
            <span className="text-black">{email}</span>
          </div>
          <div className="flex items-center">
            <span className="text-black">{location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonInfoArea;
