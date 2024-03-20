import { useContext } from "react"
import { Link } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"
import { Layout } from "../../Components/Layout"
import { OrderCard } from "../../Components/OrderCard"
import { ChevronLeftIcon } from "@heroicons/react/24/outline"

function MyOrder() {
  const context = useContext(ShoppingCartContext)
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  if (index === 'last') {
    index = context.order?.length - 1
  }
  return (
    <Layout>
      <div className="flex justify-between w-80 items-center mt-4">
        <Link to='/my-orders'>
          <ChevronLeftIcon className="h-6 w-6 cursor-pointer hover:text-[#8C326D] ml-2" />
        </Link>
        <h1 className="mr-3">My Order</h1>
      </div>
      <div className='flex flex-col w-80 gap-3'>
        {
          context.order?.[index].products.map(product => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.image}
              price={product.price}
            />
          ))
        }
      </div>
    </Layout>
  )
}

export { MyOrder }
