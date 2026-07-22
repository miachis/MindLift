import { useContext, useState } from "react";
import { userContext } from "../pages/MySpace";
import useRefreshToken from "../utility/refreshToken";
import { useNavigate } from "react-router-dom";
import Error from "./Error";
import Success from "./Success";

function NewReport() {
	const [openForm, setOpenForm] = useState(false);
	const [userReportRequest, setUserReportRequest] = useState("");
	const { userInfo } = useContext(userContext);
	const navigate = useNavigate();
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");

	const [loading, setLoading] = useState(false);

	const sendReportRequest = async (e) => {
		e.preventDefault();
		if (userReportRequest.length > 0) {
			setLoading(true);
			const response = await fetch("http://localhost:8080/ai/v1/gemini", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					userReport: userReportRequest,
					userId: userInfo.id,
				}),
				credentials: "include",
			});

			if (!response.ok) {
				if (response.status === 403) {
					const isTokenRefreshed = await useRefreshToken(navigate, setError);

					if (isTokenRefreshed) {
						const retryResponse = await fetch(
							"http://localhost:8080/ai/v1/gemini",
							{
								method: "POST",
								headers: {
									"Content-Type": "application/json",
								},
								body: JSON.stringify({
									userReport: userReportRequest,
									userId: userInfo.id,
								}),
								credentials: "include",
							},
						);
						navigate("/myspace/daily-reports");
					}
				}

				if (response.status === 500) {
					setError("An error occured");
				}

				if (response.status === 400 || response.status === 401) {
					navigate("/login");
				}

				setTimeout(() => {
					setError("");
				}, 3000);
				setLoading(false);
				setOpenForm(false);
				return;
			}

			setOpenForm(false);
			setLoading(false);
			navigate("/myspace/daily-reports");
		}
	};

	return (
		<main className="lg:px-10 px-3 py-5 relative">
			<Success message={success} />
			<Error message={error} />
			<div className="mb-10">
				<h1 className="text-2xl font-bold mb-1">Create Report</h1>
			</div>

			<div
				className={`flex justify-center items-center bg-white h-[50vh] shadow-md rounded-xl transition-all duration-300 ${
					openForm ? "blur-sm pointer-events-none" : ""
				}`}
			>
				<button
					onClick={() => setOpenForm(true)}
					className="bg-[#16A34A] text-xl shadow-sm font-bold cursor-pointer text-white px-10 py-3 rounded-full hover:bg-[#18803e]"
				>
					Create
				</button>
			</div>

			{openForm && (
				<div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50 px-3">
					<div className="bg-white w-full max-w-xl rounded-2xl shadow-xl p-6">
						<div className="flex justify-between items-center mb-5">
							<h2 className="text-2xl font-bold">Talk to MindLift</h2>

							<button
								onClick={() => setOpenForm(false)}
								disabled={loading}
								className="text-gray-500 hover:text-black text-xl cursor-pointer"
							>
								✕
							</button>
						</div>

						<textarea
							placeholder="Type your report here..."
							onChange={(e) => setUserReportRequest(e.target.value)}
							className="w-full h-40 border border-gray-300 rounded-xl p-4 resize-none outline-none focus:ring-2 focus:ring-[#16A34A]"
						/>

						<div className="flex justify-end gap-3 mt-6">
							<button
								onClick={() => setOpenForm(false)}
								disabled={loading}
								className="px-5 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 cursor-pointer"
							>
								Close
							</button>

							<button
								className="bg-[#16A34A] text-white px-6 py-2 rounded-lg hover:bg-[#18803e] cursor-pointer"
								onClick={(e) => {
									sendReportRequest(e);
								}}
								disabled={loading}
							>
								{loading ? <span className="spinner"></span> : "Send"}
							</button>
						</div>
					</div>
				</div>
			)}
		</main>
	);
}

export default NewReport;
