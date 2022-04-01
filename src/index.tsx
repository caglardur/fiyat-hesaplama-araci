import ReactDOM from "react-dom"
import App from "./App"

import "./index.css"

import { store } from "./store/store"
import { Provider } from "react-redux"

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap"

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
