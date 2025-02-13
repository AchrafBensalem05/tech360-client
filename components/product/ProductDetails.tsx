const ProductDetails = ({ name, price, oldPrice, discount, rating, reviews }: any) => (
    <div>
      <h1 className="text-2xl font-bold">{name}</h1>
      <p className="text-yellow-500">{"★".repeat(Math.floor(rating))} {rating}/5 ({reviews} reviews)</p>
      <p className="text-lg font-semibold">${price.toFixed(2)} <span className="text-gray-500 line-through">${oldPrice.toFixed(2)}</span></p>
      <span className="bg-green-500 text-white px-2 py-1 rounded text-sm">Save ${discount.toFixed(2)}</span>
    </div>
  );
  
  export default ProductDetails;
  