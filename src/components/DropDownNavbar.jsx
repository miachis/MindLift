import { Link } from "react-router-dom";

function DropDownNavbar() {
  return (
    <div className="fixed inset-0 top-full z-200 flex flex-col gap-50 px-5 py-3 w-full h-full bg-green-300">
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

      <div className="flex flex-col gap-2 px-8 py-2">
        <div className="bg-black rounded-full text-white shadow-md w-full text-center p-2 font-bold text-sm">
          <Link to={"/signup"}>Get started</Link>
        </div>
        <div className="border-gray-300 border rounded-full w-full text-center p-1">
          <Link to={"/login"}>Log in</Link>
        </div>
      </div>
    </div>
  );
}

export default DropDownNavbar;
