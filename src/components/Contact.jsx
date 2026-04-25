function Contact() {
  return (
    <section id="contact">
      <div className="flex lg:flex-row flex-col justify-center w-full px-7 lg:px-20 pb-30 gap-20 items-start">
        <div className="w-50">
          <div>
            <h1 className="text-3xl font-bold">
              Get in touch with <br />
              <span className="font-mono text-[#16A34A] font-extrabold">
                MindLift
              </span>
            </h1>
          </div>
          <div className="w-full">
            <p className="text-sm text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quo
              itaque in rerum, error esse? Vel quasi magnam beatae quis adipisci
              laborum dolore rerum? Iure exercitationem ut eaque quos
              doloremque!
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
                placeholder="Enter your name here"
                required
                className="border border-gray-300 pl-4 py-4 rounded-md text-sm"
              />
            </div>

            <div className="flex flex-col gap-3 pb-5">
              <p className="text-md font-bold">Email*</p>
              <input
                type="email"
                placeholder="Enter your email address here"
                required
                className="border border-gray-300 pl-4 py-4 rounded-md text-sm"
              />
            </div>

            <div className="flex flex-col gap-3 pb-5">
              <p className="text-md font-bold">Title*</p>
              <input
                type="text"
                placeholder="Enter your title here"
                required
                className="border border-gray-300 pl-4 py-4 rounded-md text-sm"
              />
            </div>

            <div className="flex flex-col gap-3 pb-5">
              <p className="text-md font-bold">Message*</p>
              <textarea
                name=""
                id=""
                placeholder="Write a message"
                className="border border-gray-300 pl-4 py-4 rounded-md text-sm"
              ></textarea>
            </div>

            <button className="bg-[#16A34A] text-white lg:w-[20%] rounded-full py-1 shadow-sm cursor-pointer">
              Contact us
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
