'use client'

import { useRouter } from "next/navigation";
import { useUser } from "@/contexts/UserContext";
import { removeToken } from "@/services/auth";

const Header = () => {
  const { user, clearUser } = useUser();
  const { userName, userRole } = user || {};
  const router = useRouter();

  const handleLogout = () => {
    try {
      removeToken();
      clearUser();
      router.push("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const handleDarkModeToggle = () => {
    // TODO: Implement dark mode
  }

  return (
    <header className="bg-background p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          {user && <>
            <span className="text-black font-bold">{userName} </span>
            <span className="text-gray-600">({userRole})</span>
          </>}
        </div>
        <div className="flex items-center space-x-4">

          <button className="p-2 bg-gray-200 rounded" onClick={handleDarkModeToggle}>Dark Mode</button>
          {user && <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Logout
          </button>}
        </div>
      </div>
    </header>
  );
};

export default Header;
