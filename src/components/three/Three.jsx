import { Loader, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Model from "./Model";

export const Three = () => {
  return (
    <>
      <Canvas
        style={{ width: "100%", margin: "auto", height: "13rem", zIndex: "0" }}
      >
        <OrbitControls
          enableZoom={true}
          autoRotate={true}
          rotateSpeed={"0.5"}
          maxDistance={"7"}
          minDistance={"0.7"}
        />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
      <Loader
        containerStyles={{
          backgroundColor:
            localStorage.theme === "light" ? "#f0e7db" : "#202023",
        }}
        dataStyles={{
          color: localStorage.theme === "light" ? "black" : "white",
        }}
        innerStyles={{
          backgroundColor: "grey",
        }}
        barStyles={{
          backgroundColor:
            localStorage.theme === "dark" ? "#f0e7db" : "#202023",
        }}
      />
    </>
  );
};
