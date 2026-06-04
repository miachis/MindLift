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
import { Link } from "react-router-dom";
import OutSideBar from "./OutSideBar";

function MySpaceSiderbar({ closeSideBar, setCloseSideBar }) {
	const [open, setOpen] = useState(false);
	const [otherSideBar, setOtherSideBar] = useState(false);

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
		<>
			{otherSideBar && (
				<OutSideBar
					otherSideBar={otherSideBar}
					setOtherSideBar={setOtherSideBar}
				/>
			)}
			<aside>
				<div
					className={`rounded-xl bg-white lg:h-full lg:shadow-xl flex flex-col justify-between pt-3 pb-2 px-3`}
					onClick={() => {
						open === true ? setOpen(false) : "";
					}}
				>
					<div>
						<div
							className={`flex lg:mb-5 items-center ${!closeSideBar ? "lg:justify-center" : "justify-between"}`}
						>
							<Link to={"/"}>
								<img
									src={mindLiftLogo}
									alt="mindlift logo"
									className={`w-8 hidden lg:block ${!closeSideBar && "lg:hidden"}`}
								/>
							</Link>
							<span
								className="hover:cursor-pointer"
								onClick={() => {
									// when on smaller screens bring the sidebar from the left
									if (window.innerWidth >= 768) {
										setCloseSideBar(!closeSideBar);
									} else {
										setOtherSideBar(true);
									}
								}}
							>
								<img src={sidebarIcon} alt="sidebar icon" className={`w-5`} />
							</span>
						</div>
						<div
							className={`lg:flex flex-col gap-3 hidden ${!closeSideBar && "gap-5 items-center"}`}
						>
							<div className={`${!closeSideBar ? "lg:hidden" : ""}`}>
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
									>
										<span>
											<img src={nav.image} className="w-4" />
										</span>
										<span
											className={`font-semibold ${!closeSideBar && "lg:hidden"}`}
										>
											{nav.name}
										</span>
									</Link>
								);
							})}
						</div>
					</div>

					<div className="hidden lg:block">
						{open ? (
							<MySpaceMenu />
						) : (
							<Link
								className={`bg-[#16A34A] text-white w-full text-left ${!closeSideBar ? "p-2" : "py-2 px-3"} rounded-lg flex items-center justify-between cursor-pointer hover:bg-[#16793a]`}
								to={"new-report"}
							>
								<span
									className={`font-semibold ${!closeSideBar && "lg:hidden"}`}
								>
									New report
								</span>
								<span>
									<img
										src={addArrow}
										alt="diagonal arrow"
										className={`${!closeSideBar ? "w-full" : "w-4"}`}
									/>
								</span>
							</Link>
						)}

						<div className="w-full border-t border-t-gray-300 mt-2 pt-2">
							<div
								className={`w-full flex items-center justify-between ${!closeSideBar ? "p-0" : "p-2"} cursor-pointer hover:bg-gray-100 hover:rounded-xl`}
								onClick={() => {
									if (!closeSideBar) {
										setCloseSideBar(!closeSideBar);
									}
									setOpen(!open);
								}}
							>
								<div className="flex items-center gap-3">
									<img
										src={defaultProfilePicture}
										alt="default user profile picture"
										className="w-8"
									/>
									<p
										className={`font-semibold text-md ${!closeSideBar ? "lg:hidden" : ""}`}
									>
										John
									</p>
								</div>
								<div className={`${!closeSideBar ? "lg:hidden" : ""}`}>
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
		</>
	);
}

export default MySpaceSiderbar;
