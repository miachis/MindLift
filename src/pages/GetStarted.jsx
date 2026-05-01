import { useState } from "react";
import mindLiftWhiteLogo from "../assets/images/white-logo.svg";
import googleLogo from "../assets/images/google-icon-logo-svgrepo-com.svg";

function GetStarted() {
  const [userEmail, setUserEmail] = useState("");

  return (
    <main className="lg:grid grid-cols-2 grid-rows-1 h-screen fixed inset-0 justify-center">
      <div className="hidden bg-[#191919] text-white lg:grid grid-cols-1 grid-rows-3 py-10 pl-10">
        <img src={mindLiftWhiteLogo} alt="MindLift logo" />
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
        <div className="flex flex-col items-center justify-center h-full lg:px-30">
          {/* For smaller screens */}
          <div className="visible lg:hidden pb-6">
            <img src={mindLiftWhiteLogo} alt="MindLift logo" />
          </div>
          <div className="mb-7">
            <h1 className="sm:text-3xl text-lg font-bold">Welcome back</h1>
          </div>
          <div className="w-full flex flex-col">
            <button className="border border-white/10 flex justify-center rounded-full py-3 cursor-pointer hover:border-white/40 hover:bg-[#333232c9] transition-all">
              <span className="flex items-center gap-3">
                <span>
                  <img src={googleLogo} alt="google icon" className="max-w-4" />
                </span>
                <span className="font-semibold">Continue with Google</span>
              </span>
            </button>
            <div className="flex items-center justify-center py-6">
              <div className="grow border-t border-white/10"></div>
              <p className="text-white/40 text-[12px] px-5">or</p>
              <div className="grow border-t border-white/10"></div>
            </div>
            <form className="flex flex-col gap-5">
              <input
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="Enter your email address"
                className="rounded-xl px-5 py-3 bg-[#ffffff12] focus:outline-0 text-white text-md border border-transparent hover:border-white/30 transition duration-200"
              />
              <button
                type="submit"
                className="bg-white cursor-pointer text-black rounded-full py-3 font-semibold text-md hover:bg-white/90 transition-all"
              >
                Continue
              </button>
            </form>
          </div>
          <div className="mt-3 mb-4">
            <p className="text-sm text-white/70">
              Don't have an account?{" "}
              <span className="text-white font-semibold hover:cursor-pointer hover:underline">
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
