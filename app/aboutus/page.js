"use client";

import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

const listsData = [
  {
    heading: "Our Journey of Growth:",
    list: [
      {
        title: "2016",
        content:
          "We began by providing spare parts solutions for the automotive industry.",
      },
      {
        title: "2021",
        content:
          "Our expertise expanded to encompass the oil and gas industry.",
      },
      {
        title: "2022",
        content:
          "We took flight, adding aircraft spare parts to our comprehensive portfolio.",
      },
      {
        title: "2023",
        content:
          "QuickParts GMBH continues to innovate, launching WeboVista, a dedicated branch focused on the tech sector.",
      },
    ],
  },
  {
    heading: "A Global Reach with Local Expertise:",
    subHeading:
      "Headquartered in Kaiserslautern, Germany, we are a company with a global mindset. We work with clients across the world, including:",
    list: [
      {
        title: "North America:",
        content: " Partnering with businesses in the USA and beyond.",
      },
      {
        title: "North Africa:",
        content:
          " Extending our reach to meet the needs of North African industries.",
      },
      {
        title: "China:",
        content:
          " Collaborating with Chinese companies to ensure efficient parts sourcing.",
      },
    ],
  },
  {
    heading: "Unwavering Commitment to Excellence:",
    subHeading:
      "Throughout this journey, our commitment to excellence has remained constant. We are driven by:",
    list: [
      {
        title: "Unmatched Expertise:",
        content:
          "  Our team stays current on industry trends and part specifications to provide unparalleled sourcing knowledge.",
      },
      {
        title: "treamlined Solutions:",
        content:
          "We navigate the complexities of parts procurement across various sectors, allowing you to focus on your core business..",
      },
      {
        title: "Exceptional Customer Service: ",
        content:
          "Building strong relationships and providing responsive support throughout the entire process is a priority for us.",
      },
    ],
  },
  {
    heading:
      "Choose QuickParts GMBH as your partner and experience the difference of::",
    list: [
      {
        title: "Effortless Parts Procurement:",
        content:
          "Access a vast network of suppliers and a team dedicated to finding the right parts for your needs.",
      },
      {
        title: "Exceptional Service:",
        content:
          "Benefit from responsive communication, expert advice, and efficient order fulfillment.",
      },
      {
        title: "Industry-Specific Knowledge: ",
        content:
          "Whether you're in automotive, marine (including oil & gas), aviation, or tech (through WeboVista), we understand your unique requirements.",
      },
    ],
  },
];

const page = () => {
  // Register the ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);
  const parent = useRef(null);
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);

  const dependencyArray = [
    section1.current,
    section2.current,
    section3.current,
  ];
  // Register the ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        section1.current,
        {
          y: 110,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 2,
          ease: "power4.out",
        }
      );
      gsap.fromTo(
        section2.current,
        {
          x: -110,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: section2.current,
            start: "end 60%", // Adjust as needed
            end: "center 80%",
            scrub: true,
            // markers: true,
          },
        }
      );
      gsap.fromTo(
        section3.current,
        {
          x: 110,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: section3.current,
            start: "end 70%", // Adjust as needed
            end: "center 60%",
            scrub: true,
            // markers: true,
          },
        }
      );
    }, parent); // Pass the home ref as the context

    return () => ctx.revert();
  }, dependencyArray);

  return (
    <main ref={parent} className="bg-slate-100 w-full overflow-hidden relative">
      <Navbar />
      <section className="min-h-[60vh] flex flex-col items-center justify-center bg-neutral-900 pb-5 px-2 pt-12">
        <div
          ref={section1}
          className="flex flex-col items-center justify-center"
        >
          <h1 className="text-4xl md:text-7xl my-5 mt-12 text-white">
            About us
          </h1>
          <p className="text-xl px-4  mt-4 text-center md:w-3/4 font-thin text-white">
            QuickParts GMBH is your trusted B2B partner for sourcing all
            industrial spare parts. We specialize in aviation, marine (including
            oil & gas), and automotive industries, tackling even the most
            challenging procurement needs. Our overhaul services ensure peak
            performance for your airplane parts.
          </p>
        </div>
      </section>

      <section ref={section2} className="p-8 bg-slate-100 text-black">
        <h1 className="text-4xl md:text-5xl my-2 mt-4 md:mt-2">
          Your Trusted Partner for Industrial Spare Parts <br />{" "}
          <small>(Since 2016)</small>
        </h1>
        <div className="md:flex flex-wrap justify-between">
          {listsData.map((data, index) => (
            <div key={index} className="md:w-[48%]">
              <h2 className="text-2xl font-bold mt-4">{data.heading}</h2>
              {data.subHeading && (
                <h2 className="text-lg font-medium mb-2">{data.subHeading}</h2>
              )}
              <ul className="list-disc ml-4 space-y-2 text-base">
                {data.list.map((item, index) => (
                  <li key={index}>
                    <b>{item.title}</b> {item.content}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="md:w-3/4 mt-8 font-semibold">
          <h2 className="text-lg md:text-3xl">
            Partner with QuickParts GMBH and experience a new level of
            efficiency and peace of mind in managing your industrial spare parts
            needs.
          </h2>
          <h3 className=' md:text-xl mt-4'>
            Contact us today! <br />
            Phone: + 49 179 2772530 (24/7 Support)
          </h3>
          <h3 className='text-md mt-4'>We look forward to exceeding your expectations!</h3> 
        </div>
        <div ref={section3} className="mt-12">
          <img
            src="/images/aboutUs/team.png"
            className="w-full min-h-[20vh] object-cover rounded-2xl"
            alt=""
          />
        </div>
      </section>
      <ContactUs />
      <Footer />
    </main>
  );
};

export default page;
