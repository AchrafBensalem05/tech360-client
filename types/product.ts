export interface ProductDetails {
  exclusiveOffer?: string;
  warranty?: string;
  delivery?: string;
  expressDelivery?: string;
  carrierCompatibility?: string;
  refurbishedStatus?: string;
  carrierSupport?: string;
  refurbished?: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  bestseller?: boolean;
  rating?: number;
  reviews?: number;
  image: string;
  link: string;
  details?: ProductDetails;
}
