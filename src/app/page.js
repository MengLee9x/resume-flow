"use client";

import { useEffect, useState } from "react";
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
    <div>
      <Header userName={user.userName} userRole={user.userRole} />
      {/* {user.userRole === "admin" ? (
        <AdminHomePage />
      ) : user.userRole === "candidate" ? (
        <CandidateHomePage />
      ) : (
        <p className="text-red-500">Error: Unknown role</p>
      )} */}
    </div>
  );
}

export default Home;