import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Login from "../pages/Login";
import Signup from "../components/Signup";
import Terms from "../components/Terms";
import MySpace from "../pages/MySpace";
import DailyReports from "../components/DailyReports";
import WeeklyReports from "../components/WeeklyReports";
import NewReport from "../components/NewReport";
import Account from "../components/Account";
import MySpaceContent from "../components/MySpaceContent";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
	{
		path: "/",
		Component: App,
	},
	{
		path: "privacy",
		Component: PrivacyPolicy,
	},
	{
		path: "terms",
		Component: Terms,
	},
	{
		path: "login",
		Component: Login,
	},
	{
		path: "signup",
		Component: Signup,
	},
	{
		path: "myspace",
		Component: MySpace,
		children: [
			{ index: true, Component: MySpaceContent },
			{ path: "daily-reports", Component: DailyReports },
			{ path: "weekly-reports", Component: WeeklyReports },
			{ path: "new-report", Component: NewReport },
			{ path: "account", Component: Account },
		],
	},
	{
		path: "*",
		Component: NotFound,
	},
]);

export default router;
