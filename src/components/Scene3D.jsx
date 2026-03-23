import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return isMobile;
}

function Particles({ count }) {
  const mesh = useRef();
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 18;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#6c63ff"
        transparent
        opacity={0.5}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function WireframeShape({ position, color, speed = 0.2 }) {
  const meshRef = useRef();
  const geo = useMemo(() => new THREE.IcosahedronGeometry(1, 1), []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 1.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <lineSegments ref={meshRef} position={position}>
      <edgesGeometry args={[geo]} />
      <lineBasicMaterial color={color} transparent opacity={0.25} />
    </lineSegments>
  );
}

function WireframeTorus({ position, color, speed = 0.15 }) {
  const meshRef = useRef();
  const geo = useMemo(() => new THREE.TorusGeometry(0.7, 0.2, 8, 24), []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed;
      meshRef.current.rotation.z = state.clock.elapsedTime * speed * 0.8;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.4 + 1) * 0.25;
    }
  });

  return (
    <lineSegments ref={meshRef} position={position}>
      <edgesGeometry args={[geo]} />
      <lineBasicMaterial color={color} transparent opacity={0.2} />
    </lineSegments>
  );
}

export default function Scene3D() {
  const isMobile = useIsMobile();

  // Don't render 3D canvas on mobile at all for performance
  if (isMobile) {
    return null;
  }

  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
      dpr={[1, 1.5]}
      gl={{
        alpha: true,
        antialias: false,
        powerPreference: 'high-performance',
        stencil: false,
        depth: false,
      }}
      performance={{ min: 0.5 }}
    >
      <Particles count={250} />
      <WireframeShape position={[3, 0.5, -2]} color="#6c63ff" speed={0.15} />
      <WireframeTorus position={[-3.5, -1, -1]} color="#00d4ff" speed={0.12} />
      <WireframeShape position={[-2, 2, -3]} color="#ff6b9d" speed={0.1} />
    </Canvas>
  );
}
