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
 
  useEffect(() => {
    if (h5Ref.current) {
      h5Ref.current.style.width= `fit-content`;
    }
  }, []); 
  //
  return (
 
    <div className="container-fluid cont-basis">
      <div className="row bg-warning shadow-sm justify-content-between">
        <div className="col">
          <StyleControls setColor={setColor}
            h5Ref={h5Ref}
            setTextSize={setTextSize}
            textSize={textSize}
            setFontStyle={setFontStyle}
            fontStyles={fontStyles}
            color={color}
      />
      </div>
        <div className="col-12 col-sm-4 col-md-6">
          
      <div className="row bg-warning">
          <ButtonArea
            h5Ref={h5Ref}
            users={users}
            items={items}
            setItems={setItems}
            setPosx={setPosx}
            setPosy={setPosy}
            setRotz={setRotz}
            setColor={setColor}
            setTextSize={setTextSize}
            setImgmeme={setImgmeme}
            selectRef={selectRef}
            sizePhotow={sizePhotow}
            setSizePhotow={setSizePhotow}
            />
            <h3 className="mt-2 mb-2">Escribí tu frase</h3>
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
    </div>
        </div>
         <div className="col">
          <RangesArea
            maxW={maxW}
            posx={posx}
            maxH={maxH}
            posy={posy}
            rotz={rotz}
            setPosx={setPosx}
            setPosy={setPosy}
            setRotz={setRotz}
            h5Ref={h5Ref}
            h5ContRef={h5ContRef}
            setMaxWidth={setMaxWidth}
            setMaxHeight={setMaxHeight}
            items={items}
            setItems={setItems}
            /> 
        </div>
      </div>
      <div className="row justify-content-center margin-bottom"> 
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
