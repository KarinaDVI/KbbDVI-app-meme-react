import React from "react";

export default function TextArea(
    {
  setIdc,
  idc,
  drag,
  setResize,
  text,
  setItems,
  items,
  setTextoVar
}
) {
  const putText = () => {
    setIdc(idc + 1);

    const newItem = (
      <h5
        id={idc}
        key={idc}
        draggable="true"
        onDragStart={drag}
        onClick={setResize}
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
      >
        {text}
      </h5>
    );

    setItems([...items, newItem]);
  };
  const texto = (e) => {
    setTextoVar(e.target.value);
    console.log(e.target.value);
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
      <button onClick={putText} type="button" className="btn btn-primary">
        Agregar Frase
      </button>
    </div>
  );
}
