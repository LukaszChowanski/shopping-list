import { TShoppingContext, useShoppingContext } from "./ShoppingContext.context"
import { List } from "./List.component"

const HaveList = () => {
  const { haveProducts } = useShoppingContext() as TShoppingContext

  return <List products={haveProducts} />
}

export { HaveList }
