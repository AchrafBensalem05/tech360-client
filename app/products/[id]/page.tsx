// 'use client';
// import { useParams } from "next/navigation";
// import { productData } from "@/data/ProductData";
// import Breadcrumbs from "@/components/product/Breadcrumbs";
// import ProductGallery from "@/components/product/ProductGallery";
// import OfferBanner from "@/components/product/OfferBanner";
// import ProductDetails from "@/components/product/ProductDetails";
// import PurchaseOptions from "@/components/product/PurchaseOptions";
// import DeliveryWarranty from "@/components/product/DeliveryWarranty";

// const ProductPage = () => {
//   const { id } = useParams<{ id: string }>();
//   const product = productData.find((p) => p.id === Number(id));

//   if (!product) return <p className="text-center mt-10 text-xl">Product not found.</p>;

//   return (
//     <div className="bg-[#f8f9fc] min-h-screen p-6">
//     <Breadcrumbs productName={product.name} />
//     <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
//       <ProductGallery image={product.image} />
//       <div className="space-y-4">
//         <OfferBanner offer={product.details?.exclusiveOffer || ""} />
//         <ProductDetails
//           name={product.name}
//           price={product.price}
//           oldPrice={product.oldPrice}
//           discount={product.discount}
//           rating={product.rating}
//           reviews={product.reviews}
//         />
//         <PurchaseOptions />
//         <DeliveryWarranty details={product.details} />
//       </div>
//     </div>
//   </div>
  
//   );
// };

// export default ProductPage;
'use client';
import { Product } from "@/types/product";
import { productData } from "@/data/ProductData";
import {useParams}  from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProductDetail } from "@/components/ProductComponents";

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
    const product = productData.find((p) => p.id === Number(id));
  return (
    <>
    <ProductDetail product={product}/>
    </>
  );
}
