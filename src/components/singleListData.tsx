import React, { useState } from "react"

import { useAppDispatch } from "../store/hook"

import { addCart } from "../store/cartReducer"

import { Data } from "../interfaces"

const SingleListData: React.FC<{ single: Data; index: number }> = ({ single, index }) => {
  const [total, setTotal] = useState(1)
  const dispatch = useAppDispatch()
  return (
    <>
      <td className="col">
        <div className="col fw-bold">{single.product}</div>
        <div className="col text-secondary" style={{ fontSize: "11px" }}>
          {single.id}
        </div>
      </td>
      <td className="col-1">{single.price}</td>
      <td className="col-1">
        <div className="row align-items-center">
          <div role="button" className="col p-0 text-center" onClick={() => total > 1 && setTotal(total - 1)}>
            <span className="material-icons">remove</span>
          </div>
          <div className="col p-0 text-center">
            <input type="number" aria-label="Adet" className="form-control form-control-sm text-center" value={total} min={1} size={2} style={{ maxWidth: "80px" }} onChange={e => setTotal(Number(e.target.value))} />
          </div>
          <div role="button" className="col p-0 text-center" onClick={() => setTotal(total + 1)}>
            <span className="material-icons">add</span>
          </div>
        </div>
      </td>
      <td className="col-1 text-center">
        <button type="button" className="btn btn-primary btn-sm" onClick={() => dispatch(addCart({ ...single, total: total }))}>
          Ekle
        </button>
      </td>
    </>
  )
}

export default SingleListData
