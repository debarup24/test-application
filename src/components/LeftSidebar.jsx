import {
  Bell,
  HomeIcon,
  MessageSquareMore,
  Search,
  SquareMenu,
  SquarePlus,
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const SIDEBAR_ITEMS = [
  { name: "Home", icon: HomeIcon, color: "#6366f1", href: "/" },
  { name: "Search", icon: Search, color: "#8B5CF6", href: "/search" },
  { name: "Notification", icon: Bell, color: "#EC4899", href: "/notify" },
  {
    name: "Message",
    icon: MessageSquareMore,
    color: "#10B981",
    href: "/msg",
  },
  { name: "Create", icon: SquarePlus, color: "#F59E0B", href: "/add-post" },
  { name: "Test-Issue", icon: Search, color: "#8B5CF6", href: "/all-testing-issue" },
];

const LeftSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleMaxMinBtn = (e) => {
    e.preventDefault();
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={`relative hidden md:hidden lg:hidden xl:block z-10 h-screen flex-shrink-0 shadow-lg shadow-slate-300 ${
        isSidebarOpen ? "w-80" : "w-32"
      }`}
    >
      {/* for toggle and name */}
      <div className="flex gap-1.5 p-5">
        <button onClick={toggleMaxMinBtn}>
          <SquareMenu />{" "}
        </button>

        <p className="font-semibold md:text-lg lg:text-lg text-sm">
          Wylo {isSidebarOpen && <span className="text-red-400">Social</span>}
        </p>
      </div>

      {/* for sidebar item */}
      <nav className="mt-5 px-6 flex-grow">
        {SIDEBAR_ITEMS.map((item) => (
          <Link key={item.href} to={item.href}>
            <div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors mb-2">
              <item.icon
                size={20}
                style={{ color: item.color, minWidth: "20px" }}
              />

              {isSidebarOpen && (
                <span className="ml-4 whitespace-nowrap">{item.name}</span>
              )}
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default LeftSidebar;
