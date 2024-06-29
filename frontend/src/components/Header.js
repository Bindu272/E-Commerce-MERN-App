import React from "react";
import Logo from "./Logo";
import { FaSearch } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
const Header = () => {
  return (
    <header className="h-16 shadow-md">
      <div className="h-full container mx-auto flex items-center px-4 justify-around">
        <div className="">
          <Logo w={90} h={50} />
        </div>
        <div className="flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2">
          <input
            type="text"
            placeholder="search product here.."
            className="w-full outline-none"
          />
          <div className="text-lg min-w-[50px] bg-red-600 h-8 flex items-center justify-center rounded-r-full text-white">
            <FaSearch />
          </div>
        </div>
        <div className="flex items-center gap-7">
          <div className="relative flex justify-center">
            <div className="text-3xl cursor-pointer relative flex justify-center">
              <FaRegCircleUser />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
