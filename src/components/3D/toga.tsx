"use client";
import React, { useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center, Environment } from "@react-three/drei";
import * as THREE from "three";

function TogaModel() {
  const group = useRef<THREE.Group>(null);

  // Cargar el modelo
  const gltf = useGLTF("/3D/toga.glb");
  const { scene } = gltf;

  useEffect(() => {
    console.log("Modelo cargado:", gltf);
    console.log("Scene:", scene);

    // Calcular el bounding box para ver el tamaño del modelo
    const box = new THREE.Box3().setFromObject(scene);
    const size = box.getSize(new THREE.Vector3());
    console.log("Tamaño del modelo:", size);

    // Asegurar que todos los materiales sean visibles
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (mesh.material) {
          if (Array.isArray(mesh.material)) {
            mesh.material.forEach((mat) => {
              mat.side = THREE.DoubleSide;
            });
          } else {
            mesh.material.side = THREE.DoubleSide;
          }
        }
      }
    });
  }, [gltf, scene]);

  // Rotación automática
  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group ref={group}>
      <Center>
        <primitive object={scene} scale={2} />
      </Center>
    </group>
  );
}

function Loader() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" wireframe />
    </mesh>
  );
}

export default function Toga() {
  return (
    <div className="w-full h-full ">
      <Canvas
        camera={{ position: [0, 2, 5], fov: 50 }}
        gl={{ antialias: true }}
        shadows
      >
        {/* Iluminación completa */}
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} castShadow />
        <directionalLight position={[-5, 3, -3]} intensity={0.8} />
        <pointLight position={[0, 5, 0]} intensity={0.5} />

        {/* Entorno para reflejos */}
        <Environment preset="city" />

        {/* Modelo con Suspense */}
        <Suspense fallback={<Loader />}>
          <TogaModel />
        </Suspense>

        {/* Controles */}
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          minDistance={1}
          maxDistance={20}
          target={[0, 0, 0]}
        />
      </Canvas>
    </div>
  );
}

// Precargar el modelo
useGLTF.preload("/3D/toga.glb");
