"use client";

import { useEffect, useState } from "react";
import CommonInfoArea from "@/containers/CommonInfoArea";
import Header from "@/components/Header";
import Cookies from "js-cookie";
import { isAuthenticated } from "@/services/auth";
import { useRouter } from "next/navigation";

const Home = () => {
  const [user, setUser] = useState({});
  const router = useRouter();
  console.log(user);
  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/login");
    } else {
      const userRole = Cookies.get("userRole");
      const userName = Cookies.get("userName");
      setUser({ userName: userName, userRole: userRole});
    }
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-screen bg-background">
      <Header userName={user.userName} userRole={user.userRole} />
      <div className="flex-grow flex flex-col lg:flex-row">
        <div className="lg:w-2/5 p-4">
          <div className="h-full">
            <CommonInfoArea />
          </div>
        </div>

        <div className="lg:w-3/5 flex flex-col h-full">
          <div className="h-1/3 p-4 bg-accent bg-opacity-20">
            <div className="h-full border-2 border-dashed border-accent">
              <h2 className="text-2xl font-bold">Phần phải trên (1/3)</h2>
            </div>
          </div>

          {/* Phần dưới bên phải chiếm 2/3 chiều cao còn lại */}
          <div className="h-2/3 p-4 bg-green-500 bg-opacity-20">
            <div className="h-full border-2 border-dashed border-green-500">
              <h2 className="text-2xl font-bold">Phần phải dưới (2/3)</h2>
              {/* Nội dung của RightBottomComponent */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;