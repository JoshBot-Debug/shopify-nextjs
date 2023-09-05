'use client';
import { Badge, BadgeProps, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled } from '@mui/material/styles';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.primary}`,
    padding: '0 4px',
  },
}));


export default function ShoppingCart() {
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={4} color="secondary">
        <ShoppingCartIcon sx={{ color: "black" }} />
      </StyledBadge>
    </IconButton>
  )
}