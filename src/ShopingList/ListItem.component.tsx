import { TListItem } from "./ShopingList.type"

type TProps = TListItem & {
  handleClick: (id: number) => void
}

const ListItem = ({ id, name, handleClick }: TProps) => {
  return (
    <li>
      <button onClick={() => handleClick(id)}>{name}</button>
    </li>
  )
}

export { ListItem }
