function DropDownNavbar() {
  return (
    <div className="absolute top-full right-0 z-20 flex flex-col gap-50 px-5 py-3 w-full bg-green-300">
      <nav className="px-8 py-2">
        <div className="border-b border-gray-300 font-medium text-md py-4">
          <a href="#about">About</a>
        </div>
        <div className="border-b border-gray-300 font-medium text-md py-4">
          <a href="#">FAQ</a>
        </div>
        <div className="border-b border-gray-300 font-medium text-md py-4">
          <a href="#">Contact</a>
        </div>
      </nav>

      <div className="flex flex-col gap-2 px-8 py-2">
        <div className="bg-black rounded-full text-white shadow-md w-full text-center p-2 font-bold text-sm">
          <a href="#">Get started</a>
        </div>
        <div className="border-gray-300 border rounded-full w-full text-center p-1">
          <a href="#">Log in</a>
        </div>
      </div>
    </div>
  );
}

export default DropDownNavbar;
