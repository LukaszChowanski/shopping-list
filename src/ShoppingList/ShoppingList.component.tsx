import { useState } from "react"
import { List } from "./List.component"
import { TListItem } from "./ShoppingList.type"

type TProps = {
  products: TListItem[]
}

const ShoppingList = ({ products }: TProps) => {
  const [shoppingList, setShoppingList] = useState(products)
  const needProducts = shoppingList.filter((item) => item.isBought === false)
  const haveProducts = shoppingList.filter((item) => item.isBought === true)

  const handleClick = (id: number) => {
    const editedShoppingList = shoppingList.map((item) => {
      if (item.id === id) {
        item.isBought = !item.isBought
      }

      return item
    })

    setShoppingList(editedShoppingList)
  }

  return (
    <section className="grid-container">
      <div className="flex-column">
        <h2>Fruit i need to buy</h2>
        <List products={needProducts} handleClick={handleClick} />
      </div>

      <div className="flex-column">
        <h2>Fruit i have</h2>
        <List products={haveProducts} handleClick={handleClick} />
      </div>
    </section>
  )
}

export { ShoppingList }
