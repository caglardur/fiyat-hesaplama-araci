import React from "react"

const CatList: React.FC<{ setDataName: React.Dispatch<React.SetStateAction<string>> }> = ({ setDataName }) => {
  return (
    <div className="col">
      <div className="col text-center my-3">Fiyat Hesaplama Aracına Hoşgeldiniz.</div>

      <div className="row ">
        <div className="col-sm-4 mt-2">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Araç Şarj Sistemleri</h5>
              <div className="btn btn-primary btn-sm" onClick={() => setDataName("Araç Şarj Sistemleri")}>
                Listele
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4 mt-2">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Dolu-Boş Sistemi</h5>
              <div className="btn btn-primary btn-sm" onClick={() => setDataName("Dolu-Boş Sistemi")}>
                Listele
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4 mt-2">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Turnike Sistemi</h5>
              <div className="btn btn-primary btn-sm" onClick={() => setDataName("Turnike Sistemi")}>
                Listele
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CatList
