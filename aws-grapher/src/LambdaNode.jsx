import React from 'react';
import { Handle, Position } from '@xyflow/react';
import lambdaLogo from './aws-lambda.png'; // Import the image

const nodeSize = 80; // Define a single size for width and height

const nodeStyle = {
  width: `${nodeSize}px`,
  height: `${nodeSize}px`,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid #FF9900', // AWS Lambda color
  borderRadius: '100%', // Make it circular
  overflow: 'hidden', // Ensure the image doesn't spill out
  backgroundColor: 'white', // Add a background color
  position: 'relative', // For absolute positioning of the label
};

const imageStyle = {
  width: '100%',
  height: '100%'
};

const handleStyle = {
  background: '#FF9900', // AWS Lambda color
  width: '8px',
  height: '8px',
  borderRadius: '50%',
};

const LambdaNode = ({ data: { label } }) => {
  return (
    <div style={nodeStyle}>
      <img src={lambdaLogo} alt="AWS Lambda" style={imageStyle} />
    </div>
  );
};

export default LambdaNode;