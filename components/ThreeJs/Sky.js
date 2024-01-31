import React from "react";
import { Canvas } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";
import { RGBELoader } from "three/addons/loaders/RGBELoader";

const Sky = () => {
  // Create an instance of the RGBELoader
  const rgbeLoader = new RGBELoader();

  // Load the HDR image
  const hdrTexture = rgbeLoader.load("/images/homepage/sky.hdr");

  return (
    // <Canvas
    //   gl={{
    //     toneMapping: THREE.ReinhardToneMapping,
    //     toneMappingExposure: 2.5,
    //   }}
    // >
      <Sphere args={[32, 82, 82]} rotation={[0, 220, 0]}
      
        gl={{
        toneMapping: THREE.ReinhardToneMapping,
        toneMappingExposure: 2.5,
      }}>
        <meshBasicMaterial map={hdrTexture} side={THREE.DoubleSide} />
      </Sphere>
    // </Canvas>
  );
};

export default Sky;
