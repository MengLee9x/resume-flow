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
      setUser({ userName: userName, userRole: userRole });
    }
  }, []);

  if (!user) {
    return <div>Loading...</div>;
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
              <nav className="bg-white shadow-md px-4 py-2 rounded-md">
                <ul className="flex gap-4">
                  <li className="text-black text-xs p-5 rounded-md bg-slate-200">
                    Home
                  </li>
                  <li className="text-black text-xs p-5 rounded-md bg-slate-200">
                    Resume
                  </li>
                  <li className="text-black text-xs p-5 rounded-md bg-slate-200">
                    Work
                  </li>
                  <li className="text-black text-xs p-5 rounded-md bg-slate-200">
                    Contact
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex flex-col gap-3 flex-1 bg-white shadow-md rounded-md py-5 px-11">
              <div className="flex gap-4 items-center">
                <h2 className="text-black text-3xl">ABOUT ME</h2>
                <div className="bg-[red] w-1/12 h-[5px]"></div>
              </div>
              <p className="text-black">
                Hello there! I'm thrilled to welcome you to my portfolio. I am a
                passionate and versatile full-stack developer with a keen
                interest in exploring the latest cutting-edge technologies. My
                journey in the world of web development has been nothing short
                of exhilarating, and I constantly strive to enhance my skills
                and embrace emerging trends in the industry.
              </p>
              <h3 className="text-black text-2xl">What I do!</h3>
              <div className="flex gap-8">
                <div className="flex-1 flex flex-col gap-1 bg-red-200 p-3 rounded-lg">
                  <h4 className="text-black text-2xl font-semibold">
                    Web Development
                  </h4>
                  <p className="text-black text-xs">
                    As a developer, I find myself most captivated by the power
                    and foxibility of NEXT.js. I'm always eager to dive into new
                    projects that leverage NEXTjs and discover innovative ways
                    to create fast. scalable, and user-friendly applications
                  </p>
                </div>
                <div className="flex-1 flex flex-col gap-1 bg-red-400 p-3 rounded-lg">
                  <h4 className="text-black text-2xl font-semibold">
                    Web Development
                  </h4>
                  <p className="text-black text-xs">
                    As a developer, I find myself most captivated by the power
                    and foxibility of NEXT.js. I'm always eager to dive into new
                    projects that leverage NEXTjs and discover innovative ways
                    to create fast. scalable, and user-friendly applications
                  </p>
                </div>
              </div>
              <div className="flex gap-8">
                <div className="flex-1 flex flex-col gap-1 bg-red-200 p-3 rounded-lg">
                  <h4 className="text-black text-2xl font-semibold">
                    Web Development
                  </h4>
                  <p className="text-black text-xs">
                    As a developer, I find myself most captivated by the power
                    and foxibility of NEXT.js. I'm always eager to dive into new
                    projects that leverage NEXTjs and discover innovative ways
                    to create fast. scalable, and user-friendly applications
                  </p>
                </div>
                <div className="flex-1 flex flex-col gap-1 bg-red-400 p-3 rounded-lg">
                  <h4 className="text-black text-2xl font-semibold">
                    Web Development
                  </h4>
                  <p className="text-black text-xs">
                    As a developer, I find myself most captivated by the power
                    and foxibility of NEXT.js. I'm always eager to dive into new
                    projects that leverage NEXTjs and discover innovative ways
                    to create fast. scalable, and user-friendly applications
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
