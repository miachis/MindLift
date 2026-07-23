import { useState } from "react";
import mindLiftWhiteLogo from "../assets/images/white-logo.svg";
import googleLogo from "../assets/images/google-icon-logo-svgrepo-com.svg";
import { useNavigate } from "react-router-dom";
import Error from "./Error";

function Signup() {
	const [userInfo, setUserInfo] = useState({
		firstName: "",
		lastName: "",
		email: "",
	});
	const [otpSent, setOtpSent] = useState(false);
	const [otp, setOtp] = useState("");
	const [loading, setLoading] = useState(false);
	const [otpLoading, setOtpLoading] = useState(false);
	const [error, setError] = useState("");

	const signupURL = "https://mindlift-be.onrender.com/signup";
	const otpVerificationURL =
		"https://mindlift-be.onrender.com/otp/api/v1/auth/verify-otp";

	const navigate = useNavigate();

	const onFormSubmit = async (e, firstName, lastName, userEmail) => {
		e.preventDefault();
		if (firstName.length > 0 && userEmail.length > 0) {
			setLoading(true);
			try {
				const response = await fetch(signupURL, {
					method: "POST",
					body: JSON.stringify({ firstName, lastName, userEmail }),
					headers: {
						"Content-Type": "application/json",
					},
				});

				if (!response.ok) {
					if (response.status === 400) {
						const error = await response.json();
						setError("First name must be less than 50 characters");
					}
					if (response.status === 403) {
						setError("Email is taken");
					}
					if (response.status === 500) {
						setError("An error occured");
					}
					setLoading(false);
					setTimeout(() => {
						setError("");
					}, 3000);
					return;
				}

				const data = await response.json();
				setLoading(false);

				if (data.isEmailSent) {
					setOtpSent(true);
					return;
				}
				navigate("/myspace", { replace: true });
			} catch (error) {
				setError("An error occured");
				setLoading(false);
				setTimeout(() => {
					setError("");
				}, 3000);
			}
		}
	};

	const otpVerification = async (e, otp, userEmail) => {
		e.preventDefault();
		if (otp.length > 0 && userEmail.length > 0) {
			setOtpLoading(true);
			try {
				const response = await fetch(otpVerificationURL, {
					method: "POST",
					body: JSON.stringify({ otp, userEmail }),
					headers: {
						"Content-Type": "application/json",
					},
					credentials: "include",
				});

				if (!response.ok) {
					if (response.status === 500) {
						setError("An error occured");
					} else {
						setError("OTP is either incorrect or has expired");
					}
					setOtpLoading(false);
					setTimeout(() => {
						setError("");
					}, 3000);
					return;
				}

				const data = await response.json();
				setOtpLoading(false);
				navigate("/myspace", { replace: true });
			} catch (error) {
				setError("An error occured");
				setOtpLoading(false);
			}
		}
	};

	return (
		<>
			<Error message={error} />
			<main className="lg:grid grid-cols-2 grid-rows-1 h-screen fixed inset-0 justify-center">
				<div className="hidden bg-[#191919] text-white lg:grid grid-cols-1 grid-rows-3 py-10 pl-10">
					<img src={mindLiftWhiteLogo} alt="MindLift logo" />
					<div className="self-center">
						<p className="text-3xl font-bold">Start making better choices</p>
						<p className="text-white/70 pt-5 text-md max-w-100">
							Join the winning team and stop overthinking decisions.
						</p>
					</div>
					<span className="self-end text-[12px] font-semibold text-white/40">
						© 2026 MindLift. All rights reserved.
					</span>
				</div>
				<div className="lg:bg-[#232323] bg-[#191919] text-white h-screen px-10 lg:px-0">
					<div className="flex flex-col items-center justify-center h-full lg:px-30">
						{/* For smaller screens */}
						<div className="visible lg:hidden pb-6">
							<img src={mindLiftWhiteLogo} alt="MindLift logo" />
						</div>
						<div>
							<h1 className="mb-7 sm:text-3xl text-lg font-bold">
								Get started
							</h1>
						</div>
						<div className="w-full flex flex-col">
							{otpSent ? (
								<form onSubmit={(e) => otpVerification(e, otp, userInfo.email)}>
									<input
										type="text"
										disabled={otpLoading}
										value={otp}
										onChange={(e) => setOtp(e.target.value)}
										placeholder="Enter your OTP"
										className="w-full rounded-xl px-5 py-3 bg-[#ffffff12] focus:outline-0 text-white text-md border border-transparent hover:border-white/30 transition duration-200"
									/>
									<button
										type="submit"
										disabled={otpLoading}
										className="w-full mt-3 bg-white cursor-pointer text-black rounded-full py-3 font-semibold text-md hover:bg-white/90 transition-all"
									>
										{otpLoading ? (
											<span className="spinner"></span>
										) : (
											"Continue"
										)}
									</button>
								</form>
							) : (
								<form
									className="flex flex-col gap-5"
									onSubmit={(e) =>
										onFormSubmit(
											e,
											userInfo.firstName,
											userInfo.lastName,
											userInfo.email,
										)
									}
								>
									<div className="flex gap-5 w-full">
										<input
											type="text"
											disabled={loading}
											value={userInfo.firstName}
											onChange={(e) =>
												setUserInfo({ ...userInfo, firstName: e.target.value })
											}
											placeholder="First name"
											className="w-[50%] rounded-xl px-5 py-3 bg-[#ffffff12] focus:outline-0 text-white text-md border border-transparent hover:border-white/30 transition duration-200"
										/>
										<input
											type="text"
											disabled={loading}
											value={userInfo.lastName}
											onChange={(e) =>
												setUserInfo({ ...userInfo, lastName: e.target.value })
											}
											placeholder="Last name (Optional)"
											className="w-[50%] rounded-xl px-5 py-3 bg-[#ffffff12] focus:outline-0 text-white text-md border border-transparent hover:border-white/30 transition duration-200"
										/>
									</div>
									<input
										type="email"
										disabled={loading}
										value={userInfo.email}
										onChange={(e) =>
											setUserInfo({ ...userInfo, email: e.target.value })
										}
										placeholder="Enter your email address"
										className="rounded-xl px-5 py-3 bg-[#ffffff12] focus:outline-0 text-white text-md border border-transparent hover:border-white/30 transition duration-200"
									/>
									<button
										type="submit"
										disabled={loading}
										className="bg-white cursor-pointer text-black rounded-full py-3 font-semibold text-md hover:bg-white/90 transition-all"
									>
										{loading ? <span className="spinner"></span> : "Continue"}
									</button>
								</form>
							)}
						</div>
						<div className="mt-3 mb-4">
							<p className="text-sm text-white/70">
								Already have an account?{" "}
								<span className="text-white font-semibold hover:cursor-pointer hover:underline">
									<a href="login">Log in</a>
								</span>
							</p>
						</div>
						<div>
							<p className="text-white/40 lg:text-[12px] text-[11px]">
								By signing in, you agree to MindLift's{" "}
								<span className="underline cursor-pointer">
									<a href="terms">Terms of Service</a>
								</span>{" "}
								and{" "}
								<span className="underline cursor-pointer">
									<a href="privacy">Privacy Policy.</a>
								</span>
							</p>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}

export default Signup;
