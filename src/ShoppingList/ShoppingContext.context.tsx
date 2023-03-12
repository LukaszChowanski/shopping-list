import { createContext, useContext, useState } from "react"
import { TListItem } from "./ShoppingList.type"

export type TShoppingContext = {
  needProducts: TListItem[]
  haveProducts: TListItem[]
  handleClick: (id: number) => void
}

const defaultState: TShoppingContext = {
  needProducts: [],
  haveProducts: [],
  handleClick: (id: number) => {},
}

export const ShoppingContext = createContext(defaultState)

export const useShoppingContext = () => useContext(ShoppingContext)

type IProps = {
  children: React.ReactNode
  products: TListItem[]
}

const ShoppingListProvider = ({ products, children }: IProps) => {
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
    <ShoppingContext.Provider
      value={{ needProducts, haveProducts, handleClick }}
    >
      {children}
    </ShoppingContext.Provider>
  )
}

export { ShoppingListProvider }
