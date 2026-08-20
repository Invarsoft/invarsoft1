'use client';

import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Line, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface Process3DCanvasProps {
  progress: number; // 0.0 to 1.0
  activeStep: number; // 0 to 7
}

// Background Particle Field for rich spatial depth
function BackgroundParticles() {
  const pointsRef = useRef<THREE.Points>(null);

  const particlesPosition = useMemo(() => {
    const count = 400;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.2) * 90 - 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20 - 4;
    }
    return positions;
  }, []);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <Points ref={pointsRef} positions={particlesPosition} stride={3}>
      <PointMaterial
        transparent
        color="#60A5FA"
        size={0.08}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.45}
      />
    </Points>
  );
}

// 01 - DISCOVER: Research Station (X = 0)
function DiscoverStation({ active }: { active: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.4) * 0.2;
    }
  });

  return (
    <group position={[0, 0, 0]} ref={groupRef}>
      {/* Magnifying Lens Torus */}
      <mesh position={[0, 0, 0]}>
        <torusGeometry args={[1.3, 0.12, 32, 64]} />
        <meshStandardMaterial
          color={active ? '#3B82F6' : '#64748B'}
          emissive={active ? '#2563EB' : '#0F172A'}
          emissiveIntensity={active ? 0.9 : 0.1}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Lens Handle */}
      <mesh position={[1.1, -1.1, 0]} rotation={[0, 0, -Math.PI / 4]}>
        <cylinderGeometry args={[0.09, 0.1, 1.2, 16]} />
        <meshStandardMaterial color="#CBD5E1" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Glass Lens Disc */}
      <mesh position={[0, 0, 0]}>
        <circleGeometry args={[1.2, 32]} />
        <meshStandardMaterial color="#DBEAFE" transparent opacity={0.4} roughness={0.1} />
      </mesh>

      {/* Floating Research Panels */}
      <Float speed={2.5} floatIntensity={0.6}>
        <mesh position={[-1.3, 0.9, 0.4]} rotation={[0.1, 0.2, 0]}>
          <boxGeometry args={[1.2, 0.8, 0.05]} />
          <meshStandardMaterial color="#FFFFFF" roughness={0.1} />
        </mesh>

        <mesh position={[1.3, -0.7, -0.4]} rotation={[-0.1, -0.2, 0]}>
          <boxGeometry args={[1.3, 0.85, 0.05]} />
          <meshStandardMaterial color="#EFF6FF" roughness={0.1} />
        </mesh>
      </Float>

      {/* User Data Nodes */}
      <mesh position={[0.9, 1.2, 0.3]}>
        <sphereGeometry args={[0.24, 16, 16]} />
        <meshStandardMaterial color="#3B82F6" emissive="#3B82F6" emissiveIntensity={0.9} />
      </mesh>

      <mesh position={[-1.0, -1.1, 0.3]}>
        <sphereGeometry args={[0.22, 16, 16]} />
        <meshStandardMaterial color="#60A5FA" emissive="#60A5FA" emissiveIntensity={0.9} />
      </mesh>

      <Line
        points={[
          [-1.0, -1.1, 0.3],
          [0, 0, 0],
          [0.9, 1.2, 0.3],
        ]}
        color={active ? '#60A5FA' : '#475569'}
        lineWidth={2.5}
      />
    </group>
  );
}

