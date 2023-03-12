import { render, screen, within } from "@testing-library/react"
import { List } from "./List.component"
import { ShopingList } from "./ShopingList.component"
import { TListItem } from "./ShopingList.type"

test("should render information about empty array", () => {
  const products: TListItem[] = []

  render(<List products={products} />)
  expect(screen.getByText(/empty list/i)).toBeInTheDocument()
})

test("should render a list of products", async () => {
  const products: TListItem[] = [
    { id: 1, name: "tomato", isBought: false },
    { id: 2, name: "kiwi", isBought: false },
    { id: 3, name: "apple", isBought: false },
    { id: 4, name: "banana", isBought: false },
    { id: 5, name: "pomelo", isBought: false },
  ]

  render(<List products={products} />)

  await screen.findAllByRole("list")

  const listitems = screen.getAllByRole("listitem")

  expect(listitems).toHaveLength(products.length)

  expect(listitems.map((item) => item.textContent)).toEqual([
    "tomato",
    "kiwi",
    "apple",
    "banana",
    "pomelo",
  ])
})

test("should spread products for 2 lists", () => {
  const products: TListItem[] = [
      { id: 1, name: "tomato", isBought: false },
      { id: 2, name: "kiwi", isBought: true },
      { id: 3, name: "apple", isBought: false },
      { id: 4, name: "banana", isBought: true },
      { id: 5, name: "pomelo", isBought: false },
    ],
    haveProducts = 2,
    needProducts = 3

  render(<ShopingList products={products} />)

  const lists = screen.getAllByRole("list"),
    { getAllByRole: getAllAListByRole } = within(lists[0]),
    { getAllByRole: getAllBListByRole } = within(lists[1])

  expect(lists).toHaveLength(2)
  expect(getAllAListByRole("listitem")).toHaveLength(needProducts)
  expect(getAllBListByRole("listitem")).toHaveLength(haveProducts)
})
