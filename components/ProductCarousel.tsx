"use client";
import { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Product } from "@/types/product";

interface ProductCarouselProps {
  products: Product[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  // ✅ Update items per page based on screen size
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1); // Mobile: 1 items per page
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2); // Mobile: 2 items per page
      } else if (window.innerWidth < 1044) {
        setItemsPerPage(3); // Tablet: 3 items per page
      } else {
        setItemsPerPage(4); // Desktop: 4 items per page
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

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

  const visibleProducts = products.slice(startIndex, startIndex + itemsPerPage);
  const emptySlots = itemsPerPage - visibleProducts.length;

  return (
    <div className="relative w-full max-w-screen-xl mx-auto p-6">
      {/* Header with navigation buttons */}
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

      <div className="w-full overflow-x-clip py-4 sm:py-6 px-2 md:py-6 lg:px-4 xl:px-6">
        <div className="flex gap-2 w-full">
          {/* Render products */}
          {visibleProducts.map((product) => (
            <div
              key={product.id}
              className="sm:w-full md:w-[50%] lg:w-[33.33%] xl:w-[25%] flex-shrink-0"
            >
              <ProductCard product={product} />
            </div>
          ))}

          {/* Empty slots to maintain layout */}
          {Array.from({ length: emptySlots }).map((_, index) => (
            <div
              key={`empty-${index}`}
              className="sm:w-full md:w-[50%] lg:w-[33.33%] xl:w-[25%] flex-shrink-0 opacity-0"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
