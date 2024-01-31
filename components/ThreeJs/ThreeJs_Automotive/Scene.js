import {
  ContactShadows,
  Environment,
  PresentationControls,
  useAnimations,
  useFaceControls,
  useGLTF,
} from "@react-three/drei";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Sky from "../Sky";

export default function Scene() {
  const [position, setPosition] = useState([1.1, -0.9, -36]);

  const model = useGLTF("/automotive_dome.gltf");
  const animations = useAnimations(model.animations, model.scene);

  useEffect(() => {
    const action = animations.actions["truck"];
    const action2 = animations.actions["slo"];

    action
      .reset()
      .fadeIn(0.5)
      .play()
      .setLoop(THREE.LoopOnce).clampWhenFinished = true;
    action2
      .reset()
      .fadeIn(0.5)
      .play()
      .setLoop(THREE.LoopOnce).clampWhenFinished = true;

    return () => {
      action.fadeOut(0.5);
    };
  }, []);

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth;

      // Adjust position based on screen width
      if (screenWidth < 600) {
        setPosition([2.1, -0.9, -40]);
      } else {
        setPosition([1.1, -0.9, -36]);
      }
    }

    // Attach event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial call to set position based on the current screen width
    handleResize();

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Environment preset="sunset" />

      <PresentationControls global config={{ mass: 2, tension: 400 }}>
        <rectAreaLight
          width={15.5}
          height={15.65}
          intensity={85}
          color={"#ffffff"}
          rotation={[-0.1, Math.PI, 0]}
          position={[-2, 2.55, 39.15]}
        />
        <primitive
          object={model.scene}
          scale={0.3}
          position={position}
        ></primitive>
        <Sky />
      </PresentationControls>
      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
}
