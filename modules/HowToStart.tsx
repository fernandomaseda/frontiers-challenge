export const HowToStart: React.FC = () => {
  return (
    <section className="container bg-how-to-start py-14 md:py-24">
      <div className="relative flex flex-col items-center justify-center py-4">
        <p className="z-1 text-center text-base text-secondary font-semibold uppercase">
          How to start
        </p>
        <h2 className="z-1 text-center text-2xl leading-9 md:text-3xl md:leading-12 text-primary font-archia font-semibold">
          Start selling around the country
        </h2>
        <div className="z-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-6 md:py-16">
          <div className="flex flex-col gap-2 p-4 bg-tertiary md:bg-transparent">
            <div className="flex items-center flex-row md:flex-col gap-2">
              <span className="text-secondary text-lg md:text-4xl font-bold">
                1
              </span>
              <span className="text-primary text-base md:text-lg font-semibold">
                Create a free account
              </span>
            </div>
            <p className="text-sm md:text-base md:text-center text-grey">
              We don’t collect any fee for listing livestock.
            </p>
          </div>
          <div className="flex flex-col gap-2 p-4 bg-tertiary md:bg-transparent">
            <div className="flex items-center flex-row md:flex-col gap-2">
              <span className="text-secondary text-lg md:text-4xl font-bold">
                2
              </span>
              <span className="text-primary text-base md:text-lg font-semibold">
                Get approved to sell
              </span>
            </div>
            <p className="text-sm md:text-base md:text-center text-grey">
              We strive for providing the highest security.
            </p>
          </div>
          <div className="flex flex-col gap-2 p-4 bg-tertiary md:bg-transparent">
            <div className="flex items-center flex-row md:flex-col gap-2">
              <span className="text-secondary text-lg md:text-4xl font-bold">
                3
              </span>
              <span className="text-primary text-base md:text-lg font-semibold">
                Add cattle listing
              </span>
            </div>
            <p className="text-sm md:text-base md:text-center text-grey">
              We help you create a listing including breed, age, weight.
            </p>
          </div>
          <div className="flex flex-col gap-2 p-4 bg-tertiary md:bg-transparent">
            <div className="flex items-center flex-row md:flex-col gap-2">
              <span className="text-secondary text-lg md:text-4xl font-bold">
                4
              </span>
              <span className="text-primary text-base md:text-lg font-semibold">
                Appear in our catalog
              </span>
            </div>
            <p className="text-sm md:text-base md:text-center text-grey">
              Thousands of nationwide buyers searching for livestock every day!
            </p>
          </div>
        </div>
        <a
          className="z-1 text-white text-base text-center md:text-lg font-bold rounded-lg py-3 px-4 max-sm:w-full md:px-18 bg-secondary"
          href="/register"
        >
          Create Account
        </a>
        <picture className="z-0 absolute">
          <source srcSet="/us_country.webp" type="image/webp" />
          <img
            className="object-contain sm:object-cover max-md:object-bottom object-top max-md:translate-y-9 md:scale-x-110"
            src="/us_country.webp"
            alt="map"
            width="90%"
          />
        </picture>
      </div>
    </section>
  );
};
