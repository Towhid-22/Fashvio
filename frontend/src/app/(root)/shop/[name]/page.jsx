"use client";
import Breadcrumb from "@/components/common/Breadcrumb";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { LuHeart } from "react-icons/lu";

const ProductPage = () => {
  const { name } = useParams();
  const [product, setProduct] = useState({});
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [colorsBySize, setColorsBySize] = useState([]);
  const [variant, setVariant] = useState([]);
  // ================= fetch product =================
  useEffect(() => {
    async function getSingleProduct() {
      const res = await axios
        .get(
          `${process.env.NEXT_PUBLIC_URL}/api/product/get-single-product/${name}`,
        )
        .then((res) => {
          setProduct(res.data.data);
          setVariant(res.data.data.variant);
        });
    }
    getSingleProduct();
  }, [name]);
  // ================= default select =================
  useEffect(() => {
    if (variant?.length > 0) {
      setSelectedSize(variant[0].size);
    }
  }, [product]);
  // ================= unique sizes  =================
  const uniqueSizes = variant
    ? Array.from(new Set(variant.map((item) => item.size)))
    : [];
  // ================= colors by size  =================
  useEffect(() => {
    if (!selectedSize || !variant) return;
    const filtered = variant.filter((item) => item.size === selectedSize);
    // remove duplicate colors
    const uniqueColors = Array.from(
      new Map(filtered.map((item) => [item.color, item])).values(),
    );
    setColorsBySize(uniqueColors);
    setSelectedColor(uniqueColors[0]?.color || null);
  }, [selectedSize, product]);
  // ================= selected variant =================
  const selectedVariant =
    variant.find(
      (item) => item.size === selectedSize && item.color === selectedColor,
    ) || null;

  const isInStock =
    !variant || variant.length === 0 ? true : selectedVariant?.stock > 0;

  return (
    <div className="bg-gray-50 pb-20">
      <Breadcrumb />

      <div className="max-w-[1580px] mx-auto mt-8 px-4">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-[45%]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[520px] border rounded-lg object-contain p-4"
            />
          </div>
          <div className="w-full lg:w-[50%]">
            <h2 className="text-4xl font-bold">{product.name}</h2>

            <p className="flex items-center gap-2 mt-2">
              <FaStar className="text-yellow-400" />
              <span className="text-gray-400">(32 Reviews)</span>
            </p>

            <p className="text-5xl font-bold text-primaryColor mt-4">
              ৳{selectedVariant?.price || product.price}
            </p>
            <div className="flex gap-10 mt-4 text-gray-500">
              <div>
                <p>
                  Category:
                  <span className="font-bold text-black ml-1">
                    {product?.category?.name}
                  </span>
                </p>
                <p>
                  SKU:
                  <span className="font-bold text-black ml-1">
                    {selectedVariant?.sku || "N/A"}
                  </span>
                </p>
              </div>

              <div>
                <p>
                  Availability:
                  <span
                    className={`font-bold ml-1 ${
                      isInStock ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {isInStock ? "In Stock" : "Out of Stock"}
                  </span>
                </p>
                {/* =================== brand =================== */}
                <p>
                  Sub-Category:
                  <span className="text-textPrimary font-bold ml-1">
                    {product?.subcategory?.name}
                  </span>
                </p>
              </div>
            </div>

            <p className="mt-4 text-gray-600">{product.description}</p>

            {/* size */}
            {uniqueSizes.length > 0 && (
              <>
                <h3 className="text-xl font-semibold mt-6 mb-2">Size</h3>
                <div className="flex gap-3">
                  {uniqueSizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded cursor-pointer uppercase
                        ${
                          selectedSize === size
                            ? "bg-primaryColor text-white"
                            : ""
                        }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </>
            )}

            {/* color */}
            {colorsBySize.length > 0 && (
              <>
                <h3 className="text-xl font-semibold mt-6 mb-2">Color</h3>
                <div className="flex gap-3">
                  {colorsBySize.map((item) => (
                    <div
                      key={item._id}
                      onClick={() => setSelectedColor(item.color)}
                      className={`w-10 h-10 rounded-full border-4 cursor-pointer
                        ${
                          selectedColor === item.color
                            ? "border-primaryColor"
                            : "border-transparent"
                        }`}
                      style={{ backgroundColor: item.color }}
                    />
                  ))}
                </div>
              </>
            )}

            {/* cart */}
            {isInStock ? (
              <div className="flex items-center gap-4 mt-8">
                <button className="bg-primaryColor text-white text-xl cursor-pointer px-6 h-12 rounded flex items-center gap-2">
                  Add to Cart <GrCart />
                </button>
                <button className="border h-12 w-12 flex items-center justify-center rounded">
                  <LuHeart />
                </button>
              </div>
            ) : (
              <div className="text-red-500 font-extrabold text-2xl leading-5 font-poppins mt-6">
                Out Of Stock
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
