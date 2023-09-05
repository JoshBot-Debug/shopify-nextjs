import Banner from '@/components/Banner'
import Navigation from '@/components/Navigation'
import ProductsList from '@/components/ProductList'
import { shopifyFetch } from '@/shopify/shopifyFetch'
import { Box, Container } from '@mui/material'

async function getAllProducts() {
  return shopifyFetch({
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
    <Box>
      <Navigation />
      <Banner />
      <Container maxWidth="lg">
        <ProductsList products={products.body.data.products.nodes} />
      </Container>
    </Box>
  )
}
