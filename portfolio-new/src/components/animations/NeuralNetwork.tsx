import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface Node {
  position: THREE.Vector3;
  connections: number[];
}

export default function NeuralNetwork() {
  const groupRef = useRef<THREE.Group>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  // Generate neural network nodes
  const { nodes, edges } = useMemo(() => {
    const layers = [8, 12, 12, 8]; // 4 layers
    const nodeList: Node[] = [];
    const edgeList: THREE.Vector3[] = [];

    let nodeIndex = 0;
    const layerNodes: number[][] = [];

    // Create nodes
    layers.forEach((count, layerIdx) => {
      const layerY = (layerIdx - layers.length / 2) * 2;
      const currentLayer: number[] = [];

      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2;
        const radius = 2 + Math.sin(layerIdx) * 0.5;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;

        nodeList.push({
          position: new THREE.Vector3(x, layerY, z),
          connections: [],
        });
        currentLayer.push(nodeIndex);
        nodeIndex++;
      }
      layerNodes.push(currentLayer);
    });

    // Create connections between layers
    for (let layer = 0; layer < layerNodes.length - 1; layer++) {
      const currentLayer = layerNodes[layer];
      const nextLayer = layerNodes[layer + 1];

      currentLayer.forEach((nodeIdx) => {
        // Connect to 3-5 nodes in next layer
        const connectionCount = 3 + Math.floor(Math.random() * 3);
        const shuffled = [...nextLayer].sort(() => Math.random() - 0.5);

        for (let i = 0; i < Math.min(connectionCount, shuffled.length); i++) {
          const targetIdx = shuffled[i];
          nodeList[nodeIdx].connections.push(targetIdx);

          edgeList.push(nodeList[nodeIdx].position);
          edgeList.push(nodeList[targetIdx].position);
        }
      });
    }

    return { nodes: nodeList, edges: edgeList };
  }, []);

  // Animation
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
    }

    // Animate line opacity
    if (linesRef.current) {
      const material = linesRef.current.material as THREE.LineBasicMaterial;
      material.opacity = 0.3 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Nodes */}
      {nodes.map((node, idx) => (
        <mesh key={idx} position={node.position}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#0ea5e9"
            emissiveIntensity={0.5}
            toneMapped={false}
          />
        </mesh>
      ))}

      {/* Connections */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={edges.length}
            array={new Float32Array(edges.flatMap((v) => [v.x, v.y, v.z]))}
            itemSize={3}
            args={[new Float32Array(edges.flatMap((v) => [v.x, v.y, v.z])), 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#8b5cf6"
          transparent
          opacity={0.3}
          linewidth={1}
        />
      </lineSegments>

      {/* Ambient light */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#38bdf8" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
    </group>
  );
}
