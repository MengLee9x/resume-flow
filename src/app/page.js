"use client";

import { useEffect } from "react";
import TabContent from "@/components/TabContent";
import Cookies from "js-cookie";
import { useUser } from "@/contexts/UserContext";
import CommonTabArea from '@/components/CommonTabArea';
import CommonInfoArea from '@/components/CommonInfoArea';
import { isAuthenticated } from "@/services/auth";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();
  const { user, setUser } = useUser();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/login");
    } else {
      const userRole = Cookies.get("userRole");
      const userName = Cookies.get("userName");
      setUser({ userName: userName, userRole: userRole });
    }
  }, []);

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    // 
    <div className="h-screen bg-background">
      <div className="container mx-auto">
        <div className="flex-grow flex flex-col lg:flex-row pt-3">
          <div className="lg:w-2/5 p-4">
            <CommonInfoArea />
          </div>
          <div className="flex flex-col lg:w-3/5 p-4">
            <div className="flex flex-col flex-grow">
              <CommonTabArea />
              {user?.userRole === "admin" && (
                <div className="flex-grow bg-white rounded-2xl py-5 px-16 mt-2">
                  <TabContent />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
