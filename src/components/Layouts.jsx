import React from 'react';

const Layouts = ({ children }) => {
  return (
    <div className="absolute inset-0 min-h-screen">
      <div className="absolute inset-0 bg-backgoundmain" />
      {children}
    </div>
  );
};

export default Layouts;
