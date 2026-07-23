import { useContext, useEffect, useState } from "react";
import emptyIcon from "../assets/images/inbox.png";
import Success from "./Success";

import { userContext } from "../pages/MySpace";
import useRefreshToken from "../utility/refreshToken";
import { useNavigate } from "react-router-dom";

function DailyReports() {
	const { userInfo, setUserInfo } = useContext(userContext);
	const [userDailyReports, setUserDailyReports] = useState([]);
	const [success, setSuccess] = useState();
	const [error, setError] = useState();
	const navigate = useNavigate();

	const dailyReportsURL = "https://mindlift-be.onrender.com/reports/daily";

	useEffect(() => {
		fetchReport();
	}, []);

	const fetchReport = async () => {
		const response = await fetch(dailyReportsURL, {
			method: "GET",
			credentials: "include",
		});

		if (response.status === 403) {
			const isTokenRefreshed = await useRefreshToken(
				navigate,
				setUserDailyReports,
				setUserInfo,
			);

			if (isTokenRefreshed) {
				const retryResponse = await fetch(dailyReportsURL, {
					method: "GET",
					credentials: "include",
				});
				const result = await retryResponse.json();
				const ungroup = result.reports.dailyReports;
				const groupedReports = groupReports(ungroup);
				const finalGroupedReportsArray = Object.entries(groupedReports);
				setUserDailyReports(finalGroupedReportsArray);
			}
		}
		const result = await response.json();
		const ungroup = result.reports.dailyReports;
		const groupedReports = groupReports(ungroup);
		const finalGroupedReportsArray = Object.entries(groupedReports);

		finalGroupedReportsArray.map((array) => {
			array[1].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
		});

		setUserDailyReports(finalGroupedReportsArray);
	};

	const groupReports = (reports) => {
		const reduced = reports.reduce((groups, currentReport) => {
			const date = new Date(currentReport.createdAt);

			const monthYear = date.toLocaleString("en-US", {
				month: "long",
				year: "numeric",
			});

			if (!groups[monthYear]) {
				groups[monthYear] = [];
			}

			groups[monthYear].push(currentReport);

			return groups;
		}, {});

		return reduced;
	};

	return (
		<main className="lg:px-10 px-3 py-5">
			<Success message={success} />

			<div className="mb-3">
				<h1 className="text-2xl font-bold mb-1">Daily Reports</h1>
				<p className="text-sm text-gray-500">Track your daily reports here.</p>
			</div>
			<div className="bg-white h-[70dvh] shadow-lg hover:shadow-xl rounded-xl px-4 py-2 overflow-y-auto">
				{userDailyReports.length > 0 && (
					<>
						{userDailyReports.map((data) => {
							const month = data[0];
							const reports = data[1];

							return (
								<div key={month}>
									<p className="mb-1 text-md mt-5 text-gray-500">{month}</p>
									{reports &&
										reports.map((data) => {
											return (
												<div
													className="bg-gray-100 px-3 py-2 rounded-xl mb-3"
													key={data.id}
												>
													<p className="mb-2">
														<span className="flex justify-end mb-2 text-sm text-gray-500">
															{new Date(data.createdAt).toLocaleDateString(
																"en-US",
																{
																	weekday: "short",
																	year: "numeric",
																	month: "short",
																	day: "numeric",
																	hour: "2-digit",
																	minute: "2-digit",
																	second: "2-digit",
																},
															)}
														</span>
														<span className="font-bold">You said: </span>
														<span className="italic">{data.body}</span>
													</p>
													<p className="font-semibold">{data.appResponse}</p>
													<button
														className="bg-red-200 text-red-500 px-2 py-1 text-sm rounded-lg cursor-pointer mt-4"
														onClick={async (e) => {
															e.preventDefault();
															const response = await fetch(
																`https://mindlift-be.onrender.com/reports/daily/${data.id}`,
																{
																	method: "DELETE",
																	credentials: "include",
																},
															);

															if (response.ok) {
																setSuccess("Report deleted successfully");
																setTimeout(() => {
																	setSuccess("");
																}, 3000);

																const data = await response.json();
																const ungroup = data.reports.dailyReports;
																const groupedReports = groupReports(ungroup);
																const finalGroupedReportsArray =
																	Object.entries(groupedReports);
																setUserDailyReports(finalGroupedReportsArray);
															}
														}}
													>
														Delete
													</button>
												</div>
											);
										})}
								</div>
							);
						})}
					</>
				)}
			</div>
		</main>
	);
}
export default DailyReports;
