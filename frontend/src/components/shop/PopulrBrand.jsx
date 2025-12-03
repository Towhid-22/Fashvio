import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
const PopulrBrand = () => {
  const barands = [
    { id: 1, name: "Samsung" },
    { id: 2, name: "Apple" },
    { id: 3, name: "Xiaomi" },
    { id: 4, name: "HP" },
    { id: 5, name: "Dell" },
    { id: 6, name: "Xiaomi" },
    { id: 7, name: "Vivo" },
    { id: 8, name: "Asus" },
    { id: 9, name: "Dahua" },
    { id: 10, name: "MSI" },
  ];
  return (
    <div className="px-4 border mt-3 rounded py-2">
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className={`font-quicksand font-bold text-xl mb-4`}>
            Popular Brand
          </AccordionTrigger>
          <AccordionContent className="flex flex-wrap gap-2 text-balance">
            <div className="flex flex-col gap-3">
              {barands.map((brand) => (
                
              <Label className=" flex items-center gap-3 text-base">
                <Checkbox
                  id="toggle-2"
                  // defaultChecked
                  className="data-[state=checked]:border-primaryColor data-[state=checked]:bg-primaryColor data-[state=checked]:text-white dark:data-[state=checked]:border-primaryColor dark:data-[state=checked]:bg-blue-700"
                />
                {brand.name}
              </Label>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default PopulrBrand;
