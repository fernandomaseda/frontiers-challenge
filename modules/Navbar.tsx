import Link from "next/link";

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#FBFAFA] sticky top-0 z-10" id="navbar">
      <div className="container py-2 pt-4 sm:py-4 flex flex-row items-center md:items-end justify-between gap-16">
        <div className="max-md:hidden">
          <Link href="/">
            <picture>
              <source
                media="(max-width: 576px)"
                srcSet="/logo_small.svg"
                width="26"
                height="34"
              />
              <img
                alt="Logo"
                loading="lazy"
                width="100"
                height="32"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="/logo.svg"
              />
            </picture>
          </Link>
        </div>
        <button className="rounded-full bg-white p-2 flex items-center md:hidden">
          <div className="rounded-full bg-white h-8 w-8 flex items-center justify-center mr-2">
            <img src="/logo_small.svg" alt="Logo" className="h-6 w-6" />
          </div>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="22"
            width="22"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            ></path>
          </svg>
        </button>
        <div className="flex flex-1 flex-row items-center justify-end gap-3">
          <div className="max-md:hidden flex flex-1">
            <Link
              className="bg-white border-[#E4E7EC] border-[1px] rounded-md py-2 px-3 font-medium text-sm sm:text-base text-[#1D2939]"
              href="/browse"
            >
              Browse livestock
            </Link>
          </div>
          <div className="flex gap-3">
            <Link
              className="flex gap-2 text-primary text-sm md:text-base items-center"
              href="tel:+15123874314"
            >
              <p className="max-md:hidden">Call us</p>
              <svg
                width="11"
                height="16"
                viewBox="0 0 11 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 1.5V2C7.5 2.28125 7.25 2.5 7 2.5H4C3.71875 2.5 3.5 2.28125 3.5 2V1.5H2.5C1.9375 1.5 1.5 1.96875 1.5 2.5V13.5C1.5 14.0625 1.9375 14.5 2.5 14.5H8.5C9.03125 14.5 9.5 14.0625 9.5 13.5V2.5C9.5 1.96875 9.03125 1.5 8.5 1.5H7.5ZM0 2.5C0 1.125 1.09375 0 2.5 0H8.5C9.875 0 11 1.125 11 2.5V13.5C11 14.9062 9.875 16 8.5 16H2.5C1.09375 16 0 14.9062 0 13.5V2.5Z"
                  fill="#008627"
                ></path>
              </svg>
              512-387-4314
            </Link>
            <Link
              className="font-semibold text-sm sm:text-base rounded-md py-2 px-3 text-primary border border-lightGrey"
              href="/login"
            >
              Log in
            </Link>
            <Link
              className="font-bold text-sm sm:text-base rounded-md py-2 px-3 bg-primary text-white max-md:hidden"
              href="/register"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
