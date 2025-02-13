'use client';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/types/product";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Star, Truck, RefreshCcw, ShieldCheck } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <Card className="relative w-full max-w-64 rounded-xl shadow-lg border bg-white hover:shadow-xl transition-shadow duration-300">
      {/* <Link href={product?.link}> */}
        <CardContent className="p-4">
          {/* Bestseller Badge */}
          {product.bestseller && (
            <Badge className="absolute top-2 left-2 bg-gray-200 text-gray-800 text-xs">
              Bestseller
            </Badge>
          )}
          {/* Product Image */}
          <div className="w-full flex justify-center p-4">
            <img
              src={product.image}
              alt={product.name}
              className="h-32 object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="mt-4 space-y-1">
            <h3 className="font-semibold text-sm line-clamp-2 h-[2.5rem]">
              {product.name}
            </h3>
            <p className="text-sm text-gray-500">128 GB - Black</p>

            {/* Rating */}
            <div className="flex items-center space-x-1 text-yellow-500 line-clamp-1">
              {[...Array(5)].map((_, i) => {
                const rating = product.rating ?? 0; // Get the rating
                const fullStars = Math.floor(rating); // Get the full stars count
                const hasHalfStar = rating - fullStars >= 0.5; // Check if there’s a half star
                return (
                  <Star
                    key={i}
                    size={14}
                    fill={
                      i < fullStars
                        ? "currentColor"
                        : i === fullStars && hasHalfStar
                        ? "url(#half-star)"
                        : "none"
                    }
                    stroke="currentColor"
                  />
                );
              })}

              <span className="text-sm text-gray-600 line-clamp-1">
                {product.rating}{" "}
                {product.reviews && <span>({product.reviews} reviews)</span>}
              </span>
            </div>

            {/* SVG Definition for Half Star Effect */}
            <svg width="0" height="0">
              <defs>
                <linearGradient id="half-star">
                  <stop offset="50%" stopColor="currentColor" />
                  <stop offset="50%" stopColor="transparent" />
                </linearGradient>
              </defs>
            </svg>

            {/* Pricing */}
            <p className="text-sm text-gray-500">Starting at</p>
            <p className="text-xl font-bold text-gray-900">{product.price}DA</p>
            <p className="text-sm text-gray-400 line-through">
              {product.oldPrice}
            </p>
          </div>
        </CardContent>
      {/* </Link> */}
    </Card>
  );
};

interface ProductCarouselProps {
  products: Product[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Heading */}

      {/* Carousel */}
      <Carousel 
      opts={{
        align: "start", // Ensure the carousel aligns items to the start
      }}
      className="relative">
      <h2 className="text-2xl font-semibold mb-4">Shop our best sales</h2>

        {/* Carousel Content */}
        <CarouselContent className="-ml-4 flex">
          {products.map((product) => (
            <CarouselItem
              key={product.id}
              className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/4"
            >
              <ProductCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Buttons */}
        <div className="absolute top-0 right-0 flex space-x-2 mt-4 mr-4">
          <CarouselPrevious className="hidden md:block bg-white border rounded-full p-2 shadow-md hover:bg-gray-100" />
          <CarouselNext className="hidden md:block bg-white border rounded-full p-2 shadow-md hover:bg-gray-100" />
        </div>
      </Carousel>
    </div>
  );
};

  
  const ProductDetail: React.FC<{product: Product}> = ({ product }) => {
    const images = [
      "/images/product1.jpeg",
      "/images/product2.jpeg",
      "/images/product3.jpg",
      "/images/product4.jpeg",
    ];
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 max-w-6xl mx-auto">
        {/* Left Side: Product Image */}
        {/* <div className="flex flex-col items-center">
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            className="rounded-lg object-cover"
          />
          <div className="flex space-x-2 mt-4">
          
            {[1, 2, 3, 4].map((_, i) => (
              <div key={i} className="w-16 h-16 bg-gray-200 rounded-lg"></div>
            ))}
          </div>
        </div> */}
        <ProductGallery images={images} />
  
        {/* Right Side: Product Details */}
        <div className="space-y-4">
          {/* Badge */}
          {product.bestseller && (
            <Badge className="bg-green-200 text-green-800">{product.bestseller}</Badge>
          )}
  
          {/* Title */}
          <h1 className="text-2xl font-bold">{product.name}</h1>
  
          {/* Rating */}
          <div className="flex items-center space-x-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                fill={i < product.rating ? "gold" : "none"}
                stroke="gold"
              />
            ))}
            <span className="text-gray-600 text-sm">
              {product.rating}/5 ({product.reviews} reviews)
            </span>
          </div>
  
          {/* Price */}
          <div className="relative flex justify-between items-start space-y-1">
  {/* Price on the left */}
  <span className="px-0 py-4 text-3xl font-bold text-gray-900">{product.price}DA</span>

  {/* Add to Cart button on the right */}
  <Button className="py-6 px-10 bg-black text-white hover:bg-gray-800">
    Add to Cart
  </Button>
