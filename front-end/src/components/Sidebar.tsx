"use client";  // ✅ Ensure this is at the top

import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname() || ""; // ✅ Add fallback to prevent undefined

  return (
    <aside className="bg-gray-800 text-white w-64 h-screen p-6 fixed top-0 left-0">
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>
      <nav>
        <ul className="flex flex-col gap-4">
          <li>
            <Link href="/dashboard" className={`block p-2 rounded ${pathname === "/dashboard" ? "bg-blue-500" : "hover:bg-gray-700"}`}>Dashboard</Link>
          </li>
          <li>
            <Link href="/dashboard/profile" className={`block p-2 rounded ${pathname === "/dashboard/profile" ? "bg-blue-500" : "hover:bg-gray-700"}`}>Profile</Link>
          </li>
          <li>
            <Link href="/dashboard/bins" className={`block p-2 rounded ${pathname === "/dashboard/bins" ? "bg-blue-500" : "hover:bg-gray-700"}`}>Bins</Link>
          </li>
          <li>
            <Link href="/dashboard/settings" className={`block p-2 rounded ${pathname === "/dashboard/settings" ? "bg-blue-500" : "hover:bg-gray-700"}`}>Settings</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
