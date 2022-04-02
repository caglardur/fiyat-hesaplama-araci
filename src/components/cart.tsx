import React, { useEffect, useState, useRef } from "react"
import { useReactToPrint } from "react-to-print"
import * as html2pdf from "html2pdf.js"

import { useAppSelector } from "../store/hook"
import SingleCartData from "./singleCartData"

const Cart: React.FC = () => {
  const cart = useAppSelector(state => state.cart.value)
  const [totalPrice, setTotalPrice] = useState(0)
  const componentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (cart.length > 0) {
      let priceCalculator = 0
      cart.forEach(item => {
        priceCalculator += item.total * item.price
      })
      setTotalPrice(priceCalculator)
    }
  }, [cart])

  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  })

  const ComponentToPrint = React.forwardRef((props, ref) => {
    return (
      <div className="col m-4" ref={ref as React.RefObject<HTMLDivElement>} id="printContent">
        <div className="col fs-4 fw-bold">Fiyat Teklifi</div>
        <table className="table">
          <thead>
            <tr>
              <th className="col">Ürün</th>
              <th className="col-1">Fiyat($)</th>
              <th className="col-1">Adet</th>
            </tr>
          </thead>
          <tbody>
            {cart &&
              cart.map(item => (
                <tr key={item.id}>
                  <td className="col">{item.product}</td>
                  <td className="col-1">{item.price}</td>
                  <td className="col-1">{item.total}</td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="fs-5 fw-bold">Toplam: {totalPrice}$</div>
      </div>
    )
  })

  const createPdf = () => {
    const element = document.querySelector("#printContent")
    const opt = {
      margin: 1,
      filename: "rapor.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 1 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" }
    }
    html2pdf.default(element, opt)
  }

  return (
    <div className="card mt-5">
      <h5 className="card-header">Sepettekiler :</h5>
      <div className="card-body">
        <table className="table ">
          <thead>
            <tr>
              <th className="col">Ürün</th>
              <th className="col-1">Fiyat($)</th>
              <th className="col-2 col-xl-1 text-center">Adet</th>
              <th className="col-1 text-center">İşlem</th>
            </tr>
          </thead>
          <tbody>
            {cart &&
              cart.map((single, index) => (
                <tr key={index} className="col align-middle align-items-center">
                  <SingleCartData single={single} index={index} />
                </tr>
              ))}
          </tbody>
        </table>
        <div className="row">
          <div className="col fs-5 fw-bold">Toplam: {totalPrice}$</div>
          <div className="col-auto">
            <button className="btn btn-outline-secondary btn-sm" onClick={createPdf}>
              <span className="material-icons align-middle">picture_as_pdf</span>
            </button>
          </div>
          <div className="col-auto">
            <button className="btn btn-outline-secondary btn-sm" onClick={handlePrint}>
              <span className="material-icons align-middle">print</span>
            </button>
          </div>
        </div>
      </div>

      <div style={{ display: "none" }}>
        <ComponentToPrint ref={componentRef} />
      </div>
    </div>
  )
}

export default Cart
