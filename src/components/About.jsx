function About() {
  return (
    <section className="flex flex-col items-center" id="about">
      <div>
        <div className="flex pt-20 px-7 lg:px-30 gap-10 items-center w-full flex-col lg:flex-row">
          {/* for large screens */}
          <div className="w-[50%] hidden lg:block">
            <img
              src="./public/maulana-ahmad-7jK1X2yk-kc-unsplash.png"
              alt="the mind"
              className="w-full"
            />
          </div>

          <div className="lg:w-[50%]">
            <div className="w-max max-lg:w-full">
              <p className="text-3xl font-serif font-bold w-full mb-5">
                The Power of The Mind
              </p>
            </div>
            <div className="w-full">
              <p className="text-md text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis laborum optio vero! Non nostrum temporibus
                inventore magni recusandae eius et minima. Hic praesentium
                dolorum quis autem deleniti rerum repellendus enim.
              </p>
            </div>
          </div>

          {/* for mobile */}
          <div className="lg:w-[50%] visible lg:hidden">
            <img
              src="./public/maulana-ahmad-7jK1X2yk-kc-unsplash.png"
              alt="the mind"
              className="w-full"
            />
          </div>
        </div>

        <div className="flex gap-8 px-20 pt-10 pb-30 flex-col lg:flex-row">
          <div className="bg-amber-100 py-8 px-4 rounded-md">
            <h2 className="text-lg font-serif font-semibold w-max">
              Mental Growth
            </h2>
            <p className="w-full text-gray-700 text-sm pt-3">
              The mind has the ability to grow, adapt, and improve through
              learning and daily experiences.
            </p>
          </div>
          <div className="bg-amber-100 py-8 px-4 rounded-md">
            <h2 className="text-lg font-serif font-semibold w-max">
              Decision Making
            </h2>
            <p className="w-full text-gray-700 text-sm pt-3">
              It plays a key role in how we respond to situations and make
              choices in everyday life.
            </p>
          </div>
          <div className="bg-amber-100 py-8 px-4 rounded-md">
            <h2 className="text-lg font-serif font-semibold w-max">
              Emotional Control
            </h2>
            <p className="w-full text-gray-700 text-sm pt-3">
              A strong mind helps manage emotions, reducing stress and improving
              overall well-being.
            </p>
          </div>
          <div className="bg-amber-100 py-8 px-4 rounded-md">
            <h2 className="text-lg font-serif font-semibold w-max">
              Self-Improvement
            </h2>
            <p className="w-full text-gray-700 text-sm pt-3">
              With the right habits, the mind can be trained to think better,
              act smarter, and live more intentionally.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center px-5">
        <h1 className="text-2xl font-semibold font-serif">
          Turn Every Reaction Into Progress
        </h1>
      </div>

      <div className="text-center pb-10 pt-5 w-[50%]">
        <p className="text-sm text-gray-700 w-full">
          Life happens fast, but growth happens when you reflect. Tell us what
          happened and how you responded, and we'll help you improve. Whether
          it's correcting a misstep or reinforcing a great decision, our app
          helps you level up your thinking every single day.
        </p>
      </div>

      <div className="flex justify-center max-lg:items-center w-full mb-10 lg:w-[50%] px-4 py-8 gap-20 flex-col lg:flex-row">
        <div className="flex flex-col items-center max-lg:w-[80%] border border-[#16A34A] pt-20 pb-20 pl-1 pr-1 lg:pt-30 lg:pb-8 lg:px-8 rounded-md cursor-pointer shadow-sm transition duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-xl">
          <h2 className="text-2xl font-bold font-serif pb-5 max-lg:text-center lg:w-full">
            Daily Insights
          </h2>
          <p className="text-sm text-gray-700 w-[80%] max-lg:text-center lg:w-full">
            Stay consistent with daily reflections. Get immediate feedback on
            your actions and build better habits one decision at a time.
          </p>
        </div>
        <div className="flex flex-col items-center max-lg:w-[80%] border border-[#16A34A] pt-20 pb-20 pl-1 pr-1 lg:pt-30 lg:pb-8 lg:px-8 rounded-md cursor-pointer shadow-sm transition duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-xl">
          <h2 className="text-2xl font-bold font-serif pb-5 max-lg:text-center lg:w-full">
            Weekly Overview
          </h2>
          <p className="text-sm text-gray-700 w-[80%] max-lg:text-center lg:w-full">
            Zoom out and see the bigger picture. Receive a full breakdown of
            your patterns, progress, and areas for improvement over the week.
          </p>
        </div>
      </div>

      <div className="flex pt-20 px-7 lg:p-20 flex-col lg:flex-row gap-10">
        <div className="lg:w-[50%]">
          <div className="mb-8">
            <h1 className="text-3xl font-serif font-bold">
              The Story Behind MindLift
            </h1>
          </div>
          <div className="max-w-120">
            <div className="text-md text-gray-700">
              MindLift does exactly what it says, it lifts one's mind. <br />
              <p className="pt-3">
                MindLift is a thoughtfully designed platform dedicated to
                helping individuals elevate their mindset and make better
                decisions in their everyday lives. Built on the idea that small
                choices shape long-term outcomes,
              </p>
              <br />
              <p>
                MindLift empowers users to reflect on their actions, learn from
                their experiences, and respond more intentionally to life's
                challenges.
              </p>
              <br />
              <p>
                By turning moments of uncertainty into opportunities for growth,
                we serve as a personal guide toward improved mental clarity,
                emotional balance, and self-awareness.
              </p>
              <br />
              <p>
                With MindLift, growth becomes a daily habit, not just a goal.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:w-[50%]">
          <img
            src="./public/irvan-maulana-H2mcXb2NOc8-unsplash.png"
            alt="man reading a book"
            className="rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
