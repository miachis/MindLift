import { useState } from "react";

function Contact() {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  return (
    <section id="contact" className="pt-10">
      <div className="flex lg:flex-row flex-col justify-center w-full px-7 lg:px-20 pb-30 gap-20 items-start">
        <div className="lg:w-[50%]">
          <div className="pb-5">
            <h1 className="text-3xl font-bold">
              Get in touch with <br />
              <span className="font-mono text-[#16A34A] font-extrabold">
                MindLift
              </span>
            </h1>
          </div>
          <div className="w-full">
            <p className="text-sm text-gray-700">
              Have any suggestions in mind or need more clarity about MindLift?
              Contact us and get a response within 24 hours.
            </p>
          </div>
        </div>

        <div className="flex-1 w-full">
          <form
            action=""
            className="border border-gray-300 shadow-sm rounded-lg flex flex-col px-5 py-7"
          >
            <div className="flex flex-col gap-3 pb-5">
              <p className="text-md font-bold">Name*</p>
              <input
                type="text"
                value={userInput.name}
                onChange={(e) => {
                  setUserInput({ ...userInput, name: e.target.value });
                }}
                placeholder="Enter your name here"
                required
                className="border border-gray-300 pl-4 py-4 rounded-md text-sm focus:outline-none focus:border-[#16A34A]"
              />
            </div>

            <div className="flex flex-col gap-3 pb-5">
              <p className="text-md font-bold">Email*</p>
              <input
                type="email"
                value={userInput.email}
                onChange={(e) =>
                  setUserInput({ ...userInput, email: e.target.value })
                }
                placeholder="Enter your email address here"
                required
                className="border border-gray-300 pl-4 py-4 rounded-md text-sm focus:outline-none focus:border-[#16A34A]"
              />
            </div>

            <div className="flex flex-col gap-3 pb-5">
              <p className="text-md font-bold">Title*</p>
              <input
                type="text"
                value={userInput.title}
                onChange={(e) =>
                  setUserInput({ ...userInput, title: e.target.value })
                }
                placeholder="Enter your title here"
                required
                className="border border-gray-300 pl-4 py-4 rounded-md text-sm focus:outline-none focus:border-[#16A34A]"
              />
            </div>

            <div className="flex flex-col gap-3 pb-5">
              <p className="text-md font-bold">Message*</p>
              <textarea
                required
                value={userInput.message}
                onChange={(e) =>
                  setUserInput({ ...userInput, message: e.target.value })
                }
                placeholder="Write a message"
                className="border border-gray-300 pl-4 py-4 rounded-md text-sm focus:outline-none focus:border-[#16A34A]"
              ></textarea>
            </div>

            <button className="bg-[#16A34A] text-white rounded-full py-2 px-6 lg:w-max text-center shadow-sm cursor-pointer">
              Contact us
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
