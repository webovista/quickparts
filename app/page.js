"use client";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Experience from "@/components/ThreeJs/Experience";
import Sky from "@/components/ThreeJs/Sky";
// import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Link from "next/link";
import React from "react";
import * as THREE from "three";

const page = () => {
  return (
    <main className="bg-slate-100">
      <Navbar />
      <section className="h-screen pt-10">
        <Canvas>
          <Experience type="homepage" />
        </Canvas>
      </section>
      <section className="md:flex mb-5 flex-col items-center justify-center text-black p-10 md:p-20 md:mb-12">
        <h1 className="text-4xl font-medium">Effortless Parts</h1>
        <h1 className="text-5xl md:text-6xl font-semibold">
          Trusted Partner, Smooth Operations
        </h1>
        <h6 className="mt-6 w-3/4 text-md font-light md:text-center">
          At QuickParts GMBH, we envision a future where industrial businesses
          have effortless access to the spare parts they need, regardless of
          industry or complexity. We strive to be more than just a supplier; we
          aim to be a trusted partner, ensuring your operations run smoothly and
          efficiently.
        </h6>
      </section>
      <ContactUs />
      <Footer />
    </main>
  );
};

export default page;
