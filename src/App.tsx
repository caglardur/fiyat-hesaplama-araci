import React, { useEffect, useState } from "react"

import { collection, getDocs } from "firebase/firestore"

import { useAppSelector } from "./store/hook"

import db from "./firebase"

import Header from "./components/header"
import List from "./components/list"
import Cart from "./components/cart"

import { Data } from "./interfaces"
import CatList from "./components/catList"

const App: React.FC = () => {
  const [dataName, setDataName] = useState<string>("")
  const [data, setData] = useState<Data[]>([])
  const [loading, setLoading] = useState(true)
  const cart = useAppSelector(state => state.cart.value)

  useEffect(() => {
    if (dataName.length > 0) {
      setLoading(true)
      const colRef: any = collection(db, dataName)
      getDocs(colRef)
        .then(snapshot => {
          let data: any = []
          snapshot.docs.forEach(doc => {
            data.push({ ...(doc.data() as {}), id: doc.id })
          })
          setLoading(false)
          setData(data)
        })
        .catch(err => console.log(err))
    } else {
      setLoading(false)
      setData([])
    }
  }, [dataName])

  

  return (
    <div className="container-md">
      <Header setDataName={setDataName} dataName={dataName} />
      {loading ? (
        <div className="col my-5">
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      ) : data.length > 0 ? (
        <List setDataName={setDataName} dataName={dataName} data={data} />
      ) : (
        <CatList setDataName={setDataName} />
      )}
      {cart.length > 0 && <Cart />}
    </div>
  )
}

export default App
