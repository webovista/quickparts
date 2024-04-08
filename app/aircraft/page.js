"use client";
import Navbar from "@/components/Navbar";
import Marque from "@/components/Marque";
import React, { useEffect, useRef } from "react";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import SplitType from "split-type";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas } from "@react-three/fiber";
import Experience from "@/components/ThreeJs/Experience";
import Sky from "@/components/ThreeJs/Sky";

const page = () => {
  // Register the ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);
  const parent = useRef(null);
  const tspare = useRef(null);
  const tmpText = useRef(null);
  const section3_l = useRef(null);
  const section3_r = useRef(null);
  const section4_l = useRef(null);
  const section4_r = useRef(null);
  const section2_b = useRef(null);
  const section2_plane = useRef(null);

  //gsap animation
  useEffect(() => {
    const ourText = new SplitType(tmpText.current, { types: "lines" });
    const chars = ourText.lines;

    const dependencyArray = [
      parent.current,
      tspare.current,
      tmpText.current,
      section3_l.current,
      section3_r.current,
      section4_l.current,
      section4_r.current,
      section2_b.current,
    ];

    let ctx = gsap.context(() => {
      gsap.fromTo(
        chars,
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
          scrollTrigger: {
            trigger: tmpText.current,
            start: "end 70%", // Adjust as needed
            end: "center 40%",
            scrub: true,
            // markers: true,
          },
        }
      );

      // section2

      gsap.fromTo(
        section2_b.current,
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
          scrollTrigger: {
            trigger: section2_b.current,
            start: "end 70%", // Adjust as needed
            end: "center 40%",
            scrub: true,
            // markers: true,
          },
        }
      );

      gsap.fromTo(
        section2_plane.current,
        {
          y: -100,
          opacity: 0,
        },
        {
          y: -250,
          opacity: 1,
          stagger: 0.05,
          duration: 2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: section2_b.current,
            start: "end 50%", // Adjust as needed
            end: "center 30%",
            scrub: true,
            // markers: true,
          },
        }
      );

      // section 3

      gsap.fromTo(
        section3_l.current,
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
            trigger: section3_l.current,
            start: "end 70%", // Adjust as needed
            end: "center 40%",
            scrub: true,
            // markers: true,
          },
        }
      );

      gsap.fromTo(
        section3_r.current,
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
            trigger: section3_l.current,
            start: "end 70%", // Adjust as needed
            end: "center 40%",
            scrub: true,
            // markers: true,
          },
        }
      );

      // section 4

      gsap.fromTo(
        section4_l.current,
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
            trigger: section4_l.current,
            start: "end 70%", // Adjust as needed
            end: "center 40%",
            scrub: true,
            // markers: true,
          },
        }
      );

      gsap.fromTo(
        section4_r.current,
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
            trigger: section4_l.current,
            start: "end 70%", // Adjust as needed
            end: "center 40%",
            scrub: true,
            // markers: true,
          },
        }
      );
    }, parent); // Pass the parent ref as the context

    return () => ctx.revert();
  }, []);

  return (
    <main ref={parent} className="bg-slate-100 w-full overflow-hidden relative">
      <Navbar bg={""} />
      <section className="h-screen pt-10 relative overflow-hidden">
        <Canvas>
          <Experience type="aircraft" />
        </Canvas>
      </section>
      <section
        className="bg-white min-h-screen bg-no-repeat bg-cover bg-center p-5 pt-10 leading-7 md:p-20 md:pt-12"
        style={{
          backgroundImage: `url('/images/aircraft/darkBgplane.png')`,
        }}
      >
        <div ref={tmpText}>
          <h1 className="text-3xl text-center mb-0 md:text-left md:text-5xl text-white">
            Peak Performance Guaranteed:{" "}
            <small>Keeping Your Fleet Soaring with Confidence</small>
          </h1>
          <p className="text-center font-thin md:text-left md:text-xl text-white">
            At QuickParts GMBH, your aircraft's success is our priority. We
            understand the critical role it plays, and ensuring peak performance
            and safety is paramount. That's why we offer a comprehensive suite
            of aircraft parts solutions designed to keep your fleet soaring
            smoothly.{" "}
          </p>
          <p className="text-center font-thin mt-5 md:text-left md:text-xl text-white">
            Our vast inventory guarantees access to the components you need,
            while our team of experts tackles even the most challenging
            procurement requests.{" "}
          </p>
        </div>
        <div className="relative flex items-center justify-center h-screen">
          <div className="mt-10 flex justify-center items-center py-36 w-screen relative">
            <img
              className="md:w-1/3 absolute top-40"
              src="/images/aircraft/plane-top-view.png"
              alt=""
              ref={section2_plane}
            />
          </div>
          <div ref={section2_b} className="my-7 absolute">
            <div className="md:flex md:gap-96">
              <div className="bg-black p-4 rounded-md mt-5">
                <div className="icon bg-red-600 w-12 h-12 rounded-full flex justify-center items-center">
                  <img src="/images/aircraft/Frame.svg" alt="" />
                </div>
                <p className="mt-4 text-white">
                  <b>Repair:</b> Our skilled technicians breathe new life into
                  damaged aircraft parts, extending their lifespan and
                  minimizing downtime.
                </p>
              </div>
              <div className="bg-black p-4 rounded-md mt-5">
                <div className="icon bg-red-600 w-12 h-12 rounded-full flex justify-center items-center ">
                  <img src="/images/aircraft/Frame.svg" alt="" />
                </div>
                <p className="mt-4 text-white">
                  <b>Selling:</b> We source the exact aircraft parts you need,
                  saving you time and ensuring compatibility.
                </p>
              </div>
            </div>

            <div className="md:flex md:gap-96 md:mt-44">
              <div className="bg-black p-4 rounded-md mt-5">
                <div className="icon bg-red-600 w-12 h-12 rounded-full flex justify-center items-center">
                  <img src="/images/aircraft/Frame.svg" alt="" />
                </div>
                <p className="mt-4 text-white">
                  <b>Maintenance:</b> Our comprehensive maintenance plans keep
                  your aircraft operating smoothly and efficiently, reducing
                  long-term costs.
                </p>
              </div>
              <div className="bg-black p-4 rounded-md mt-5 min-w-[25%]">
                <div className="icon bg-red-600 w-12 h-12 rounded-full flex justify-center items-center">
                  <img src="/images/aircraft/Frame.svg" alt="" />
                </div>
                <p className="mt-4 text-white">
                  <b>Overhaul: </b> Our in-depth overhaul services restore
                  aircraft parts to their original functionality and safety
                  specifications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-slate-100 pt-8 md:flex md:flex-row-reverse">
        <div ref={section3_r} className="py-4">
          <img src="/images/aircraft/engine.png" className="w-full" alt="" />
        </div>
        <div
          ref={section3_l}
          className="p-4 mt-2 text-black md:flex flex-col justify-center md:w-1/2 md:p-8"
        >
          <h1 className="text-2xl md:text-5xl font-semibold ">Why Choose Us</h1>
          {/* <p className="mt-2 font-extralight md:text-lg">
            Unmatched Expertise: Our team comprises seasoned professionals with
            a wealth of experience in the aviation industry, ensuring that your
            spare parts are in the hands of experts.
            <br />
            Cutting-Edge Technology: We leverage the latest technological
            advancements to deliver services that are at the forefront of the
            industry, guaranteeing precision and reliability. <br />
            Custom Solutions: No two aircraft spare parts are identical, and
            neither are our solutions. We tailor our services to meet the unique
            requirements of each component and client.
            <br />
            Compliance and Safety: We prioritize compliance with industry
            regulations and safety standards, providing you with the confidence
            that your aircraft spare parts are in line with the strictest
            guidelines.
            <br />
          </p> */}
          <ul className="list-disc ml-4 mt-4 space-y-2">
            <li>
              <b>Unmatched Expertise:</b> Our team of highly skilled and
              certified technicians possess in-depth knowledge of aircraft parts
              and industry regulations.
            </li>
            <li>
              <b> Streamlined Solutions:</b> We navigate the complexities of
              aircraft parts procurement, saving you time and resources.
            </li>
            <li>
              <b>Fast Turnaround Times:</b> We minimize downtime by prioritizing
              efficient service and prompt delivery of parts.
            </li>
            <li>
              <b>Cost-Effective Solutions:</b> We offer competitive pricing and
              reliable parts, ensuring value for your investment.
            </li>
            <li>
              <b> Guaranteed Performance & Safety:</b> We use only OEM (Original
              Equipment Manufacturer) parts or FAA (Federal Aviation
              Administration) approved equivalents for optimal performance and
              safety.
            </li>
            <li>
              <b>Exceptional Customer Service:</b> We build strong relationships
              with our clients and provide responsive support throughout the
              entire process.
            </li>
          </ul>
          <p className="mt-4 font-medium md:text-lg">
            Contact QuickParts GMBH today to discuss your specific aircraft
            parts needs. Let us help you ensure optimal performance, safety, and
            efficiency for your fleet.
          </p>
        </div>
      </section>
      <Marque type="aircraft" />
      <section className="bg-slate-100 md:px-8 md:flex md:flex-row md:min-h-[90vh] md:pb-8">
        <div
          ref={section4_l}
          className="p-4 text-black md:flex flex-col justify-center md:w-1/2 md:p-8 items-start"
        >
          <h1 className="text-3xl md:text-5xl font-semibold md:w-3/4">
            Our Greatest Achievements
          </h1>
          <p className="mt-2 font-extralight md:text-lg md:mt-3">
            QuickParts GMBH isn't just about parts; it's about passion for
            aviation excellence. We elevate your aircraft's performance and
            reliability with a commitment to quality. We serve clients across 4
            continents, ensuring access to critical parts, regardless of
            location. Our team leverages extensive industry knowledge tackling
            even the most complex aviation parts procurement challenges.
          </p>
          <p className="mt-2  md:text-lg">
            Explore our services today and let your aircraft soar with
            confidence.
          </p>
          <h4 className="mt-2 font-semibold md:text-2xl md:mt-8">
            Explore our services today and let your aircraft soar with
            confidence.
          </h4>
          {/* <button
            type="submit"
            className="mt-6 flex items-center justify-center rounded-md border border-transparent bg-red-700 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Discover More
          </button> */}
        </div>
        <div ref={section4_r} className="py-5 md:m-auto">
          <div className="md:flex">
            <div className="p-4 md:p-8 m-5 md:mx-0 rounded-xl flex flex-col justify-center items-center bg-black">
              <div className="flex">
                <img src="/images/aircraft/icon-truck.svg" alt="" />
                <p className="text-2xl font-semibold m-3 text-white">19+</p>
              </div>
              <h5 className="text-white"> Years of Expertise</h5>
            </div>
            <div className="p-4 md:p-8 m-5 rounded-xl flex flex-col justify-center items-center bg-slate-300 text-black">
              <div className="flex">
                <img src="/images/aircraft/icon-clients.svg" alt="" />
                <p className="text-2xl font-semibold  m-3">98% </p>
              </div>
              <h5 className="">Customer Satisfactions</h5>
            </div>
          </div>
          <div className="md:flex">
            <div className="p-4 md:p-8 m-5 rounded-xl flex flex-col justify-center items-center bg-slate-300 text-black">
              <div className="flex">
                <img src="/images/aircraft/icon-award.svg" alt="" />
                <p className="text-2xl font-semibold  m-3">1000+</p>
              </div>
              <h5>Successful Deliveries</h5>
            </div>
            <div className="p-4 md:p-8 mx-5 rounded-xl flex flex-col justify-center items-center bg-slate-300 text-black">
              <div className="flex">
                <img src="/images/aircraft/icon-team.svg" alt="" />
                <p className="text-2xl font-semibold  m-3">4+</p>
              </div>
              <h5 className="">Continents Outreach</h5>
            </div>
          </div>
        </div>
      </section>
      <ContactUs />
      <Footer />
    </main>
  );
};

export default page;
