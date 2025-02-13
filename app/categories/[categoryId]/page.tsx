import {ProductCarousel} from "@/components/ProductComponents";
import { productData } from "@/data/ProductData";

const CategoriesPage: React.FC = () => {
  return (
    <>
      <ProductCarousel  products={productData} />
    </>
  );
};

export default CategoriesPage;
