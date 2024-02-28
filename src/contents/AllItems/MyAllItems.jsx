// MyAllItems.js
import React, { useContext } from "react";
import { useRouter } from "next/router";
import { MyContext } from "../context/ProductContext";

function MyAllItems({products}) {
  const { setProducts } = useContext(MyContext);
  const router = useRouter();

  const handleAddToCart = (product) => {
    // Navigate to the cart page
    router.push("/cart");

    // Set the selected product in the context
    setProducts(product);
  };

  return (
    <div>
      <h1 className="text-4xl mt-4 font-bold text-center">Our Products</h1>
      <div className="grid md:grid-cols-4 mt-6 gap-3 mx-3">
        {Object.values(products).map((product) => (
          <div key={product.id} className="flex flex-col items-start">
            <div className="relative">
              <img
                src={product.img}
                alt={product.name}
                width={400}
                height={300}
                className="h-96 object-contain"
              />
              <span
                className="text-white cursor-pointer absolute right-0 top-5 bg-black px-3 py-2 rounded-md"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </span>
            </div>
            <div className="pl-4 bg-gray-300 w-full">
              <h4 className="text-red-800 text-2xl">{product.name}</h4>
              <h4 className="text-lg">Price: {product.price}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyAllItems;
