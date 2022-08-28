/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/model.gltf");
  return (
    <group {...props} dispose={null}>
      <group position={[-0.09, -1.8, 0]} scale={1.57}>
        <mesh
          name="Object_0"
          geometry={nodes.Object_0.geometry}
          material={materials.pasokon}
          morphTargetDictionary={nodes.Object_0.morphTargetDictionary}
          morphTargetInfluences={nodes.Object_0.morphTargetInfluences}
        />
        <mesh
          name="Object_0_1"
          geometry={nodes.Object_0_1.geometry}
          material={materials.terrarium1ame}
          morphTargetDictionary={nodes.Object_0_1.morphTargetDictionary}
          morphTargetInfluences={nodes.Object_0_1.morphTargetInfluences}
        />
        <mesh
          name="Object_0_2"
          geometry={nodes.Object_0_2.geometry}
          material={materials.terrarium1ameoutline}
          morphTargetDictionary={nodes.Object_0_2.morphTargetDictionary}
          morphTargetInfluences={nodes.Object_0_2.morphTargetInfluences}
        />
        <mesh
          name="Object_0_3"
          geometry={nodes.Object_0_3.geometry}
          material={materials.terrarium1}
          morphTargetDictionary={nodes.Object_0_3.morphTargetDictionary}
          morphTargetInfluences={nodes.Object_0_3.morphTargetInfluences}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/model.gltf");
