import React, { useState, useEffect, useRef } from 'react';
import { ReactFlow, Background, Controls, ReactFlowProvider } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import LambdaNode from './LambdaNode';
import LogsNode from './LogsNode';
import { MiniMap } from '@xyflow/react';
const nodeTypes = {
  lambda: LambdaNode,
  logs: LogsNode,
};

const initialNodes = [
  {
    id: '1',
    type: 'lambda',
    position: { x: 0, y: 0 },
    data: { label: 'Lambda' },
  },
];

const initialEdges = [];

const App = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [nodesOpen, setNodesOpen] = useState(false);

  const lambdaRef = useRef(null);

  const onNodeClick = (event, node) => {
    if (node.id === '1') {
      const lambdaPosition = nodes.find(n => n.id === '1').position;
      const lambdaNodeElement = lambdaRef.current.querySelector(`[data-id='1']`);
      const lambdaWidth = lambdaNodeElement.offsetWidth;
      const lambdaHeight = lambdaNodeElement.offsetHeight;

      if (nodesOpen) {
        setNodes(nodes.filter(n => n.id === '1'));
        setEdges([]);
      } else {
        const newNodes = [
          ...nodes,
          {
            id: '2',
            type: 'logs',
            position: { x: lambdaPosition.x - lambdaWidth / 3, y: lambdaPosition.y - lambdaHeight - 50 },
            data: { label: 'New Node 1' },
          }
        ];

        const newEdges = [
          { id: 'e1-2', source: '1', target: '2', type: 'floating' },
        ];

        setNodes(newNodes);
        setEdges(newEdges);
      }
      setNodesOpen(!nodesOpen);
    }
  };

  return (
    <ReactFlowProvider>
      <div style={{ width: '100vw', height: '100vh' }} ref={lambdaRef}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          fitView
          style={{
            background: '#f8f8f8',
          }}
          onNodeClick={onNodeClick}
        >
          <Background />
          <Controls />
          <MiniMap />
        </ReactFlow>
      </div>
    </ReactFlowProvider>
  );
};

export default App;
