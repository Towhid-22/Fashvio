import Banner from "@/components/banner/Banner";
import Category from "@/components/category/Category";
import NewsLetter from "@/components/newsletter/NewsLetter";
import TimeCounter from "@/components/realTimeCounter/TimeCounter";
import Service from "@/components/services/Service";
import React from "react";

const page = () => {
  return (
    <div>
      <Banner />
      <Service />
      <TimeCounter />
      <Category />
      <NewsLetter />
    </div>
  );
};

export default page;
