import React from "react"

import { useAppDispatch } from "../store/hook"

import { removeCart } from "../store/cartReducer"

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
      <td className="col-1">{single.total}</td>
      <td className="col-1">
        <button type="button" className="btn btn-danger btn-sm" onClick={() => dispatch(removeCart(single))}>
          Sil
        </button>
      </td>
    </>
  )
}

export default SingleCartData
