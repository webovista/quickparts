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

  // Play the timeline

  return (
    <main ref={home} className="bg-slate-100 w-full">
      <Navbar />
      <section className="h-screen pt-10">
        <Canvas>
          <Experience type="autoparts"/>
        </Canvas>
      </section>
      <section className="p-2.5 md:p-4 bg-slate-100">
        <div
          className="mx-auto p-8 md:p-14 md:pb-36 w-full bg-no-repeat bg-cover bg-center rounded-b-2xl bg-stone-900"
          style={{
            backgroundImage: `url('/images/autoparts/BgSecond.png')`,
          }}
        >
          <button
            type="submit"
            className="flex m-auto my-4 items-center justify-center rounded-md border border-transparent bg-red-700 px-6 py-1 text-base font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Quality Aircraft Spare Parts, Ready for Takeoff! ✨
          </button>
          <h3
            ref={tmpText}
            className="m-auto p-3 text-center md:w-10/12 text-2xl md:text-4xl font-semibold text-white"
          >
            Explore our comprehensive selection of top-tier aircraft spare
            parts, meticulously crafted and tested for optimal performance.{" "}
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
              <div className="md:w-1/2 ml-auto py-5 md:py-10 mb-3 pl-5">
                <h3 className="text-4xl mb-3 font-bold">
                  Unparalleled Quality:
                </h3>
                <p>
                  Our premium and rigorously tested aircraft spare parts ensure
                  unparalleled quality and reliability.
                </p>
              </div>
              <div className="md:w-1/2 ml-auto py-5 md:py-10 mb-3 pl-5">
                <h3 className="text-4xl mb-3 font-bold">
                  Global Reach, Local Service:
                </h3>
                <p>
                  Benefit from our extensive network and global reach, paired
                  with personalized, local service for a seamless experience.
                </p>
              </div>
              <div className="md:w-1/2 ml-auto py-5 md:py-10 pl-5 ">
                <h3 className="text-4xl font-bold">
                  Customer-Centric Excellence:
                </h3>
                <p>
                  Experience exceptional customer support and efficient order
                  processing, making us your trusted partner for all aviation
                  spare parts needs.
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
