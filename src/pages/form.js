import React from "react";

// components
import FormDat from "@/contents/Form/FormDat";
function form({ products }) {
  return (
    <div>
      <FormDat products={products} />
    </div>
  );
}

export default form;

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/items");

  const products = await response.json();

  return {
    props: {
      products,
    },
  };
}
