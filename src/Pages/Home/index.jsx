import { useContext } from "react"
import { Layout } from "../../Components/Layout"
import { Card } from "../../Components/Card"
import { ProductDetail } from "../../Components/ProductDetail"
import { ShoppingCartContext } from "../../Context"
import './styles.css'

function Home() {
  const context = useContext(ShoppingCartContext)

  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return (
        context.filteredItems?.map((item) => (
          <Card key={item.id} data={item} />
        ))
      )
    } else {
      return ("Don't coincidences")
    }

  }



  return (
    <>
      <Layout >
        <div>
          <h1 className="text-xl mb-3 mt-3">Exclusive Products</h1>
        </div>
        <input
          className="p-4 mb-6 border border-[#8C326D] rounded-md max-sm:w-72 w-96"
          type="text"
          placeholder="Search a product"
          onChange={(event) => context.setSearchByTitle(event.target.value)}
        />
        <div className="products-card gap-4 grid-cols-4 max-[1024px]:grid-cols-3 max-[768px]:grid-cols-2 max-[500px]:grid-cols-1">
          {renderView()}
        </div>
        <ProductDetail />
      </Layout>
    </>
  )
}

export { Home }
