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

  const faqs = [
    {
      heading: "What is MindLift?",
      description: `MindLift is your mind's personal buddy. It turns your daily
                difficulties into an opportunity for you to grow mentally and
                physically as a human being. It is a personalized assistant that
                helps with day-to-day decision making that tends to throw one's
                mind off balance.`,
      state: open.first,
      position: "first",
    },
    {
      heading: "Who actually uses it?",
      description: `Absolutely anyone can signup or create an account and use
                MindLift today. There are no restrictions to different kinds of
                individuals.`,
      state: open.second,
      position: "second",
    },
    {
      heading: "How does MindLift actually work?",
      description: `MindLift requires you to give it some challenges or
                bottlenecks you faced during the day and how you reacted or
                responded to those challenges, it then generates a personalized
                feedback or recommendation in which you can apply to similar
                challenges that you may face in the future.`,
      state: open.third,
      position: "third",
    },
    {
      heading: "How quickly will I see results?",
      description: `You can decide to view results daily as you feed your challenges
                into MindLift or you can save the results for the end of the
                week.`,
      state: open.fourth,
      position: "fourth",
    },
    {
      heading: "Do I need to pay for a subscription?",
      description: `Nope. MindLift is 100% free.`,
      state: open.fifth,
      position: "fifth",
    },
    {
      heading: "Why should I use MindLift?",
      description: `Think of MindLift as your personal therapist, only that it costs
                less and is always available. All you need do is create an
                account and start conversing.`,
      state: open.last,
      position: "last",
    },
  ];

  return (
    <section
      className="flex justify-between space-y-20 lg:gap-30 px-7 lg:px-20 items-start pt-40 pb-40 flex-col lg:flex-row"
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
      <div>
        <ul className="flex flex-col gap-3">
          {faqs.map((faq) => {
            return (
              <li
                key={faq.heading}
                className="border border-gray-300 px-6 py-5 lg:px-7 lg:py-5 rounded-xl w-full lg:w-2xl"
              >
                <div>
                  <button
                    className="flex w-full justify-between items-start cursor-pointer text-md font-bold"
                    onClick={() => {
                      switch (faq.position) {
                        case "first":
                          setOpen({ ...open, first: !open.first });
                          break;
                        case "second":
                          setOpen({ ...open, second: !open.second });
                          break;
                        case "third":
                          setOpen({ ...open, third: !open.third });
                          break;
                        case "fourth":
                          setOpen({ ...open, fourth: !open.fourth });
                          break;
                        case "fifth":
                          setOpen({ ...open, fifth: !open.fifth });
                          break;
                        case "last":
                          setOpen({ ...open, last: !open.last });
                          break;
                        default:
                          break;
                      }
                    }}
                  >
                    <span>{faq.heading}</span>
                    <span>{!faq.state ? "+" : "-"}</span>
                  </button>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out
                  ${faq.state ? "max-h-40 mt-2 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-md text-gray-700 pt-3 pb-2 w-full">
                    {faq.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default FAQ;
