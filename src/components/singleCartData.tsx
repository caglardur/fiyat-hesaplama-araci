import React from "react"

import { useAppDispatch } from "../store/hook"

import { removeCart, addCart } from "../store/cartReducer"

import { singleCartItem } from "../interfaces"

const SingleCartData: React.FC<{ single: singleCartItem; index: number }> = ({ single, index }) => {
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
          <div role="button" className="col p-0 text-center d-none d-sm-block" onClick={() => (single.total === 1 ? dispatch(removeCart(single)) : dispatch(addCart({ ...single, total: -1 })))}>
            <span className="material-icons align-middle">remove</span>
          </div>
          <div className="col p-0 text-center">{single.total}</div>
          <div role="button" className="col p-0 text-center d-none d-sm-block" onClick={() => dispatch(addCart({ ...single, total: +1 }))}>
            <span className="material-icons align-middle">add</span>
          </div>
        </div>
      </td>
      <td className="col-1 text-center">
        <button type="button" className="btn btn-danger btn-sm" onClick={() => dispatch(removeCart(single))}>
          Sil
        </button>
      </td>
    </>
  )
}

export default SingleCartData