// 02 - STRATEGIZE: Architecture & Blueprint (X = 10)
function StrategizeStation({ active }: { active: boolean }) {
  const gridRef = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (gridRef.current) {
      gridRef.current.rotation.y = clock.getElapsedTime() * 0.25;
    }
  });

  return (
    <group position={[10, 0, 0]} ref={gridRef}>
      {/* 3D Blueprint Platform Base */}
      <mesh rotation={[-Math.PI / 3, 0, 0]} position={[0, -0.4, 0]}>
        <boxGeometry args={[3.2, 2.4, 0.08]} />
        <meshStandardMaterial color="#0F172A" emissive={active ? '#1E1B4B' : '#020617'} emissiveIntensity={0.8} metalness={0.8} />
      </mesh>

      {/* Blueprint Grid */}
      <mesh rotation={[-Math.PI / 3, 0, 0]} position={[0, -0.35, 0]}>
        <planeGeometry args={[3.0, 2.2]} />
        <meshStandardMaterial color="#6366F1" wireframe emissive={active ? '#4F46E5' : '#1E293B'} emissiveIntensity={1.0} />
      </mesh>

      {/* Strategic Piece */}
      <group position={[0, 0.4, 0]}>
        <mesh position={[0, -0.2, 0]}>
          <cylinderGeometry args={[0.4, 0.5, 0.18, 24]} />
          <meshStandardMaterial color="#CBD5E1" metalness={0.9} roughness={0.1} />
        </mesh>
        <mesh position={[0, 0.2, 0]}>
          <cylinderGeometry args={[0.25, 0.35, 0.7, 24]} />
          <meshStandardMaterial color={active ? '#6366F1' : '#475569'} emissive={active ? '#4F46E5' : '#0F172A'} emissiveIntensity={0.9} />
        </mesh>
        <mesh position={[0, 0.65, 0]}>
          <sphereGeometry args={[0.28, 24, 24]} />
          <meshStandardMaterial color="#818CF8" emissive="#6366F1" emissiveIntensity={0.9} />
        </mesh>
      </group>

      {/* Decision Node Pillars */}
      <mesh position={[-1.1, 0.2, 0.5]}>
        <boxGeometry args={[0.4, 0.6, 0.4]} />
        <meshStandardMaterial color="#4338CA" emissive="#3730A3" emissiveIntensity={0.8} />
      </mesh>

      <mesh position={[1.1, -0.1, 0.5]}>
        <cylinderGeometry args={[0.28, 0.28, 0.6, 24]} />
        <meshStandardMaterial color="#4F46E5" emissive="#4338CA" emissiveIntensity={0.8} />
      </mesh>

      <Line
        points={[
          [-1.1, 0.2, 0.5],
          [0, 0.4, 0],
          [1.1, -0.1, 0.5],
        ]}
        color={active ? '#A5B4FC' : '#475569'}
        lineWidth={2.5}
      />
    </group>
  );
}

