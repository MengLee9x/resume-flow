"use client";

import { useEffect, useState } from "react";
import CommonInfoArea from "@/components/CommonInfoArea";
import Header from "@/components/Header";
import Home from "@/components/Home";
import ResumeTab from "@/components/ResumeTab";
import Cookies from "js-cookie";
import { isAuthenticated } from "@/services/auth";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const [user, setUser] = useState({});
  const [activeTab, setActiveTab] = useState('home')
  const router = useRouter();
  // useEffect(() => {
  //   if (!isAuthenticated()) {
  //     router.push("/login");
  //   } else {
  //     const userRole = Cookies.get("userRole");
  //     const userName = Cookies.get("userName");
  //     setUser({ userName: userName, userRole: userRole });
  //   }
  // }, []);

  // if (!user) {
  //   return <div>Loading...</div>;
  // }

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'resume':
        return <ResumeTab />;
      case 'work':
        return <Work />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  }

  return (
    <div className="h-screen bg-background">
      <div className="container mx-auto">
        <Header userName={user.userName} userRole={user.userRole} />
        <div className="flex-grow flex flex-col lg:flex-row pt-3">
          <div className="lg:w-2/5 p-4">
            <div className="h-full">
              <CommonInfoArea />
            </div>
          </div>

          <div className="lg:w-3/5 flex gap-2 flex-col h-full">
            <div className="flex justify-end">
              <nav className="bg-paleBlue border-2 border-paleBlueGray px-5 py-2 rounded-xl">
                <ul className="flex gap-4">
                  <li className={`cursor-pointer text-black text-xs p-5 rounded-2xl ${activeTab === "home" ? "bg-gradient-to-r from-orange-200 to-orange-600 text-white" : "bg-slate-200"}`} onClick={() => setActiveTab('home')}>
                    Home
                  </li>
                  <li className={`cursor-pointer text-black text-xs p-5 rounded-2xl ${activeTab === "resume" ? "bg-gradient-to-r from-orange-200 to-orange-600 text-white" : "bg-slate-200"}`} onClick={() => setActiveTab('resume')}>
                    Resume
                  </li>
                  <li className={`cursor-pointer text-black text-xs p-5 rounded-2xl ${activeTab === "work" ? "bg-gradient-to-r from-orange-200 to-orange-600 text-white" : "bg-slate-200"}`} onClick={() => setActiveTab('work')}>
                    Work
                  </li>
                  <li className={`cursor-pointer text-black text-xs p-5 rounded-2xl ${activeTab === "contact" ? "bg-gradient-to-r from-orange-200 to-orange-600 text-white" : "bg-slate-200"}`} onClick={() => setActiveTab('contact')}>
                    Contact
                  </li>
                </ul>
              </nav>
            </div>
          <div className="flex flex-col gap-3 flex-1 bg-white rounded-2xl py-5 px-16">
              {renderActiveTab()}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
