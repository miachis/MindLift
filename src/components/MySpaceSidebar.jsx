import mindLiftLogo from "../assets/images/logo.svg";
import addArrow from "../assets/images/icons8-diagonal-arrow-50.png";
import defaultProfilePicture from "../assets/images/user.png";
import homeIcon from "../assets/images/home.png";
import reportsIcon from "../assets/images/clipboard.png";
import reportsSecondIcon from "../assets/images/report.png";
import sidebarIcon from "../assets/images/layouting.png";
import upAndDownIcon from "../assets/images/up-and-down-arrow.png";
import MySpaceMenu from "./MySpaceMenu";

import { useState } from "react";

function MySpaceSiderbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl bg-white h-full shadow-xl flex flex-col justify-between pt-3 px-3 pb-2">
      <div>
        <div className="flex justify-between mb-5 items-center">
          <img src={mindLiftLogo} alt="mindlift logo" className="w-8" />
          <span className="hover:cursor-pointer">
            <img src={sidebarIcon} alt="sidebar icon" className="w-5" />
          </span>
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <p className="text-[12px] font-semibold text-gray-500">
              Navigation
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span>
              <img src={homeIcon} alt="home icon" className="w-4" />
            </span>
            <span className="font-semibold">Home</span>
          </div>
          <div className="flex items-center gap-2">
            <span>
              <img src={reportsIcon} alt="report icon" className="w-4" />
            </span>
            <span className="font-semibold">Daily Reports</span>
          </div>
          <div className="flex items-center gap-2">
            <span>
              <img src={reportsSecondIcon} alt="report icon" className="w-4" />
            </span>
            <span className="font-semibold">Weekly Reports</span>
          </div>
        </div>
      </div>

      <div>
        {open ? (
          <MySpaceMenu />
        ) : (
          <button className="bg-[#16A34A] text-white w-full text-left py-2 px-3 rounded-lg flex items-center justify-between cursor-pointer hover:bg-[#16793a]">
            <span className="font-semibold">New report</span>
            <span>
              <img src={addArrow} alt="diagonal arrow" className="w-3" />
            </span>
          </button>
        )}

        <div className="w-full border-t border-t-gray-300 mt-2 pt-2">
          <div
            className="w-full p-2 flex items-center justify-between cursor-pointer hover:bg-gray-100 hover:rounded-xl"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <div className="flex items-center gap-3">
              <img
                src={defaultProfilePicture}
                alt="default user profile picture"
                className="w-8"
              />
              <p className="font-semibold text-md">John</p>
            </div>
            <div>
              <span>
                <img
                  src={upAndDownIcon}
                  alt="up and down arrow"
                  className="w-4"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MySpaceSiderbar;
