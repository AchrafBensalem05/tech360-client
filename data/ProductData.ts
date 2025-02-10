export interface Product {
    id: number;
    name: string;
    price: number;
    oldPrice?: number;
    bestseller?: boolean;
    rating?: string;
    reviews?: number;
    image: string;
  }
  
  export const productData: Product[] = [
    {
      id: 1,
      name: "Hatch Rest 2ND Gen Night light",
      price: 38.49,
      oldPrice: 69.99,
      bestseller: true,
      image: "/images/product1.jpeg",
    },
    {
      id: 2,
      name: "Wyze WLPA19C lighting",
      price: 20.03,
      oldPrice: 40.48,
      bestseller: true,
      rating: "5/5",
      reviews: 3,
      image: "/images/product2.jpeg",
    },
    {
      id: 3,
      name: "Hatch Restore 2 Night light",
      price: 118.99,
      oldPrice: 199.99,
      bestseller: true,
      rating: "4.9/5",
      reviews: 2,
      image: "/images/product3.jpg",
    },
    {
      id: 4,
      name: "Ninja Nc301 Creami Ice cream maker",
      price: 290.0,
      oldPrice: 359.99,
      image: "/images/product4.jpeg",
    },
    {
        id: 5,
        name: "Hatch Rest 2ND Gen Night light",
        price: 38.49,
        oldPrice: 69.99,
        bestseller: true,
        image: "/images/product1.jpeg",
      },
      {
        id: 6,
        name: "Wyze WLPA19C lighting",
        price: 20.03,
        oldPrice: 40.48,
        bestseller: true,
        rating: "5/5",
        reviews: 3,
        image: "/images/product2.jpeg",
      },
      {
        id: 7,
        name: "Hatch Restore 2 Night light",
        price: 118.99,
        oldPrice: 199.99,
        bestseller: true,
        rating: "4.9/5",
        reviews: 2,
        image: "/images/product3.jpg",
      }
  ];
  