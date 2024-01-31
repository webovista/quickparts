import React, { useState } from "react";
import { Text } from "@react-three/drei";
import { useRouter } from "next/navigation";

const Autoparts = ({ismobile}) => {
  const router = useRouter();
  const [color, setcolor] = useState("white");

  // Handle click on the text
  const handleClick = () => {
    // Navigate to the /Autoparts page
    router.push("/autoparts");
  };

  return (
    <Text
      onClick={handleClick}
      color={color} // Add color property
      fontSize={0.15}
      position={ismobile? [0.5, -0.7, 10]:[0.5, -0.7, 3.4]}
      rotation={[0, -0.8, 0]}
      maxWidth={2}
      cursor="pointer"
      onPointerEnter={(e) => setcolor("red")}
      onPointerLeave={(e) => setcolor("white")}
    >
      Autotomotive Page
    </Text>
  );
};

export default Autoparts;
