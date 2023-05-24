import React, { useState, useEffect, useRef, useContext } from "react";
import ImgArea from "./ImgArea";
import ButtonArea from "./ButtonArea";
import RangesArea from "./RangesArea";
import TextArea from "./TextArea";
import StyleControls from "./StyleControls";

///Solid version
export const Contexto = React.createContext();
const DragImgmemes = () => {
  const [imgMeme, setImgmeme] = useState("https://i.imgflip.com/1h7in3.jpg");
  //con fetch
  const [users, setUsers] = useState([]);
  const [text, setTextoVar] = useState();

  const [posx, setPosx] = useState(0);
  const [posy, setPosy] = useState(0);
  const [rotz, setRotz] = useState(0);
  const [minW] = useState(0);
  const [minH] = useState(0);
  const [maxW, setMaxWidth] = useState(720 / 2);
  const [maxH, setMaxHeight] = useState(720 / 2);
  //de selectors
  const [sizePhotow, setSizePhotow] = useState(100);
  const [color, setColor] = useState("#ff0000");
  const [textSize, setTextSize] = useState(20);
  const [fontStyle, setFontStyle] = useState("Impact");
  const fontStyles = [
    "Impact",
    "Comic Sans Ms",
    "Arial",
    "Helvetica",
    "Montserrat",
  ];

  //
  //Refs
  const h5Ref = useRef(null);
  const imgRef = useRef(null);
  const h5ContRef = useRef(null);
  const selectRef = useRef(null);

  const [idc, setIdc] = useState(0);
  const [items, setItems] = useState([]);

  //guarda el estado de cada item:

  const allowDrop = (ev) => {
    ev.preventDefault();
  };

  const drag = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);
    console.log(ev.target.id);
    console.log(ev.target);
    console.log(ev.target.key);
    //agregado
  };
  /* putText */
  /*  */
  //Al soltar despues de arrastrar
  const drop = (ev) => {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    const draggableElement = document.getElementById(data);
    const dropzone = ev.target;

    // Comprueba que el elemento exista antes de agregarlo al contenedor
    if (draggableElement && dropzone !== draggableElement) {
      try {
        dropzone.appendChild(draggableElement);
      } catch (error) {
        console.log("Error");
      }

      // Toma posición del mouse dentro del contenedor
      const rect = dropzone.getBoundingClientRect();
      console.log(dropzone);
      let x = ev.clientX - draggableElement.offsetWidth - rect.left;
      let y = ev.clientY - draggableElement.offsetHeight - rect.top;

      // Obtiene las dimensiones del contenedor
      const containerWidth = rect.width;
      const containerHeight = rect.height;

      // Calcula la posición en porcentaje (%) dentro del contenedor
      const posX = (x / containerWidth) * 100;
      const posY = (y / containerHeight) * 100;

      // Asigna la posición al texto utilizando los valores en porcentaje (%)

      draggableElement.style.left = `${posX > maxW ? maxW : (posX < minW ? minW : posX)}%`;
      draggableElement.style.top = `${posY > maxH ? maxH : (posY < minH ? minH : posY)}%`;

      //Setea las posiciones de left y top
      setPosx(posX);
      setPosy(posY);
    }
  };
 
  useEffect(() => {
    const handleClick = (e) => {
      const obj = e.target;
  
      if (obj.tagName === "H5") {
        if (h5Ref.current && h5Ref.current !== obj) {
          h5Ref.current.classList.remove("movible");
        }
        h5Ref.current = obj;
        h5Ref.current.classList.toggle("movible");
        setTextSize(parseInt(h5Ref.current.style.fontSize));
        setPosx(parseInt(h5Ref.current.style.left));
        setPosy(parseInt(h5Ref.current.style.top));
      } else if (obj.tagName === "DIV") {
        if (h5Ref.current) {
          h5Ref.current.classList.remove("movible");
          h5Ref.current = null;
        }
      }
    };
  
    document.addEventListener("click", handleClick);
  
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  //de fetch
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((data) => data.json())
      .then((json) => setUsers(json.data.memes));
  }, []);

  /* handleChangers */
      <RangesArea
         maxW={maxW}
        posx={posx}
        maxH={maxH}
        posy={posy}
        rotz={rotz}
        sizePhotow={sizePhotow}
        h5Ref={h5Ref} 
        />
  /*  */
 
  useEffect(() => {
    if (h5Ref.current) {
      h5Ref.current.style.width= `fit-content`;
    }
  }, []); 
  //
  return (
 
    <div className="container-fluid cont-basis">
      <div className="row bg-warning shadow-sm justify-content-center">
      <div className="col-12 col-sm-4 col-md-4 mt-2 mb-2">
        <div class="accordion" id="accordion1">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Estilo
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordion1">
            <div class="accordion-body w-md-50">
               <StyleControls setColor={setColor}
                              h5Ref={h5Ref}
                              setTextSize={setTextSize}
                              textSize={textSize}
                              setFontStyle={setFontStyle}
                              fontStyles={fontStyles}
                              color={color}
                />
            </div>
          </div>
        </div>            
        </div>
        </div>

        <div className="col-12 col-sm-6 col-md-6">
          <h2 className="mt-2 mb-2">Escribí tu frase</h2>
          <TextArea 
            setIdc={setIdc}
            idc={idc}
            drag={drag}
            text={text}
            setItems={setItems}
            items={items}
            setTextoVar={setTextoVar}
            h5Ref={h5Ref}
          />

      {/* TextArea */}
      {/*  */}
      <div className="row bg-warning">
              <ButtonArea
                  h5Ref={h5Ref}
                  items={items}
                  setItems={setItems}
                  setPosx={setPosx}
                  setPosy={setPosy}
                  setRotz={setRotz}
                  setColor={setColor}
                  setTextSize={setTextSize}
                  setImgmeme={setImgmeme}
                  selectRef={selectRef}
                  />
    </div>

        </div>
         <div className="col-12 col-sm-2 col-md-2">

                  {/* Acordeon 2 */}
        <div class="accordion" id="accordion2">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
              Posicion 
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordion2">
            <div class="accordion-body">
            <RangesArea
                  maxW={maxW}
                  posx={posx}
                  maxH={maxH}
                  posy={posy}
                  rotz={rotz}
                  sizePhotow={sizePhotow}
                  setSizePhotow={setSizePhotow}
                  setPosx={setPosx}
                  setPosy={setPosy}
                  setRotz={setRotz}
                  h5Ref={h5Ref}
                  h5ContRef={h5ContRef}
                  setMaxWidth={setMaxWidth}
                  setMaxHeight={setMaxHeight}
                  /> 
              </div>
            </div>
          </div>            
          </div>
        </div>
      </div>
      <div className="row justify-content-center"> 
        <div className="col-12">
                <ImgArea 
                imgMeme={imgMeme} 
                imgRef={imgRef}
                h5ContRef={h5ContRef}
                drop={drop}
                allowDrop={allowDrop}
                sizePhotow={sizePhotow}
                items={items}

                users={users}
                setImgmeme={setImgmeme}
                selectRef={selectRef}
                />
            </div>
        </div>
    </div>
  );
};
export default DragImgmemes;
