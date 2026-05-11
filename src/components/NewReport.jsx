import { useState } from "react";

function NewReport() {
  const [openForm, setOpenForm] = useState(false);
  const [responseType, setResponseType] = useState("immediate");

  return (
    <main className="lg:px-10 px-3 py-5 relative">
      <div className="mb-10">
        <h1 className="text-2xl font-bold mb-1">Create Report</h1>
      </div>

      {/* Main Content */}
      <div
        className={`flex justify-center items-center bg-white h-[50vh] shadow-md rounded-xl transition-all duration-300 ${
          openForm ? "blur-sm pointer-events-none" : ""
        }`}
      >
        <button
          onClick={() => setOpenForm(true)}
          className="bg-[#16A34A] text-xl shadow-sm font-bold cursor-pointer text-white px-10 py-3 rounded-full hover:bg-[#18803e]"
        >
          Create
        </button>
      </div>

      {/* Overlay */}
      {openForm && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50 px-3">
          <div className="bg-white w-full max-w-xl rounded-2xl shadow-xl p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-2xl font-bold">Ask MindLift</h2>

              <button
                onClick={() => setOpenForm(false)}
                className="text-gray-500 hover:text-black text-xl cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Textarea */}
            <textarea
              placeholder="Type your report request here..."
              className="w-full h-40 border border-gray-300 rounded-xl p-4 resize-none outline-none focus:ring-2 focus:ring-[#16A34A]"
            />

            {/* Response Type */}
            <div className="mt-5">
              <h3 className="font-semibold mb-3">Response Time</h3>

              <div className="flex gap-3">
                <button
                  onClick={() => setResponseType("immediate")}
                  className={`px-4 py-2 rounded-lg border transition cursor-pointer ${
                    responseType === "immediate"
                      ? "bg-[#16A34A] text-white border-[#16A34A]"
                      : "border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  Immediate
                </button>

                <button
                  onClick={() => setResponseType("end-week")}
                  className={`px-4 py-2 rounded-lg border transition cursor-pointer ${
                    responseType === "end-week"
                      ? "bg-[#16A34A] text-white border-[#16A34A]"
                      : "border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  End of the Week
                </button>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setOpenForm(false)}
                className="px-5 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 cursor-pointer"
              >
                Close
              </button>

              <button className="bg-[#16A34A] text-white px-6 py-2 rounded-lg hover:bg-[#18803e] cursor-pointer">
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default NewReport;
