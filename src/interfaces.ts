export interface Data {
  price: number
  product: string
  id: string
}

export interface singleCartItem {
  price: number
  product: string
  id: string
  total: number
}

export interface cartState {
  value: singleCartItem[]
}
