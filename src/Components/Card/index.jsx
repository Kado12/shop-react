import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { PlusIcon, CheckIcon } from "@heroicons/react/24/outline"
import './styles.css'

const Card = (data) => {
  const context = useContext(ShoppingCartContext)

  const showProduct = (productDetail) => {
    context.openProductDetail()
    context.setProductToShow(productDetail)
    context.closeCheckoutSideMenu()
  }

  const addProductsToCart = (event, productData) => {
    event.stopPropagation()
    context.setCartProducts([...context.cartProducts, productData])
    context.openCheckoutSideMenu()
    context.closeProductDetail()
  }

  const renderIcon = (id) => {
    const isInCart = context.cartProducts.filter(product => product.id === id).length > 0

    if (isInCart) {
      return (
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-[#8C326D] w-6 h-6 rounded-full m-2"
          onClick={(event) => event.stopPropagation()}
        >
          <CheckIcon
            className="w-5 h-5 text-white"
          />
        </div >
      )
    } else {
      return (
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2"
          onClick={(event) => addProductsToCart(event, data.data)}
        >
          <PlusIcon
            className="w-5 h-5 text-[#8C326D]"
          />
        </div >
      )
    }

  }

  return (
    <div
      className="card-item flex flex-col cursor-pointer w-60 h-80 rounded-lg m-auto p-1.5 max-[768px]:w-52"
      onClick={() => showProduct(data.data)}
    >
      <figure className="relative mb-3 w-full h-4/5 ">
        <span
          className="absolute rounded-lg bottom-0 left-0 text-sm px-3 py-0.5 m-2 capitalize"
        >
          {data.data.category},
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.data.image} alt={data.data.title}
          loading="lazy"
        />
        {renderIcon(data.data.id)}
      </figure>
      <div className="flex justify-between h-1/5">
        <span className="text-sm font-light overflow-hidden">{data.data.title}</span>
        <span className="text-lg font-medium">${data.data.price}</span>
      </div>
    </div>
  )
}
export { Card }