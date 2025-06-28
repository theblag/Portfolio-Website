import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function PlanetModel(props) {
  const group = useRef();
  const { scene, animations } = useGLTF('/models/earth2.glb');
  const { actions } = useAnimations(animations, group);

  // Manual rotation
  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.1; // adjust speed as needed
    }
  });

  useEffect(() => {
    // If you later add animations, this will still work
    if (actions && animations.length > 0) {
      actions[animations[0].name]?.play();
    }
  }, [actions, animations]);

  return <primitive ref={group} object={scene} {...props} />;
}
