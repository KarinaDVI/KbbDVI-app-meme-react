import React from 'react'

import html2canvas from "html2canvas";

export default function ButtonArea( h5Ref,
                                    items,
                                    users,
                                    setItems,
                                    setPosx,
                                    setPosy,
                                    setRotz,
                                    setColor,
                                    setTextSize,
                                    setImgmeme,
                                    selectRef) {

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
    setTextSize(20);
  };
  return (
          <div className="d-block m-auto">
          <h2 className="mt-2 mb-3">Elegí la imagen de tu meme</h2>
          <div className="d-flex justify-content-center  mb-2">
            <select
              onChange={seleccionarImg}
              className="form-select form-select w-50 h-50"
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
          <button
            className="btn btn-success"
            id="restore"
            onClick={handleResetClick}
          >
            Reset
          </button>
          <button className="btn btn-danger" id="delete" onClick={handleDelete}>
            Delete
          </button>
        </div>
        </div>
  )
}
