import Banner from '@/components/Banner'
import ProductsList from '@/components/ProductList'
import { shopifyPrivateFetch } from '@/shopify/shopifyPrivateFetch'
import { Container } from '@mui/material'

async function getAllProducts() {
  return shopifyPrivateFetch({
    query: `{
      products(sortKey:TITLE, first:100){
        nodes {
          id,
          title,
          priceRange {
            maxVariantPrice {
              amount
            },
          }
        }
      }
    }`
  });
}

export default async function Home() {

  const products = await getAllProducts();

  return (
    <>
      <Banner />
      <Container maxWidth="lg">
        <ProductsList products={products.body.data.products.nodes} />
      </Container>
    </>
  )
}
