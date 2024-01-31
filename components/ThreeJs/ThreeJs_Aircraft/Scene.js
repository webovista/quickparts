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
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Sky from "../Sky";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

export default function Scene() {
  const [position, setPosition] = useState([1.1, -0.9, -36]);

  const model = useGLTF("/aircraft_dome.gltf");
  const animations = useAnimations(model.animations, model.scene);

  useEffect(() => {
    const action = animations.actions["jet"];
    const action2 = animations.actions["sl_gan"];

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
        setPosition([0.25, -0.9, -38]);
      } else {
        setPosition([1.1, -0.9, -33]);
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
        <group rotation={[0, -0.19, 0]} position={[1, 0, 0]}>
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
        </group>
      </PresentationControls>
      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
}
