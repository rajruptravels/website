import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Float, Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';

function Globe() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[2, 64, 64]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#0ea5e9"
          metalness={0.1}
          roughness={0.2}
          transparent
          opacity={0.8}
        />
      </Sphere>
      
      {/* Floating destination markers */}
      <Float speed={2} rotationIntensity={0.3}>
        <Sphere args={[0.1, 8, 8]} position={[1.5, 1, 1]}>
          <meshStandardMaterial color="#f97316" emissive="#f97316" emissiveIntensity={0.3} />
        </Sphere>
      </Float>
      
      <Float speed={1.8} rotationIntensity={0.4}>
        <Sphere args={[0.1, 8, 8]} position={[-1.2, 0.8, -1.5]}>
          <meshStandardMaterial color="#f97316" emissive="#f97316" emissiveIntensity={0.3} />
        </Sphere>
      </Float>
      
      <Float speed={2.2} rotationIntensity={0.2}>
        <Sphere args={[0.1, 8, 8]} position={[0.8, -1.5, 0.5]}>
          <meshStandardMaterial color="#f97316" emissive="#f97316" emissiveIntensity={0.3} />
        </Sphere>
      </Float>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#0ea5e9" />
      <Globe />
    </>
  );
}

export const FloatingGlobe: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};