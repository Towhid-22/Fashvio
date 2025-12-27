import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useDispatch } from "react-redux";
import { productColor } from "@/store/features/product/productSlice";

const Color = () => {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();
  const colors = [
    {
      id: 1,
      color: "Black",
    },
    {
      id: 2,
      color: "Blue",
    },
    {
      id: 3,
      color: "Red",
    },
    {
      id: 4,
      color: "Green",
    },
    {
      id: 5,
      color: "Gray",
    },
    {
      id: 6,
      color: "Purple",
    },
    {
      id: 7,
      color: "White",
    },
    {
      id: 8,
      color: "Yellow",
    },
    {
      id: 9,
      color: "Pink",
    },
    {
      id: 10,
      color: "Orange",
    },
  ];
  useEffect(() => {
    dispatch(productColor(color));
  }, [color]);
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
              Color
            </AccordionTrigger>
            <AccordionContent className="flex flex-wrap gap-2 text-balance">
              {colors.map((items) => (
                <div
                  onClick={() => setColor(items.color)}
                  key={items}
                  style={{ background: items.color }}
                  className={`w-10 h-10 rounded-full bg-red-50 ${
                    color === items.color ? "border-3 border-primaryColor" : ""
                  }`}
                ></div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default Color;
