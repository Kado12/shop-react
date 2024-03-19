import { createContext, useEffect, useState } from "react"

export const ShoppingCartContext = createContext()

// eslint-disable-next-line react/prop-types
export const ShoppingProviders = ({ children }) => {
  // Shopping Card
  const [count, setCount] = useState(0)

  // Product Detail - Open / Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  // Checkout Side Menu - Open / Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

  // Product Detail - Show Product
  const [productToShow, setProductToShow] = useState({})

  // Shopping Card - Add product to cart
  const [cartProducts, setCartProducts] = useState([])

  // Shopping Card - Order
  const [order, setOrder] = useState([])

  // Get Products
  const [items, setItems] = useState(null)
  useEffect(() => {
    const url = 'https://fakestoreapi.com/products'
    fetch(url)
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(error => console.log(error))
  }, [])

  // Search Product
  const [searchByTitle, setSearchByTitle] = useState(null)

  // Filtered Products
  const [filteredItems, setFilteredItems] = useState(null)
  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }
  useEffect(() => {
    if (searchByTitle) {
      setFilteredItems(filteredItemsByTitle(items, searchByTitle))
    }
  }, [items, searchByTitle])
  console.log(filteredItems)

  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      isProductDetailOpen,
      openProductDetail,
      closeProductDetail,
      productToShow,
      setProductToShow,
      cartProducts,
      setCartProducts,
      isCheckoutSideMenuOpen,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
      order,
      setOrder,
      items,
      setItems,
      searchByTitle,
      setSearchByTitle,
      filteredItems,
      setFilteredItems,
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}