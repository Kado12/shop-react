/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"
import { ShoppingCartIcon } from "@heroicons/react/24/outline"
import { Bars3Icon } from "@heroicons/react/24/outline"
import { XMarkIcon } from "@heroicons/react/24/outline"
import './styles.css'

const Navbar = () => {
  const context = useContext(ShoppingCartContext)

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const renderNav = () => {
    if (windowWidth > 768) {
      return (
        <nav className="flex justify-between items-center fixed z-10 w-full h-20 py-5 px-6 text-sm font-light top-0 bg-[#f2f2f2]">
          <ul className="flex items-center gap-3 text-center">
            <li className={(windowWidth <= 876) ? 'w-20' : 'w-32'}>
              <NavLink
                to='/'
                onClick={() => context.setSearchByCategory()}
              >
                <img
                  className={(windowWidth <= 876) ? 'w-16 h-16' : 'w-full h-full'}
                  src={(windowWidth <= 876) ? './icon.svg' : './logo.svg'}
                  alt="logo"
                  key={windowWidth} // Cambia la clave cada vez que cambia el tamaño de la ventana
                />
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/'
                onClick={() => context.setSearchByCategory()}
                className={({ isActive }) => isActive ? activeStyle : undefined}
              >
                All
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/men's clothing"
                onClick={() => context.setSearchByCategory("men's clothing")}
                className={({ isActive }) => isActive ? activeStyle : undefined}
              >
                Men's Clothes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="women's clothing"
                onClick={() => context.setSearchByCategory("women's clothing")}
                className={({ isActive }) => isActive ? activeStyle : undefined}
              >
                Women's Clothes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="jewelery"
                onClick={() => context.setSearchByCategory("jewelery")}
                className={({ isActive }) => isActive ? activeStyle : undefined}
              >
                Jewelry
              </NavLink>
            </li>
            <li>
              <NavLink
                to="electronics"
                onClick={() => context.setSearchByCategory("electronics")}
                className={({ isActive }) => isActive ? activeStyle : undefined}
              >
                Electronics
              </NavLink>
            </li>
          </ul>
          <ul className="flex items-center gap-3">
            <li className="text-black/60">
              kado@react.js
            </li>
            <li>
              <NavLink
                to='/my-orders'
                className={({ isActive }) => isActive ? activeStyle : undefined}
              >
                My Orders
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/my-account'
                className={({ isActive }) => isActive ? activeStyle : undefined}
              >
                My Account
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/sign-in'
                className={({ isActive }) => isActive ? activeStyle : undefined}
              >
                Sign In
              </NavLink>
            </li>
            <li className="shopping-cart">
              <div className="flex justify-center items-center cursor-pointer relative w-10 h-10">
                <ShoppingCartIcon className="w-6 h-6" onClick={() => { context.closeProductDetail(), context.openCheckoutSideMenu() }} />
                <div className="absolute right-0 top-0 rounded-full flex items-center justify-center p-1 w-5 h-5">
                  {context.cartProducts.length}
                </div>
              </div>
            </li>
          </ul>
        </nav>
      )
    } else {
      return (
        <>
          <div className="responsive-nav flex justify-between items-center fixed z-10 w-full h-20 py-5 px-3 text-sm font-light top-0 bg-[#f2f2f2] z-20">
            <div>
              {context.isNavbarMobileOpen ?
                <XMarkIcon className="h-10 w-10" onClick={() => { context.closeProductDetail(), context.closeCheckoutSideMenu(), context.closeNavbarMobile() }} />
                :
                <Bars3Icon className="h-10 w-10" onClick={() => { context.closeProductDetail(), context.closeCheckoutSideMenu(), context.openNavbarMobile() }} />
              }
            </div>
            <div>
              <NavLink
                to='/'
                onClick={() => context.setSearchByCategory()}
              >
                <img
                  className='w-16 h-16'
                  src='./icon.svg'
                  alt="logo"
                  key={windowWidth} // Cambia la clave cada vez que cambia el tamaño de la ventana
                />
              </NavLink>
            </div>
            <div>
              <div className="shopping-cart">
                <div className="flex justify-center items-center cursor-pointer relative w-10 h-10">
                  <ShoppingCartIcon className="w-8 h-8" onClick={() => { context.closeProductDetail(), context.openCheckoutSideMenu(), context.closeNavbarMobile() }} />
                  <div className="absolute right-0 top-0 rounded-full flex items-center justify-center p-1 w-5 h-5">
                    {context.cartProducts.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <aside className={`${context.isNavbarMobileOpen ? 'nav-mobile' : 'hidden'} fixed top-20 bg-[#f2f2f2] z-10 border-r-4 border-r-[#8C326D] border-b-4 border-b-[#8C326D] p-4`}>
            <nav className="flex flex-col">
              <ul className="flex flex-col gap-3 mb-5 pb-2 border-b border-b-[#8C326D]">
                <li>
                  <NavLink
                    to='/'
                    onClick={() => context.setSearchByCategory()}
                    className={({ isActive }) => isActive ? activeStyle : undefined}
                  >
                    All
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/men's clothing"
                    onClick={() => context.setSearchByCategory("men's clothing")}
                    className={({ isActive }) => isActive ? activeStyle : undefined}
                  >
                    Men's Clothes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="women's clothing"
                    onClick={() => context.setSearchByCategory("women's clothing")}
                    className={({ isActive }) => isActive ? activeStyle : undefined}
                  >
                    Women's Clothes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="jewelery"
                    onClick={() => context.setSearchByCategory("jewelery")}
                    className={({ isActive }) => isActive ? activeStyle : undefined}
                  >
                    Jewelry
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="electronics"
                    onClick={() => context.setSearchByCategory("electronics")}
                    className={({ isActive }) => isActive ? activeStyle : undefined}
                  >
                    Electronics
                  </NavLink>
                </li>
              </ul>
              <ul className="flex flex-col gap-3 mt-5 pb-2">
                <li className="text-black/60">
                  kado@react.js
                </li>
                <li>
                  <NavLink
                    to='/my-orders'
                    className={({ isActive }) => isActive ? activeStyle : undefined}
                  >
                    My Orders
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/my-account'
                    className={({ isActive }) => isActive ? activeStyle : undefined}
                  >
                    My Account
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/sign-in'
                    className={({ isActive }) => isActive ? activeStyle : undefined}
                  >
                    Sign In
                  </NavLink>
                </li>
              </ul>
            </nav>
          </aside>
        </>
      )
    }
  }

  const activeStyle = 'underline underline-offset-4 text-[#8C326D]'
  return (
    <>
      {renderNav()}

    </>
  )
}

export { Navbar }