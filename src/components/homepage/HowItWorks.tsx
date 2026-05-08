import { Easy, Prebuilt, Scalable } from './svgs'

const HowItWorks = () => {
  return (
    // Main section wrapper
    <section className="bg-[#ffffff] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        {/* 
          Responsive layout:
          - Mobile: image/cards section comes FIRST
          - Desktop: text section stays on the left
        */}
        <div className="flex flex-col-reverse items-center gap-14 lg:flex-row lg:gap-20">
          {/* ================= LEFT CONTENT ================= */}
          <div className="w-full lg:w-3/5">
            <h1 className="font-inter text-3xl font-bold leading-snug md:text-4xl md:leading-tight lg:text-5xl">
              <span className="text-primary">How It Works:</span> Experience the
              benefits of using our product with every step.
            </h1>

            <p className="font-inter mt-6 text-base font-normal leading-7 text-gray-600 md:text-lg">
              {`We designed our product to simplify your life. It offers a comprehensive solution. Here's how it works and how it benefits you at each stage.`}
            </p>
          </div>

          {/* ================= RIGHT FEATURES ================= */}
          <div className="flex w-full flex-col gap-8 lg:w-2/5">
            {/* Feature Card 1 */}
            <div className="flex items-start gap-5">
              <div className="shrink-0">
                <Prebuilt />
              </div>

              <div>
                <h3
                  className="font-inter mb-2 text-lg font-bold md:text-xl"
                  data-testid="prebuilt"
                >
                  Pre-Built Sections
                </h3>

                <small
                  className="font-inter text-sm leading-6 text-gray-600 md:text-base"
                  data-testid="section"
                >
                  {`Leverage pre-built sections like "Features," "Benefits," "Pricing," and "Testimonials" to showcase your product effectively.`}
                </small>
              </div>
            </div>

            {/* Feature Card 2 */}
            <div className="flex items-start gap-5">
              <div className="shrink-0">
                <Scalable />
              </div>

              <div>
                <h3
                  className="font-inter mb-2 text-lg font-bold md:text-xl"
                  data-testid="scalable"
                >
                  Scalable Foundation
                </h3>

                <small
                  className="font-inter text-sm leading-6 text-gray-600 md:text-base"
                  data-testid="boilerplate"
                >
                  Our boilerplate is designed to grow with your product. Easily
                  add new features and functionalities as needed.
                </small>
              </div>
            </div>

            {/* Feature Card 3 */}
            <div className="flex items-start gap-5">
              <div className="shrink-0">
                <Easy />
              </div>

              <div>
                <h3
                  className="font-inter mb-2 text-lg font-bold md:text-xl"
                  data-testid="easy"
                >
                  Easy Customization
                </h3>

                <small
                  className="font-inter text-sm leading-6 text-gray-600 md:text-base"
                  data-testid="tailor"
                >
                  Tailor the experience to your specific needs and preferences
                  for maximum results.
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
