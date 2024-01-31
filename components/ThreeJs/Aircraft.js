import React, { useState } from "react";
import { Text } from "@react-three/drei";
import { useRouter } from "next/navigation";

const Aircraft = ({ ismobile }) => {
  const router = useRouter();
  const [color, setcolor] = useState("white");

  // Handle click on the text
  const handleClick = (props) => {
    // Navigate to the /aircraft page
    router.push("/aircraft");
  };

  return (
    <Text
      onClick={handleClick}
      color={color} // Add color property
      fontSize={0.15}
      position={ismobile ? [-0.75, -0.6, 9.4] : [-1.7, -0.7, 2.4]}
      rotation={[0, 0.5, 0]}
      maxWidth={2}
      cursor="pointer"
      onPointerEnter={(e) => setcolor("red")}
      onPointerLeave={(e) => setcolor("white")}
    >
      Aircraft Page
    </Text>
  );
};

export default Aircraft;
