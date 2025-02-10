import Image from "next/image";

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

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-60">
      {product.bestseller && (
        <span className="bg-gray-200 text-xs font-semibold px-2 py-1 rounded-md">
          Bestseller
        </span>
      )}
      <div className="w-full h-40 relative my-2">
        <Image src={product.image} alt={product.name} layout="fill" objectFit="contain" />
      </div>
      <h3 className="font-semibold text-sm">{product.name}</h3>
      {product.rating && (
        <p className="text-yellow-500 text-xs">⭐ {product.rating}/5 ({product.reviews} reviews)</p>
      )}
      <p className="text-gray-500 text-xs">Starting at</p>
      <p className="text-lg font-bold">${product.price}</p>
      {product.oldPrice && (
        <p className="text-gray-400 line-through text-xs">${product.oldPrice} new</p>
      )}
    </div>
  );
};

export default ProductCard;