// 03 - DESIGN: UI/UX Interface (X = 20)
function DesignStation({ active }: { active: boolean }) {
  const uiRef = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (uiRef.current) {
      uiRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.6) * 0.15;
    }
  });

  return (
    <group position={[20, 0, 0]} ref={uiRef}>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3.2, 2.0, 0.08]} />
        <meshStandardMaterial color={active ? '#FFFFFF' : '#F1F5F9'} roughness={0.2} metalness={0.2} />
      </mesh>

      <mesh position={[-1.2, 0.8, 0.05]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial color="#EF4444" />
      </mesh>
      <mesh position={[-1.0, 0.8, 0.05]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial color="#F59E0B" />
      </mesh>
      <mesh position={[-0.8, 0.8, 0.05]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial color="#10B981" />
      </mesh>

      <Float speed={2.5} floatIntensity={0.5}>
        <mesh position={[-0.7, 0.25, 0.15]}>
          <boxGeometry args={[1.2, 0.45, 0.04]} />
          <meshStandardMaterial color="#2563EB" roughness={0.1} />
        </mesh>

        <mesh position={[0.7, -0.25, 0.18]}>
          <boxGeometry args={[1.1, 0.8, 0.04]} />
          <meshStandardMaterial color="#4F46E5" roughness={0.1} />
        </mesh>
      </Float>
    </group>
  );
}

// 04 - DEVELOP: Realistic MacBook Pro & Code Screen (X = 30)
function DevelopStation({ active }: { active: boolean }) {
  const laptopRef = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (laptopRef.current) {
      laptopRef.current.rotation.y = clock.getElapsedTime() * 0.25;
    }
  });

  return (
    <group position={[30, 0, 0]} ref={laptopRef}>
      {/* Screen Frame */}
      <mesh position={[0, 0.6, 0]} rotation={[-0.08, 0, 0]}>
        <boxGeometry args={[3.0, 1.9, 0.06]} />
        <meshStandardMaterial color="#1E293B" metalness={0.85} roughness={0.2} />
      </mesh>

      {/* Screen Glass */}
      <mesh position={[0, 0.6, 0.04]} rotation={[-0.08, 0, 0]}>
        <planeGeometry args={[2.8, 1.7]} />
        <meshStandardMaterial color="#020617" emissive={active ? '#0F172A' : '#020617'} emissiveIntensity={0.9} />
      </mesh>

      {/* Syntax Code Lines */}
      <mesh position={[-0.5, 1.0, 0.05]} rotation={[-0.08, 0, 0]}>
        <boxGeometry args={[1.5, 0.07, 0.01]} />
        <meshStandardMaterial color="#8B5CF6" emissive="#8B5CF6" emissiveIntensity={active ? 1.0 : 0.2} />
      </mesh>
      <mesh position={[-0.3, 0.8, 0.05]} rotation={[-0.08, 0, 0]}>
        <boxGeometry args={[1.8, 0.07, 0.01]} />
        <meshStandardMaterial color="#38BDF8" emissive="#38BDF8" emissiveIntensity={active ? 1.0 : 0.2} />
      </mesh>
      <mesh position={[-0.6, 0.6, 0.05]} rotation={[-0.08, 0, 0]}>
        <boxGeometry args={[1.1, 0.07, 0.01]} />
        <meshStandardMaterial color="#34D399" emissive="#34D399" emissiveIntensity={active ? 1.0 : 0.2} />
      </mesh>
      <mesh position={[-0.4, 0.4, 0.05]} rotation={[-0.08, 0, 0]}>
        <boxGeometry args={[1.6, 0.07, 0.01]} />
        <meshStandardMaterial color="#F472B6" emissive="#F472B6" emissiveIntensity={active ? 1.0 : 0.2} />
      </mesh>

      {/* Aluminum Base Deck */}
      <mesh position={[0, -0.3, 0.6]} rotation={[0.18, 0, 0]}>
        <boxGeometry args={[3.1, 0.07, 1.6]} />
        <meshStandardMaterial color="#CBD5E1" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Trackpad */}
      <mesh position={[0, -0.24, 1.0]} rotation={[0.18, 0, 0]}>
        <boxGeometry args={[0.9, 0.02, 0.5]} />
        <meshStandardMaterial color="#94A3B8" roughness={0.3} />
      </mesh>
    </group>
  );
}

// 05 - TEST: Security Shield (X = 40)
function TestStation({ active }: { active: boolean }) {
  const shieldRef = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (shieldRef.current) {
      shieldRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 1.0) * 0.25;
    }
  });

  return (
    <group position={[40, 0, 0]} ref={shieldRef}>
      <mesh position={[0, 0, 0]}>
        <octahedronGeometry args={[1.4, 1]} />
        <meshStandardMaterial color={active ? '#06B6D4' : '#475569'} wireframe emissive={active ? '#0891B2' : '#0F172A'} emissiveIntensity={1.0} metalness={0.8} roughness={0.2} />
      </mesh>

      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.65, 24, 24]} />
        <meshStandardMaterial color="#10B981" emissive={active ? '#059669' : '#064E3B'} emissiveIntensity={0.9} transparent opacity={0.85} />
      </mesh>
    </group>
  );
}

// 06 - DEPLOY: Server Towers (X = 50)
function DeployStation({ active }: { active: boolean }) {
  const serverRef = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (serverRef.current) {
      serverRef.current.rotation.y = clock.getElapsedTime() * 0.35;
    }
  });

  return (
    <group position={[50, 0, 0]} ref={serverRef}>
      <mesh position={[-0.8, 0, 0]}>
        <boxGeometry args={[0.8, 2.4, 0.8]} />
        <meshStandardMaterial color="#1E293B" metalness={0.85} roughness={0.2} />
      </mesh>

      <mesh position={[0.8, 0, 0]}>
        <boxGeometry args={[0.8, 2.4, 0.8]} />
        <meshStandardMaterial color="#0F172A" metalness={0.85} roughness={0.2} />
      </mesh>

      <mesh position={[0, 1.4, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.8, 1.3, 32]} />
        <meshBasicMaterial color={active ? '#10B981' : '#475569'} wireframe transparent opacity={0.85} />
      </mesh>
    </group>
  );
}

