/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"
import { ShoppingCartIcon } from "@heroicons/react/24/outline"

const Navbar = () => {
  const context = useContext(ShoppingCartContext)

  const activeStyle = 'underline underline-offset-4'
  return (
    <nav className="flex justify-between items-center fixed z-10 w-full h-20 py-5 px-8 text-sm font-light top-0 bg-white">
      <ul className="flex items-center gap-3 text-center">
        <li className="font-semibold text-lg">
          <NavLink
            to='/'
            onClick={() => context.setSearchByCategory()}
          >
            Shop
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
        <li className="flex justify-center items-center cursor-pointer">
          <ShoppingCartIcon className="w-4 h-4" onClick={() => { context.closeProductDetail(), context.openCheckoutSideMenu() }} />
          <div>{context.cartProducts.length}</div>
        </li>
      </ul>
    </nav>
  )
}

export { Navbar }