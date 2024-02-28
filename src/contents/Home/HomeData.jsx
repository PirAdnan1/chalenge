import React from "react";
import Link from "next/link";

// assets
import Cart from "@/icons/Cart";

function HomeData() {
  return (
    <div>
      <nav className="flex items-center justify-between px-5 bg-gray-500 py-3 text-white">
        <div />
        <div className="flex items-center gap-x-6">
          <Link href="/form" className="text-lg">
            Put Items up for Sale
          </Link>
          <Link href="/allitems" className="text-lg">
            Browse our Items
          </Link>
          <Link href="#" className="text-lg">
            Checkout
          </Link>
        </div>
        <div>
          <Link href="cart">
            <Cart />
          </Link>
        </div>
      </nav>
      <div className="">
        <h1 className="text-4xl font-semibold">My Randome Store</h1>
      </div>
    </div>
  );
}

export default HomeData;
