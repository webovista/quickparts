"use client";
import Navbar from "@/components/Navbar";
import Marque from "@/components/Marque";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import { Canvas } from "@react-three/fiber";
import Experience from "@/components/ThreeJs/Experience";

/**
 * Renders the autoparts page.
 * @returns {JSX.Element} The autoparts page.
 */
const page = () => {
  const home = useRef(null);
  const tmpText = useRef(null);
  const section3_l = useRef(null);
  const section3_r = useRef(null);

  useEffect(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    const ourText = new SplitType(tmpText.current, { types: "lines" });
    const chars = ourText.lines;

    const dependencyArray = [
      home.current,
      tmpText.current,
      section3_l.current,
      section3_r.current,
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
            trigger: section3_r.current,
            start: "end 70%", // Adjust as needed
            end: "center 40%",
            scrub: true,
            // markers: true,
          },
        }
      );
    }, home); // <- scopes all selector text to the root element

    return () => ctx.revert();
  }, []);

  return (
    <main ref={home} className="bg-slate-100 w-full overflow-hidden">
      <Navbar />
      <section className="h-screen pt-10">
        <Canvas>
          <Experience type="autoparts" />
        </Canvas>
      </section>
      <section className="p-2.5 md:p-4 bg-slate-100">
        <div
          className="mx-auto p-8 md:p-12 md:pb-16 w-full bg-no-repeat bg-cover bg-center rounded-b-2xl bg-stone-900"
          style={{
            backgroundImage: `url('/images/autoparts/BgSecond.png')`,
          }}
        >
          <button
            type="submit"
            className="flex m-auto my-4 items-center justify-center rounded-md border border-transparent bg-red-700 px-6 py-1 text-base font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Keeping Your Fleet on the Road! ✨
          </button>
          <h3
            ref={tmpText}
            className="mx-auto p-3 text-center md:w-10/12 text-2xl md:text-2xl font-semibold text-white"
          >
            At QuickParts GMBH, we understand the importance of keeping your
            automotive fleet running smoothly. Whether you manage a large
            transportation company or a local repair shop, downtime can be
            costly. We offer a comprehensive suite of services designed to
            streamline your automotive spare parts procurement process, ensuring
            you have the right parts at the right time to keep your vehicles on
            the road.
          </h3>
        </div>
      </section>
      <section className="bg-slate-100 py-5">
        <div className="container relative mx-auto md:mb-8 p-5">
          <div className="relative text-black">
            <div
              ref={section3_l}
              className="imgContainer  h-full md:w-1/2 md:absolute top-1/2 md:transform md:-translate-y-1/2"
            >
              <img
                src="/images/autoparts/achievements.png"
                className="h-full"
                alt="achievements"
              />
            </div>
            <div ref={section3_r}>
              <div className="md:w-1/2 ml-auto py-5 md:py-4 pl-5">
                <h3 className="text-4xl font-bold">Extensive Inventory:</h3>
                <p>
                  We maintain a vast catalog of automotive spare parts for
                  various makes and models, ensuring you have ready access to
                  the components you need.
                </p>
              </div>
              <div className="md:w-1/2 ml-auto py-5 md:py-4 pl-5 ">
                <h3 className="text-4xl font-bold">Competitive Pricing:</h3>
                <p>
                  We offer competitive pricing on a wide range of automotive
                  parts, helping you optimize your budget.
                </p>
              </div>
              <div className="md:w-1/2 ml-auto py-5 md:py-4 pl-5 ">
                <h3 className="text-4xl font-bold"> Quality Assurance:</h3>
                <p>
                  We source parts from reputable manufacturers and conduct
                  quality checks to ensure optimal performance and reliability.
                </p>
              </div>
              <div className="md:w-1/2 ml-auto py-5 md:py-4 pl-5 ">
                <h3 className="text-4xl font-bold">
                  Fast and Reliable Delivery:
                </h3>
                <p>
                  We offer fast and reliable delivery options to minimize
                  downtime for your fleet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Marque type="autoparts" />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default page;
