import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Box, Sphere, Torus } from '@react-three/drei';
import * as THREE from 'three';

function TravelElements() {
  return (
    <>
      {/* Airplane-like shapes */}
      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.8}>
        <Box args={[0.5, 0.1, 0.3]} position={[-3, 2, 0]}>
          <meshStandardMaterial color="#0ea5e9" metalness={0.8} roughness={0.2} />
        </Box>
      </Float>
      
      {/* Travel rings */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.6}>
        <Torus args={[0.4, 0.1, 8, 24]} position={[3, -1, 1]}>
          <meshStandardMaterial color="#f97316" transparent opacity={0.7} />
        </Torus>
      </Float>
      
      <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.4}>
        <Torus args={[0.3, 0.05, 8, 24]} position={[-2, -2, -1]}>
          <meshStandardMaterial color="#0ea5e9" transparent opacity={0.8} />
        </Torus>
      </Float>
      
      {/* Glowing orbs */}
      <Float speed={2} rotationIntensity={0.1} floatIntensity={1}>
        <Sphere args={[0.2, 16, 16]} position={[2, 1.5, -1]}>
          <meshStandardMaterial 
            color="#f97316" 
            emissive="#f97316" 
            emissiveIntensity={0.4}
            transparent
            opacity={0.8}
          />
        </Sphere>
      </Float>
      
      <Float speed={1.7} rotationIntensity={0.15} floatIntensity={0.7}>
        <Sphere args={[0.15, 16, 16]} position={[-1.5, 1, 2]}>
          <meshStandardMaterial 
            color="#0ea5e9" 
            emissive="#0ea5e9" 
            emissiveIntensity={0.3}
            transparent
            opacity={0.9}
          />
        </Sphere>
      </Float>
    </>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, 5]} intensity={0.5} />
      <pointLight position={[-5, -5, -5]} intensity={0.3} color="#0ea5e9" />
      <TravelElements />
    </>
  );
}

export const FloatingElements: React.FC = () => {
  return (
    <div className="w-full h-full absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};