import { useState } from "react";

function FAQ() {
  const [open, setOpen] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
    last: false,
  });

  return (
    <section
      className="flex justify-center space-y-20 lg:gap-30 px-7 lg:px-20 items-start pt-40 pb-40 flex-col lg:flex-row"
      id="faq"
    >
      <div>
        <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
        <div>
          <p className="text-lg text-gray-700 pt-4">
            Quick answers to the questions we hear most from users getting
            started with MindLift.
          </p>
          <p className="text-sm mt-5 text-gray-700">
            Have more questions?{" "}
            <a
              href="#contact"
              className="text-[#16A34A] hover:cursor-pointer hover:underline"
            >
              Contact us.
            </a>
          </p>
        </div>
      </div>
      <div className="w-full">
        <ul className="flex flex-col gap-3">
          <li className="border border-gray-300 px-6 py-5 lg:px-7 lg:py-5 rounded-xl w-full lg:w-2xl">
            <div>
              <button
                className="flex w-full justify-between items-start cursor-pointer text-md font-bold"
                onClick={() => setOpen({ ...open, first: !open.first })}
              >
                <span>What is MindLift?</span>
                <span>{!open.first ? "+" : "-"}</span>
              </button>
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out
              ${open.first ? "max-h-40 mt-2 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <p className="text-md text-gray-700 pt-3 pb-2 w-full">
                MindLift is your mind's personal buddy. It turns your daily
                difficulties into an opportunity for you to grow mentally and
                physically as a human being. It is a personalized assistant that
                helps with day-to-day decision making that tends to throw one's
                mind off balance.
              </p>
            </div>
          </li>

          <li className="border border-gray-300 px-7 py-5 rounded-xl w-full lg:w-2xl">
            <div>
              <button
                className="flex w-full justify-between cursor-pointer text-md font-bold"
                onClick={() => setOpen({ ...open, second: !open.second })}
              >
                <span>Who actually uses it?</span>
                <span>{!open.second ? "+" : "-"}</span>
              </button>
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out
              ${open.second ? "max-h-40 mt-2 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <p className="text-md text-gray-700 pt-3 pb-2">
                Absolutely anyone can signup or create an account and use
                MindLift today. There are no restrictions to different kinds of
                individuals.
              </p>
            </div>
          </li>

          <li className="border border-gray-300 px-7 py-5 rounded-xl w-full lg:w-2xl">
            <div>
              <button
                className="flex w-full justify-between cursor-pointer text-md font-bold"
                onClick={() => setOpen({ ...open, third: !open.third })}
              >
                <span className="text-md font-bold">
                  How does MindLift actually work?
                </span>
                <span>{!open.third ? "+" : "-"}</span>
              </button>
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out
              ${open.third ? "max-h-40 mt-2 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <p className="text-md text-gray-700 pt-3 pb-2">
                MindLift requires you, a user, to give it some challenges or
                bottlenecks you faced during the day and how you reacted or
                responded to those challenges, it then generates a personalized
                feedback or recommendation in which you can apply to similar
                challenges that you may face in the future.
              </p>
            </div>
          </li>

          <li className="border border-gray-300 px-7 py-5 rounded-xl w-full lg:w-2xl">
            <div>
              <button
                className="flex w-full justify-between cursor-pointer text-md font-bold"
                onClick={() => setOpen({ ...open, fourth: !open.fourth })}
              >
                <span>How quickly will I see results?</span>
                <span>{!open.fourth ? "+" : "-"}</span>
              </button>
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out
              ${open.fourth ? "max-h-40 mt-2 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <p className="text-md text-gray-700 pt-3 pb-2">
                You can decide to view results daily as you feed your challenges
                into MindLift or you can save the results for the end of the
                week.
              </p>
            </div>
          </li>

          <li className="border border-gray-300 px-7 py-5 rounded-xl w-full lg:w-2xl">
            <div>
              <button
                className="flex w-full justify-between cursor-pointer text-md font-bold"
                onClick={() => setOpen({ ...open, fifth: !open.fifth })}
              >
                <span>Do I need to pay for a subscription?</span>
                <span>{!open.fifth ? "+" : "-"}</span>
              </button>
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out
              ${open.fifth ? "max-h-40 mt-2 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <p className="text-md text-gray-700 pt-3 pb-2">
                Nope. MindLift is 100% free.
              </p>
            </div>
          </li>

          <li className="border border-gray-300 px-7 py-5 rounded-xl w-full lg:w-2xl">
            <div>
              <button
                className="flex w-full justify-between cursor-pointer text-md font-bold"
                onClick={() => setOpen({ ...open, last: !open.last })}
              >
                <span>Why should I use MindLift?</span>
                <span>{!open.last ? "+" : "-"}</span>
              </button>
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out
              ${open.last ? "max-h-40 mt-2 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <p className="text-md text-gray-700 pt-3 pb-2">
                Think of MindLift as your personal therapist, only that it costs
                less and is always available. All you need do is create an
                account and start conversing.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default FAQ;
