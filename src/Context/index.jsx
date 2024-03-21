import { createContext, useEffect, useState } from "react"

export const ShoppingCartContext = createContext()

// eslint-disable-next-line react/prop-types
export const ShoppingProviders = ({ children }) => {
  // Product Detail - Open / Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  // Checkout Side Menu - Open / Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

  // Checkout Side Menu - Open / Close
  const [isNavbarMobileOpen, setIsNavbarMobileOpen] = useState(false)
  const openNavbarMobile = () => setIsNavbarMobileOpen(true)
  const closeNavbarMobile = () => setIsNavbarMobileOpen(false)

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

  // Search Product by Title
  const [searchByTitle, setSearchByTitle] = useState(null)

  // Search Product by Category
  const [searchByCategory, setSearchByCategory] = useState(null)

  // Filtered Products
  const [filteredItems, setFilteredItems] = useState(null)

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter(item => item.category.toLowerCase() === searchByCategory.toLowerCase())
  }

  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    if (searchType === 'by-title') {
      return filteredItemsByTitle(items, searchByTitle)
    }
    if (searchType === 'by-category') {
      return filteredItemsByCategory(items, searchByCategory)
    }
    if (searchType === 'by-title-and-category') {
      return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }
    if (!searchType) {
      return items
    }
  }

  useEffect(() => {
    if (searchByTitle && searchByCategory) {
      setFilteredItems(filterBy('by-title-and-category', items, searchByTitle, searchByCategory))
    }
    if (searchByTitle && !searchByCategory) {
      setFilteredItems(filterBy('by-title', items, searchByTitle, searchByCategory))
    }
    if (searchByCategory && !searchByTitle) {
      setFilteredItems(filterBy('by-category', items, searchByTitle, searchByCategory))
    }
    if (!searchByCategory && !searchByTitle) {
      setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
    }
  }, [items, searchByTitle, searchByCategory])

  return (
    <ShoppingCartContext.Provider value={{
      isNavbarMobileOpen,
      openNavbarMobile,
      closeNavbarMobile,
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
      searchByCategory,
      setSearchByCategory,
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}