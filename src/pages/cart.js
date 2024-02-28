import React from 'react'

// components
import CartData from '@/contents/Cart/CartData'

function cart({products}) {
  return (
    <div>
        <CartData products={products} />
    </div>
  )
}

export default cart

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/items");

  const products = await response.json();

  return {
    props: {
      products,
    },
  };
}