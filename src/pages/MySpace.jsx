import MySpaceSiderbar from "../components/MySpaceSidebar";
import MySpaceContent from "../components/MySpaceContent";

function MySpace() {
  return (
    <main className="h-screen grid grid-cols-[10%_auto] lg:grid-cols-[20%_auto] bg-gray-100 pl-3 py-3">
      <aside>
        <MySpaceSiderbar />
      </aside>
      <main>
        <MySpaceContent />
      </main>
    </main>
  );
}

export default MySpace;
