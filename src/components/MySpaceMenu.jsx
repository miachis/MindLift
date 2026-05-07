import defaultProfilePicture from "../assets/images/user.png";
import settingsIcon from "../assets/images/setting.png";
import logoutIcon from "../assets/images/logout.png";

function MySpaceMenu() {
  return (
    <div className="shadow-xl rounded-xl">
      <div className="border-b border-b-gray-200 flex p-3 items-center gap-3">
        <span>
          <img
            src={defaultProfilePicture}
            alt="profile picture"
            className="w-8"
          />
        </span>
        <div className="flex flex-col">
          <span className="font-semibold">John Smith</span>
          <span className="text-sm text-gray-700">johnsmith@gmail.com</span>
        </div>
      </div>

      <div className="flex flex-col p-3 gap-3">
        <span className="flex items-center gap-2 hover:bg-gray-200 cursor-pointer p-2 rounded-xl">
          <img src={settingsIcon} alt="account icon" className="w-4 h-4" />
          <span className="text-md">Account</span>
        </span>
      </div>

      <div className="border-t border-t-gray-200 p-2 cursor-pointer">
        <div className="p-3 hover:bg-gray-200 rounded-xl">
          <span className="flex items-center gap-2">
            <img src={logoutIcon} alt="log out icone" className="w-3" />
            <span>Log out</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default MySpaceMenu;
