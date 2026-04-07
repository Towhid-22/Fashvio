import Banner from "@/components/banner/Banner";
import Category from "@/components/category/Category";
import FeatureProduct from "@/components/featuresProducts/FeatureProduct";
import FlashSale from "@/components/featuresProducts/FlashSale";
import NewArrival from "@/components/newArrival/NewArrival";
import NewsLetter from "@/components/newsletter/NewsLetter";
import Service from "@/components/services/Service";
import React from "react";

const page = () => {
  return (
    <div>
      <Banner />
      <Service />
      <Category />
      <FeatureProduct />
      <NewArrival />
      {/* <FlashSale /> */}
      <NewsLetter />
    </div>
  );
};

export default page;
