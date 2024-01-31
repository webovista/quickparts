import React from "react";
import { Html, Text } from "@react-three/drei";
import { useRouter } from "next/navigation";

const Placeholder = ({type}) => {
  return (
    <Html
      transform
      wrapperClass="htmlScreen"
      distanceFactor={1.17}
      position={[0, 0, 0]}
      rotation-x={-0.256}
      scale={2.2}
    >
      {/* <iframe src="https://bruno-simon.com/html/" /> */}
      <img src={`/gifs/${type}.gif`} alt="" />
    </Html>
  );
};

export default Placeholder;
