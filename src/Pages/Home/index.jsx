import { useContext } from "react"
import { Layout } from "../../Components/Layout"
import { Card } from "../../Components/Card"
import { ProductDetail } from "../../Components/ProductDetail"
import { ShoppingCartContext } from "../../Context"

function Home() {
  const context = useContext(ShoppingCartContext)
  console.log(context.filteredItems)

  const renderView = () => {
    if (context.searchByTitle?.length > 0) {
      if (context.filteredItems?.length > 0) {
        return (
          context.filteredItems?.map((item) => (
            <Card key={item.id} data={item} />
          ))
        )
      } else {
        return ("Don't coincidences")
      }
    } else {
      return (
        context.filteredItems?.map((item) => (
          <Card key={item.id} data={item} />
        ))
      )
    }
  }



  return (
    <>
      <Layout >
        <div>
          <h1 className="text-xl mb-3 mt-3">Exclusive Products</h1>
        </div>
        <input
          className="p-4 mb-6 border border-black rounded-md w-72"
          type="text"
          placeholder="Search a product"
          onChange={(event) => context.setSearchByTitle(event.target.value)}
        />
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg max-[950px]:grid-cols-2 max-[950px]:w-[80%] max-[425px]:grid-cols-1 max-[425px]:w-[80%]">
          {renderView()}
        </div>
        <ProductDetail />
      </Layout>
    </>
  )
}

export { Home }
