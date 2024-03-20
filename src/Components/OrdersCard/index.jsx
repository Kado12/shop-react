import { ChevronRightIcon } from "@heroicons/react/24/outline"
import './styles.css'

const OrdersCard = props => {
  // eslint-disable-next-line react/prop-types
  const { totalPrice, totalProducts, date } = props
  return (
    <div className="flex justify-between items-center border border-[#8C326D] w-72 m-4 rounded-xl p-3 cursor-default shadow-[#8C326D] shadow-lg">
      <p className="flex flex-col">
        <b>Date:</b> <span>{date}</span>
        <b>Total Products:</b> <span>{totalProducts}</span>
        <b>Total:</b> <span>{totalPrice}</span>
      </p>
      <ChevronRightIcon className="h-6 w-6 cursor-pointer text-[#8C326D] hover:w-8 hover:h-8" />
    </div>
  )
}

export { OrdersCard }