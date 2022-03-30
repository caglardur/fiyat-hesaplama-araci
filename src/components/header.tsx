import React from "react"

const Header: React.FC<{ setDataName: React.Dispatch<React.SetStateAction<string>>; dataName: string }> = ({ setDataName, dataName }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
      <div className="container-fluid">
        <div role="button" className="col me-5 fs-5 fw-bold" onClick={() => setDataName("")}>
          Fiyat Hesaplama Aracı
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav" style={{ maxWidth: "160px" }}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <div className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {dataName === "" ? "Ürün Kategorileri" : dataName}
              </div>
              <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                <li>
                  <div role="button" className="dropdown-item" onClick={() => setDataName("Araç Şarj Sistemleri")}>
                    Araç Şarj Sistemleri
                  </div>
                </li>
                <li>
                  <div role="button" className="dropdown-item" onClick={() => setDataName("Dolu-Boş Sistemi")}>
                    Dolu-Boş Sistemi
                  </div>
                </li>
                <li>
                  <div role="button" className="dropdown-item" onClick={() => setDataName("Turnike Sistemi")}>
                    Turnike Sistemi
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
