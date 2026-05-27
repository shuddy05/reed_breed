"use client"

import React, { useRef } from "react";
import { useGLTF, Html } from "@react-three/drei";
import * as THREE from "three";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const IPhoneModel = ({ children, index }: { children?: React.ReactNode, index: number }) => {
  // Exact path to the copied asset
  const { nodes, materials } = useGLTF("/demo/assets/iphone.glb") as any;
  const group = useRef<THREE.Group>(null);

  // --- COMBINING GSAP & THREE.JS ---
  useGSAP(() => {
    if (!group.current) return;

    // Reset rotation for each step
    gsap.set(group.current.rotation, { y: -Math.PI / 2, x: 0 });
    gsap.set(group.current.position, { x: 5, opacity: 0 });

    // Cinematic Entrance for the 3D model
    gsap.to(group.current.position, {
      x: 0,
      duration: 1.5,
      ease: "power4.out"
    });

    gsap.to(group.current.rotation, {
      y: Math.PI * 2 - Math.PI / 2, // Full spin
      duration: 2,
      ease: "expo.out"
    });
  }, [index]);

  return (
    <group ref={group} dispose={null} scale={40}>
      {/* 
        Mapped from the auto-generated code of the original repo 
        xXDHkMplTIDAXLN is the Screen mesh node
      */}
      <mesh
        geometry={nodes.xXDHkMplTIDAXLN.geometry}
        material={materials.pIJKfZsazmcpEiU}
        scale={0.01}
      >
        <Html
          transform
          occlude
          distanceFactor={1.2}
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
          style={{
            width: "375px",
            height: "812px",
            background: "#080808",
            overflow: "hidden",
            borderRadius: "40px",
            pointerEvents: "auto"
          }}
        >
          <div id="iphone-screen-content" className="w-full h-full bg-void overflow-y-auto no-scrollbar pointer-events-auto relative">
            {children}
          </div>
        </Html>
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
