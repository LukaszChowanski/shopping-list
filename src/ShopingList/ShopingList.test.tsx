import {
  cleanup,
  fireEvent,
  render,
  screen,
  within,
} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { List } from "./List.component"
import { ShopingList } from "./ShopingList.component"
import { TListItem } from "./ShopingList.type"

afterEach(cleanup)
const handleClick = jest.fn((id: number) => {})

test("should render information about empty array", () => {
  const products: TListItem[] = []

  render(<List products={products} handleClick={handleClick} />)
  expect(screen.getByText(/empty list/i)).toBeInTheDocument()
})

test("should render a list of products", async () => {
  const products: TListItem[] = [
      { id: 1, name: "tomato", isBought: false },
      { id: 2, name: "kiwi", isBought: false },
      { id: 3, name: "apple", isBought: false },
      { id: 4, name: "banana", isBought: false },
      { id: 5, name: "pomelo", isBought: false },
    ],
    expectedArray = ["tomato", "kiwi", "apple", "banana", "pomelo"]

  render(<List products={products} handleClick={handleClick} />)

  await screen.findAllByRole("list")

  const listitems = screen.getAllByRole("listitem")

  expect(listitems).toHaveLength(products.length)

  expect(listitems.map((item) => item.textContent)).toEqual(expectedArray)
})

test("click on list element should call function once", async () => {
  const products: TListItem[] = [
    { id: 1, name: "tomato", isBought: false },
    { id: 2, name: "kiwi", isBought: false },
    { id: 3, name: "apple", isBought: false },
    { id: 4, name: "banana", isBought: false },
    { id: 5, name: "pomelo", isBought: false },
  ]

  const testingProductIndex = 0

  render(<List products={products} handleClick={handleClick} />)

  await fireEvent.click(screen.getByText(products[testingProductIndex].name))

  expect(handleClick).toHaveBeenCalledTimes(1)
  expect(handleClick).toHaveBeenCalledWith(products[testingProductIndex].id)
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

test("click on A list element remove it from list A and add to list B", async () => {
  const products: TListItem[] = [
      { id: 1, name: "tomato", isBought: false },
      { id: 2, name: "kiwi", isBought: true },
      { id: 3, name: "apple", isBought: false },
      { id: 4, name: "banana", isBought: true },
      { id: 5, name: "pomelo", isBought: false },
    ],
    beforeClickNeedProductsCount = 3,
    beforeClickHaveProductsCount = 2

  render(<ShopingList products={products} />)

  const lists = screen.getAllByRole("list"),
    { getAllByRole: getAllAListByRole } = within(lists[0]),
    { getAllByRole: getAllBListByRole } = within(lists[1])

  expect(getAllAListByRole("listitem")).toHaveLength(
    beforeClickNeedProductsCount
  )

  await userEvent.click(screen.getByText(products[0].name))

  // check if A list items is less by one
  const allAListItemsAfterEvent = getAllAListByRole("listitem")
  expect(allAListItemsAfterEvent).toHaveLength(beforeClickNeedProductsCount - 1)
  expect(allAListItemsAfterEvent.map((item) => item.textContent)).toEqual([
    "apple",
    "pomelo",
  ])

  // check if B list items is more by one
  const allBListItemsAfterEvent = getAllBListByRole("listitem")
  expect(allBListItemsAfterEvent).toHaveLength(beforeClickHaveProductsCount + 1)
  expect(allBListItemsAfterEvent.map((item) => item.textContent)).toEqual([
    "tomato",
    "kiwi",
    "banana",
  ])
})

test("click on B list element remove it from list B and add to list A", async () => {
  const products: TListItem[] = [
      { id: 1, name: "tomato", isBought: false },
      { id: 2, name: "kiwi", isBought: true },
      { id: 3, name: "apple", isBought: false },
      { id: 4, name: "banana", isBought: true },
      { id: 5, name: "pomelo", isBought: false },
    ],
    beforeClickNeedProductsCount = 3,
    beforeClickHaveProductsCount = 2

  render(<ShopingList products={products} />)

  const lists = screen.getAllByRole("list"),
    { getAllByRole: getAllAListByRole } = within(lists[0]),
    { getAllByRole: getAllBListByRole } = within(lists[1])

  expect(getAllAListByRole("listitem")).toHaveLength(
    beforeClickNeedProductsCount
  )

  await userEvent.click(screen.getByText(products[1].name))

  // check if A list items is less by one
  const allAListItemsAfterEvent = getAllAListByRole("listitem")
  expect(allAListItemsAfterEvent).toHaveLength(beforeClickNeedProductsCount + 1)
  expect(allAListItemsAfterEvent.map((item) => item.textContent)).toEqual([
    "tomato",
    "kiwi",
    "apple",
    "pomelo",
  ])

  // check if B list items is more by one
  const allBListItemsAfterEvent = getAllBListByRole("listitem")
  expect(allBListItemsAfterEvent).toHaveLength(beforeClickHaveProductsCount - 1)
  expect(allBListItemsAfterEvent.map((item) => item.textContent)).toEqual([
    "banana",
  ])
})
