'use client'

import Image from "next/image";
import { logout } from "@/services/logout";
import { useRouter } from "next/navigation";

const Header = ({ user, clearUser }) => {
  const router = useRouter();
  const { userName, userRole } = user;

  const handleLogout = async () => {
    try {
      const response = await logout();
      if (response.success) {
        clearUser();
        router.push("/login");
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const handleDarkModeToggle = () => {
    // TODO: Implement dark mode
  }

  return (
    <header className="bg-background p-4">
      <div className="flex justify-between mx-auto container">
        <Image src="/images/userInfologo.svg" width={200} height={0} alt="userLogo" />
        <div className="flex justify-end items-center">
          <div className="mr-5">
            {user && <>
              <span className="text-black font-bold">{userName} </span>
              <span className="text-gray-600">({userRole})</span>
            </>}
          </div>
          <div className="flex items-center space-x-4">

            <button className="w-12 h-12 rounded-full border-[3px] border-paleBlueGray flex items-center justify-center bg-paleBlue hover:bg-gray-100 transition-colors duration-200" onClick={handleDarkModeToggle}>
              <Image src="/images/dark_mode.png" alt="Dark Mode" width={18} height={18} />
            </button>
            {user && <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl"
            >
              Logout
            </button>}
          </div>
        </div>
      </div>

    </header>
  );
};

export default Header;
