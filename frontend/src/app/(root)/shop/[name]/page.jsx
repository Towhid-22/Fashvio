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
  const [selectVariant, setSelectVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const productImages = ["desktop", "camera", "laptop", "tv"];
  const [product, setProduct] = useState({});

  useEffect(() => {
    function getSingleProduct() {
      axios
        .get(
          `${process.env.NEXT_PUBLIC_URL}/api/product/get-single-product/${name}`
        )
        .then((res) => {
          setProduct(res.data.data);
        });
    }
    getSingleProduct();
  }, []);

  const handleQuantity = (type) => {
    if (type === "dec") setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    else setQuantity((prev) => prev + 1);
  };
  useEffect(() => {
    if (product?.variant?.length > 0) {
      setSelectVariant(product?.variant[0]);
    }
  }, [product]);
  console.log(selectVariant);

  return (
    <div className="bg-gray-50 pb-20">
      <Breadcrumb />

      <div className="max-w-[1580px] mx-auto mt-8 px-4 lg:px-4">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-[45%] flex flex-col gap-4">
            <img
              src={product.image}
              alt="Main Product"
              className="w-full h-60 sm:h-80 lg:h-[526px] xl:h-[550px] border rounded-lg object-contain p-2 cursor-pointer"
            />
            <div className="flex flex-row gap-4  mt-3">
              {productImages.map((img) => (
                <img
                  key={img}
                  src={`/products/${img}.png`}
                  alt=""
                  className="w-14 sm:w-20 lg:w-24 xl:w-28  border border-primaryColor/30 rounded-lg object-contain p-2 cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => setMainImage(`/products/${img}.png`)}
                />
              ))}
            </div>
          </div>
          <div className="w-full lg:w-[50%] flex flex-col justify-start">
            <h2 className="font-quicksand font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-[36px] leading-8 lg:leading-10 text-textPrimary">
              {product.name}
            </h2>

            <p className="flex items-center gap-3 mt-2 text-sm sm:text-base">
              <FaStar className="text-yellow-400" />
              <span className="text-[#B6B6B6]">(32 Reviews)</span>
            </p>
            <div className="flex flex-wrap items-center gap-6 mt-4">
              <p className="font-quicksand font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-primaryColor">
                ৳{selectVariant?.price}
              </p>
              <p className="font-quicksand font-semibold text-sm sm:text-base lg:text-lg text-[#fdc040] flex flex-col items-start">
                26% Off
                <del className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-[#b6b6b6]">
                  ৳52
                </del>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 mt-3 text-gray-400 font-semibold text-sm sm:text-base">
              <div>
                <p>
                  Category:
                  <span className="text-textPrimary font-bold ml-1">
                    {product?.category?.name}
                  </span>
                </p>
                {/* =================== sku =================== */}
                <p>
                  Sku:
                  <span className="text-textPrimary font-bold ml-1">
                    {selectVariant?.sku}
                  </span>
                </p>
              </div>
              <div>
                {/* =================== stock =================== */}
                <p>
                  Availability:
                  {selectVariant?.stock > 0 ? (
                    <span className="text-green-500 font-bold ml-1">
                      In Stock
                    </span>
                  ) : (
                    <span className="text-red-500 font-bold ml-1">
                      Out Stock
                    </span>
                  )}
                </p>
                {/* =================== brand =================== */}
                <p>
                  Brand:
                  <span className="text-textPrimary font-bold ml-1">MSI</span>
                </p>
              </div>
            </div>
            <p className="text-secondaryColor mt-4 text-[16px] sm:text-[17px] leading-6 sm:leading-7">
              {product.description}
            </p>
            {/* ==================== size ==================== */}
            {product?.variant?.length > 0 && (
              <>
                <h3 className="text-lg sm:text-xl font-lato font-semibold my-3 text-textPrimary">
                  Size:
                </h3>
                <div className="flex gap-3 flex-wrap">
                  {product?.variant?.map((item) => (
                    <li
                      onClick={() => setSelectVariant(item)}
                      key={item._id}
                      className={`flex items-center justify-center border border-primaryColor 
                    ${
                      selectVariant?._id === item._id
                        ? "bg-primaryColor text-white"
                        : ""
                    } 
                    text-textPrimary transition-all rounded cursor-pointer px-3 py-1 sm:px-4 sm:py-2`}
                    >
                      {item.size}
                    </li>
                  ))}
                </div>
              </>
            )}
            {/* ==================== color ==================== */}
            {product?.variant?.length > 0 && (
              <>
                <h3 className="text-lg sm:text-xl font-lato font-semibold my-3 text-textPrimary">
                  Color:
                </h3>
                <div className="flex gap-3 flex-wrap">
                  {product?.variant.map((item) => (
                    <div
                      key={item._id}
                      onClick={() => setSelectVariant(item)}
                      className={`w-8 h-8 sm:w-10 sm:h-10 border-4 rounded-full cursor-pointer ${
                        selectVariant?._id === item._id
                          ? "border-primaryColor"
                          : "border-transparent"
                      }`}
                      style={{ backgroundColor: item.color }}
                    ></div>
                  ))}
                </div>
              </>
            )}
            <div className="flex flex-wrap items-center gap-3 mt-6">
              <div className="border-2 rounded w-[120px] sm:w-[150px] h-10 sm:h-12 flex items-center justify-between px-2">
                <button
                  className="text-xl sm:text-2xl font-bold cursor-pointer text-primaryColor"
                  onClick={() => handleQuantity("dec")}
                >
                  ⎯
                </button>
                <span className="text-lg sm:text-xl">{quantity}</span>
                <button
                  className="text-xl sm:text-2xl font-bold cursor-pointer text-primaryColor"
                  onClick={() => handleQuantity("inc")}
                >
                  ✛
                </button>
              </div>
              <button className="font-lato font-semibold h-10 sm:h-12 uppercase px-4 sm:px-5 text-lg sm:text-xl bg-primaryColor flex items-center gap-2 sm:gap-3 rounded text-white">
                Add to Cart <GrCart className="text-xl sm:text-2xl" />
              </button>
              <button className="border-2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded text-secondaryColor">
                <LuHeart className="text-xl sm:text-2xl text-textPrimary" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
