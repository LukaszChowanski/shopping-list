import { TShoppingContext, useShoppingContext } from "./ShoppingContext.context"
import { List } from "./List.component"

const NeedList = () => {
  const { needProducts } = useShoppingContext() as TShoppingContext

  return <List products={needProducts} />
}

export { NeedList }
