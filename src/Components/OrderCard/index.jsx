import { XMarkIcon } from "@heroicons/react/24/outline"

const OrderCard = props => {
  // eslint-disable-next-line react/prop-types
  const { id, title, imageUrl, price, handleDelete } = props
  return (
    <div className="flex justify-between items-center p-2">
      <div className="flex items-center gap-2 w-2/3 justify-start">
        <figure className="w-20 h-20">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        </figure>
        <div className="w-5/6">
          <p className="text-md font-light">{title}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 w-1/3 justify-end">
        <p className="text-lg font-semibold">${price}</p>
        <XMarkIcon onClick={() => handleDelete(id)} className="w-6 h-6 cursor-pointer" />
      </div>
    </div>
  )
}

export { OrderCard }