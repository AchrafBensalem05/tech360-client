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

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="p-6">
      {/* Filter & Sorting Controls */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-3">
          <button className="px-4 py-2 border rounded-full">Price ▼</button>
          <button className="px-4 py-2 border rounded-full">Categories ▼</button>
          <button className="px-4 py-2 border rounded-full">Brand ▼</button>
          <button className="px-4 py-2 border rounded-full flex items-center gap-1">
            Filter <span>⚙️</span>
          </button>
        </div>
        <button className="px-4 py-2 border text-white rounded-full">Sort Bestsellers ▼</button>
      </div>

      {/* Product Count */}
      <p className="text-gray-900 mb-4 ">{products.length} products</p>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
            {product.bestseller && (
              <span className="bg-gray-200 text-sm px-2 py-1 rounded-md font-semibold">
                Bestseller
              </span>
            )}
            <div className="w-full h-40 relative my-2">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h3 className="font-semibold">{product.name}</h3>
            {product.rating && (
              <p className="text-yellow-500 text-sm">⭐ {product.rating} ({product.reviews} reviews)</p>
            )}
            <p className="text-gray-500 text-sm">Starting at</p>
            <p className="text-lg font-bold">${product.price}</p>
            {product.oldPrice && (
              <p className="text-gray-400 line-through text-sm">${product.oldPrice} new</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
