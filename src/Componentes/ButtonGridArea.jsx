import React from 'react'

export default function ButtonGridArea(
    {h5Ref,h5ContRef,
     posx,posy,maxW,maxH,
     rotz,sizePhotow,setMaxWidth,setMaxHeight,setRotz,
     setSizePhotow,setPosx,setPosy}
) {

    const handlePosXChange = (e) => {
   
        setPosx(posx+=5);
        if (h5Ref.current) {
          setMaxWidth(
            100 - (h5Ref.current.offsetWidth / h5ContRef.current.offsetWidth) * 100
          );
          h5Ref.current.style.left = `${posx}%`;
          h5Ref.current.style.transformOrigin = `center`;
        }
      };
    
     const handlePosYChange = (e) => {
        setPosy(posy+=5);
        if (h5Ref.current) {
          setMaxHeight(
            100 -
              (h5Ref.current.offsetHeight / h5ContRef.current.offsetHeight) * 100
          );
          h5Ref.current.style.top = `${posy}%`;
          h5Ref.current.style.transformOrigin = `center`;
        }
      };
      const handleRotzChange = (event) => {
        setRotz(event.target.value);
        if (h5Ref.current) {
          h5Ref.current.style.transform = `rotate(${rotz}deg)`;
          h5Ref.current.style.transformOrigin = `center`;
        }
      };
    
      const handleSizePhotowChange = (event) => {
        setSizePhotow(event.target.value);
        document.querySelector(".exportar").style.width = `${sizePhotow}%`;
        document.querySelector(".exportar").style.maxWidth = "100%";
      };

  return (
    <div className="grid-key" style={{backgroundColor: '#cccccc', position:'sticky'}}>
          <div className="u"><button id="toUp" onClick={handlePosYChange}>▲</button></div>
          <div className="l"><button id="toLeft" onClick={handlePosXChange}>◄</button></div>
          <div className="round"></div>
          <div className="r"><button id="toRight" onClick={handlePosXChange}>►</button></div>
          <div className="b"><button id="toDown" onClick={handlePosYChange}>▼</button></div>
          <div className="ul"><button id="toUpLeft">▲</button></div>
          <div className="ur"><button id="toUpRight">▲</button></div>
          <div className="br"><button id="toDownRight">▲</button></div>
          <div className="bl"><button id="toDownLeft">▲</button></div>
    </div>
  )
}
