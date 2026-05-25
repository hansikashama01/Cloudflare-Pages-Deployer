import React from 'react';

const GlassContainer: React.FC<React.PropsWithChildren<{className?:string}>> = ({ children, className='' }) => {
  return (
    <div className={`glass ${className} rounded-xl p-4`}>{children}</div>
  );
};

export default GlassContainer;
