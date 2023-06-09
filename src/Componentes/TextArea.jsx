import React from "react";
import html2canvas from "html2canvas";

export default function TextArea(
    {
  setIdc,
  idc,
  drag,
  text,
  setItems,
  items,
  setTextoVar,
  h5Ref
}
) {
  const putText = () => {
    setIdc(idc + 1);
    if(h5Ref.current!==null&&h5Ref.current.classList.contains("movible")){
      h5Ref.current.textContent=text
      console.log("Cambio de texto")
    
    }else{
    const newItem = (
      <h5
        id={idc}
        key={idc}
        draggable="true"
        onDragStart={drag}
        style={{
          position: "absolute",
          textShadow: `0px 0px  2px #000000,
                       0px 0px  2px #000000,
                       0px 0px  2px #000000`,
          fontFamily: "Impact",
          fontSize:"20px",
          top:'0',
          left:'0'

        }}
        
      >{text}</h5>
    );
    setItems([...items, newItem]);
      }
  };
  const texto = (e) => {
    setTextoVar(e.target.value);
    console.log(e.target.value);
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

  return (
    <div className="d-flex w-100 mb-4 justify-content-center">
      <input
        onChange={texto}
        className="form-control w-50 h-100"
        type="text"
        placeholder="Pone tu frase"
        name="textMeme"
      />
      <button onClick={putText} type="button" className="btn btn-sm btn-primary">
        Agregar / cambiar Frase
      </button>
      <button onClick={descarga} type="button" className="btn btn-sm btn-success">
          Bajar Meme
        </button>
    </div>
  );
}
