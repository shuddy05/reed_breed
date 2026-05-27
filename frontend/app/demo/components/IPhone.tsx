"use client"

import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const IPhoneModel = ({ index, screenImg }: { index: number, screenImg: string }) => {
  // Exact path to the copied asset
  const { nodes, materials } = useGLTF("/demo/assets/iphone.glb") as any;
  const group = useRef<THREE.Group>(null);

  // Load the screen texture
  const texture = useTexture(screenImg);

  // --- COMBINING GSAP & THREE.JS ---
  useGSAP(() => {
    if (!group.current) return;

    // Reset rotation (starts facing sideways) and position (starts off-screen right)
    gsap.set(group.current.rotation, { y: -Math.PI / 1.5, x: 0 });
    gsap.set(group.current.position, { x: 5, y: 0.8 });

    // Cinematic Entrance for the 3D model
    gsap.to(group.current.position, {
      x: 0,
      y: 0, // Static levitation height 
      duration: 1.5,
      ease: "power4.out"
    });

    gsap.to(group.current.rotation, {
      y: 3, // Face exactly front
      duration: 2,
      ease: "expo.out"
    });

    // Elegant, slow levitation bounce
    gsap.to(group.current.position, {
      y: -0.2, // Float up slightly 
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, [index]);

  return (
    <group ref={group} dispose={null} scale={35}>
      {/* 
        Mapped from the auto-generated code of the original repo 
        xXDHkMplTIDAXLN is the Screen mesh node
      */}
      <mesh
        geometry={nodes.xXDHkMplTIDAXLN.geometry}
        material={materials.pIJKfZsazmcpEiU}
        scale={0.01}
      >
        <meshStandardMaterial roughness={0.1} map={texture} />
      </mesh>

      {/* Render the structural components of the iPhone */}
      {Object.entries(nodes).map(([name, node]: [string, any]) => {
        if (node instanceof THREE.Mesh && name !== "xXDHkMplTIDAXLN") {
          return (
            <mesh
              key={name}
              geometry={node.geometry}
              material={materials[node.material?.name] || materials.defaultMaterial}
              scale={0.01}
            />
          );
        }
        return null;
      })}
    </group>
  );
};

useGLTF.preload("/demo/assets/iphone.glb");
