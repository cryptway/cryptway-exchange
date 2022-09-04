import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/logo.png";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.6] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer"  />
      </div>
      <div className="text-white md:flex list-none flex-row justify-between items-center flex-initial">
      
      <a href="https://etherscan.io/" target="_blank">Etherscan</a> 
      <a href="https://modernblog-app.vercel.app/" className="mx-5" target="_blank">Learn more</a> 
        </div>
    </nav>
  );
};

export default Navbar;
