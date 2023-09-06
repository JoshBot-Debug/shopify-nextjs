import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Link from 'next/link';


export default function ProductsList({ products }: any) {

  return (
    <ImageList cols={5} gap={20} sx={{ mt: 4 }}>
      {products.map((product: any) => {
        const productGid = product.id.split('/');
        return (
          <Link
            key={product.id}
            href={`/product/${productGid[productGid.length - 1]}`}
          >
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
          </Link>
        )
      })}
    </ImageList>
  )
};