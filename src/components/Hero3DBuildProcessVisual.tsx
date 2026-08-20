'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Line, useTexture } from '@react-three/drei';
import * as THREE from 'three';

// 3D Animated Application Assembly Engine
function ThreeDApplicationAssembly({ currentStage }: { currentStage: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const emblemTexture = useTexture('/invarsoft-emblem.png');

  useFrame(({ clock, mouse }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) {
      // Smooth continuous 3D rotation + mouse tilt
      groupRef.current.rotation.y = t * 0.3 + mouse.x * 0.4;
      groupRef.current.rotation.x = Math.sin(t * 0.2) * 0.15 + mouse.y * 0.2;
    }
    if (coreRef.current) {
      coreRef.current.rotation.z = t * 0.4;
    }
  });

  return (
    <group ref={groupRef}>
      {/* STAGE 1: Blueprint Wireframe Box */}
      {currentStage === 0 && (
        <Float speed={2} floatIntensity={0.5}>
          <mesh>
            <boxGeometry args={[2.2, 2.2, 2.2]} />
            <meshBasicMaterial color="#3B82F6" wireframe transparent opacity={0.4} />
          </mesh>
          <mesh>
            <octahedronGeometry args={[1.2, 0]} />
            <meshBasicMaterial color="#60A5FA" wireframe transparent opacity={0.6} />
          </mesh>
        </Float>
      )}

      {/* STAGE 2: Layered UI Planes Assembling */}
      {currentStage === 1 && (
        <group>
          {[-0.6, 0, 0.6].map((offset, idx) => (
            <Float key={idx} speed={2 + idx} floatIntensity={0.4}>
              <mesh position={[0, offset, 0]} rotation={[-Math.PI / 6, 0, 0]}>
                <planeGeometry args={[2.4, 1.4]} />
                <meshPhysicalMaterial
                  color={idx === 1 ? '#3B82F6' : '#4F46E5'}
                  transparent
                  opacity={0.55}
                  roughness={0.1}
                  metalness={0.8}
                  side={THREE.DoubleSide}
                />
              </mesh>
            </Float>
          ))}
        </group>
      )}

      {/* STAGE 3: Microservice Code Network Nodes */}
      {currentStage === 2 && (
        <group>
          {[
            [-1.5, 1.0, 0],
            [1.5, 0.8, 0.5],
            [0, -1.4, -0.5],
            [-1.2, -0.8, 0.6],
            [1.3, -1.0, -0.3],
          ].map((pos, idx) => (
            <Float key={idx} speed={2 + idx * 0.2} floatIntensity={0.8}>
              <mesh position={pos as [number, number, number]}>
                <sphereGeometry args={[0.18, 16, 16]} />
                <meshStandardMaterial color="#3B82F6" emissive="#2563EB" emissiveIntensity={0.9} />
              </mesh>
              <Line
                points={[[0, 0, 0], pos as [number, number, number]]}
                color="#60A5FA"
                lineWidth={1.5}
                transparent
                opacity={0.5}
              />
            </Float>
          ))}
        </group>
      )}

      {/* STAGE 4: AI Core 'iS' Emblem Lock-In */}
      {currentStage === 3 && (
        <Float speed={3} floatIntensity={0.6}>
          <group>
            {/* Transparent Floating iS Emblem */}
            <mesh position={[0, 0, 0]}>
              <planeGeometry args={[2.2, 2.2]} />
              <meshBasicMaterial map={emblemTexture} transparent alphaTest={0.05} side={THREE.DoubleSide} />
            </mesh>
            {/* Pulsing AI Ring */}
            <mesh ref={coreRef}>
              <torusGeometry args={[1.5, 0.04, 16, 100]} />
              <meshBasicMaterial color="#06B6D4" wireframe />
            </mesh>
          </group>
        </Float>
      )}

      {/* STAGE 5: Deployed Production 3D Hologram Application */}
      {currentStage === 4 && (
        <Float speed={2.5} floatIntensity={0.5}>
          <group>
            <mesh>
              <sphereGeometry args={[1.8, 24, 24]} />
              <meshBasicMaterial color="#10B981" wireframe transparent opacity={0.35} />
            </mesh>
            <mesh position={[0, 0, 0]}>
              <planeGeometry args={[1.8, 1.8]} />
              <meshBasicMaterial map={emblemTexture} transparent alphaTest={0.05} side={THREE.DoubleSide} />
            </mesh>
          </group>
        </Float>
      )}
    </group>
  );
}

export const Hero3DBuildProcessVisual: React.FC = () => {
  const [currentStage, setCurrentStage] = useState<number>(0);
  const [hasWebGL, setHasWebGL] = useState(true);

  const stageTitles = [
    { step: '01/05', title: 'System Blueprint & Vector Index', desc: 'Ingesting requirements & 3D architecture' },
    { step: '02/05', title: 'UI/UX Component Assembly', desc: 'Building responsive 3D design tokens' },
    { step: '03/05', title: 'Full-Stack Microservices', desc: 'Connecting APIs & high-throughput pipelines' },
    { step: '04/05', title: 'AI Engine Integration', desc: 'Locking in SOTA RAG & autonomous models' },
    { step: '05/05', title: 'Production Edge System Live', desc: 'Application deployed with 99.99% SLA' },
  ];

  // Automatic real-time 3D animation loop transitions every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStage((prev) => (prev + 1) % stageTitles.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [stageTitles.length]);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }
  }, []);

  if (!hasWebGL) {
    return (
      <div className="w-full h-full flex items-center justify-center p-6">
        <div className="w-72 h-72 rounded-full bg-gradient-to-tr from-blue-100 to-indigo-50 flex items-center justify-center animate-pulse">
          <img src="/invarsoft-emblem.png" alt="INVARSOFT" className="w-36 h-36 object-contain" />
        </div>
      </div>
    );
  }

  const activeMeta = stageTitles[currentStage];

  return (
    <div className="relative w-full h-[420px] lg:h-[500px] flex items-center justify-center rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden">
      
      {/* 3D WebGL Canvas Engine */}
      <Canvas
        camera={{ position: [0, 0, 4.8], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.8} color="#FFFFFF" />
        <pointLight position={[-10, -10, -5]} intensity={1.0} color="#3B82F6" />

        {/* 3D Real-time Stage Assembly Component */}
        <ThreeDApplicationAssembly currentStage={currentStage} />
      </Canvas>

      {/* Real-Time Automated 3D Build Progress Overlay Bar */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2 bg-slate-900/90 backdrop-blur-md text-white px-3 py-1.5 rounded-full border border-slate-800 shadow-md">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
          <span className="text-[10px] font-mono font-bold text-blue-400">
            PHASE {activeMeta.step}
          </span>
          <span className="text-xs font-semibold text-slate-200">
            {activeMeta.title}
          </span>
        </div>
      </div>

      {/* 5-Step Progress Indicators Bar */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md border border-slate-200 rounded-full px-4 py-2 shadow-lg flex items-center gap-3">
        {stageTitles.map((stg, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentStage(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentStage === idx
                ? 'bg-blue-600 w-8 shadow-sm'
                : 'bg-slate-300 hover:bg-slate-400'
            }`}
            title={stg.title}
          />
        ))}
      </div>

    </div>
  );
};
