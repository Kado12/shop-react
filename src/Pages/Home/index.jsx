import { useState, useEffect } from "react"
import { Layout } from "../../Components/Layout"
import { Card } from "../../Components/Card"
import { ProductDetail } from "../../Components/ProductDetail"

function Home() {
  const [items, setItems] = useState(null)
  useEffect(() => {
    const url = 'https://fakestoreapi.com/products'
    fetch(url)
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(error => console.log(error))
  }, [])

  return (
    <>
      <Layout >
        Home
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg max-[950px]:grid-cols-2 max-[950px]:w-[80%] max-[425px]:grid-cols-1 max-[425px]:w-[80%]">
          {
            items?.map((item) => (
              <Card key={item.id} data={item} />
            ))
          }
        </div>
        <ProductDetail />
      </Layout>
    </>
  )
}

export { Home }
