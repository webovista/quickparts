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
    autoparts: { src: "./automotive_dome.gltf", animation: ["truck","slo"], links: false },
    aircraft: { src: "./aircraft_dome.gltf", animation: ["truck","slo"] },
  };
  let modelsrc = modelInfo[type];

  const [position, setPosition] = useState([-0.01, 0, -0.5]);
  const [ismobile, setIsmobile] = useState(false);
  const model = useGLTF(modelsrc.src);

  const animations = useAnimations(model.animations, model.scene);

  useEffect(() => {
    // const action = animations.actions["jet"];
    // const action2 = animations.actions["truck"];
    // const action3 = animations.actions["logo"];
    // // animations.actions.forEach((element) => {
    // //   console.log(element);
    // // });
    // // console.log(animations.actions);
    // console.log(type)

    // action
    //   .reset()
    //   .fadeIn(0.5)
    //   .play()
    //   .setLoop(THREE.LoopOnce).clampWhenFinished = true;
    // action2
    //   .reset()
    //   .fadeIn(0.5)
    //   .play()
    //   .setLoop(THREE.LoopOnce).clampWhenFinished = true;
    // action3
    //   .reset()
    //   .fadeIn(0.5)
    //   .play()
    //   .setLoop(THREE.LoopOnce).clampWhenFinished = true;




    // return () => {
    //   action.fadeOut(0.5);
    //   action2.fadeOut(0.5);
    // };
  }, []);

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth;

      if (screenWidth < 600) {
        setPosition([0.1, 0, -8]);
        setIsmobile(true);
      } else {
        setPosition([-0.01, 0, -0.5]);
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
          {modelsrc.links ? <Aircraft ismobile={ismobile} /> : null}
          {modelsrc.links ? <Autoparts ismobile={ismobile} /> : null}
          <Sky />
        </group>
      </PresentationControls>
      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
}

useGLTF.preload("/finalScene.gltf");
