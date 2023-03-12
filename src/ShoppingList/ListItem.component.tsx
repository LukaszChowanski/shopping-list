import { TShoppingContext, useShoppingContext } from "./ShoppingContext.context"
import { TListItem } from "./ShoppingList.type"

type TProps = TListItem

const ListItem = ({ id, name }: TProps) => {
  const { handleClick } = useShoppingContext() as TShoppingContext
  return (
    <li>
      <button onClick={() => handleClick(id)}>{name}</button>
    </li>
  )
}

export { ListItem }
