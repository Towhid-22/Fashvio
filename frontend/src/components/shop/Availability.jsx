import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
const Availability = () => {
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
              Availability
            </AccordionTrigger>
            <AccordionContent className="flex flex-wrap gap-2 text-balance">
              <div className="flex flex-col gap-4">
                <Label className=" flex items-center gap-3">
                  <Checkbox
                    id="toggle-2"
                    // defaultChecked
                    className="data-[state=checked]:border-primaryColor data-[state=checked]:bg-primaryColor data-[state=checked]:text-white dark:data-[state=checked]:border-primaryColor dark:data-[state=checked]:bg-blue-700"
                  />
                  In Stock
                </Label>
                <Label className=" flex items-center gap-3 rounded-lg">
                  <Checkbox
                    id="toggle-2"
                    // defaultChecked
                    className="data-[state=checked]:border-primaryColor data-[state=checked]:bg-primaryColor data-[state=checked]:text-white dark:data-[state=checked]:border-primaryColor dark:data-[state=checked]:bg-blue-700"
                  />
                  Out Of Stock
                </Label>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default Availability;
