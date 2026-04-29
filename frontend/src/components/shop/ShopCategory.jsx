"use client";
import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { category } from "@/store/features/product/productSlice";

const ShopCategory = () => {
  const dispatch = useDispatch();
  const [activeRadio, setActiveRadio] = useState("");
  const [categories, setCategories] = useState([]);
  function allCategories() {
    axios
      .get(`${process.env.NEXT_PUBLIC_URL}/api/category/get-category`)
      .then((res) => {
        setCategories(res.data.data);
      });
  }
  useEffect(() => {
    allCategories();
    dispatch(category(activeRadio));
  }, [activeRadio]);
  return (
    <div className="px-4 border mt-3 rounded py-2">
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-quicksand font-bold text-xl mb-4">
            Categories
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-2 text-balance">
            <RadioGroup value={activeRadio} onValueChange={setActiveRadio}>
              {categories.map((category) => (
                <div
                  key={category._id}
                  className="flex items-center space-x-2 "
                >
                  <RadioGroupItem value={category._id} id={category._id} />
                  <Label
                    htmlFor={category._id}
                    className={`text-[18px] cursor-pointer`}
                  >
                    {category.name}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ShopCategory;
