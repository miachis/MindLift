import MySpaceSiderbar from "../components/MySpaceSidebar";
import MySpaceContent from "../components/MySpaceContent";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function MySpace() {
  /* 
  this state is for only when the sidebar is collapsed on a large screen
   and isnt concerned with mobile or smaller screens */
  const [closeSideBar, setCloseSideBar] = useState(false);

  return (
    <main
      className={`h-screen fixed inset-0 overflow-hidden grid bg-gray-100 px-3 py-3 max-lg:grid-rows-[10%_auto] ${!closeSideBar ? "lg:grid-cols-[5%_auto]" : "lg:grid-cols-[20%_auto]"}`}
    >
      <MySpaceSiderbar
        closeSideBar={closeSideBar}
        setCloseSideBar={setCloseSideBar}
      />
      <main className="overflow-y-auto">
        <Outlet />
      </main>
    </main>
  );
}

export default MySpace;
