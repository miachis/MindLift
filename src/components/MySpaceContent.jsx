import emptyIcon from "../assets/images/inbox.png";
import rightArrow from "../assets/images/right-arrow.png";
import todoIcon from "../assets/images/check-list.png";

function MySpaceContent() {
  return (
    <main className="px-10 py-5">
      <div className="mb-10">
        <h1 className="text-2xl font-bold">Welcome, John!</h1>
        <h2 className="text-gray-500">Your space for managing your reports.</h2>
      </div>
      <div className="flex gap-4 items-center bg-white cursor-pointer mb-10 py-3 px-5 rounded-xl shadow-lg hover:shadow-xl">
        <span className="w-8 h-8">
          <img src={todoIcon} alt="todo icon" className="w-full h-full" />
        </span>
        <div className="flex flex-col gap-0">
          <span className="flex items-center gap-2">
            <h2 className="font-semibold text-[15px]">Get Started </h2>
            <span>
              <img src={rightArrow} alt="right icon" className="w-3" />
            </span>
          </span>
          <span className="text-[13px] text-gray-500">
            0 of 6 steps complete
          </span>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          What's Happening
        </h2>
        <div className="bg-white w-full shadow-lg rounded-xl flex justify-center hover:shadow-xl p-30">
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
