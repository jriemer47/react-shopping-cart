import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"

import CartHeader from "./Component/CartHeader"
import CartFooter from "./Component/CartFooter"
import CartItems from "./Component/CartItems"

class App extends Component {
  render() {
    return (
      <div className="App">
        <CartHeader />
        <CartItems />
        <CartFooter />
      </div>
    )
  }
}

export default App
