import { List } from "./List.component"
import { TShoppingContext, useShoppingContext } from "./ShoppingContext.context"

const ShoppingList = () => {
  const { needProducts, haveProducts } =
    useShoppingContext() as TShoppingContext
  return (
    <section className="grid-container">
      <div className="flex-column">
        <h2>Fruit i need to buy</h2>
        <List products={needProducts} />
      </div>

      <div className="flex-column">
        <h2>Fruit i have</h2>
        <List products={haveProducts} />
      </div>
    </section>
  )
}

export { ShoppingList }
