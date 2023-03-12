import React from "react"
import "./App.css"
import { ShopingList } from "./ShopingList/ShopingList.component"

function App() {
  const products = [
    { id: 1, name: "tomato", isBought: false },
    { id: 2, name: "kiwi", isBought: true },
    { id: 3, name: "apple", isBought: false },
    { id: 4, name: "banana", isBought: true },
    { id: 5, name: "pomelo", isBought: false },
  ]
  return (
    <div className="App">
      <header className="App-header">
        <h1>Shoping list</h1>
      </header>
      <ShopingList products={products} />
    </div>
  )
}

export default App
