import React from 'react';

const MagicBlock = ({ children, size = 400 }) => {
  return (
    <div
      className="flex items-center justify-center rounded-full absolute -bottom-28 right-28"
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      {children}
    </div>
  );
};

export default MagicBlock;