"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaUser, FaShoppingCart } from "react-icons/fa"; // Icons

const categories = [
  {
    name: "Tablets",
    subcategories: [
      { name: "iPad", link: "/ipad", image: "/images/ipad.jpg" },
      {
        name: "Samsung Galaxy Tab",
        link: "/galaxy-tab",
        image: "/images/galaxy-tab.jpeg",
      },
      {
        name: "More brands",
        link: "/more-brands",
        image: "/images/more-brands.png",
      },
      {
        name: "Accessories",
        link: "/tablet-accessories",
        image: "/images/accessories.jpeg",
      },
    ],
  },
  {
    name: "Smartphones",
    subcategories: [
      { name: "iPhone", link: "/iphone", image: "/images/iphone.jpeg" },
      { name: "Samsung", link: "/samsung", image: "/images/samsung.jpeg" },
      {
        name: "Other brands",
        link: "/other-brands",
        image: "/images/other-brands.png",
      },
    ],
  },
  // Add more categories as needed
];

export default function Navbar() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <nav className="bg-white shadow-md relative">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left: Logo and Navigation Links */}
        <div className="flex items-center space-x-6">
          <Link href="/">
            <Image
              src="/images/Tech360_final-logo.png"
              alt="Back Market"
              width={150}
              height={40}
            />
          </Link>
          <Link href="/about-us" className="text-gray-800 hover:text-gray-500">
            About Us
          </Link>
        </div>

        {/* Center: Search Bar */}
        <div className="flex-1 mx-10">
          <div className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-gray-500"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
              🔍
            </button>
          </div>
        </div>

        {/* Right: Profile, Language Selector, and Cart */}
        <div className="flex items-center space-x-6">
          <button className="text-gray-800 hover:text-gray-500">🇺🇸 US</button>
          <FaUser
            className="text-gray-800 hover:text-gray-500 cursor-pointer"
            size={20}
          />
          <FaShoppingCart
            className="text-gray-800 hover:text-gray-500 cursor-pointer"
            size={20}
          />
        </div>
      </div>

      {/* Bottom Section: Categories */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 flex space-x-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="h-full group"
              onMouseEnter={() => setHoveredCategory(category.name)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <button className="text-gray-800 hover:text-gray-500 focus:outline-none h-full py-3">
                {category.name}
              </button>

              {/* Full-Width Dropdown */}
              {hoveredCategory === category.name && (
                <div className="absolute -m-2 left-0 top-full w-screen bg-white border-t border-gray-200 shadow-lg p-6 z-50">
                  <div className="max-w-7xl mx-auto px-6">
                    <h3 className="text-lg font-semibold mb-4">
                      {category.name}
                    </h3>
                    <div className="grid grid-cols-4 gap-6">
                      {category.subcategories.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.link}
                          className="block text-center"
                        >
                          <Image
                            src={sub.image}
                            alt={sub.name}
                            width={150}
                            height={120}
                            className="rounded-lg shadow-md hover:shadow-lg transition"
                          />
                          <p className="text-gray-700 mt-2">{sub.name}</p>
                        </Link>
                      ))}
                    </div>
                    <div className="text-right mt-3">
                      <Link
                        href={`/category/${category.name.toLowerCase()}`}
                        className="text-blue-500 hover:underline"
                      >
                        See all
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
