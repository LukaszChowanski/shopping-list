import { ListItem } from "./ListItem.component"
import { TListItem } from "./ShopingList.type"

type TProps = {
  products: TListItem[]
}
const List = ({ products }: TProps) => {
  return (
    <ul>
      {products.map((product) => {
        return <ListItem key={product.id} {...product} />
      })}
    </ul>
  )
}

export { List }
