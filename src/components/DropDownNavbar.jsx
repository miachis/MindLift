import { Link } from "react-router-dom";

function DropDownNavbar() {
	return (
		<div className="flex flex-col px-1 pt-20 pb-10 w-full min-h-dvh fixed inset-0 bg-white">
			<nav className="px-8 py-2 flex-1">
				<div className="border-b border-gray-300 font-medium text-md py-4">
					<Link to={"/myspace"}>My Space</Link>
				</div>
			</nav>

			<div className="flex flex-col gap-2 px-6 py-3">
				<div className="bg-black rounded-full text-white shadow-md w-full text-center p-3 font-semibold text-md">
					<Link to={"/signup"}>Get started</Link>
				</div>
				<div className="border-gray-300 border rounded-full w-full text-center p-3 text-md">
					<Link to={"/login"}>Log in</Link>
				</div>
			</div>
		</div>
	);
}

export default DropDownNavbar;
