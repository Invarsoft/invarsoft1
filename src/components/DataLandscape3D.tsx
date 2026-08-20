'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function DataLandscapeMesh() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = clock.getElapsedTime() * 0.05;
      meshRef.current.rotation.x = -Math.PI / 3.5 + Math.sin(clock.getElapsedTime() * 0.2) * 0.05;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, -2, -2]}>
      <planeGeometry args={[20, 20, 40, 40]} />
      <meshStandardMaterial
        color="#1E3A8A"
        wireframe
        emissive="#2563EB"
        emissiveIntensity={0.6}
      />
    </mesh>
  );
}

export const DataLandscape3D: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.0} />
        <directionalLight position={[5, 10, 5]} intensity={1.5} color="#3B82F6" />
        <DataLandscapeMesh />
      </Canvas>
    </div>
  );
};
