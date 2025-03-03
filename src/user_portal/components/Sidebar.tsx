import { Link, useNavigate } from "react-router-dom";
import { Home, Compass, PlusCircle, Search, User, LogOut } from "lucide-react";
import { useLogout } from "../../api/hooks/useAuth";

export default function Sidebar() {
  const navigate = useNavigate();
  const logout = useLogout();

  const handleLogout = () => {
    logout.mutate(undefined, {
      onSuccess: () => {
        navigate("/examples/login");
      },
    });
  };

  return (
    <div className="w-64 flex flex-col p-4 border-r border-gray-800">
      <div className="mb-8">
        <img
          src="/placeholder.svg?height=40&width=120"
          alt="Talynk"
          className="mb-8 w-30 h-10"
        />
        <nav className="space-y-4">
          <Link
            to="/user-portal"
            className="flex items-center space-x-2 text-gray-400 hover:text-blue-500"
          >
            <Home className="h-6 w-6" />
            <span>For You</span>
          </Link>
          <Link
            to="/user-portal/explore"
            className="flex items-center space-x-2 text-gray-400 hover:text-blue-500"
          >
            <Compass className="h-6 w-6" />
            <span>Explore</span>
          </Link>
          <Link
            to="/user-portal/upload"
            className="flex items-center space-x-2 text-gray-400 hover:text-blue-500"
          >
            <PlusCircle className="h-6 w-6" />
            <span>Upload</span>
          </Link>
          <Link
            to="/user-portal/search"
            className="flex items-center space-x-2 text-gray-400 hover:text-blue-500"
          >
            <Search className="h-6 w-6" />
            <span>Search</span>
          </Link>
          <Link
            to="/user-portal/profile"
            className="flex items-center space-x-2 text-gray-400 hover:text-blue-500"
          >
            <User className="h-6 w-6" />
            <span>Profile</span>
          </Link>
        </nav>
      </div>

      <div className="mt-auto space-y-4">
        <div className="p-4 bg-gray-900 rounded-lg">
          <h3 className="text-white text-sm font-medium mb-2">
            Download Our Mobile App
          </h3>
          <p className="text-gray-400 text-xs mb-4">
            Start Convincing The World
          </p>
          <div className="space-y-2">
            <a href="#" className="block">
              <img
                src="/placeholder.svg?height=40&width=120"
                alt="Get it on Google Play"
                className="rounded w-30 h-10"
              />
            </a>
            <a href="#" className="block">
              <img
                src="/placeholder.svg?height=40&width=120"
                alt="Download on App Store"
                className="rounded w-30 h-10"
              />
            </a>
          </div>
        </div>

        <div className="text-gray-400 text-sm space-y-2">
          <Link to="/terms" className="block hover:text-blue-500">
            Terms & Conditions
          </Link>
          <Link to="/about" className="block hover:text-blue-500">
            About Us
          </Link>
          <Link to="/company" className="block hover:text-blue-500">
            Company
          </Link>

          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 text-gray-400 hover:text-red-500 w-full mt-4"
            disabled={logout.isPending}
          >
            <LogOut className="h-6 w-6" />
            <span>{logout.isPending ? "Logging out..." : "Logout"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
