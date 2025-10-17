"use client";
import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Preload, PointMaterial, Points } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import type { Points as ThreePoints } from "three";

const Stars: React.FC = (props) => {
  const ref = useRef<ThreePoints>(null!);

  const sphere = random.inSphere(new Float32Array(2000 * 3), { radius: 1.2 });
  if (sphere.some((v: number) => isNaN(v))) {
    console.error("NaN values detected in sphere points!");
  }

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas: React.FC = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[0]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
