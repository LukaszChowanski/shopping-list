import { render, screen } from "@testing-library/react"
import { List } from "./List.component"

test("should render list of given elements", async () => {
  const products = [
    { id: 1, name: "tomato", isBought: false },
    { id: 2, name: "kiwi", isBought: false },
    { id: 3, name: "apple", isBought: false },
    { id: 4, name: "banana", isBought: false },
    { id: 5, name: "pomelo", isBought: false },
  ]

  render(<List products={products} />)

  await screen.findAllByRole("list")

  expect(screen.getAllByRole("listitem")).toHaveLength(products.length)
})
