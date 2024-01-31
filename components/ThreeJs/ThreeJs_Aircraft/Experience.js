import { Suspense } from "react";
import Scene from "./Scene.js";
import Placeholder from "../Placeholder.js";

export default function Experience() {
  return (
    <>
      <Suspense fallback={<Placeholder type={"aircraft"} position-y={0} scale={[2, 3, 2]} />}>
        <Scene />
      </Suspense>
    </>
  );
}
