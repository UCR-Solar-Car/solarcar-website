import React from "react";
import { Canvas } from "@react-three/fiber";
import { Model } from "./CarModel";
import { OrbitControls } from "@react-three/drei";

const RotatingModel = () => {
  return (
    <div className="text-gray-600">
      the model will be relaced by the actual model of the car
      <Canvas
        shadows
        style={{ width: `800px`, height: "300px" }}
        camera={{ position: [0, 0, 700], fov: 10 }}
      >
        <ambientLight intensity={0.7} />
        <spotLight
          intensity={0.5}
          angle={0.1}
          penumbra={1}
          position={[10, 15, 10]}
          castShadow
        />
        <Model />
        <OrbitControls
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          enableZoom={false}
          enablePan={true}
          autoRotate={true}
        />
      </Canvas>
    </div>
  );
};

export default RotatingModel;
