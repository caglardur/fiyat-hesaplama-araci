import React from "react"

const Header: React.FC<{ setDataName: React.Dispatch<React.SetStateAction<string>>; dataName: string }> = ({ setDataName, dataName }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container-fluid ">
        <div role="button" className="col me-5 fs-5 fw-bold" onClick={() => setDataName("")}>
          Fiyat Hesaplama Aracı
        </div>
        <div className="col-auto dropdown">
          <div className="btn btn-light btn-sm dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            Ürün Kategorileri
          </div>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
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
        </div>
      </div>
    </nav>
  )
}

export default Header
