import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ShoppingCartContext } from '../../Context'
import { OrderCard } from '../OrderCard'
import { totalPrice } from '../../utils'
import './styles.css'

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext)



  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id != id)
    context.setCartProducts(filteredProducts)
    context.count -= 1
    context.setCount(context.count)
  }

  // const plusCard = () => {
  //   const plusPrice = context.cartProducts.reduce((total, product) => total + product.price, 0)
  //   return plusPrice.toFixed(2)
  // }
  // const total = plusCard()


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
      <div className='products-price overflow-y-auto'>
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
      <div className="flex justify-between items-center p-6 bottom-0 fixed w-[358px] bg-white rounded-md">
        <h2 className="font-medium text-lg">Total</h2>
        {/* <h2 className="font-medium text-lg">${total}</h2> */}
        <h2 className="font-medium text-lg">${totalPrice(context.cartProducts)}</h2>
      </div>
    </aside>
  )
}

export { CheckoutSideMenu }
