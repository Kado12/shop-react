import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { XMarkIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'
import { ShoppingCartContext } from '../../Context'
import { OrderCard } from '../OrderCard'
import { totalPrice } from '../../utils'
import './styles.css'

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext)



  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id != id)
    context.setCartProducts(filteredProducts)
  }

  const handleCheckout = () => {
    const date = new Date()
    const formattedMonth = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth()
    const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
    const seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()
    const orderToAdd = {
      date: `${date.getDate()}/${formattedMonth}/${date.getFullYear()} ${hours}:${minutes}:${seconds}`,
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts),
    }
    context.setOrder([...context.order, orderToAdd])
    context.setCartProducts([])
    context.setSearchByTitle(null)
    context.closeCheckoutSideMenu()
  }


  return (
    <aside
      className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed bg-white right-0 border border-black rounded-md`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-lg">My Order</h2>
        <div className='cursor-pointer'>
          <XMarkIcon
            onClick={() => context.closeCheckoutSideMenu()}
            className='w-6 h-6'
          />
        </div>
      </div>
      <div className='flex-1 overflow-y-auto'>
        {
          context.cartProducts.map(product => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.image}
              price={product.price}
              handleDelete={handleDelete}
            />
          ))
        }
      </div>
      <div className="flex justify-between items-center p-6 bg-white rounded-md">
        <h2 className="font-medium text-lg">Total</h2>
        <h2 className="font-medium text-lg">${totalPrice(context.cartProducts)}</h2>
      </div>
      <div className='flex items-center justify-center'>
        <Link to='/my-orders/last'>
          <button
            className='bg-black text-white m-auto w-80 mb-5 p-3 rounded-lg flex items-center justify-center gap-2'
            onClick={() => { handleCheckout() }}
          >
            Checkout
            <CurrencyDollarIcon className='w-6 h-6' />
          </button>
        </Link>
      </div>
    </aside>
  )
}

export { CheckoutSideMenu }
