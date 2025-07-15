import React, { useRef,useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

export default function ProjectText(props) {
  const { scene } = useGLTF('/models/projects-text.glb');
  const textRef = useRef();
    const [floatOffset] = useState(Math.random() * Math.PI * 2);

    useFrame((state) => {
        if (textRef.current) {
            const time = state.clock.getElapsedTime();
            
            // Gentle floating motion
            textRef.current.position.y = props.position[1] + Math.sin(time * 0.6 + floatOffset) * 0.1;
            
            // Subtle rotation
            // textRef.current.rotation.y = Math.sin(time * 0.3) * 0.06;
        }
    });
  

  return <primitive ref={textRef} object={scene} {...props} />;
}
