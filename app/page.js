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
        <Canvas
        // gl={{
        //   toneMapping: THREE.ReinhardToneMapping,
        //   toneMappingExposure: 1.5,
        // }}
        >
          <Experience />
        </Canvas>
      </section>
      <section className="md:flex mb-5 flex-col items-center justify-center text-black p-10 md:p-20 md:mb-12">
        <h1 className="text-3xl font-medium">Super Fast</h1>
        <h1 className="text-5xl md:text-6xl font-semibold">
          Spare Part Delivery
        </h1>
        <h6 className="mt-6 w-3/4 text-lg font-light md:text-center">
          Curabitur arcuerat accumsan iderdiet porttitor at sem Proin eget
          tortor risus uisque. Curabitur arcuerat accumsan iderdiet porttitor.
        </h6>
      </section>
      <ContactUs />
      <Footer />
    </main>
  );
};

export default page;
