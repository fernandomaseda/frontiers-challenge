export const AppBanner: React.FC = () => {
  return (
    <section className="container">
      <div className="z-1 relative bg-livestock-pocket grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 rounded-lg">
        <div className="row-start-2 md:row-start-1 flex flex-col justify-between gap-1 md:pt-24 md:pl-8 lg:pb-9 lg:pl-12">
          <div className="z-1 max-md:px-4 flex flex-col gap-2 text-primary">
            <p className="font-medium leading-6 text-base md:text-xl md:font-semibold md:leading-8">
              Livestock in your pocket
            </p>
            <h2 className="font-archia font-semibold text-2xl leading-9 lg:text-[40px] lg:leading-10 overflow-visible md:whitespace-nowrap">
              Get the Frontiers Market
              <br /> companion app
            </h2>
            <a
              className="flex items-center justify-center gap-2 mt-5 md:self-start font-bold text-base md:text-lg leading-7 bg-primary text-white rounded-lg px-4 py-3 md:px-9 md:py-4"
              href="https://apps.apple.com/pl/app/frontiers-market/id6448396170"
            >
              Download App
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </div>
          <div className="md:hidden flex self-center items-center gap-1 p-1 rounded-lg">
            <span className="text-primary font-medium text-base">
              Available on
            </span>
            <a href="https://apps.apple.com/pl/app/frontiers-market/id6448396170">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                color="#101828"
                style={{ color: "#101828" }}
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"></path>
              </svg>
            </a>
          </div>
          <div className="rounded-b-lg flex items-center justify-center md:justify-start flex-row gap-2 bg-tertiary md:bg-transparent">
            <img
              alt="Ranchers"
              loading="lazy"
              width="84"
              height="32"
              decoding="async"
              data-nimg="1"
              className="hidden lg:block"
              style={{ color: "transparent" }}
              srcSet="ranchers.webp"
              src="ranchers.webp"
            />
            <p className="flex items-center gap-1 text-grey text-base xlg:text-[20px] leading-8 font-semibold py-3">
              Trusted by the biggest U.S. ranchers
              <img
                alt="flag"
                loading="lazy"
                width="24"
                height="24"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                srcSet="flag.webp"
                src="flag.webp"
              />
            </p>
          </div>
        </div>
        <picture className="row-start-1 flex justify-center md:justify-end">
          <source
            className="rounded-lg"
            srcSet="/pocket_mobile.webp"
            type="image/webp"
            media="(max-width: 768px)"
            width="100%"
          />
          <source
            className="rounded-lg"
            srcSet="/pocket_desktop.webp"
            type="image/webp"
            width="522"
            height="470"
          />
          <source
            className="rounded-lg"
            media="(max-width: 768px)"
            srcSet="/pocket_mobile.webp"
            width="100%"
          />
          <img
            className="rounded-lg"
            src="/pocket_desktop.webp"
            alt="Phone"
            width="522"
            height="470"
          />
        </picture>
        <picture className="absolute max-md:hidden">
          <source
            className="object-fill object-top"
            style={{ aspectRatio: "1120 / 470" }}
            srcSet="/map.webp"
            type="image/webp"
            width="100%"
          />
          <img
            className="object-fill object-top"
            style={{ aspectRatio: "1120 / 470" }}
            src="/map.webp"
            alt="frame-desktop"
            width="100%"
          />
        </picture>
      </div>
    </section>
  );
};
