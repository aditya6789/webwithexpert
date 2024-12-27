import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

const Globe = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  // Custom shader for the globe effect
  const customShader = {
    vertexShader: `
      varying vec2 vUv;
      varying vec3 vNormal;
      void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float time;
      varying vec2 vUv;
      varying vec3 vNormal;

      void main() {
        float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
        vec3 glow = vec3(0.6, 0.2, 0.8) * intensity; // Purple glow
        vec3 atmosphere = vec3(0.1, 0.2, 0.3) * pow(intensity, 2.0);
        
        // Add some noise/texture to the globe
        vec2 grid = abs(fract(vUv * 20.0 - 0.5) - 0.5);
        float square = smoothstep(0.1, 0.05, max(grid.x, grid.y));
        
        vec3 color = mix(vec3(0.1, 0.1, 0.2), glow + atmosphere, square);
        gl_FragColor = vec4(color, 1.0);
      }
    `,
    uniforms: {
      time: { value: 0 }
    }
  };

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001;
    }
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 64, 64]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={customShader.vertexShader}
        fragmentShader={customShader.fragmentShader}
        uniforms={customShader.uniforms}
        transparent
      />
    </mesh>
  );
};

export const GlobeContainer = () => {
  return (
    <div className="h-[500px] w-full">
      <Canvas camera={{ position: [0, 0, 2.5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Globe />
      </Canvas>
    </div>
  );
}; 