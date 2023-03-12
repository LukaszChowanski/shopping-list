import { useState } from "react"
import { List } from "./List.component"
import { TListItem } from "./ShopingList.type"

type TProps = {
  products: TListItem[]
}

const ShopingList = ({ products }: TProps) => {
  const [shopingList, setShopingList] = useState(products)
  const needProducts = shopingList.filter((item) => item.isBought === false)
  const haveProducts = shopingList.filter((item) => item.isBought === true)
  return (
    <section className="grid-container">
      <div className="flex-column">
        <h2>Fruit i need to buy</h2>
        <List products={needProducts} />
      </div>

      <div className="flex-column">
        <h2>Fruit i haveeee</h2>
        <List products={haveProducts} />
      </div>
    </section>
  )
}

export { ShopingList }
