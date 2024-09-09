import React from "react";
import Image from "next/image";
import { profileData } from "@/data/mockUserData";

const CommonInfoArea = () => {
  const { profileImage, name, position, socialLinks, phone, email, location } =
    profileData;

  return (
    <div className="max-w-md mx-auto">
      <div className="">
        <Image
          className="m-auto translate-y-10"
          src={profileImage}
          alt="beatrice-wambui"
          width={200}
          height={200}
        />
      </div>

      <div className="bg-white rounded-lg shadow-md px-8 py-10">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-black">{name}</h2>
          <p className="text-gray-600">{position}</p>
        </div>

        <div className="flex justify-center space-x-4 mb-6">
          {socialLinks.facebook && (
            <a
              href={socialLinks.facebook}
              className="bg-background flex items-center justify-center rounded-lg"
            >
              <Image
                src="/images/Facebook.png"
                alt="Facebook"
                width={48}
                height={48}
              />
            </a>
          )}
          {socialLinks.linkedin && (
            <a
              href={socialLinks.linkedin}
              className="bg-background flex items-center justify-center rounded-lg"
            >
              <Image
                src="/images/Linkedin.png"
                alt="Twitter"
                width={48}
                height={48}
              />
            </a>
          )}
          {socialLinks.twitter && (
            <a
              href={socialLinks.twitter}
              className="bg-background flex items-center justify-center rounded-lg"
            >
              <Image
                src="/images/Twitter.png"
                alt="Twitter"
                width={48}
                height={48}
              />
            </a>
          )}
          {socialLinks.github && (
            <a
              href={socialLinks.github}
              className="bg-background flex items-center justify-center rounded-lg"
            >
              <Image
                src="/images/Github.png"
                alt="GitHub"
                width={48}
                height={48}
              />
            </a>
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
