import React from 'react';
import lambdaLogo from './aws-lambda.png'; // Import the image
import './LambdaNode.css';
import { Handle } from '@xyflow/react';



const LambdaNode = () => {  

  return (
    <div className="lambda-node" >
      <img src={lambdaLogo} alt="AWS Lambda" className="lambda-node-image" />
      <Handle
        type="source"
        hidden={true}
      />
    </div>
  );
};

export default LambdaNode;