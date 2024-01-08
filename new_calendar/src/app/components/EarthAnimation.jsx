"use client";
import React, { useRef } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader, AdditiveBlending } from 'three';

const EarthAnimation = () => {
  const outerEarthRef = useRef();
  const innerEarthRef = useRef();

  const earthTexture = useLoader(TextureLoader, '/img/2k_earth_specular_map-３_.png');

  useFrame(() => {
    if (outerEarthRef.current && innerEarthRef.current) {
      outerEarthRef.current.rotation.y += 0.005;
      innerEarthRef.current.rotation.y += 0.005;
    }
  });

  return (
    <>
      <mesh ref={outerEarthRef} >
        <sphereGeometry args={[3.4, 64, 64]} />
        <meshBasicMaterial
          map={earthTexture}
          transparent
          opacity={1}
          blending={AdditiveBlending}
        />
      </mesh>
      <mesh ref={innerEarthRef} >
        <sphereGeometry args={[3.5, 64, 64]} />
        <meshBasicMaterial
          map={earthTexture}
          transparent
          opacity={0.95}
          blending={AdditiveBlending}
        />
      </mesh>
      <directionalLight color={0xffffff} intensity={1} position={[5, 3, 5]} />
    </>
  );
};

const EarthAnimations = () => {
  return (
    <div className='h-full'>
    <Canvas camera={{ position: [0, 0, 6] }} style={{ width: '900px', height: '800px', textAlign: 'center', marginLeft: '300px' }}>
      <EarthAnimation />
    </Canvas>
    </div>
  );
};

export default EarthAnimations;
