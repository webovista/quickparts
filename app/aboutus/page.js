"use client";

import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

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
          <h1 className="text-4xl md:text-7xl my-5 mt-12 text-white">About us</h1>
          <p className="text-xl px-4  mt-4 text-center md:w-3/4 font-thin text-white">
            Welcome to QuickParts GMBH, your premier destination to purchase
            high-quality spare parts for Automotive, Aircraft, Marine, and Oil &
            Gas Industry. As a leading supplier in the aviation, automobile and
            other heavy industries, we take pride in delivering top-notch
            products and services to meet the diverse needs of our esteemed
            clients.
          </p>
        </div>
      </section>

      <section ref={section2} className="p-8 bg-slate-100 text-black">
        <h1 className="text-4xl md:text-5xl my-5 mt-4 md:mt-2">
          About us Heading
        </h1>
        <div className="md:flex">
          <p className="text-lg mt-4 md:w-3/4 font-light md:mt-2 md:me-8">
            Our Commitment to Excellence: At QuickParts GMBH, we are more than
            just a supplier of spare parts; we are your partners in precision
            and reliability. For years, we have been the go-to destination for
            businesses in the Automotive, Aircraft, Marine, and Oil & Gas
            industries, offering a comprehensive range of high-quality spare
            parts. Our commitment to excellence, unwavering dedication to
            quality, and a passion for innovation have established us as the
            trusted supplier in these industries.
            <br />
            <br /> Quality Assurance: We adhere to the highest industry
            standards when it comes to the sourcing and distribution of spare
            parts for automotive, aircraft, marine, and other industries. Our
            products undergo rigorous quality control measures, and we
            collaborate with reputable manufacturers to guarantee the
            authenticity and reliability of every component. Rest assured, when
            you choose QuickParts GMBH, you are choosing uncompromising quality.
            <br />
            <br /> Wide Range of Products: Whether you are in need of gear
            components, engines, or any other spare parts, we have you covered.
            Our extensive inventory boasts a diverse selection of products,
            catering to various motor and machine models and specifications.
            Browse through our catalog to find the perfect fit for your aviation
            needs.
          </p>
          <p className="text-lg mt-4 md:w-3/4 font-light md:ms-8">
            Customer-Centric Approach: At the heart of our business is a
            customer-centric philosophy. We prioritize your satisfaction by
            offering personalized service, efficient order processing, and
            timely deliveries. Our team of experts is dedicated to assisting you
            in finding the right solutions for your specific requirements,
            ensuring a seamless and hassle-free experience.
            <br />
            <br /> Global Reach: With a strong network of suppliers and partners
            worldwide, we have the capability to serve clients on a global
            scale. Whether you operate regionally or internationally, QuickParts
            GMBH is your trusted partner for all your spare parts needs.
            <br />
            <br /> Environmental Responsibility: We are committed to
            sustainability and environmental responsibility. Our sourcing
            practices and business operations align with industry best practices
            to minimize our ecological footprint. By choosing QuickParts GMBH,
            you contribute to a greener and more sustainable automotive, marine,
            aviation, and oil & gas industry.
          </p>
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
