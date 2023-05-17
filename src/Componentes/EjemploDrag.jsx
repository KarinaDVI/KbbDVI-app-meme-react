import React, { Component, useState } from 'react';

function EjemploDrag() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleDragEnd = (event) => {
    setX(event.clientX);
    setY(event.clientY);
  };

  return (
    <div
      draggable
      onDragEnd={handleDragEnd}
      style={{
        position: "absolute",
        left: x,
        top: y
      }}
    >
      
      <div className="grid-key" style={{backgroundColor: '#cccccc'}}>
          <div className="u"><button id="toUp">▲</button></div>
          <div className="l"><button id="toLeft">◄</button></div>
          <div className="round"></div>
          <div className="r"><button id="toRight">►</button></div>
          <div className="b"><button id="toDown">▼</button></div>
          <div className="ul"><button id="toUpLeft">▲</button></div>
          <div className="ur"><button id="toUpRight">▲</button></div>
          <div className="br"><button id="toDownRight">▲</button></div>
          <div className="bl"><button id="toDownLeft">▲</button></div>
    </div>
    
    </div>

  );
}

export default EjemploDrag;