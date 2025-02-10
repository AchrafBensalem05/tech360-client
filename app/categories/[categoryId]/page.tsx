import ProductCarousel from "@/app/components/ProductCarousel";
import { productData } from "@/data/ProductData";

const CategoriesPage: React.FC = () => {
  return (
    <div>
      <ProductCarousel  products={productData} />
    </div>
  );
};

export default CategoriesPage;
