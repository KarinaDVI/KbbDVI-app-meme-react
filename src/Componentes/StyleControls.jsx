import React from 'react'

export default function StyleControls(setColor,
                                      h5Ref,
                                      setTextSize,
                                      textSize,
                                      setFontStyle,
                                      fontStyles,
                                      color) {

    const handleColorChange = (event) => {
        setColor(event.target.value);
        if (h5Ref.current) {
          h5Ref.current.style.color = `${color}`;
        }
      };
    const handleTextSizeChange = (event) => {
          setTextSize(event.target.value);
        if (h5Ref.current) {
          h5Ref.current.style.transformOrigin=`center`
          h5Ref.current.style.fontSize=`${textSize}px`;
     
        } 
      };
     const handleTextStyleChange = (event) => {
        setFontStyle(event.target.value);
        if (h5Ref.current/* h5Ref.current.classList.contains("movible") */) {
          h5Ref.current.style.fontFamily = `${event.target.value}`;
        }
      };
  return (
    <div>
       <div className="d-block m-4">
                <label htmlFor="textSizeSelect" className="d-flex">
                  Estilo de fuente
                </label>
                <select
                  onChange={handleTextStyleChange}
                  className="form-select form-select w-100 h-25"
                  aria-label="Default select example"
                  id="textSizeSelect"
                >
                  {fontStyles.map((font) => (
                    <option key={font} value={font}>
                      {font}
                    </option>
                  ))}
                </select>
              </div>
              <div className="d-block m-4">
                <label for="color-picker" class="d-flex form-label">
                  Color de fuente
                  </label>
                  <input
                    className="form-control w-100"
                    type="color"
                    id="color-picker"
                    value={color}
                    onChange={handleColorChange}
                  />
              </div>
              <div className="d-block m-4">
                <label for="text-size" class="d-flex form-label">
                  Tamaño de fuente
                </label>
                <input
                  className="form-control w-100 h-25"
                  type="number"
                  id="text-size"
                  step="1"
                  value={textSize}
                  onChange={handleTextSizeChange}
                />
              </div>
    </div>
  )
}
