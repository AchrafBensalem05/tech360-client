import Link from "next/link";
import { ChevronRight } from "lucide-react";

const Breadcrumbs = ({ productName }: { productName: string }) => (
  <nav className="text-sm text-gray-600">
    <ul className="flex items-center space-x-2">
      <li>
        <Link href="/" className="hover:underline">Home</Link>
      </li>
      <li>
        <ChevronRight size={16} />
      </li>
      <li>
        <Link href="/products" className="hover:underline">Products</Link>
      </li>
      <li>
        <ChevronRight size={16} />
      </li>
      <li className="text-gray-900 font-medium">{productName}</li>
    </ul>
  </nav>
);

export default Breadcrumbs;
