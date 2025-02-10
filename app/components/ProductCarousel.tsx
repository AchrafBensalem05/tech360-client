"use client";
import { useState } from "react";
import ProductCard from "./ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  bestseller?: boolean;
  rating?: string;
  reviews?: number;
  image: string;
}

interface ProductCarouselProps {
  products: Product[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;

  const handleNext = () => {
    if (startIndex + itemsPerPage < products.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  // Get the visible products for the current page
  const visibleProducts = products.slice(startIndex, startIndex + itemsPerPage);
  const emptySlots = itemsPerPage - visibleProducts.length; // Number of missing products

  return (
    <div className="relative w-full max-w-screen-xl mx-auto p-6">
      {/* Header with buttons aligned to the top right */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Shop our best sales</h2>
        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            className="p-2 bg-gray-200 rounded-full disabled:opacity-50"
            disabled={startIndex === 0}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 bg-gray-200 rounded-full disabled:opacity-50"
            disabled={startIndex + itemsPerPage >= products.length}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Carousel Container (Fixed Width) */}
      <div className="w-full overflow-hidden">
        <div className="flex gap-4">
          {/* Render products */}
          {visibleProducts.map((product) => (
            <div key={product.id} className="w-1/4">
              <ProductCard product={product} />
            </div>
          ))}
          {/* Placeholder items to maintain layout when fewer than 4 items */}
          {Array.from({ length: emptySlots }).map((_, index) => (
            <div key={`empty-${index}`} className="w-1/4 opacity-0"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
