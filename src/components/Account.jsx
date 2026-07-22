import { useContext, useState } from "react";
import defaultProfilePicture from "../assets/images/user.png";
import Error from "./Error";
import Success from "./Success";
import { useNavigate } from "react-router-dom";

import { userContext } from "../pages/MySpace";
import useRefreshToken from "../utility/refreshToken";

export const signOutHandler = async (userInfo, navigate) => {
	const response = await fetch("http://localhost:8080/account/api/signout", {
		method: "POST",
		body: JSON.stringify({ email: userInfo.email }),
		headers: {
			"Content-Type": "application/json",
		},
		credentials: "include",
	});

	if (!response.ok) {
		if (response.status === 404) {
			setError("Resource Not Found");
		}
		if (response.status === 401 || response.status === 400) {
			setError("Invalid request");
		}
		setTimeout(() => {
			setError("");
		}, 3000);
		return;
	}

	navigate("/", { replace: true });
};

function Account() {
	const { userInfo, setUserInfo } = useContext(userContext);
	const navigate = useNavigate();
	const [changeName, setChangeName] = useState(false);
	const [changeNameLoading, setChangeNameLoading] = useState(false);
	const [openOTPbox, setOpenOTPbox] = useState(false);
	const [otpInput, setOtpInput] = useState("");
	const [otpLoading, setOtpLoading] = useState(false);
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");
	const [deleteAccountLoading, setDeleteAccountLoading] = useState(false);

	const changeUsername = async (event, firstName, lastName, email) => {
		event.preventDefault();

		if (firstName.length === 0) {
			return;
		}

		setChangeNameLoading(true);
		const response = await fetch(
			"http://localhost:8080/account/api/change-username",
			{
				method: "POST",
				body: JSON.stringify({ firstName, lastName, email }),
				headers: {
					"Content-Type": "application/json",
				},
				credentials: "include",
			},
		);

		if (!response.ok) {
			if (response.status === 404) {
				setError("No user found");
			}
			if (response.status === 500) {
				setError("An error occured");
			}
			if (response.status === 403) {
				const tokenIsRefreshed = await useRefreshToken(
					navigate,
					setError,
					setUserInfo,
				);
				// retry the request
				if (tokenIsRefreshed) {
					const result = await fetch(
						"http://localhost:8080/account/api/change-username",
						{
							method: "POST",
							body: JSON.stringify({ firstName, lastName, email }),
							headers: {
								"Content-Type": "application/json",
							},
							credentials: "include",
						},
					);

					const data = await result.json();
					setUserInfo(data.user);
					setSuccess("Name changed successfully.");
				}
			}
			setTimeout(() => {
				setError("");
				setSuccess("");
			}, 3000);
			setChangeName(false);
			setChangeNameLoading(false);
			return;
		}

		const data = await response.json();
		setUserInfo(data.user);
		setSuccess("Name changed successfully.");

		setTimeout(() => {
			setSuccess("");
		}, 3000);
		setChangeNameLoading(false);
		setChangeName(false);
	};

	const sendOTPHandler = async (e, userEmail) => {
		e.preventDefault();
		setOtpLoading(true);
		const response = await fetch(
			"http://localhost:8080/otp/api/v1/auth/get-otp",
			{
				method: "POST",
				body: JSON.stringify({ userEmail }),
				credentials: "include",
				headers: {
					"Content-Type": "application/json",
				},
			},
		);

		if (!response.ok) {
			setError("An error occured");
			setTimeout(() => {
				setError("");
			}, 3000);
		}
		setSuccess("OTP sent successfully.");
		setTimeout(() => {
			setSuccess("");
		}, 3000);

		setOpenOTPbox(true);
		setOtpLoading(false);
	};

	const verifyOTPHandler = async (e, otp) => {
		e.preventDefault();
		setOtpLoading(true);
		if (otp.length != 0) {
			const response = await fetch(
				"http://localhost:8080/otp/api/v1/auth/verify-otp",
				{
					method: "POST",
					body: JSON.stringify({ otp, userEmail: userInfo.email }),
					headers: {
						"Content-Type": "application/json",
					},
					credentials: "include",
				},
			);

			if (!response.ok) {
				if (response.status === 401) {
					setError("Incorrect OTP or OTP expired");
				}
				if (response.status === 403) {
					const isTokenRefreshed = await useRefreshToken(
						navigate,
						setError,
						setUserInfo,
					);
					// retry request
					if (isTokenRefreshed) {
						await fetch("http://localhost:8080/otp/api/v1/auth/verify-otp", {
							method: "POST",
							body: JSON.stringify({ otp, userEmail: userInfo.email }),
							headers: {
								"Content-Type": "application/json",
							},
							credentials: "include",
						});
						setSuccess("Email verified, please refresh the page.");
					}
				} else {
					setError("An error occured");
				}
				setTimeout(() => {
					setError("");
					setSuccess("");
				}, 3000);
				return;
			}
			setSuccess("Email verified, please refresh the page.");
			setTimeout(() => {
				setSuccess("");
			}, 3000);
			setOpenOTPbox(false);
			setOtpLoading(false);
		}
	};

	const deleteAccount = async (e) => {
		e.preventDefault();

		setDeleteAccountLoading(true);
		const response = await fetch("http://localhost:8080/account/api/delete", {
			method: "DELETE",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email: userInfo.email }),
		});

		if (!response.ok) {
			if (response.status === 403) {
				const isTokenRefreshed = await useRefreshToken(navigate, setError);

				if (isTokenRefreshed) {
					const response = await fetch(
						"http://localhost:8080/account/api/delete",
						{
							method: "DELETE",
							credentials: "include",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify({ email: userInfo.email }),
						},
					);

					const data = await response.json();

					if (data.success) {
						setDeleteAccountLoading(false);
						navigate("/", { replace: true });
					} else {
						setError("Something went wrong");

						setTimeout(() => {
							setError("");
						}, 3000);
					}
				}
			}
		}
		const data = await response.json();

		if (data.success) {
			setDeleteAccountLoading(false);
			navigate("/", { replace: true });
		} else {
			setError("Something went wrong");

			setTimeout(() => {
				setError("");
			}, 3000);
		}
	};

	return (
		<>
			<Error message={error} />
			<Success message={success} />
			<main className="lg:px-10 px-3 py-5">
				<div className="mb-10">
					<h1 className="text-2xl font-bold mb-1">Account</h1>
					<p className="text-sm text-gray-500">
						Manage your profile and security.
					</p>
				</div>
				<div>
					<div>
						<h2 className="font-semibold mb-3 text-lg">Profile</h2>
						<div className="bg-white rounded-xl shadow-lg hover:shadow-xl">
							<div className="flex justify-between p-4 items-center">
								<div className="flex gap-3">
									<span>
										<img
											src={defaultProfilePicture}
											alt="profile photo"
											className="w-10"
										/>
									</span>
									<span>
										<h3 className="font-semibold text-lg">
											{userInfo.firstName} {userInfo.lastName}
										</h3>
										<p className="text-sm text-gray-500 -mt-1">Profile photo</p>
									</span>
								</div>
								<div className="flex">
									<button
										className="border border-gray-300 rounded-full px-3 py-1 text-sm font-medium hover:shadow-sm cursor-pointer mr-3"
										onClick={() => {
											alert("Feature unavailable for now.");
										}}
									>
										Change
									</button>
									<button
										className="text-sm text-red-600 font-medium hover:text-red-400 cursor-pointer"
										onClick={() => {
											alert("Feature unavailable for now.");
										}}
									>
										Remove
									</button>
								</div>
							</div>
							<div className="border-t border-gray-300 p-4">
								<span className="text-sm text-gray-500">Name</span>
								<div className="flex justify-between">
									<span className="font-medium">
										{userInfo.firstName} {userInfo.lastName}
									</span>
									<span
										className="text-sm font-semibold text-gray-500 cursor-pointer hover:text-gray-700"
										onClick={() => setChangeName(!changeName)}
									>
										Edit
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				{changeName ? (
					<div className="w-full max-w-md mt-5 bg-white p-6 rounded-2xl shadow-lg">
						<form className="flex flex-col gap-4">
							<input
								type="text"
								value={userInfo.firstName}
								onChange={(e) =>
									setUserInfo({ ...userInfo, firstName: e.target.value })
								}
								placeholder="First Name"
								className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-green-600"
							/>

							<input
								type="text"
								value={userInfo.lastName}
								onChange={(e) =>
									setUserInfo({ ...userInfo, lastName: e.target.value })
								}
								placeholder="Last Name (optional)"
								className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-green-600"
							/>

							<div className="flex justify-end gap-3 mt-4">
								<button
									type="button"
									onClick={() => setChangeName(false)}
									className="px-5 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition cursor-pointer"
								>
									Close
								</button>

								<button
									type="submit"
									onClick={(e) =>
										changeUsername(
											e,
											userInfo.firstName,
											userInfo.lastName,
											userInfo.email,
										)
									}
									disabled={changeNameLoading}
									className="px-5 py-2 rounded-lg text-white transition cursor-pointer"
									style={{ backgroundColor: "#16A34A" }}
								>
									{changeNameLoading ? (
										<span className="spinner"></span>
									) : (
										"Confirm"
									)}
								</button>
							</div>
						</form>
					</div>
				) : (
					""
				)}
				<div className="mt-10 mb-10">
					<div>
						<h1 className="font-semibold mb-3 text-lg">Email address</h1>
					</div>
					<div className="bg-white shadow-lg rounded-xl flex p-5 gap-2 hover:shadow-xl">
						{userInfo.isVerified ? (
							<>
								<h2>{userInfo.email}</h2>
								<span className="text-green-700 font-semibold bg-green-100 rounded-full p-1 text-[10px]">
									verified
								</span>
							</>
						) : (
							<span className="flex justify-between w-full items-center">
								<span className="flex gap-2">
									<h2>{userInfo.email}</h2>
									<span className="text-red-700 font-semibold bg-red-100 rounded-full p-1 text-[10px]">
										unverified
									</span>
								</span>
								<span
									className="text-sm font-semibold text-gray-500 cursor-pointer hover:text-gray-700"
									onClick={(e) => sendOTPHandler(e, userInfo.email)}
								>
									{otpLoading ? <span className="spinner"></span> : "Verify"}
								</span>
							</span>
						)}
					</div>
				</div>
				{openOTPbox ? (
					<div className="w-full max-w-md mt-5 mb-5 bg-white p-6 rounded-2xl shadow-lg">
						<form className="flex flex-col gap-4">
							<input
								type="text"
								value={otpInput}
								onChange={(e) => setOtpInput(e.target.value)}
								placeholder="OTP"
								className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-green-600"
							/>
							<div className="flex justify-end gap-3 mt-4">
								<button
									type="button"
									onClick={() => setOpenOTPbox(false)}
									className="px-5 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition cursor-pointer"
								>
									Close
								</button>

								<button
									type="submit"
									onClick={(e) => {
										verifyOTPHandler(e, otpInput);
									}}
									disabled={otpLoading}
									className="px-5 py-2 rounded-lg text-white transition cursor-pointer"
									style={{ backgroundColor: "#16A34A" }}
								>
									{otpLoading ? <span className="spinner"></span> : "Confirm"}
								</button>
							</div>
						</form>
					</div>
				) : (
					""
				)}
				<div>
					<div>
						<h1 className="font-semibold mb-3 text-lg">Account</h1>
					</div>
					<div className="bg-white shadow-lg rounded-xl hover:shadow-xl">
						<div className="flex justify-between border-b border-b-gray-300 p-5">
							<div>
								<h2>Sign out</h2>
								<p className="text-sm text-gray-500">
									Sign out of this device.
								</p>
							</div>
							<div>
								<button
									className="text-sm font-semibold cursor-pointer border border-gray-300 px-4 py-2 rounded-full hover:shadow-sm"
									onClick={() => signOutHandler(userInfo, navigate)}
								>
									Sign Out
								</button>
							</div>
						</div>
						<div className="flex justify-between p-5">
							<div>
								<h2>Delete account</h2>
								<p className="text-sm text-gray-500">
									Permanently delete your account and all data.
								</p>
							</div>
							<div>
								<button
									className="text-sm text-red-700 font-semibold cursor-pointer"
									onClick={() => deleteAccount()}
								>
									{deleteAccountLoading ? (
										<span className="spinner"></span>
									) : (
										"Delete"
									)}
								</button>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}

export default Account;
