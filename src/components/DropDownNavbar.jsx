function DropDownNavbar() {
  return (
    <div className="flex flex-col absolute top-10 left-1 bg-amber-300 w-full">
      <nav>
        <div className="border-b">
          <a href="#">About</a>
        </div>
        <div className="border-b">
          <a href="#">FAQ</a>
        </div>
        <div className="border-b">
          <a href="#">Contact</a>
        </div>
      </nav>

      <div>
        <div>
          <a href="#">Get started</a>
        </div>
        <div>
          <a href="#">Log in</a>
        </div>
      </div>
    </div>
  );
}

export default DropDownNavbar;
