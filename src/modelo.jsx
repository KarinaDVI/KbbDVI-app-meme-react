import React, { useState } from 'react';

function App() {
  const [idc, setIdc] = useState(0);
  const [items, setItems] = useState([]);

  const allowDrop=(ev)=> {
    ev.preventDefault();
  }

  const drag=(ev) =>{
    ev.dataTransfer.setData("text", ev.target.id);
  }

  const addItem = () => {
    setIdc(idc + 1);
    const newItem = 
    <div id={idc} key={idc} draggable="true" onDragStart={drag} style={{position:"absolute"}}>"texto"</div>;
    setItems([...items, newItem]);
  };

  const drop = (ev) => {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    const draggableElement = document.getElementById(data);
    const dropzone = ev.target;
  
    // Comprueba que el elemento exista antes de agregarlo al contenedor
    if (draggableElement && dropzone) {
      dropzone.appendChild(draggableElement);
  
      // Get the cursor position at the time of the drop
      let x = ev.clientX;
      let y = ev.clientY;
  
      // Adjust the position to center the element
      x -= draggableElement.offsetWidth / 2;
      y -= draggableElement.offsetHeight * 2;
  
      // Set the position of the dragged element using CSS
      draggableElement.style.left = x + "px";
      draggableElement.style.top = y + "px";
    }
  };

  return (
    <div onDrop={drop} onDragOver={allowDrop} id="cont">
      <h2>Drag and Drop</h2>
      <p>Drag the image back and forth between the two div elements.</p>
      <div id="div1" onDrop={drop} onDragOver={allowDrop}>
        <img src="img_w3slogo.gif" draggable="true" onDragStart={drag} id="drag1" width="88" height="31" />
      </div>
      <div id="div2" onDrop={drop} onDragOver={allowDrop}></div>
      <div id="div3" onDrop={drop} onDragOver={allowDrop}></div>
      <button onClick={addItem}>Agregar</button>
      {items}
    </div>
  );
}

export default App;