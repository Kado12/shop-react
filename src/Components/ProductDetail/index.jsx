import { useContext } from 'react'
import { ShoppingCartContext } from "../../Context"
import { XMarkIcon } from '@heroicons/react/24/outline'
import "./styles.css"

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext)

  return (
    <aside
      className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed bg-white right-0 border border-black rounded-md`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-lg">Detail</h2>
        <div className='cursor-pointer'>
          <XMarkIcon
            onClick={() => context.closeProductDetail()}
            className='w-6 h-6'
          />
        </div>
      </div>
      <figure className="px-6">
        <img
          className='w-full h-full rounded-lg'
          src={context.productToShow.image}
          alt={context.productToShow.title}
        />
      </figure>
      <p className="flex flex-col justify-between p-6">
        <span className='font-medium text-2xl mb-2'>${context.productToShow.price}</span>
        <span className='font-medium text-xl'>{context.productToShow.title}</span>
        <span className='font-light text-sm'>{context.productToShow.description}</span>
      </p>
    </aside>
  )
}

export { ProductDetail }