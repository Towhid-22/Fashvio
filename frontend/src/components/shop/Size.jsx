import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Size = () => {
  const sizes = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];
  const [size, setSize] = useState("XS");
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
              Size
            </AccordionTrigger>
            <AccordionContent className="flex flex-wrap gap-2 text-balance">
              {sizes.map((item) => (
                <div
                  onClick={() => setSize(item)}
                  className={`flex items-center justify-center border border-primaryColor 
                    ${size === item ? "bg-primaryColor text-white" : ""} 
                    text-textPrimary transition-all rounded cursor-pointer px-3 py-1 sm:px-4 sm:py-2`}
                >
                  {item}
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default Size;
