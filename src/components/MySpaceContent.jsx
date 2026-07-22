import emptyIcon from "../assets/images/inbox.png";
import rightArrow from "../assets/images/right-arrow.png";
import todoIcon from "../assets/images/check-list.png";
import { useContext, useEffect, useState } from "react";
import { userContext } from "../pages/MySpace";

function MySpaceContent() {
	const { userInfo, setUserInfo } = useContext(userContext);
	const [activities, setActivities] = useState({});

	useEffect(() => {
		fetchActivities();
	}, []);

	const fetchActivities = async () => {
		const response = await fetch(
			`http://localhost:8080/reports/activities/${userInfo.id}`,
			{
				method: "GET",
				credentials: "include",
			},
		);

		if (!response.ok) {
			setActivities({});
		}

		const data = await response.json();

		data.activities.sort((a, b) => new Date(b.date) - new Date(a.date));
		setActivities(data);
	};

	const activityIsDefined =
		activities.activities && activities.activities.length > 0;

	return (
		<main className="px-3 lg:px-10 py-5">
			<div className="mb-10">
				<h1 className="text-2xl font-bold">Welcome, {userInfo.firstName}!</h1>
				<h2 className="text-gray-500">Your space for managing your reports.</h2>
			</div>
			<div>
				<h2 className="text-xl font-semibold text-gray-800 mb-3">
					What's Happening
				</h2>
				<div
					className={`bg-white w-full h-[50vh] shadow-lg rounded-xl ${activityIsDefined ? "" : "flex justify-center"} hover:shadow-xl ${activityIsDefined ? "pt-5" : "py-20"} px-5 lg:${activityIsDefined ? "p-10" : "p-30"} overflow-y-auto`}
				>
					{activityIsDefined ? (
						<>
							{activities.activities.map((activity) => {
								return (
									<div
										className={`w-full ${activity.isDailyReport ? "" : "bg-black text-white"} ${activity.header === "Created a report" ? "bg-green-300" : "bg-red-300"} rounded-lg mb-2 p-3 h-20`}
										key={activity.id}
									>
										<div className="flex justify-between mb-1">
											<span>{activity.header}</span>
											<span className="text-[12px]">
												{new Date(activity.date).toLocaleDateString("en-US", {
													weekday: "short",
													year: "numeric",
													month: "short",
													day: "numeric",
													hour: "2-digit",
													minute: "2-digit",
													second: "2-digit",
												})}
											</span>
										</div>
										<div>
											<p className="truncate text-sm italic">{activity.body}</p>
										</div>
									</div>
								);
							})}
						</>
					) : (
						<div>
							<div className="flex justify-center">
								<span className="flex justify-center mb-3 w-max p-3 bg-gray-100 rounded-full">
									<img src={emptyIcon} alt="empty" className="w-5" />
								</span>
							</div>
							<span>
								<h3 className="text-gray-800 font-medium text-center">
									No records yet
								</h3>
								<span className="text-gray-500 text-sm">
									Your records will be shown here.
								</span>
							</span>
						</div>
					)}
				</div>
			</div>
		</main>
	);
}

export default MySpaceContent;
