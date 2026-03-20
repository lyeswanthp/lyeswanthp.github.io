import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Node {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
}

export default function FloatingNodes() {
  const [nodes, setNodes] = useState<Node[]>([]);

  useEffect(() => {
    const generateNodes = () => {
      const newNodes: Node[] = [];
      for (let i = 0; i < 15; i++) {
        newNodes.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: 4 + Math.random() * 8,
          duration: 3 + Math.random() * 4,
        });
      }
      setNodes(newNodes);
    };

    generateNodes();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connection lines */}
        {nodes.map((node, i) => {
          if (i === 0) return null;
          const prevNode = nodes[i - 1];
          return (
            <motion.line
              key={`line-${node.id}`}
              x1={`${prevNode.x}%`}
              y1={`${prevNode.y}%`}
              x2={`${node.x}%`}
              y2={`${node.y}%`}
              stroke="url(#nodeGradient)"
              strokeWidth="1"
              opacity="0.2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: i * 0.1 }}
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((node) => (
          <motion.g key={node.id}>
            <motion.circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r={node.size}
              fill="url(#nodeGradient)"
              filter="url(#glow)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: node.duration,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r={node.size * 0.5}
              fill="#38bdf8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: node.id * 0.1 }}
            />
          </motion.g>
        ))}
      </svg>
    </div>
  );
}
