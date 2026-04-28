import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import GetStarted from "../pages/GetStarted";
import Signup from "../components/Signup";
import Terms from "../components/Terms";

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
    Component: GetStarted,
  },
  {
    path: "signup",
    Component: Signup,
  },
]);

export default router;
