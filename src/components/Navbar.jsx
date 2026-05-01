import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import DropDownNavbar from "./DropDownNavbar";
import mindLiftLogo from "../assets/images/logo.svg";

function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      {open && <DropDownNavbar />}
      <header className="sticky top-0 z-100 px-10 flex justify-center items-center">
        <div className="w-full flex border justify-between items-center shadow-sm border-white rounded-full backdrop-blur-md bg-white/30 py-2 pl-4 pr-5 mt-3 lg:py-2.5 lg:pl-8 lg:pr-4 2xl:py-5">
          <div className="flex justify-between w-full items-center lg:w-max lg:gap-15">
            <a className="flex items-center" href="#">
              <img src={mindLiftLogo} className="h-6 lg:h-7" />
              <p className="text-2xl font-bold">MindLift</p>
            </a>

            <nav className="flex gap-10 text-md">
              <a
                href="#about"
                className="hidden lg:block font-medium text-md hover:text-gray-700"
              >
                About
              </a>
              <a
                href="#faq"
                className="hidden lg:block font-medium text-md hover:text-gray-700"
              >
                FAQ
              </a>
              <a
                href="#contact"
                className="hidden lg:block font-medium text-md hover:text-gray-700"
              >
                Contact
              </a>
              <button
                className="cursor-pointer lg:hidden flex items-center justify-center w-10 h-10 rounded-full"
                onClick={() => setOpen(!open)}
              >
                {open ? (
                  <div class="relative w-5 h-5">
                    <span class="absolute w-5 h-0.5 bg-black rotate-45 top-1/2 left-0 -translate-y-1/2"></span>
                    <span class="absolute w-5 h-0.5 bg-black -rotate-45 top-1/2 left-0 -translate-y-1/2"></span>
                  </div>
                ) : (
                  <div className="w-5 h-5 flex flex-col justify-center items-center space-y-1">
                    <span className="block w-5 h-0.5 bg-black"></span>
                    <span className="block w-5 h-0.5 bg-black"></span>
                    <span className="block w-5 h-0.5 bg-black"></span>
                  </div>
                )}
              </button>
            </nav>
          </div>

          <div className=" hidden bg-black text-white shadow-sm font-bold px-5 py-2 rounded-full text-sm lg:block">
            <Link to={"/login"}>Get Started</Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
