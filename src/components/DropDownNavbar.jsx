import { Link } from "react-router-dom";

function DropDownNavbar() {
  return (
    <div className="flex flex-col justify-between px-1 pt-20 pb-10 w-full h-screen fixed inset-0 bg-white">
      <nav className="px-8 py-2">
        <div className="border-b border-gray-300 font-medium text-md py-4">
          <a href="#about">About</a>
        </div>
        <div className="border-b border-gray-300 font-medium text-md py-4">
          <a href="#faq">FAQ</a>
        </div>
        <div className="border-b border-gray-300 font-medium text-md py-4">
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <div className="flex flex-col gap-2 px-6 py-3 mt-60">
        <div className="bg-black rounded-full text-white shadow-md w-full text-center p-3 font-semibold text-md">
          <Link to={"/signup"}>Get started</Link>
        </div>
        <div className="border-gray-300 border rounded-full w-full text-center p-3 text-md">
          <Link to={"/login"}>Log in</Link>
        </div>
      </div>
    </div>
  );
}

export default DropDownNavbar;
