"use client";
import React, { useState } from "react";
import { categories } from "../../../public";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ShopCategory = () => {
  const [activeRadio, setActiveRadio] = useState("");
  return (
    <>
      <div className="px-4 border mt-3 rounded py-2">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger
              className={`font-quicksand font-bold text-xl mb-4`}
            >
              Categories
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-1 text-balance">
              {categories.map((category) => (
                <label
                  className="flex gap-2 pb-1"
                  htmlFor={category.id}
                  key={category.id}
                >
                  <input
                    type="radio"
                    value={category.id}
                    id={category.id}
                    key={category.id}
                    checked={activeRadio === category.id}
                    onChange={(e) => setActiveRadio(category.id)}
                    className={`${
                      activeRadio === category.id
                        ? "bg-primaryColor w-4"
                        : "w-4"
                    } cursor-pointer`}
                  />
                  <span className="text-[18px] cursor-pointer">
                    {category.name}
                  </span>
                </label>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default ShopCategory;
