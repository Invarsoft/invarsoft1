'use client';

import React, { useRef, useEffect, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

// ----------------------------------------------------
// 1. THREE.JS 3D FLOATING TECH CORE
// ----------------------------------------------------
function TechnologicalCore({ mousePos }: { mousePos: { x: number; y: number } }) {
  const outerMeshRef = useRef<THREE.Mesh>(null!);
  const innerMeshRef = useRef<THREE.Mesh>(null!);
  const ringRef1 = useRef<THREE.Group>(null!);
  const ringRef2 = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    // Gentle constant rotation
    if (outerMeshRef.current) {
      outerMeshRef.current.rotation.x += delta * 0.2;
      outerMeshRef.current.rotation.y += delta * 0.3;
    }
    if (innerMeshRef.current) {
      innerMeshRef.current.rotation.x -= delta * 0.4;
      innerMeshRef.current.rotation.y += delta * 0.5;
    }
    if (ringRef1.current) {
      ringRef1.current.rotation.z += delta * 0.5;
      ringRef1.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.8) * 0.3;
    }
    if (ringRef2.current) {
      ringRef2.current.rotation.z -= delta * 0.6;
      ringRef2.current.rotation.y = Math.cos(state.clock.getElapsedTime() * 0.8) * 0.3;
    }

    // Parallax mouse interaction
    const targetX = (mousePos.x * 0.5);
    const targetY = (mousePos.y * 0.5);

    state.camera.position.x += (targetX - state.camera.position.x) * 0.05;
    state.camera.position.y += (-targetY - state.camera.position.y) * 0.05;
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <Float speed={2.5} rotationIntensity={0.5} floatIntensity={0.8}>
      <group scale={1.3}>
        {/* Outer Wireframe Icosahedron Core */}
        <mesh ref={outerMeshRef}>
          <icosahedronGeometry args={[1.8, 1]} />
          <meshStandardMaterial
            color="#06152F"
            roughness={0.1}
            metalness={0.9}
            wireframe
            emissive="#075BFF"
            emissiveIntensity={0.8}
          />
        </mesh>

        {/* Inner Glowing Crystal Core */}
        <mesh ref={innerMeshRef}>
          <octahedronGeometry args={[1.1, 0]} />
          <MeshDistortMaterial
            color="#1769FF"
            emissive="#075BFF"
            emissiveIntensity={1.5}
            distort={0.25}
            speed={2}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>

        {/* Floating Concentric Orbit Rings */}
        <group ref={ringRef1}>
          <mesh>
            <torusGeometry args={[2.5, 0.02, 16, 100]} />
            <meshStandardMaterial color="#075BFF" emissive="#1769FF" emissiveIntensity={2} />
          </mesh>
        </group>

        <group ref={ringRef2}>
          <mesh rotation={[Math.PI / 3, 0, 0]}>
            <torusGeometry args={[3.0, 0.015, 16, 100]} />
            <meshStandardMaterial color="#85B2FF" emissive="#075BFF" emissiveIntensity={1.5} />
          </mesh>
        </group>
      </group>
    </Float>
  );
}

// ----------------------------------------------------
// 2. FLOATING PARTICLES IN 3D SPACE
// ----------------------------------------------------
function ParticleCloud({ count = 120 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null!);

  const [positions] = useState(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return pos;
  });

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.05;
      pointsRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#1769FF"
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// ----------------------------------------------------
// 3. HTML5 CANVAS 2D FALLBACK (for WebGL unsupported/disabled)
// ----------------------------------------------------
const Canvas2DFallback: React.FC<{ mousePos: { x: number; y: number } }> = ({ mousePos }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let angle = 0;

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || 400;
      canvas.height = canvas.parentElement?.clientHeight || 400;
    };
    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      angle += 0.015;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2 + mousePos.x * 20;
      const cy = canvas.height / 2 + mousePos.y * 20;
      const radius = Math.min(canvas.width, canvas.height) * 0.28;

      // Glow backdrop
      const grad = ctx.createRadialGradient(cx, cy, 10, cx, cy, radius * 1.5);
      grad.addColorStop(0, 'rgba(7, 91, 255, 0.4)');
      grad.addColorStop(1, 'rgba(2, 11, 28, 0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.5, 0, Math.PI * 2);
      ctx.fill();

      // Outer rotating geometric shape
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(angle);

      ctx.strokeStyle = '#075BFF';
      ctx.lineWidth = 2;
      ctx.shadowColor = '#1769FF';
      ctx.shadowBlur = 15;

      const sides = 6;
      ctx.beginPath();
      for (let i = 0; i < sides; i++) {
        const a = (i * Math.PI * 2) / sides;
        const x = Math.cos(a) * radius;
        const y = Math.sin(a) * radius;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.stroke();

      // Inner rotating shape
      ctx.rotate(-angle * 2);
      ctx.strokeStyle = '#85B2FF';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      for (let i = 0; i < 3; i++) {
        const a = (i * Math.PI * 2) / 3;
        const x = Math.cos(a) * (radius * 0.6);
        const y = Math.sin(a) * (radius * 0.6);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.stroke();

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePos]);

  return <canvas ref={canvasRef} className="w-full h-full block" />;
};

// ----------------------------------------------------
// 4. MAIN EXPORTED COMPONENT WITH AUTO WEBGL FALLBACK
// ----------------------------------------------------
export const Core3DCanvas: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hasWebGL, setHasWebGL] = useState<boolean | null>(null);

  useEffect(() => {
    // Check WebGL availability safely
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setHasWebGL(Boolean(gl));
    } catch {
      setHasWebGL(false);
    }

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (hasWebGL === false) {
    return <Canvas2DFallback mousePos={mousePos} />;
  }

  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas gl={{ antialias: true, alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 6.5]} fov={50} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#1769FF" />
        <pointLight position={[-5, -5, -5]} intensity={1} color="#075BFF" />
        <spotLight position={[0, 5, 0]} intensity={2} color="#FFFFFF" />

        <TechnologicalCore mousePos={mousePos} />
        <ParticleCloud count={140} />
      </Canvas>
    </div>
  );
};
