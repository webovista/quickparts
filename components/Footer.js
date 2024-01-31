import React from "react";

const Footer = () => {
  return (
    <section className=" bg-slate-100 p-2.5 md:p-4">
      <div className="p-4 rounded-b-xl bg-gray-950">
        <div className="md:flex justify-between md:my-4 md:mb-6">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Quickparts</span>
              <img
                className="h-15 w-auto"
                src="/images/QuickParts_logo1.svg"
                alt=""
              />
            </a>
          </div>
          <h2 className="text-2xl md:text-3xl mt-3 text-white">
            Spare Parts Fast Delivery & Reliable
          </h2>
        </div>
        <div
          className="backdrop-blur p-4 rounded-xl mt-2 md:flex md:justify-between"
          style={{ backgroundColor: "#FFFFFF0D" }}
        >
          <ul className="flex flex-col md:flex-row gap-5 text-sm font-medium sm:mt-0">
            <li>
              <a href="/" className="mr-4 hover:underline md:mr-6 text-white">
                Home
              </a>
            </li>
            <li>
              <a
                href="/aboutus"
                className="mr-4 hover:underline md:mr-6 text-white"
              >
                About us
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline text-white">
                Contact us
              </a>
            </li>
          </ul>
          <ul className="flex mt-3 md:mt-0 align-middle gap-5 text-sm ">
            <li>
              <a href="/" className="mr-4 block hover:underline md:mr-6 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M19 6.5C19 7.32843 18.3284 8 17.5 8C16.6716 8 16 7.32843 16 6.5C16 5.67157 16.6716 5 17.5 5C18.3284 5 19 5.67157 19 6.5Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 11.6C2 8.23969 2 6.55953 2.65396 5.27606C3.2292 4.14708 4.14708 3.2292 5.27606 2.65396C6.55953 2 8.23969 2 11.6 2H12.4C15.7603 2 17.4405 2 18.7239 2.65396C19.8529 3.2292 20.7708 4.14708 21.346 5.27606C22 6.55953 22 8.23969 22 11.6V12.4C22 15.7603 22 17.4405 21.346 18.7239C20.7708 19.8529 19.8529 20.7708 18.7239 21.346C17.4405 22 15.7603 22 12.4 22H11.6C8.23969 22 6.55953 22 5.27606 21.346C4.14708 20.7708 3.2292 19.8529 2.65396 18.7239C2 17.4405 2 15.7603 2 12.4V11.6ZM11.6 4H12.4C14.1132 4 15.2777 4.00156 16.1779 4.0751C17.0548 4.14674 17.5032 4.27659 17.816 4.43597C18.5686 4.81947 19.1805 5.43139 19.564 6.18404C19.7234 6.49684 19.8533 6.94524 19.9249 7.82208C19.9984 8.72225 20 9.88684 20 11.6V12.4C20 14.1132 19.9984 15.2777 19.9249 16.1779C19.8533 17.0548 19.7234 17.5032 19.564 17.816C19.1805 18.5686 18.5686 19.1805 17.816 19.564C17.5032 19.7234 17.0548 19.8533 16.1779 19.9249C15.2777 19.9984 14.1132 20 12.4 20H11.6C9.88684 20 8.72225 19.9984 7.82208 19.9249C6.94524 19.8533 6.49684 19.7234 6.18404 19.564C5.43139 19.1805 4.81947 18.5686 4.43597 17.816C4.27659 17.5032 4.14674 17.0548 4.0751 16.1779C4.00156 15.2777 4 14.1132 4 12.4V11.6C4 9.88684 4.00156 8.72225 4.0751 7.82208C4.14674 6.94524 4.27659 6.49684 4.43597 6.18404C4.81947 5.43139 5.43139 4.81947 6.18404 4.43597C6.49684 4.27659 6.94524 4.14674 7.82208 4.0751C8.72225 4.00156 9.88684 4 11.6 4Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
            <li className="mb-0">
              <a href="/" className="mr-4 block hover:underline md:mr-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 17.799 6.20101 22.5 12 22.5Z"
                    fill="white"
                  />
                  <path
                    d="M15.9103 15.2112L16.3767 12.2476H13.4589V10.3252C13.4589 9.51428 13.8657 8.7233 15.1726 8.7233H16.5V6.20024C16.5 6.20024 15.2959 6 14.1452 6C11.7411 6 10.1712 7.4197 10.1712 9.98883V12.2476H7.5V15.2112H10.1712V22.3759C10.7075 22.458 11.2562 22.5 11.8151 22.5C12.374 22.5 12.9226 22.458 13.4589 22.3759V15.2112H15.9103Z"
                    fill="#19161A"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="/" className="mr-4 block hover:underline md:mr-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M8.84156 21C6.41531 21 4.15363 20.2943 2.25 19.0767C3.86624 19.1813 6.71855 18.9308 8.49268 17.2386C5.82381 17.1161 4.6202 15.0692 4.4632 14.1945C4.68997 14.2819 5.77148 14.3869 6.382 14.142C3.31192 13.3722 2.84095 10.678 2.94561 9.85573C3.52125 10.2581 4.49809 10.3981 4.88185 10.3631C2.02109 8.31618 3.05027 5.23707 3.55613 4.57226C5.60912 7.4165 8.6859 9.01393 12.4923 9.10278C12.4205 8.78802 12.3826 8.46032 12.3826 8.12373C12.3826 5.70819 14.3351 3.75 16.7435 3.75C18.0019 3.75 19.1358 4.28457 19.9318 5.13963C20.7727 4.94258 22.0382 4.4813 22.6569 4.0824C22.3451 5.20208 21.3742 6.13612 20.7869 6.48231C20.7821 6.47048 20.7918 6.49408 20.7869 6.48231C21.3028 6.40428 22.6986 6.13603 23.25 5.76192C22.9773 6.39094 21.948 7.4368 21.1033 8.02232C21.2605 14.9535 15.9574 21 8.84156 21Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="/" className="block hover:underline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 13.8832 1.99575 15.6505 2.86386 17.1787L1.5 22.5L6.98615 21.2278C8.47603 22.0391 10.1842 22.5 12 22.5ZM12 20.8846C16.9068 20.8846 20.8846 16.9068 20.8846 12C20.8846 7.09316 16.9068 3.11538 12 3.11538C7.09316 3.11538 3.11538 7.09316 3.11538 12C3.11538 13.8945 3.70838 15.6506 4.71888 17.0927L3.92308 20.0769L6.95995 19.3177C8.39202 20.3059 10.1284 20.8846 12 20.8846Z"
                    fill="white"
                  />
                  <path
                    d="M9.37502 7.12504C9.12537 6.6236 8.7424 6.668 8.35551 6.668C7.66407 6.668 6.58594 7.49621 6.58594 9.03759C6.58594 10.3008 7.14259 11.6836 9.01831 13.7522C10.8285 15.7485 13.207 16.7812 15.1816 16.7461C17.1563 16.7109 17.5625 15.0117 17.5625 14.4379C17.5625 14.1835 17.4047 14.0566 17.296 14.0221C16.6231 13.6992 15.382 13.0975 15.0996 12.9844C14.8172 12.8714 14.6698 13.0243 14.5781 13.1075C14.3221 13.3515 13.8144 14.0707 13.6406 14.2325C13.4668 14.3942 13.2077 14.3124 13.0999 14.2512C12.7031 14.092 11.6272 13.6134 10.7696 12.7821C9.70899 11.754 9.64675 11.4002 9.44693 11.0854C9.28707 10.8335 9.40437 10.6789 9.46291 10.6114C9.69142 10.3477 10.007 9.94061 10.1485 9.73832C10.29 9.53602 10.1776 9.22889 10.1102 9.03759C9.82033 8.21488 9.57474 7.52618 9.37502 7.12504Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col md:flex-row-reverse gap-3 justify-center md:justify-between text-sm font-light mt-6">
          <div className="text-center">
            <a href="/agbs" className="text-white">
              Agbs
            </a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <a href="/impressum" className="text-white">
              Impressum
            </a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <a href="/Produkte" className="text-white">
              &nbsp;Produkte
            </a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <a href="/Datenschutz" className="text-white">
              Datenschutzerklärung
            </a>
          </div>
          <p className="text-center text-xs md:w-2/3 md:text-left text-white">
            © 2023, QuickParts GMBH. All rights reserved. The content, design,
            and images on this website are the intellectual property of
            QuickParts GMBH and protected by copyright law. Unauthorised use or
            reproduction is strictly prohibited and may result in legal action.
            Trademarks and trade names are the property of their respective
            owners.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
