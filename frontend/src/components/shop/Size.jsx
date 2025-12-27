import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useDispatch } from "react-redux";
import { productSize } from "@/store/features/product/productSlice";

const Size = () => {
  const [size, setSize] = useState("");
  const sizes = [
    {
      id: 1,
      size: "XS",
    },
    {
      id: 2,
      size: "S",
    },
    {
      id: 3,
      size: "M",
    },
    {
      id: 4,
      size: "L",
    },
    {
      id: 5,
      size: "XL",
    },
    {
      id: 6,
      size: "3XL",
    },
    {
      id: 7,
      size: "4XL",
    },
  ];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productSize(size));
  }, [size]);

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
                  onClick={() => setSize(item.size)}
                  className={`flex items-center justify-center border border-primaryColor 
                    ${size === item.size ? "bg-primaryColor text-white" : ""} 
                    text-textPrimary transition-all rounded cursor-pointer px-3 py-1 sm:px-4 sm:py-2`}
                >
                  {item.size}
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
