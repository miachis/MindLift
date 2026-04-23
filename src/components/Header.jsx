function Header() {
  return (
    <section className="flex items-center pt-30 pb-10 px-8 lg:px-40">
      <div className="flex items-center">
        <div>
          <div className="pb-5">
            <h1 className="font-bold text-3xl">
              Reflect. Learn. Decide Better <br />
              with {""}
              <span className="font-mono text-[#16A34A] font-extrabold">
                MindLift
              </span>
            </h1>
          </div>
          <div className="pb-15 text-md lg:w-[60%]">
            <p className="w-full text-gray-800">
              Track your daily struggles and turn them into smarter decisions.
              The app learns from your experiences and gives you tailored
              recommendations to help you grow and make better choices every
              day.
            </p>
          </div>

          {/* for mobile */}
          <div className="w-full block lg:hidden lg:w-400">
            <img
              src="./public/alghozy--fKdxDYIBko-unsplash.png"
              alt="a man reading a book"
              className="w-full"
            />
          </div>

          <div className="flex flex-col lg:items-center gap-y-2 lg:gap-x-5 lg:flex-row">
            <div className="bg-black text-white w-full p-3 rounded-full text-md font-bold text-center shadow-sm lg:px-6 py-2 lg:w-max hover:bg-white hover:border-gray-300 hover:border hover:text-black hover:font-normal">
              <a href="#">Get Started</a>
            </div>
            <div className="rounded-full text-md w-full p-3 text-center border shadow-sm border-gray-300 lg:px-6 py-2 lg:w-max hover:bg-black hover:text-white hover:font-bold">
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>

        {/* for desktop and larger screens */}
        <div className="hidden w-100 lg:block lg:w-150">
          <img
            src="./public/alghozy--fKdxDYIBko-unsplash.png"
            alt="a man reading a book"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Header;
