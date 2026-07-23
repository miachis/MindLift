import { useContext, useEffect, useState } from "react";
import { userContext } from "../pages/MySpace";
import useRefreshToken from "../utility/refreshToken";
import { useNavigate } from "react-router-dom";
import Error from "./Error";

function WeeklyReports() {
	const { userInfo } = useContext(userContext);
	const [reports, setReports] = useState([]);
	const navigate = useNavigate();
	const [error, setError] = useState("");

	const weeklyReportsURL = " https://mindlift-be.onrender.com/reports/weekly";

	useEffect(() => {
		async function fetchReports() {
			const response = await fetch(weeklyReportsURL, {
				method: "GET",
				credentials: "include",
			});

			if (!response.ok) {
				setError("Try refreshing again");

				setTimeout(() => {
					setError("");
				}, 3000);
			}
			const data = await response.json();
			const arrayVersion = Object.entries(
				sortWeeklyReports(data.reports.weeklyReports),
			);

			arrayVersion.map((array) => {
				array[1].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
			});
			setReports(arrayVersion);
		}

		async function getWeeklyReports() {
			const day = new Date().getDay();

			if (day === 0) {
				// create report
				const response = await fetch(weeklyReportsURL, {
					method: "POST",
					credentials: "include",
					body: JSON.stringify({ id: userInfo.id }),
					headers: {
						"Content-Type": "application/json",
					},
				});

				if (!response.ok) {
					setError("Try refreshing again");

					setTimeout(() => {
						setError("");
					}, 3000);
				}

				const data = await response.json();
				const arrayVersion = Object.entries(
					sortWeeklyReports(data.reports.weeklyReports),
				);
				setReports(arrayVersion);
			} else {
				fetchReports();
			}
		}

		getWeeklyReports();
	}, []);

	const sortWeeklyReports = (reportsArray) => {
		const sortedArray = reportsArray.reduce((inititalValue, currentValue) => {
			const monthYear = new Date(currentValue.createdAt).toLocaleString(
				"en-US",
				{
					month: "long",
					year: "numeric",
				},
			);

			if (!inititalValue[monthYear]) {
				inititalValue[monthYear] = [];
			}

			inititalValue[monthYear].push(currentValue);

			return inititalValue;
		}, {});

		return sortedArray;
	};

	return reports.length > 0 ? (
		<main className="lg:px-10 px-3 py-5">
			<Error message={error} />
			<div className="mb-3">
				<h1 className="text-2xl font-bold mb-1">Weekly Reports</h1>
				<p className="text-sm text-gray-500">Track your weekly reports here.</p>
			</div>
			<div className="bg-white h-[70dvh] p-2 shadow-lg rounded-xl hover:shadow-xl overflow-y-auto">
				{reports.map((report) => {
					const month = report[0];
					const actualReports = report[1];

					return (
						<div key={month}>
							<p className="mb-1 text-md mt-5 text-gray-500">{month}</p>
							{actualReports.map((value) => {
								return (
									<div
										key={value.id}
										className="bg-black text-white px-3 py-2 mb-3 rounded-xl"
									>
										<div className="flex justify-end mb-2 text-sm text-gray-500">
											<p>
												{new Date(value.createdAt).toLocaleDateString("en-US", {
													weekday: "short",
													year: "numeric",
													month: "short",
													day: "numeric",
												})}
											</p>
										</div>
										<div>
											<p className="font-semibold">{value.body}</p>
										</div>
									</div>
								);
							})}
						</div>
					);
				})}
			</div>
		</main>
	) : (
		<p>loading...</p>
	);
}

export default WeeklyReports;