// 07 - OPTIMIZE: Analytics Graph (X = 60)
function OptimizeStation({ active }: { active: boolean }) {
  const chartRef = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (chartRef.current) {
      chartRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  return (
    <group position={[60, 0, 0]} ref={chartRef}>
      <mesh position={[-1.0, -0.4, 0]}>
        <boxGeometry args={[0.45, 1.1, 0.45]} />
        <meshStandardMaterial color="#3B82F6" emissive="#2563EB" emissiveIntensity={0.8} />
      </mesh>

      <mesh position={[-0.3, 0.0, 0]}>
        <boxGeometry args={[0.45, 1.8, 0.45]} />
        <meshStandardMaterial color="#6366F1" emissive="#4F46E5" emissiveIntensity={0.8} />
      </mesh>

      <mesh position={[0.4, 0.6, 0]}>
        <boxGeometry args={[0.45, 2.6, 0.45]} />
        <meshStandardMaterial color="#10B981" emissive="#059669" emissiveIntensity={1.0} />
      </mesh>
    </group>
  );
}

// 08 - GROW: Reconnecting Core (X = 70)
function GrowStation({ active }: { active: boolean }) {
  const ecoRef = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (ecoRef.current) {
      ecoRef.current.rotation.y = clock.getElapsedTime() * 0.35;
    }
  });

  return (
    <group position={[70, 0, 0]} ref={ecoRef}>
      <mesh position={[0, 0, 0]}>
        <icosahedronGeometry args={[1.5, 2]} />
        <meshStandardMaterial color={active ? '#3B82F6' : '#475569'} wireframe emissive={active ? '#2563EB' : '#0F172A'} emissiveIntensity={1.0} metalness={0.8} />
      </mesh>

      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.75, 24, 24]} />
        <meshStandardMaterial color="#60A5FA" emissive="#3B82F6" emissiveIntensity={0.9} />
      </mesh>
    </group>
  );
}

// Laser Pathway Across X = -5 to 75
function DigitalPathway({ activeStep }: { activeStep: number }) {
  const points = useMemo(() => {
    const pts: [number, number, number][] = [];
    for (let x = -5; x <= 75; x += 0.5) {
      const y = Math.sin(x * 0.3) * 0.3;
      const z = Math.cos(x * 0.2) * 0.4;
      pts.push([x, y, z]);
    }
    return pts;
  }, []);

  return (
    <Line points={points} color="#38BDF8" lineWidth={3.5} transparent opacity={0.7} />
  );
}

// Camera Rig: Moves camera to target station X, positioning station on the RIGHT side of screen
function CameraRig({ progress }: { progress: number }) {
  useFrame(({ camera }) => {
    // Current target X (0 to 70)
    const targetX = progress * 70;
    const targetY = 0;
    const targetZ = 5.8;

    // Position camera slightly to the LEFT (-1.2) of the station so station appears on the RIGHT
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX - 1.2, 0.08);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.08);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.08);

    // Look slightly to the RIGHT (+0.8) where the 3D model is
    camera.lookAt(targetX + 0.8, 0, 0);
  });

  return null;
}

export const Process3DCanvas: React.FC<Process3DCanvasProps> = ({ progress, activeStep }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full bg-slate-950 flex items-center justify-center">
        <span className="font-mono text-xs text-blue-400">Loading 3D Canvas...</span>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative">
      <Canvas
        camera={{ position: [-1.2, 0, 5.8], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 15, 10]} intensity={2.0} color="#FFFFFF" />
        <directionalLight position={[-10, -10, -5]} intensity={0.8} color="#38BDF8" />
        <pointLight position={[0, 0, 5]} intensity={1.5} color="#3B82F6" />

        <BackgroundParticles />

        <DiscoverStation active={activeStep === 0} />
        <StrategizeStation active={activeStep === 1} />
        <DesignStation active={activeStep === 2} />
        <DevelopStation active={activeStep === 3} />
        <TestStation active={activeStep === 4} />
        <DeployStation active={activeStep === 5} />
        <OptimizeStation active={activeStep === 6} />
        <GrowStation active={activeStep === 7} />

        <DigitalPathway activeStep={activeStep} />
        <CameraRig progress={progress} />
      </Canvas>
    </div>
  );
};
