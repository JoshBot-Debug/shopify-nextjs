import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';


export default function ProductsList({ products }: any) {
  return (
    <ImageList cols={5} gap={20} sx={{mt: 4}}>
      {products.map((product: any) => (
        <ImageListItem key={product.id}>
          {/* Product's image*/}
          <div className='w-[200px] h-[200px]'>
            <img
              src={"https://picsum.photos/200"}
              srcSet={"https://picsum.photos/200"}
              alt={product.title}
              loading="lazy"
              className='w-full h-full'
            />
          </div>
          {/* Product's name + price under the image */}
          <ImageListItemBar
            title={product.title}
            subtitle={<span>Price: {product.priceRange.maxVariantPrice.amount}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
};