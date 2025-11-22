"use client";
import React, { useState } from "react";
import { categories } from "../../../public";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const ShopCategory = () => {
  const [activeRadio, setActiveRadio] = useState("");

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
                <div key={category.id} className="flex items-center space-x-2 ">
                  <RadioGroupItem value={category.id} id={category.id} />
                  <Label
                    htmlFor={category.id}
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
