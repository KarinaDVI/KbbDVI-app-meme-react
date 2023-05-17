import React from "react";

export default function ImgArea({
  imgMeme,
  imgRef,
  drop,
  h5ContRef,
  allowDrop,
  sizePhotow,
  items,
  descarga,
  seleccionarImg,
  selectRef,
  users
}) {
  return (
   
      <div class="card text-bg-dark exportar m-auto p-0" id="darea">
        <img
          src={imgMeme}
          className="img-fluid figure-img d-block mb-0 imgRes "
          alt="meme imagen"
          ref={imgRef}
          onDrop={drop}
          onDragOver={allowDrop}
        />

        <div
          class="card-img-overlay m-0 p-0"
          ref={h5ContRef}
          onDrop={drop}
          onDragOver={allowDrop}
          width={sizePhotow}
        >
          {items}
        </div>
      </div>
  );
}
