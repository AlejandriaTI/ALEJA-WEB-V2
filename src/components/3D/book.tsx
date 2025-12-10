"use client";
import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: Record<string, THREE.Mesh>;
  materials: Record<string, THREE.Material>;
};

function BookModel() {
  const group = useRef<THREE.Group | null>(null);
  const mixer = useRef<THREE.AnimationMixer | null>(null);

  const gltf = useGLTF("/3D/books_with_magnifier.glb") as unknown as GLTFResult;
  const { scene, animations } = gltf;

  useEffect(() => {
    if (animations && animations.length > 0) {
      mixer.current = new THREE.AnimationMixer(scene);
      const action = mixer.current.clipAction(animations[0]);
      action.play();
    }
  }, [scene, animations]);

  useFrame((_, delta) => {
    if (mixer.current) mixer.current.update(delta);

    // Rotación oscilante suave
    if (group.current) {
      group.current.rotation.y = Math.sin(Date.now() * 0.0004) * 0.6;
    }
  });

  return (
    <primitive
      ref={group}
      object={scene}
      scale={15}
      position={[0, -3, 0]}
      rotation={[0.3, -0.5, 0]}
    />
  );
}

export default function Book() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full h-full">
        <Canvas
          camera={{
            position: [0, 1, 10],
            fov: 50,
            near: 0.1,
            far: 1000,
          }}
          gl={{ antialias: true }}
          style={{ display: "block", width: "100%", height: "100%" }}
        >
          {/* Iluminación optimizada */}
          <ambientLight intensity={1} />
          <directionalLight position={[5, 5, 5]} intensity={1.4} castShadow />
          <directionalLight position={[-5, 3, -5]} intensity={0.7} />
          <hemisphereLight
            intensity={0.6}
            color="#ffffff"
            groundColor="#b0b0b0"
          />
          <pointLight position={[0, 5, 0]} intensity={0.5} />

          <BookModel />

          <OrbitControls
            enableZoom={true}
            enablePan={false}
            minDistance={6}
            maxDistance={15}
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI / 2}
            autoRotate={false}
          />
        </Canvas>
      </div>
    </div>
  );
}
