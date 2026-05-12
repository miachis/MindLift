import emptyIcon from "../assets/images/inbox.png";
import rightArrow from "../assets/images/right-arrow.png";
import todoIcon from "../assets/images/check-list.png";

function MySpaceContent() {
  return (
    <main className="px-3 lg:px-10 py-5">
      <div className="mb-10">
        <h1 className="text-2xl font-bold">Welcome, John!</h1>
        <h2 className="text-gray-500">Your space for managing your reports.</h2>
      </div>
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          What's Happening
        </h2>
        <div className="bg-white w-full shadow-lg rounded-xl flex justify-center hover:shadow-xl py-20 px-5 lg:p-30">
          <div>
            <div className="flex justify-center">
              <span className="flex justify-center mb-3 w-max p-3 bg-gray-100 rounded-full">
                <img src={emptyIcon} alt="empty" className="w-5" />
              </span>
            </div>
            <span>
              <h3 className="text-gray-800 font-medium text-center">
                No records yet
              </h3>
              <span className="text-gray-500 text-sm">
                Your records will be shown here.
              </span>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MySpaceContent;
