import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Color = () => {
  const colors = [
    "black",
    "blue",
    "red",
    "green",
    "gray",
    "purple",
    "white",
    "#253d4e",
  ];
  const [color, setColor] = useState("black");
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
                  onClick={() => setColor(items)}
                  key={items}
                  style={{ background: items }}
                  className={`w-10 h-10 rounded-full bg-red-50 ${
                    color === items ? "border-3 border-primaryColor" : ""
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
