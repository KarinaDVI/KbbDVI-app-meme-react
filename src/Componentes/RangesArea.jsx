import React , { useState, useEffect, useRef } from 'react'

export default function RangesArea(
    {h5Ref,h5ContRef,
    posx,posy,maxW,maxH,
    rotz,sizePhotow,setMaxWidth,setMaxHeight,setRotz,
    setSizePhotow,setPosx,setPosy}) {

  /*   const [localPosx, setLocalPosx] = useState(posx);
    const [localPosy, setLocalPosy] = useState(posy);
    const [localRotz, setLocalRotz] = useState(rotz);
    const [localSizePhotow, setLocalSizePhotow] = useState(sizePhotow);
  */

/* const handlePosXChange = (e) => {
    setPosx(e.target.value);
    if (h5Ref.current) {
      setMaxWidth(
        100 - (h5Ref.current.offsetWidth / h5ContRef.current.offsetWidth) * 100
      );
      h5Ref.current.style.left = `${posx}%`;
      h5Ref.current.style.transformOrigin = `center`;
    }
  }; */

  const handlePosXChange = (e) => {
   
    setPosx(e.target.value);
    if (h5Ref.current) {
      setMaxWidth(
        100 - (h5Ref.current.offsetWidth / h5ContRef.current.offsetWidth) * 100
      );
      h5Ref.current.style.left = `${posx}%`;
      h5Ref.current.style.transformOrigin = `center`;
    }
  };

/*   useEffect(() => {
    handlePosx(localPosx);
  }, [localPosx, handlePosx]);
   */

 /*  const handlePosYChange = (event) => {
    setPosy(event.target.value);
    if (h5Ref.current) {
      setMaxHeight(
        100 -
          (h5Ref.current.offsetHeight / h5ContRef.current.offsetHeight) * 100
      );
      h5Ref.current.style.top = `${posy}%`;
      h5Ref.current.style.transformOrigin = `center`;
    }
  }; */
  const handlePosYChange = (event) => {
    setPosy(event.target.value);
    if (h5Ref.current) {
      setMaxHeight(
        100 -
          (h5Ref.current.offsetHeight / h5ContRef.current.offsetHeight) * 100
      );
      h5Ref.current.style.top = `${posy}%`;
      h5Ref.current.style.transformOrigin = `center`;
    }
  };
/* 
  useEffect(() => {
    handlePosy(localPosy);
  }, [localPosy, handlePosy]); */

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
    document.querySelector(".exportar").style.maxWidth = `${sizePhotow}%`;
  };



  return (
    
    <div className="col m-auto w-100">
    <label for="posx" class="form-label">
      Posicion x
    </label>
    <input
      type="range"
      className="form-range"
      id="posx"
      min={0}
      max={maxW}
      value={posx}
      onChange={handlePosXChange}
    />
    <label for="posy" class="form-label">
      Posicion y
    </label>
    <input
      type="range"
      className="form-range"
      id="posy"
      min={0}
      max={maxH}
      value={posy}
      onChange={handlePosYChange}
    />
    <label for="rotz" class="form-label">
      Rotacion z
    </label>
    <input
      type="range"
      className="form-range"
      id="rotz"
      min={-180}
      max={180}
      value={rotz}
      onChange={handleRotzChange}
    />
    <label for="photo-size-w" class="form-label">
      Tamaño de imagen
    </label>
    <input
      type="range"
      className="form-range"
      id="photo-size-w"
      min={20}
      max={102}
      value={sizePhotow}
      onChange={handleSizePhotowChange}
    />
    
  </div>
  )
}
