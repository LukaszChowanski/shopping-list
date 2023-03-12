import React from "react"
import "./App.css"
import { HaveList } from "./ShoppingList/HaveList.component"
import { NeedList } from "./ShoppingList/NeedList.component"
import { ShoppingListProvider } from "./ShoppingList/ShoppingContext.context"
import { ShoppingList } from "./ShoppingList/ShoppingList.component"

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
        <h1>Shopping list</h1>
      </header>

      <ShoppingListProvider products={products}>
        <section className="grid-container">
          <div className="flex-column">
            <h2>Fruit i need to buy</h2>
            <NeedList />
          </div>

          <div className="flex-column">
            <h2>Tools i have</h2>
            <HaveList />
          </div>
        </section>
      </ShoppingListProvider>

      <ShoppingListProvider products={products}>
        <ShoppingList />
      </ShoppingListProvider>
    </div>
  )
}

export default App
