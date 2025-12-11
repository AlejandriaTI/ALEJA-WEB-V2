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

function PicktureBookModel() {
  // ✅ Inicialización tipada correctamente
  const group = useRef<THREE.Group | null>(null);
  const mixer = useRef<THREE.AnimationMixer | null>(null);

  const gltf = useGLTF("/3D/picture_book.glb") as unknown as GLTFResult;
  const { scene, animations } = gltf;

  useEffect(() => {
    // ✅ Animaciones
    if (animations && animations.length > 0) {
      mixer.current = new THREE.AnimationMixer(scene);
      const action = mixer.current.clipAction(animations[0]);
      action.play();
    }
  }, [scene, animations]);

  useFrame((_, delta) => {
    if (mixer.current) mixer.current.update(delta);
  });

  return (
    <primitive ref={group} object={scene} scale={1.5} position={[0, -1, 0]} />
  );
}

export default function ReadingBook() {
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
      <ambientLight intensity={0.7} color="#ffffff" />
      <directionalLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" />
      <hemisphereLight intensity={0.4} color="#ffffff" groundColor="#ffffff" />

      <PicktureBookModel />

      <OrbitControls enableZoom={true} />
    </Canvas>
  );
}
