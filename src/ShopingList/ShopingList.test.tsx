import { render, screen } from "@testing-library/react"
import { List } from "./List.component"
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
