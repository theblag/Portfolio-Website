import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

export default function MarsModel(props) {
  const ref = useRef();
  const { scene } = useGLTF('/models/jupiter.glb');

  // Rotate the model every frame
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.1; // Spin speed
    }
  });

  return <primitive ref={ref} object={scene} {...props} />;
}
