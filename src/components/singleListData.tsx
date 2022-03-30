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
        <input type="number" aria-label="Adet" className="form-control form-control-sm text-center" value={total} min={1} size={2} style={{ maxWidth: "80px" }} onChange={e => setTotal(Number(e.target.value))} />
      </td>
      <td className="col-1">
        <button type="button" className="btn btn-primary btn-sm" onClick={() => dispatch(addCart({ ...single, total: total }))}>
          Ekle
        </button>
      </td>
    </>
  )
}

export default SingleListData
