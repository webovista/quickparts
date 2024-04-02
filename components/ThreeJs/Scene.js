import {
  Cloud,
  Clouds,
  ContactShadows,
  Environment,
  Float,
  PresentationControls,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import * as THREE from "three";
import { useEffect, useState } from "react";
import Aircraft from "./Aircraft";
import Autoparts from "./Autoparts";
import Sky from "./Sky";

export default function Scene({ type }) {
  let modelInfo = {
    homepage: {
      src: "./finalScene.gltf",
      animationNames: ["truck", "jet", "logo"],
      positions: { laptop: [-0.01, 0, -0.5], phone: [0.1, 0, -8] },
      links: true,
    },
    autoparts: {
      src: "./automotive.gltf",
      animationNames: ["truck", "slo"],
      positions: { laptop: [0.91, 0, -0.1], phone: [0.7, 0, -5] },
      links: false,
    },
    aircraft: {
      src: "./aircraft.glb",
      animationNames: ["jet", "sl_gan"],
      positions: { laptop: [-0.1, 0, 1], phone: [0.9, 0, -4] },
      links: false,
    },
  };
  const modelDetails = modelInfo[type];
  const [position, setPosition] = useState(modelDetails.positions.laptop);
  const [ismobile, setIsmobile] = useState(false);
  const model = useGLTF(modelDetails.src);

  const animations = useAnimations(model.animations, model.scene);

  useEffect(() => {
    const actions = modelDetails.animationNames.map(
      (name) => animations.actions[name]
    );

    actions.forEach((action) => {
      action.reset().fadeIn(0.5).play();
      action.setLoop(THREE.LoopOnce).clampWhenFinished = true;
    });

    return () => {
      actions.forEach((action) => {
        action.fadeOut(0.5).stop();
      });
    };
  }, []);

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth;

      if (screenWidth < 600) {
        setPosition(modelDetails.positions.phone);
        setIsmobile(true);
      } else {
        setPosition(modelDetails.positions.laptop);
        setIsmobile(false);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Environment preset="sunset" />
      <PresentationControls global config={{ mass: 2, tension: 100 }}>
        <group position={position}>
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
            position={[1.1, -0.9, -36]}
            // rotation-y={0.01}
          ></primitive>
          {modelDetails.links ? <Aircraft ismobile={ismobile} /> : null}
          {modelDetails.links ? <Autoparts ismobile={ismobile} /> : null}
          <Sky />
        </group>
      </PresentationControls>
      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
}

// useGLTF.preload("/finalScene.gltf");
