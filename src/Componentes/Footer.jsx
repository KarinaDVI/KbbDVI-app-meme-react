import React from 'react'

export default function Footer() {
  return (
 
    <nav className="navbar navbar-expand-lg fixed-bottom navbar-light footer">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center text-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" >Hecho por Karina Bouza</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" >CaC 2023</a>
            </li>
            <li className="nav-item">
              <a className="navbar-brand" href="https://www.linkedin.com/in/karina-beatriz-bouza/"><img className="w-25" src="../memesImg/in.png" alt="Mi linkedin"></img></a>
            </li>
          </ul>
        </div>
      </div>
</nav>

  )
}
