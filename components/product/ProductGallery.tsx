import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const ProductGallery = ({ image }: { image: string }) => (
  <div className="relative">
    <Image
      src={image}
      alt="Product Image"
      width={500}
      height={500}
      className="rounded-lg shadow-lg"
    />
    <div className="flex gap-2 mt-4">
      <button className="p-2 bg-gray-200 rounded-full">
        <ChevronLeft />
      </button>
      <button className="p-2 bg-gray-200 rounded-full">
        <ChevronRight />
      </button>
    </div>
  </div>
);

export default ProductGallery;
