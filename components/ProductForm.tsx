"use client";
import { Box, Button, Chip, Typography } from "@mui/material";
import { useState } from "react";
import QuantityInput from "./NumberInput";
import { Check, Close, ShoppingCart } from "@mui/icons-material";

type ProductVariantType = {
  id: string;
  availableForSale: boolean;
  quantityAvailable: number;
  selectedOptions: {
    name: string;
    value: string;
  }[];
  image: {
    url: string;
  };
}

const ProductForm = (props: { product: any }) => {

  const product = props.product;

  const productVariants = props.product.variants.nodes as ProductVariantType[];

  const { options, disabledVariant } = productVariants.reduce((r, c) => {
    c.selectedOptions.forEach(({ name, value }) => {
      if (!c.availableForSale && r.disabledVariant[`${name}-${value}`] === undefined) r.disabledVariant[`${name}-${value}`] = true;
      if (c.availableForSale && r.disabledVariant[`${name}-${value}`] === true) r.disabledVariant[`${name}-${value}`] = false;
      if (!r.options[name]) r.options[name] = [];
      if (!r.options[name].includes(value)) r.options[name].push(value);
    })
    return r
  }, { options: {}, disabledVariant: {} } as { options: { [key: string]: string[] }, disabledVariant: { [key: string]: boolean } })

  const [selectedVariant, setSelectedVariant] = useState<ProductVariantType | undefined>(() => productVariants.find(p => p.selectedOptions.every(o => options[o.name][0] === o.value)));
  const [selectedOption, setSelectedOption] = useState<Record<string, string>>(() => Object.entries(options).reduce((c, r) => ({ ...c, [r[0]]: r[1][0] }), {}));

  const onChange = (name: string, value: string) => {
    const nextOptions = { ...selectedOption, [name]: value };
    const selectedVariant = productVariants.find(p => p.selectedOptions.every(o => nextOptions[o.name] === o.value))
    setSelectedOption(nextOptions);
    setSelectedVariant(selectedVariant);
  };

  return (
    <Box>
      <Typography variant="h1" sx={{ fontSize: 30, fontWeight: 600, mb: 2 }}>{product?.title}</Typography>
      <Box mb={2}>
        <AvailableForSale isAvailable={!!selectedVariant?.availableForSale} />
      </Box>
      <Box mb={2}>
        <Typography className="flex items-end gap-2">MRP: <span className="text-4xl text-primary">₹{product.priceRange.maxVariantPrice.amount}</span></Typography>
        <Typography variant="subtitle2">Free shipping for orders above ₹399.00</Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start" }} mb={2}>
        <Typography mb={1} fontWeight={"bold"}>Quantity</Typography>
        <QuantityInput max={selectedVariant?.quantityAvailable ?? 0} disabled={!selectedVariant?.quantityAvailable} />
      </Box>
      {Object.entries(options).map(([variantType, variantOptions]) => (
        <Box key={variantType} mb={2}>
          <Typography mb={1} fontWeight={"bold"}>{variantType}</Typography>
          <Box>
            {variantOptions.map(option => (
              <Button
                key={option}
                sx={{ mr: 2 }}
                variant={selectedOption[variantType] === option ? "contained" : "outlined"}
                value={option}
                onClick={() => onChange(variantType, option)}
                disabled={disabledVariant[`${variantType}-${option}`]}
              >{option}</Button>
            ))}
          </Box>
        </Box>
      ))}
      <Box my={4}>
        <Button
          sx={{ mb: 2, width: "100%" }}
          variant={"contained"}
          disabled={!selectedVariant?.availableForSale}
          startIcon={<ShoppingCart />}
        >Add to cart</Button>
        <Button
          sx={{ width: "100%" }}
          variant={"outlined"}
          disabled={!selectedVariant?.availableForSale}
        >Buy now</Button>
      </Box>
      <Box mb={2}>
        <Typography mb={1} fontWeight={"bold"}>Description</Typography>
        <Typography>{product.description}</Typography>
      </Box>
      <Box>
        <Typography variant="subtitle2" mb={1}>WE ACCEPT: PAYPAL, DEBIT AND CREDIT CARDS, INTERNET BANKING, WALLETS, LANDMARK REWARDS POINT, GIFT CARDS</Typography>
        <Typography variant="subtitle2" mb={1}>Orders are delivered within 6 days in Kerala and within 8 days in other States. Free Shipping for orders above 350.</Typography>
        <Typography variant="subtitle2">No Refund, Only Exchange. Click Here to read policy.</Typography>
      </Box>
    </Box>
  )
};


function AvailableForSale(props: { isAvailable: boolean; }) {
  if (!props.isAvailable) return <Chip color="error" icon={<Close />} label="Out of stock" />
  return <Chip color="success" icon={<Check />} label="In stock" />
}

export default ProductForm;