import React from 'react';
import { ReactFlow, Background, Controls, ReactFlowProvider } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import LambdaNode from './LambdaNode';

const nodeTypes = {
  lambda: LambdaNode,
};

const initialNodes = [
  {
    id: '1',
    type: 'lambda',
    position: { x: 0, y: 0 },
    data: { label: 'Hello!' },
  },
];

const App = () => {
  return (
    <ReactFlowProvider>
      <div style={{ width: '100vw', height: '100vh' }}>
        <ReactFlow
          nodes={initialNodes}
          nodeTypes={nodeTypes}
          fitView
          style={{
            background: '#f8f8f8',
          }}
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </ReactFlowProvider>
  );
};

export default App;