</div>

{/* Discount info below */}
<span className="text-sm text-gray-500 line-through">
  {product.oldPrice}DA <span className="text-green-600">Save {product.oldPrice - product.price}DA</span>
</span>

  
          {/* Add to Cart */}
          
  
          {/* Additional Info */}
          <div className="space-y-2 mt-4 text-sm">
            <div className="flex items-center space-x-2">
              <Truck className="text-gray-600" size={18} />
              <span>Free delivery by {product.deliveryDate}</span>
            </div>
  
            {product.expressDelivery && (
              <div className="flex items-center space-x-2">
                <Truck className="text-gray-600" size={18} />
                <span>Express delivery available: {product.expressDelivery}</span>
              </div>
            )}
  
            <div className="flex items-center space-x-2">
              <RefreshCcw className="text-gray-600" size={18} />
              <span>Free 30-day returns • {product.warranty}</span>
            </div>
  
            <div className="flex items-center space-x-2">
              <ShieldCheck className="text-gray-600" size={18} />
              <span>{product.carrierSupport}</span>
            </div>
  
            <div className="flex items-center space-x-2">
              <ShieldCheck className="text-gray-600" size={18} />
              <span>{product.refurbished}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ProductGallery = ({ images }: { images: string[] }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [startIndex, setStartIndex] = useState(0);
    const visibleThumbnails = 4; // Number of thumbnails visible at a time
  
    const handlePrev = () => {
      if (selectedIndex > 0) {
        setSelectedIndex(selectedIndex - 1);
        if (selectedIndex - 1 < startIndex) {
          setStartIndex(startIndex - 1);
        }
      }
    };
  
    const handleNext = () => {
      if (selectedIndex < images.length - 1) {
        setSelectedIndex(selectedIndex + 1);
        if (selectedIndex + 1 >= startIndex + visibleThumbnails) {
          setStartIndex(startIndex + 1);
        }
      }
    };
  
    return (
      <div className="flex flex-col items-center">
        {/* Main Image Preview (Fixed Size) */}
        <div className="w-[300px] h-[300px] border rounded-lg overflow-hidden flex items-center justify-center bg-gray-100">
          <Image
            src={images[selectedIndex]}
            alt="Selected product"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
  
        {/* Thumbnails with Navigation (Fixed Button Position) */}
        <div className="flex items-center mt-4">
          {/* Prev Button (Fixed Position) */}
          <button
            onClick={handlePrev}
            className="p-2 bg-gray-200 rounded-full disabled:opacity-50"
            disabled={selectedIndex === 0}
          >
            <ChevronLeft />
          </button>
  
          {/* Thumbnails List (Scrollable) */}
          <div className="flex space-x-2 mx-2">
            {images.slice(startIndex, startIndex + visibleThumbnails).map((img, index) => (
              <div
                key={index}
                className={`w-16 h-16 rounded-lg overflow-hidden cursor-pointer border ${
                  images[selectedIndex] === img ? "border-black" : "border-transparent"
                }`}
                onClick={() => setSelectedIndex(images.indexOf(img))}
              >
                <Image src={img} alt="Thumbnail" width={64} height={64} className="object-cover" />
              </div>
            ))}
          </div>
  
          {/* Next Button (Fixed Position) */}
          <button
            onClick={handleNext}
            className="p-2 bg-gray-200 rounded-full disabled:opacity-50"
            disabled={selectedIndex >= images.length - 1}
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    );
  };
export { ProductCarousel, ProductCard, ProductDetail, ProductGallery };
