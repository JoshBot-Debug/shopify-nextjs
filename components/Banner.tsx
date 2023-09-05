'use client';
import { Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

const images = [
  "/banner/1.avif",
  "/banner/2.avif",
]

export default function Banner() {

  return (
    <Carousel sx={{height: 400}}>
      {images.map((fileName) => (
        <Box key={fileName} sx={{height: 400}}>
          <img
            key={fileName}
            className='w-full h-full object-contain'
            src={fileName}
            alt={fileName}
          />
        </Box>
      ))}
    </Carousel>
  )
}