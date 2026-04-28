function GetStarted() {
  return (
    <main className="lg:grid grid-cols-2 grid-rows-1 h-screen fixed inset-0 justify-center">
      <div className="hidden bg-[#191919] text-white lg:grid grid-cols-1 grid-rows-3 py-10 pl-10">
        <img src="./white-logo.svg" alt="MindLift logo" />
        <div className="self-center">
          <p className="text-3xl font-bold">Welcome back to MindLift</p>
          <p className="text-white/70 pt-5 text-md max-w-100">
            Sign in to track your daily challenges, manage your profile and get
            real time suggestions.
          </p>
        </div>
        <span className="self-end text-[12px] font-semibold text-white/40">
          © 2026 MindLift. All rights reserved.
        </span>
      </div>
      <div className="lg:bg-[#232323] bg-[#191919] text-white h-screen px-10 lg:px-0">
        <div className="flex flex-col items-center justify-center h-full">
          {/* For smaller screens */}
          <div className="visible lg:hidden pb-6">
            <img src="./white-logo.svg" alt="MindLift logo" />
          </div>
          <div>
            <h1 className="sm:text-3xl text-lg font-bold">Welcome back</h1>
          </div>
          <div className="mt-8 mb-4">
            <p className="text-sm text-white/70">
              Don't have an account?{" "}
              <span className="text-white font-bold hover:cursor-pointer hover:underline">
                <a href="signup">Sign up</a>
              </span>
            </p>
          </div>
          <div>
            <p className="text-white/40 lg:text-[12px] text-[11px]">
              By signing in, you agree to MindLift's{" "}
              <span className="underline cursor-pointer">
                <a href="terms">Terms of Service</a>
              </span>{" "}
              and{" "}
              <span className="underline cursor-pointer">
                <a href="privacy">Privacy Policy.</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default GetStarted;
