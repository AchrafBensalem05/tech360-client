import Image from "next/image";
import Link from "next/link";

import { Product } from "@/types/product";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-1 w-full sm:max-w-[50vw] md:max-w-[27vw] lg:max-w-[21vw] xl:max-w-[17vw] flex flex-col h-[40vw] sm:h-[35vw] md:h-[30vw] lg:h-[25vw] xl:h-[25vw] min-h-[300px] max-h-[400px]">
      {/* Bestseller Badge */}
      <Link href={product.link}>

      <div className="h-9">
        {product.bestseller && (
          <span className="bg-gray-200 text-xs font-semibold px-3 py-1 rounded-md">
            Bestseller
          </span>
        )}
      </div>

      {/* Product Image */}
      <div className="w-full flex-grow relative h-[60%]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* Product Info */}
      <div className="mt-2">
        {/* Product Name - Always Two Lines */}
        <h3 className="font-semibold text-sm line-clamp-2 h-[2.5rem]">
          {product.name}
        </h3>

        {/* Rating */}
        <p className="text-yellow-500 text-xs h-4">
          {product.rating && <>⭐ {product.rating}/5 ({product.reviews} reviews)</>}
        </p>

        {/* Pricing */}
        <p className="text-gray-500 text-xs">Starting at</p>
        <p className="text-lg font-bold">${product.price}</p>
        {product.oldPrice && (
          <p className="text-gray-400 line-through text-xs">${product.oldPrice} new</p>
        )}
      </div>
      </Link>
    </div>
  );
};

export default ProductCard;
