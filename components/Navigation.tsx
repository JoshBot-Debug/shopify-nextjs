import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import logo from "../public/fc_logo.png";
import SearchBar from './SearchBar';
import ShoppingCart from './ShoppingCart';
import { Box, Container } from '@mui/material';
import Link from 'next/link';

export default function Navigation() {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Image
              priority
              src={logo}
              height={128}
              width={128}
              alt="Logo"
            />
            <SearchBar />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Link href={"#"}><Typography>Track Order</Typography></Link>
            <Link href={"#"}><Typography>Login / Register</Typography></Link>
            <ShoppingCart />
          </Box>
        </Toolbar>
      </Container>
      <Toolbar sx={{ backgroundColor: "secondary.main", display: "flex", justifyContent: "center",  gap: 2 }}>
        <Link href={"#"}><Typography>Boys Fasion</Typography></Link>
        <Link href={"#"}><Typography>Girls Fasion</Typography></Link>
        <Link href={"#"}><Typography>Footwear</Typography></Link>
        <Link href={"#"}><Typography>Toys</Typography></Link>
        <Link href={"#"}><Typography>Diapering</Typography></Link>
        <Link href={"#"}><Typography>Gear</Typography></Link>
        <Link href={"#"}><Typography>Feeding</Typography></Link>
        <Link href={"#"}><Typography>Bath</Typography></Link>
        <Link href={"#"}><Typography>Nusery</Typography></Link>
        <Link href={"#"}><Typography>Moms</Typography></Link>
        <Link href={"#"}><Typography>Health</Typography></Link>
        <Link href={"#"}><Typography>Boutiques</Typography></Link>
      </Toolbar>
    </AppBar>
  )
};