import React from "react"
import "./App.css"
import { List } from "./ShopingList/List.component"

function App() {
  const products = [
    { id: 1, name: "tomato", isBought: false },
    { id: 2, name: "kiwi", isBought: false },
    { id: 3, name: "apple", isBought: false },
    { id: 4, name: "banana", isBought: false },
    { id: 5, name: "pomelo", isBought: false },
  ]
  return (
    <div className="App">
      <header className="App-header">
        <h1>Shoping list</h1>

        <section className="grid-container">
          <div className="flex-column">
            <h2>Fruit i need to buy</h2>
            <List products={products} />
          </div>

          <div className="flex-column">
            <h2>Fruit i have</h2>
            <List products={[]} />
          </div>
        </section>
      </header>
    </div>
  )
}

export default App
