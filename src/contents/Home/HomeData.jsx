import React from "react";
import Link from "next/link";

// /components
import Container from "@/components/Container";

// assets
import Cart from "@/icons/Cart";

function HomeData() {
  return (
    <div className="bg-MyBg h-screen">
      <nav className="flex items-center justify-between px-5 bg-gray-500/40 py-3 text-white">
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
      <Container>
        <h1 className="text-4xl font-semibold mt-7 text-white">My Randome Store</h1>
      </Container>
    </div>
  );
}

export default HomeData;
