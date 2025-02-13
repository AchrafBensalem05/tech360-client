const PurchaseOptions: React.FC = () => (
  <div className="space-y-3">
    <button className="w-[50%] bg-black text-white py-2 rounded-lg text-lg font-semibold hover:bg-gray-800">
      Add to cart
    </button>
    <p className="text-gray-600">
      Buy now, pay later.{" "}
      <a href="#" className="text-blue-600 underline">
        Learn more
      </a>
    </p>
  </div>
);

export default PurchaseOptions;
