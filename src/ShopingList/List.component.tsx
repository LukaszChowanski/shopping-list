import { ListItem } from "./ListItem.component"
import { TListItem } from "./ShopingList.type"

type TProps = {
  products: TListItem[]
}
const List = ({ products }: TProps) => {
  if (!products.length) {
    return <div className="empty">Empty list</div>
  }
  return (
    <ul>
      {products.map((product) => {
        return <ListItem key={product.id} {...product} />
      })}
    </ul>
  )
}

export { List }
