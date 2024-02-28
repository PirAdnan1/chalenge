// CartData.js
import React, { useContext } from "react";
import Link from "next/link";
import { MyContext } from "../context/ProductContext";
import Container from "@/components/Container";

function CartData() {
  const { products } = useContext(MyContext);

  return (
    <Container>
      <h4 className="text-gray-500 my-16 text-xl">
        Home / <span className="text-black">Cart</span>
      </h4>

      <div className="overflow-auto w-full mb-6">
        <table className="table-auto w-full text-left border-separate border-spacing-10 overflow-x-visible">
          <thead className="text-left">
            <tr className="shadow-bottom pl-3 pr-5">
              <th className="pl-3 py-5">Product</th>
              <th>Name</th>
              <th className="pr-3">Price</th>
            </tr>
          </thead>
          <tbody>
            {products && (
              <tr className="shadow-row">
                <td className="flex flex-col md:flex-row items-center gap-x-3 pl-3 py-5">
                  <img src={products.img} width={70} height={40} />
                </td>
                <td>{products.name}</td>
                <td>{products.price}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end shrink-0">
        <div className="mb-16 flex shrink-0 flex-col py-3 justify-items-end max-w-[400px] w-full border px-2 mt-9 border-black">
          <h3 className="text-xl">Cart Total</h3>
          <div className="flex items-center justify-between border-b border-b-black">
            <span className="py-3 text-lg">Subtotal</span>
            <span className="text-lg">{products.price}</span>
          </div>
          <div className="flex items-center justify-between border-b border-b-black">
            <span className="py-3 text-lg">Shipping</span>
            <span className="text-lg">Free</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="py-3 text-lg">Total</span>
            <span className="text-lg">{products.price}</span>
          </div>
          <button className="bg-secondary text-white px-4 py-2 rounded-md max-w-[260px] mx-auto">
            Proceed To Checkout
          </button>
        </div>
      </div>
    </Container>
  );
}

export default CartData;
