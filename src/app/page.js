"use client";

import { useEffect } from "react";
import TabContent from "@/components/TabContent";
import Cookies from "js-cookie";
import { UserProvider, useUser } from "@/contexts/UserContext";
import { isAuthenticated } from "@/services/auth";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();
  const { setUser } = useUser();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/login");
    } else {
      const userRole = Cookies.get("userRole");
      const userName = Cookies.get("userName");
      setUser({ userName: userName, userRole: userRole });
    }
  }, []);

  return (
    <div className="flex flex-1 bg-white rounded-2xl py-5 px-16">
      <TabContent />
    </div>
  );
};

export default HomePage;
