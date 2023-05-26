import React , { useState, useEffect, useRef, useContext } from 'react'

export default function RangesArea(
    {h5Ref,h5ContRef,
    posx,posy,maxW,maxH,
    rotz,setMaxWidth,
    setMaxHeight,setRotz
    ,setPosx,setPosy,items,
    setItems}) {

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
  const handleDelete = () => {
    if (h5Ref.current) {
      const idToDelete = h5Ref.current.id;
      const filteredItems = items.filter((item) => item.key !== idToDelete);
      setItems(filteredItems);
      h5Ref.current = null;
    }
  };

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

  const handleRotzChange = (event) => {
    setRotz(event.target.value);
    if (h5Ref.current) {
      h5Ref.current.style.transform = `rotate(${rotz}deg)`;
      h5Ref.current.style.transformOrigin = `center`;
    }
  };

  return (
    <div class="accordion" id="accordion2">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            Posicion del texto
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse show"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordion2"
        >
          <div class="accordion-body">
          <div className="mt-4 m-auto">
            <div className="d-flex">
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
            </div>
            <div className="d-flex">
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
            </div>
            <div className="d-flex">
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
            </div>
            
            <button
              className="btn btn-danger mt-2"
              id="delete"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
