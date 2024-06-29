import React from "react";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="h-16 shadow-md">
      <div className="h-full container mx-auto flex items-center px-4 justify-around">
        <div className="">
          <Logo w={90} h={50} />
        </div>
        <div>
          search
        </div>
        <div>
          user icon and cards
        </div>
      </div>
    </header>
  );
};

export default Header;
