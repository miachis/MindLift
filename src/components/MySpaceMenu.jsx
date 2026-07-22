import defaultProfilePicture from "../assets/images/user.png";
import settingsIcon from "../assets/images/setting.png";
import logoutIcon from "../assets/images/logout.png";
import { signOutHandler } from "./Account";

import { Link, useNavigate } from "react-router-dom";

import { userContext } from "../pages/MySpace";
import { useContext } from "react";

function MySpaceMenu({ close }) {
	const { userInfo } = useContext(userContext);
	const navigate = useNavigate();

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
					<span className="font-semibold truncate">
						{userInfo.firstName} {userInfo.lastName}
					</span>
					<span className="text-sm text-gray-700 truncate">
						{userInfo.email}
					</span>
				</div>
			</div>

			<div className="flex flex-col p-3 gap-3">
				<Link
					className="flex items-center gap-2 hover:bg-gray-200 cursor-pointer p-2 rounded-xl"
					to={"account"}
					onClick={() => close()}
				>
					<img src={settingsIcon} alt="account icon" className="w-4 h-4" />
					<span className="text-md">Account</span>
				</Link>
			</div>

			<div className="border-t border-t-gray-200 p-2 cursor-pointer">
				<div className="p-3 hover:bg-gray-200 rounded-xl">
					<Link className="flex items-center gap-2" to={"logout"}>
						<img src={logoutIcon} alt="log out icone" className="w-3" />
						<span onClick={() => signOutHandler(userInfo, navigate)}>
							Log out
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default MySpaceMenu;
