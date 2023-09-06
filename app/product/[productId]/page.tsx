import { shopifyPrivateFetch } from "@/shopify/shopifyPrivateFetch";
import { Box, Container } from "@mui/material";
import ProductForm from "@/components/ProductForm";

async function getProductById(id: string) {
  return shopifyPrivateFetch({
    query: `query getProductById($id: ID!) {
      product(id: $id) {
        id
        title
        tags
        availableForSale
        productType
        description
        tags
        featuredImage {
          url
        }
        variants(first: 100) {
          nodes {
            id
            availableForSale
            quantityAvailable
            selectedOptions {
              name
              value
            }
            image {
              url
            }
          }
        }
        priceRange {
          maxVariantPrice {
            amount
          }
        }
      }
    }`,
    variables: { id }
  });
}


export default async function Products({ params }: { params: { productId: string } }) {

  const product = (await getProductById(`gid://shopify/Product/${params.productId}`)).body.data.product;

  return (
    <Container maxWidth="lg" sx={{ display: "flex", my: 2, border: 1, p: 4, borderColor: "lightgray" }}>
      <Box sx={{ width: "50%" }}>
        <img
          alt="Product Image"
          src={product?.featuredImage?.url}
          className="w-full h-full max-h-[600px] object-contain"
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3, width: "50%" }}>
        <ProductForm product={product}/>
      </Box>
    </Container>
  )
}
