"use client";

import { usePathname } from "next/navigation";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="p-5 bg-gray-800 flex items-center justify-between">
      <div className="flex items-center gap-4"> 
        <div className="text-white font-bold">Dashboard</div>
        <div className="text-gray-400 font-bold capitalize">
          {pathname.split("/").pop()}
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2 bg-gray-700 p-2 rounded-lg">
          <MdSearch className="text-white"/>
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-none text-white"
          />
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;