import React,{useState} from 'react'

export default function ButtonArea( {
                                    users,
                                    setImgmeme,
                                    sizePhotow,
                                    setSizePhotow}) {
  const [activeIndex, setActiveIndex] = useState(0);


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
  const handleSizePhotowChange = (event) => {
    setSizePhotow(event.target.value);
    document.querySelector(".exportar").style.width = `${sizePhotow}%`;
    document.querySelector(".exportar").style.maxWidth = `${sizePhotow}%`;
  };

  return (
    <div className="d-block m-auto">
      <h3 className="mt-2 mb-3">Elegí la imagen de tu meme</h3>
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
        <div className="d-flex">
        <label for="photo-size-w" class="form-label">
                  Tamaño de imagen
                </label>
                <input
                  type="range"
                  className="form-range w-50 mt-4"
                  id="photo-size-w"
                  min={20}
                  max={102}
                  value={sizePhotow}
                  onChange={handleSizePhotowChange}
                />
        </div>
      </div>
    </div>
  );
}
