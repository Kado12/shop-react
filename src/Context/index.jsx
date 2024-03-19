import { createContext, useState } from "react"

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
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}