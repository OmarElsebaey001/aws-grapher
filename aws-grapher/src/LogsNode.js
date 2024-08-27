import React from 'react';
import { Handle, Position } from '@xyflow/react';
import './LogsNode.css';

const LogsNode = ({ data }) => {
  const handleClick = () => {
    window.open(data.url, '_blank'); // Opens the URL in a new tab
  };

  return (
    <div className="logs-node" onClick={handleClick}>
      <div className="logs-node-content">
        <span className="logs-icon">📋</span>
      </div>
      <Handle type="target" position={Position.Bottom} />
    </div>
  );
};

export default LogsNode;
