import { Suspense, useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { TextureLoader } from 'three';
import * as THREE from 'three';
import { motion } from 'framer-motion';

function DobbyModel() {
  const meshRef = useRef<THREE.Group>(null);
  
  // Load the OBJ model
  const obj = useLoader(OBJLoader, '/models/dobby/DobbyWTexture.obj');
  
  // Load textures
  const albedoMap = useLoader(TextureLoader, '/models/dobby/defaultMat_001_albedo.jpeg');
  const normalMap = useLoader(TextureLoader, '/models/dobby/defaultMat_001_normal.png');
  const roughnessMap = useLoader(TextureLoader, '/models/dobby/defaultMat_001_roughness.jpeg');
  const metallicMap = useLoader(TextureLoader, '/models/dobby/defaultMat_001_metallic.jpeg');
  
  // Apply textures to the model
  obj.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material = new THREE.MeshStandardMaterial({
        map: albedoMap,
        normalMap: normalMap,
        roughnessMap: roughnessMap,
        metalnessMap: metallicMap,
        metalness: 0.2,
        roughness: 0.8,
      });
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  
  // Animate the model
  useFrame((state) => {
    if (meshRef.current) {
      // Gentle floating animation
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      // Slow rotation
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });
  
  return (
    <group ref={meshRef} position={[0, 0, 0]}>
      <primitive object={obj} scale={0.015} />
    </group>
  );
}

function Loader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center">
        <motion.div
          className="w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full mx-auto mb-4"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <p className="text-amber-400 font-serif text-sm">Summoning Dobby...</p>
      </div>
    </div>
  );
}

export const Dobby3DViewer = () => {
  return (
    <div className="relative w-full h-full">
      {/* Magical aura background */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* 3D Canvas */}
      <Suspense fallback={<Loader />}>
        <Canvas
          camera={{ position: [0, 1, 5], fov: 45 }}
          className="relative z-10"
          gl={{ antialias: true, alpha: true }}
          style={{ background: 'transparent' }}
        >
          {/* Lighting */}
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
          <pointLight position={[-5, 3, -5]} intensity={0.6} color="#4ade80" />
          <pointLight position={[5, 3, 5]} intensity={0.5} color="#fbbf24" />
          <spotLight position={[0, 5, 0]} intensity={0.6} angle={0.4} penumbra={1} castShadow />
          
          {/* Environment for reflections */}
          <Environment preset="sunset" />
          
          {/* Dobby Model */}
          <DobbyModel />
          
          {/* Controls - allow user to rotate */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 1.8}
            autoRotate
            autoRotateSpeed={1.5}
            target={[0, 0, 0]}
          />
        </Canvas>
      </Suspense>
      
      {/* Magical sparkles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute w-2 h-2 bg-blue-400 rounded-full pointer-events-none"
          style={{
            top: '50%',
            left: '50%',
          }}
          animate={{
            x: [0, Math.cos(i * 45 * Math.PI / 180) * 150, 0],
            y: [0, Math.sin(i * 45 * Math.PI / 180) * 150, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Text bubble */}
      <motion.div
        className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-slate-800/90 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-400/30 shadow-lg pointer-events-none z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: [0, 1, 1, 0], y: [20, 0, 0, -10] }}
        transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
      >
        <p className="text-xs text-blue-300 font-serif italic whitespace-nowrap">
          "Dobby is free to code!"
        </p>
      </motion.div>
    </div>
  );
};
