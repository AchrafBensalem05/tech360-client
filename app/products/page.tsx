import React from "react";
import { ProductCard, ProductCarousel, ProductDetail, ProductGallery } from "@/components/ProductComponents";

async function getProducts() {
    const res = await fetch("http://localhost:3000/api/products"); // Adjust the URL if deployed
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
}

export default async function ProductsPage() {
    const products = await getProducts();

    return (
        <div>
            <h1>Products</h1>
            <ul>
                      <ProductCarousel  products={products} />
                
            </ul>
        </div>
    );
}
