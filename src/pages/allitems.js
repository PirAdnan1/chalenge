import React from 'react'

// components
import MyAllItems from '@/contents/AllItems/MyAllItems';

function AllItems({products}) {
  return (
    <div>
        <MyAllItems products={products} />
    </div>
  )
}

export default AllItems

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/items");

  const products = await response.json();

  return {
    props: {
      products,
    },
  };
}