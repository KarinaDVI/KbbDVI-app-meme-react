import React, { useState, useEffect, useRef } from "react";
import html2canvas from "html2canvas";
import ImgArea from "./ImgArea";
import ButtonArea from "./ButtonArea";
import RangesArea from "./RangesArea";
import TextArea from "./TextArea";
import ButtonGridArea from "./ButtonGridArea";

///Solid version
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
  const [textSize, setTextSize] = useState(16);
  const [fontStyle, setFontStyle] = useState("Impact");
  const fontStyles = [
    "Impact",
    "Comic Sans Ms",
    "Arial",
    "Helvetica",
    "Montserrat",
  ];

  //
  //Probando
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

      posX > maxW
        ? (draggableElement.style.left = `${maxW}%`)
        : (draggableElement.style.left = `${posX}%`);
      posX < minW
        ? (draggableElement.style.left = `${minW}%`)
        : (draggableElement.style.left = `${posX}%`);

      posY > maxH
        ? (draggableElement.style.top = `${maxH}%`)
        : (draggableElement.style.top = `${posY}%`);
      posY < minH
        ? (draggableElement.style.top = `${minH}%`)
        : (draggableElement.style.top = `${posY}%`);

      //Setea las posiciones de left y top
      setPosx(posX);
      setPosy(posY);
    }
  };
 

  useEffect(() => {
    const handleClick = (e) => {
      let obj = e.target;
      if (obj.tagName === "H5") {
        h5Ref.current == null
          ? (h5Ref.current = obj)
          : h5Ref.current.classList.remove("movible");
        obj.classList.toggle("movible");
        obj.classList.contains("movible")
          ? (h5Ref.current = obj)
          : (h5Ref.current = null);
      }
      if (obj.tagName === "DIV") {
        h5Ref.current != null
          ? h5Ref.current.classList.remove("movible")
          : (h5Ref.current = null);
      }
    };

    document.addEventListener("click", handleClick);
    // Limpieza de evento
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  /* const Texto */

  const seleccionarImg = (e) => {
    setImgmeme(e.target.value);
    const selectedUrl = e.target.value;
    const selectedUser = users.find((user) => user.url === selectedUrl);
    console.log(selectedUser.width);
    
  };

  const descarga = (e) => {
    html2canvas(document.querySelector(".exportar"), {
      allowTaint: true,
      useCORS: true,
    }).then(function (canvas) {
      let img = canvas.toDataURL("image/jpeg");
      let link = document.createElement("a");
      link.download = "memepropio.jpeg";
      link.href = img;
      link.click();
    });
  };

  //de fetch
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((data) => data.json())
      .then((json) => setUsers(json.data.memes));
  }, []);
  //console.log(users);

  //De selectors
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
 
  
  const handleColorChange = (event) => {
    setColor(event.target.value);
    if (h5Ref.current) {
      h5Ref.current.style.color = `${color}`;
    }
  };

  /////Esta es la que cambia los valores; revisar
  const handleTextSizeChange = (event) => {
      setTextSize(event.target.value);
    if (h5Ref.current) {
      h5Ref.current.style.transformOrigin=`center`
      h5Ref.current.style.fontSize=`${textSize}px`;
 
    } 
  };

  const setResize = (event) => {
    //setTextSize(event.target.value);
    if (h5Ref.current) {
      h5Ref.current.style.transformOrigin = `center`;
      h5Ref.current.style.fontSize = `${(parseFloat(
          h5Ref.current.style.height))}px`;
        h5Ref.current.style.width= `fit-content`;
      setTextSize(`${parseFloat(h5Ref.current.style.height)}`);
    }
  };

  useEffect(() => {
    if (h5Ref.current) {
      h5Ref.current.style.width= `fit-content`;
    }
  }, []); 

  const handleTextStyleChange = (event) => {
    setFontStyle(event.target.value);
    if (h5Ref.current.classList.contains("movible")) {
      h5Ref.current.style.fontFamily = `${event.target.value}`;
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

  const handleResetClick = () => {
    setPosx(0);
    setPosy(0);
    setRotz(0);
    setColor("#ff0000");
    setTextSize(1.125);
  };
  //
  return (
    <div className="cont-basis m-2">
      <h1 className="mt-5 mb-3 text-light ">Editá tu propio meme</h1>
      <h2 className="mt-2 mb-2">Escribí tu frase</h2>

      <TextArea 
        setIdc={setIdc}
        idc={idc}
        drag={drag}
        setResize={setResize}
        text={text}
        setItems={setItems}
        items={items}
        setTextoVar={setTextoVar}
      />

      {/* TextArea */}
      {/*  */}
      <div className="row">
      <div className="d-block  m-auto">
        <h2 className="mt-2 mb-3">Elegí la imagen de tu meme</h2>
        <div className="d-flex justify-content-center  mb-2">
          <select
            onChange={seleccionarImg}
            className="form-select form-select-lg w-50 h-25"
            aria-label="Default select example"
            defaultValue="Elegi tu meme"
            ref={selectRef}
          >
            {users.map((user) => (
              <option key={user.id} value={user.url}>
                {user.name}
              </option>
            ))}
          </select>
          <button onClick={descarga} type="button" className="btn btn-primary">
            Bajar Meme
          </button>
        </div>
      </div>
        
      </div>
      <div className="row">
      <div className="col-2 sticky-left pb-4 pt-4 bg-warning">
          <div className="d-block w-100">
            <label htmlFor="textSizeSelect" className="d-flex">
              Estilo de fuente
            </label>
            <select
              onChange={handleTextStyleChange}
              className="form-select form-select-lg w-100 h-25"
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
          <div className="d-block w-100">
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
          <div className="d-block w-100">
            <label for="text-size" class="d-flex form-label">
              Tamaño de fuente
            </label>
            <input
              className="form-control w-100 h-25"
              type="number"
              id="text-size"
              step="0.5"
              value={textSize}
              onChange={handleTextSizeChange}
            />
          </div>
               {/* Ranges */}
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
                  {/*  */}
          <ButtonArea
            handleResetClick={handleResetClick}
            handleDelete={handleDelete}
            />
        </div>
        <div className="col-10">
                <ImgArea 
                imgMeme={imgMeme} 
                imgRef={imgRef}
                h5ContRef={h5ContRef}
                drop={drop}
                allowDrop={allowDrop}
                sizePhotow={sizePhotow}
                items={items}
                descarga={descarga}
                users={users}
                seleccionarImg={seleccionarImg}
                selectRef={selectRef}
                />
            </div>
        </div>
    </div>
  );
};
export default DragImgmemes;
