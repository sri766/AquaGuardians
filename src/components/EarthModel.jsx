// src/EarthModel.jsx
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Earth = () => {
  const { scene } = useGLTF('/scene.gltf');
  return <primitive object={scene} />;
};

const EarthModel = () => {
  return (
    <div className='h-screen'>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={5} />
        <Suspense fallback={null}>
          <Earth scale={[0.3, 0.3, 0.3]} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default EarthModel;
