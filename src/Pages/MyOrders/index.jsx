import { useContext } from "react"
import { Layout } from "../../Components/Layout"
import { Link } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"
import { OrdersCard } from "../../Components/OrdersCard"

function MyOrders() {
  const context = useContext(ShoppingCartContext)
  console.log(context.order)

  return (
    <Layout>
      {
        context.order.map((order, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
              date={order.date}
            />
          </Link>
        ))
      }

    </Layout>
  )
}

export { MyOrders }
