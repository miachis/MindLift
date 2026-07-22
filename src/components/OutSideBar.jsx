import mindLiftLogo from "../assets/images/logo.svg";
import addArrow from "../assets/images/icons8-diagonal-arrow-50.png";
import defaultProfilePicture from "../assets/images/user.png";
import homeIcon from "../assets/images/home.png";
import reportsIcon from "../assets/images/clipboard.png";
import reportsSecondIcon from "../assets/images/report.png";
import upAndDownIcon from "../assets/images/up-and-down-arrow.png";
import closeIcon from "../assets/images/close-x-svgrepo-com.svg";

import MySpaceMenu from "./MySpaceMenu";

import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../pages/MySpace";

function OutSideBar({ otherSideBar, setOtherSideBar }) {
	// open state controls the showing of the profile settings and logout button
	const [open, setOpen] = useState(false);

	const { userInfo } = useContext(userContext);

	// otherSideBar state controls the closing of the sidebar

	function close() {
		setOtherSideBar(!otherSideBar);
	}

	const navigations = [
		{
			image: homeIcon,
			name: "Home",
			link: "/myspace",
		},
		{
			image: reportsIcon,
			name: "Daily Reports",
			link: "daily-reports",
		},
		{
			image: reportsSecondIcon,
			name: "Weekly Reports",
			link: "weekly-reports",
		},
	];

	return (
		<aside className="min-h-dvh z-90000 shadow-sm bg-black/30 inset-0 fixed backdrop-blur-sm">
			<div
				className={`bg-white h-full w-[70%] flex flex-col justify-between pt-3 pb-2 px-3`}
				onClick={() => open && setOpen(false)}
			>
				<div>
					<div className={`flex mb-5 items-center justify-between`}>
						<Link to={"/"} onClick={() => close()}>
							<img src={mindLiftLogo} alt="mindlift logo" className={`w-8`} />
						</Link>
						<span className="hover:cursor-pointer" onClick={() => close()}>
							<img src={closeIcon} alt="sidebar icon" className={`w-5`} />
						</span>
					</div>
					<div className={`flex flex-col gap-3`}>
						<div>
							<p className="text-[12px] font-semibold text-gray-500">
								Navigation
							</p>
						</div>
						{/* DONT REPEAT YOURSELF */}
						{navigations.map((nav) => {
							return (
								<Link
									key={nav.name}
									className="flex items-center gap-2"
									to={nav.link}
									onClick={() => close()}
								>
									<span>
										<img src={nav.image} className="w-4" />
									</span>
									<span className={`font-semibold`}>{nav.name}</span>
								</Link>
							);
						})}
					</div>
				</div>

				<div>
					{open ? (
						<MySpaceMenu close={close} />
					) : (
						<Link
							className="bg-[#16A34A] text-white w-full text-left py-2 px-3 rounded-lg flex items-center justify-between cursor-pointer hover:bg-[#16793a]"
							to={"new-report"}
							onClick={() => close(otherSideBar, setOtherSideBar)}
						>
							<span className={`font-semibold`}>New report</span>
							<span>
								<img src={addArrow} alt="diagonal arrow" className="w-5" />
							</span>
						</Link>
					)}

					<div className="w-full border-t border-t-gray-300 mt-2 pt-2">
						<div
							className="w-full p-2 flex items-center justify-between cursor-pointer hover:bg-gray-100 hover:rounded-xl"
							onClick={() => setOpen(!open)}
						>
							<div className="flex items-center gap-3">
								<img
									src={defaultProfilePicture}
									alt="default user profile picture"
									className="w-8"
								/>
								<p className={`font-semibold text-md`}>{userInfo.firstName}</p>
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
		</aside>
	);
}

export default OutSideBar;
