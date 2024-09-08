import { useRouter } from "next/navigation";
import { removeToken } from "@/services/auth";

const Header = ({ userName, userRole }) => {
  const router = useRouter();

  const handleLogout = () => {
    removeToken();
    router.push("/login");
  }

  return (
    <header className="bg-background p-4">
      <div className="container mx-auto flex justify-between items-center">
        <button className="p-2 bg-gray-200 rounded">Dark Mode</button>
        <div className="flex items-center space-x-4">
          <span className="font-bold">{userName}</span>
          <span className="text-gray-600">({userRole})</span>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;