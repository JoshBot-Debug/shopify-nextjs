import * as React from 'react';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Search from '@mui/icons-material/Search';

export default function SearchBar() {
  return (
    <FormControl sx={{ width: 300, mx: 2}} variant="standard">
      <Input
        placeholder='Search for a Category, Brand or Product'
        sx={{ fontSize: 14 }}
        startAdornment={
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        }
      />
    </FormControl>
  );
}