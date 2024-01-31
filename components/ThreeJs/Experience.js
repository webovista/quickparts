import { Suspense } from "react";
import Placeholder from "./Placeholder.js";
import Scene from "./Scene.js";

export default function Experience({type}) {
  return (
    <>
      <Suspense fallback={<Placeholder type="home" position-y={0} scale={[2, 3, 2]} />}>
        <Scene type={type}/>
      </Suspense>
    </>
  );
}
