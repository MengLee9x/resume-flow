import React, { useEffect, useState } from "react";
import Image from "next/image";
import SocialButton from "./SocialButton";
import DownloadButton from "./DownloadButton";
import UserInfoDetail from "./UserInfoDetail";
import { getCommonInfo } from "@/services/commonInfo";

const CommonInfoArea = () => {
  const [commonInfo, setCommonInfo] = useState({});

  useEffect(() => {
    const fetchCommonInfo = async () => {
      const info = await getCommonInfo();
      setCommonInfo(info);
    };
    fetchCommonInfo();
  }, []);

  const { name, position, socialLinks, phone, email, location, profileImage } = commonInfo || {};

  return (
    <div className='relative'>
      <Image
        className="absolute -top-24 left-[calc(50%-100px)]"
        src={profileImage}
        alt="beatrice-wambui"
        width={200}
        height={200}
      />

      <div className="bg-white rounded-2xl pt-28 pb-10 pl-7 pr-7 mt-[110px]">
        <div className="text-center mb-4 mt-4">
          <h2 className="text-2xl font-bold text-black">{name}</h2>
          <p className="text-gray-600 mt-3">{position}</p>
        </div>

        <div className="flex justify-center space-x-2 mb-6">
          {socialLinks?.facebook && (
            <SocialButton icon="Facebook" link={socialLinks.facebook} />
          )}
          {socialLinks?.linkedin && (
            <SocialButton icon="Linkedin" link={socialLinks.linkedin} />
          )}
          {socialLinks?.twitter && (
            <SocialButton icon="Twitter" link={socialLinks.twitter} />
          )}
          {socialLinks?.github && (
            <SocialButton icon="Github" link={socialLinks.github} />
          )}
        </div>

        <div className="bg-background rounded-3xl p-8">
          <div className="flex flex-col space-y-6">
            <UserInfoDetail icon="phone" text="Phone" detail={phone} />
            <div className="w-5/6 h-px bg-dividerColor mx-auto"></div>

            <UserInfoDetail icon="email" text="Email" detail={email} />

            <div className="w-5/6 h-px bg-dividerColor mx-auto"></div>

            <UserInfoDetail icon="location" text="Location" detail={location} />
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
