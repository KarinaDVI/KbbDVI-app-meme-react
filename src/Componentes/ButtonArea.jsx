import React,{useState} from 'react'

import html2canvas from "html2canvas";

export default function ButtonArea( {h5Ref,
                                    users,
                                    items,
                                    setItems,
                                    setPosx,
                                    setPosy,
                                    setRotz,
                                    setColor,
                                    setTextSize,
                                    setImgmeme,
                                    setSizePhotow}) {
  const [activeIndex, setActiveIndex] = useState(0);

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
    //setImgmeme('https://i.imgflip.com/1h7in3.jpg')
    setImgmeme('https://i.imgflip.com/1h7in3.jpg')
    setActiveIndex(users.findIndex((user) => user.url === 'https://i.imgflip.com/1h7in3.jpg'))
    setSizePhotow(60);

      };

  const handleCarouselPrev = () => {
    const prevIndex = activeIndex === 0 ? users.length - 1 : activeIndex - 1;
    setActiveIndex(prevIndex);
    setImgmeme(users[prevIndex].url);
  };
  
  const handleCarouselNext = () => {
    const nextIndex = activeIndex === users.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
    setImgmeme(users[nextIndex].url);
  };

  return (
    <div className="d-block m-auto">
      <h2 className="mt-2 mb-3">Elegí la imagen de tu meme</h2>
      <div className="d-block justify-content-center  mb-2">
      {/* Anterior: */}
        {/*  <select
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
            </select> */}

        {/* Carousel imagenes*/}
        <div
          id="carouselExample"
          className="carousel slide"
        >
          <div className="carousel-inner d-flex">
            {users.map((user, index) => (
              <div
                className={`carousel-item ${
                  index === activeIndex ? "active" : ""
                }`}
                key={user.id}
              >
                <img
                  src={user.url}
                  alt={user.name}
                  value={user.url}
                  className="w-25"
                />
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            onClick={handleCarouselPrev}
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            onClick={handleCarouselNext}
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/*  */}
        <button onClick={descarga} type="button" className="btn btn-primary">
          Bajar Meme
        </button>

        {/* Botones de borrado y reset */}
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
  );
}
