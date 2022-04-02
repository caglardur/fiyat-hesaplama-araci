import React from "react"

import { Data } from "../interfaces"
import SingleListData from "./singleListData"

const List: React.FC<{ data: Data[]; dataName: string; setDataName: React.Dispatch<React.SetStateAction<string>> }> = ({ data, dataName, setDataName }) => {
  return (
    <div className="card mt-4">
      <h5 className="card-header">
        <div className="row align-items-center">
          <div className="col-auto">
            <span role="button" className="material-icons align-middle" onClick={() => setDataName("")}>
              keyboard_backspace
            </span>
          </div>
          <div className="col fs-5 fw-bold">{dataName}</div>
        </div>
      </h5>
      <div className="card-body">
        <table className="table">
          <thead>
            <tr>
              <th className="col">Ürün</th>
              <th className="col-1">Fiyat($)</th>
              <th className="col-2 col-xxl-1 text-center">Adet</th>
              <th className="col-1 text-center">İşlem</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((single, index) => (
                <tr key={index} className="col align-middle align-items-center">
                  <SingleListData single={single} index={index} />
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default List
