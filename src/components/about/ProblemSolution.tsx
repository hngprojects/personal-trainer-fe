const problemSolution = [
  {
    title: 'The problem',
    content:
      "Most fitness apps hand you a plan and walk away. Videos play, streaks break, and within weeks you're back to scrolling instead of training. Motivation is unreliable. Showing up is hard when no one's waiting.",
  },
  {
    title: 'Our solution',
    content:
      "A real human on the other end of a call. Your trainer schedules with you, calls when it's time, and guides you through every rep. No pre-recorded videos. No guessing. Just structured sessions, week after week.",
  },
]

const ProblemSolution = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl bg-white px-5 py-6 md:px-10 md:py-20 lg:px-10 xl:px-10">
        <div className="flex w-full flex-col items-start justify-between gap-8 md:flex-row md:gap-[192px]">
          {problemSolution.map((item, index) => (
            <div key={index}>
              <h3 className="mb-2 text-xl font-medium leading-6 text-[#1C1C1C] md:mb-6 md:text-3xl md:font-semibold">
                {item.title}
              </h3>
              <p className="text-base leading-6 text-neutral-600 md:text-xl">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProblemSolution
{
  /* {problemSolution.map((item, index) => {
        return (
          <div key={index}>
          </div>
        )} */
}

// <div className="mb-10 w-full md:pr-10 lg:w-3/5 lg:pr-20">
//   <h3 className="mb-2 text-lg font-[600] text-primary sm:text-xl">
//     Our Services
//   </h3>

//   <p className="relative w-full text-[30px] font-[600] leading-[34px] text-neutral-600 sm:w-[400px] sm:text-[36px] sm:leading-[42px] md:w-[400px] md:text-[40px] md:leading-[50px]">
//     Trained to Give You The Best
//     <span>
//       <Image
//         src="/images/about-us/ellipse.svg"
//         alt="eclipse"
//         width={100}
//         height={15}
//         className="absolute left-[80px] top-[35px] hidden max-sm:w-[50px] sm:top-[40px] sm:flex md:left-[90px] md:top-[45px]"
//       />
//     </span>
//   </p>
// </div>

// <div className="items-start lg:w-2/3">
//   <p className="text-[16px] leading-[30px] text-neutral-600 sm:text-[18px] sm:leading-[32px] md:leading-[35px]">
//     Since our founding in, Hng Boilerplate has been dedicated to
//     constantly evolving to stay ahead of the curve. Our agile mindset
//     and relentless pursuit of innovation ensure that you&apos;re always
//     equipped with the most effective tools and strategies.
//   </p>
// </div>
