import { useState } from "react";
import DropDownNavbar from "./DropDownNavbar";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-100 px-10 flex justify-center items-center">
      <div className="w-full flex border justify-between items-center shadow-sm border-white rounded-full backdrop-blur-md bg-white/30 py-2 pl-4 pr-5 mt-3 lg:py-2.5 lg:pl-8 lg:pr-4 2xl:py-5">
        {open && <DropDownNavbar />}
        <div className="flex justify-between w-full items-center lg:w-max lg:gap-15">
          <a className="flex items-center" href="#">
            <img src="./logo.svg" className="h-6 lg:h-7" />
            <p className="text-2xl font-bold">MindLift</p>
          </a>

          <nav className="flex gap-10 text-md">
            <a href="#about" className="hidden lg:block font-medium text-md">
              About
            </a>
            <a href="#faq" className="hidden lg:block font-medium text-md">
              FAQ
            </a>
            <a href="#" className="hidden lg:block font-medium text-md">
              Contact
            </a>
            <button
              className="cursor-pointer lg:hidden flex items-center justify-center w-10 h-10 rounded-full"
              onClick={() => setOpen(!open)}
            >
              <div className="w-5 h-5 flex flex-col justify-center items-center space-y-1">
                <span className="block w-5 h-0.5 bg-black"></span>
                <span className="block w-5 h-0.5 bg-black"></span>
                <span className="block w-5 h-0.5 bg-black"></span>
              </div>
            </button>
          </nav>
        </div>

        <div className=" hidden bg-black text-white shadow-md font-bold px-5 py-2 rounded-full text-sm lg:block">
          <a href="#">Get Started</a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
