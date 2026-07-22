import MySpaceSiderbar from "../components/MySpaceSidebar";
import MySpaceContent from "../components/MySpaceContent";
import Error from "../components/Error";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { createContext } from "react";
import useRefreshToken from "../utility/refreshToken";

export const userContext = createContext();

function MySpace() {
	/*
  this state is for only when the sidebar is collapsed on a large screen
   and isnt concerned with mobile or smaller screens */
	const [closeSideBar, setCloseSideBar] = useState(false);
	const navigate = useNavigate();
	const [userInfo, setUserInfo] = useState();
	const [error, setError] = useState("");

	useEffect(() => {
		getFromDatabase();
	}, []);

	async function getFromDatabase() {
		const response = await fetch("http://localhost:8080/myspace", {
			method: "GET",
			credentials: "include",
		});

		if (!response.ok) {
			if (response.status === 401 || response.status === 404) {
				navigate("/login");
			}

			if (response.status === 403) {
				const isTokenRefreshed = await useRefreshToken(navigate, setError);

				if (isTokenRefreshed) {
					const retryResponse = await fetch("http://localhost:8080/myspace", {
						method: "GET",
						credentials: "include",
					});

					const data = await retryResponse.json();
					setUserInfo(data.user);
					return;
				}
			}

			if (response.status === 500) {
				navigate("/");
				setError("An error occured");
				setTimeout(() => {
					setError("");
				}, 3000);
			}
		}

		const data = await response.json();
		setUserInfo(data.user);
	}

	return userInfo ? (
		<>
			<Error message={error} />
			<main
				className={`h-screen fixed inset-0 overflow-hidden grid bg-gray-100 px-3 py-3 max-lg:grid-rows-[10%_auto] ${!closeSideBar ? "lg:grid-cols-[5%_auto]" : "lg:grid-cols-[20%_auto]"}`}
			>
				<userContext.Provider value={{ userInfo, setUserInfo }}>
					<MySpaceSiderbar
						closeSideBar={closeSideBar}
						setCloseSideBar={setCloseSideBar}
					/>
					<main className="overflow-y-auto">
						<Outlet />
					</main>
				</userContext.Provider>
			</main>
		</>
	) : (
		<>
			<Error message={error} />
			<div className="fixed inset-0 flex items-center justify-center bg-gray-100">
				<div className="h-10 w-10 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-full border-4 border-gray-300 border-t-[#16A34A] animate-spin"></div>
			</div>
		</>
	);
}
export default MySpace;
