'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Line, useTexture } from '@react-three/drei';
import * as THREE from 'three';

function FloatingEmblem3D() {
  const emblemRef = useRef<THREE.Mesh>(null);
  const texture = useTexture('/invarsoft-emblem.png');

  useFrame(({ clock, mouse }) => {
    const t = clock.getElapsedTime();
    if (emblemRef.current) {
      // Gentle oscillation (-25 deg to +25 deg) so it NEVER flips backwards or shows text in reverse!
      emblemRef.current.rotation.y = Math.sin(t * 0.8) * 0.45 + mouse.x * 0.3;
      emblemRef.current.rotation.x = Math.sin(t * 0.5) * 0.15 + mouse.y * 0.2;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={0.2} floatIntensity={0.8}>
      <group>
        {/* Transparent Floating 'iS' Emblem */}
        <mesh ref={emblemRef} position={[0, 0, 0]}>
          <planeGeometry args={[2.0, 2.0]} />
          <meshBasicMaterial
            map={texture}
            transparent
            alphaTest={0.05}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Backing Glow Ring */}
        <mesh position={[0, 0, -0.05]}>
          <ringGeometry args={[1.0, 1.2, 32]} />
          <meshBasicMaterial color="#3B82F6" transparent opacity={0.3} wireframe />
        </mesh>
      </group>
    </Float>
  );
}

function TechWireframeSphere() {
  const sphereRef = useRef<THREE.Mesh>(null);
  const outerNodesRef = useRef<THREE.Group>(null);

  useFrame(({ clock, mouse }) => {
    const t = clock.getElapsedTime();
    if (sphereRef.current) {
      sphereRef.current.rotation.y = t * 0.2;
      sphereRef.current.rotation.x = t * 0.1;
    }
    if (outerNodesRef.current) {
      outerNodesRef.current.rotation.y = -t * 0.15 + mouse.x * 0.2;
    }
  });

  const nodePositions = [
    [-1.8, 1.2, 0.4],
    [1.8, 0.9, 0.5],
    [0, 2.0, -0.8],
    [0, -1.6, 0.8],
    [-1.5, -0.9, -0.6],
    [1.6, -1.1, -0.3],
  ];

  return (
    <group>
      {/* 3D Geodesic Wireframe Network Sphere surrounding the floating emblem */}
      <mesh ref={sphereRef}>
        <icosahedronGeometry args={[2.0, 2]} />
        <meshBasicMaterial color="#3B82F6" wireframe transparent opacity={0.28} />
      </mesh>

      {/* Floating Data Nodes */}
      <group ref={outerNodesRef}>
        {nodePositions.map((pos, idx) => (
          <Float key={idx} speed={1.5 + idx * 0.2} floatIntensity={1}>
            <mesh position={pos as [number, number, number]}>
              <sphereGeometry args={[0.12, 16, 16]} />
              <meshStandardMaterial
                color={idx % 2 === 0 ? '#3B82F6' : '#4F46E5'}
                emissive={idx % 2 === 0 ? '#2563EB' : '#4F46E5'}
                emissiveIntensity={0.9}
              />
            </mesh>
          </Float>
        ))}

        {/* Connection Mesh Lines */}
        {nodePositions.map((pos, idx) => (
          <Line
            key={`line-${idx}`}
            points={[
              [0, 0, 0],
              pos as [number, number, number],
            ]}
            color="#93C5FD"
            lineWidth={1}
            transparent
            opacity={0.35}
          />
        ))}
      </group>
    </group>
  );
}

export const Hero3DVisual: React.FC = () => {
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setHasWebGL(false);
    } catch (e) {
      setHasWebGL(false);
    }
  }, []);

  if (!hasWebGL) {
    return (
      <div className="w-full h-full flex items-center justify-center p-6">
        <div className="w-72 h-72 rounded-full bg-gradient-to-tr from-blue-100 via-indigo-100 to-slate-50 border border-blue-200 flex items-center justify-center animate-pulse">
          <img src="/invarsoft-emblem.png" alt="INVARSOFT" className="w-36 h-36 object-contain" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[420px] lg:h-[500px] flex items-center justify-center">
      <Canvas
        camera={{ position: [0, 0, 4.6], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.8} color="#FFFFFF" />
        <pointLight position={[-10, -10, -5]} intensity={1.0} color="#3B82F6" />
        
        {/* Floating Transparent 'iS' Emblem in Center */}
        <FloatingEmblem3D />

        {/* Outer 3D Network Wireframe Sphere */}
        <TechWireframeSphere />
      </Canvas>

      {/* Floating Status Badge Overlay */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md border border-blue-200/80 rounded-full px-4 py-1.5 shadow-lg flex items-center gap-2 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
        <span className="text-[11px] font-mono font-semibold text-slate-800">
          INVARSOFT Core Intelligence Network • Active
        </span>
      </div>
    </div>
  );
};
