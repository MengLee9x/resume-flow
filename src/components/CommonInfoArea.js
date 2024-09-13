import React from "react";
import Image from "next/image";
import SocialButton from "./SocialButton";
import { profileData } from "@/data/mockUserData";
import DownloadButton from "./DownloadButton";

const CommonInfoArea = () => {
  const { profileImage, name, position, socialLinks, phone, email, location } =
    profileData;

  return (
    <div className='relative'>
      <Image
        className="absolute -top-24 left-[calc(50%-100px)]"
        src={profileImage}
        alt="beatrice-wambui"
        width={200}
        height={200}
      />

      <div className="bg-white rounded-2xl pt-28 pb-6 py-10 mt-[110px]">
        <div className="text-center mb-4 mt-4">
          <h2 className="text-2xl font-bold text-black">{name}</h2>
          <p className="text-gray-600 mt-3">{position}</p>
        </div>

        <div className="flex justify-center space-x-2 mb-7">
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

        <div className="bg-background rounded-3xl p-8">
          <div className="flex flex-col space-y-6">
            <div className="flex items-start">
              <div className="flex flex-col">
                <span className="font-semibold text-gray-700">Phone</span>
                <span className="text-black">{phone}</span>
              </div>
            </div>
            <div className="w-5/6 h-px bg-dividerColor mx-auto"></div>

            <div className="flex items-start">
              <div className="flex flex-col">
                <span className="font-semibold text-gray-700">Email</span>
                <span className="text-black">{email}</span>
              </div>
            </div>
            <div className="w-5/6 h-px bg-dividerColor mx-auto"></div>

            <div className="flex items-start">
              <div className="flex flex-col">
                <span className="font-semibold text-gray-700">Location</span>
                <span className="text-black">{location}</span>
              </div>
            </div>
            <div className="w-5/6 h-px bg-dividerColor mx-auto"></div>

            <div className="flex justify-center">
              <DownloadButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonInfoArea;
