"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Breadcrumb from "@/components/common/Breadcrumb";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
const page = () => {
  return (
    <>
      <Breadcrumb />
      <div className="min-h-screen py-6 px-3 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT SIDE */}
          <div className="lg:col-span-2 shadow rounded-md p-5">
            <h2 className="text-3xl font-semibold mb-6">Billing Details</h2>

            <div className="space-y-4">
              <input
                className="w-full border border-gray-200 rounded px-4 py-3 text-sm bg-gray-50  outline-none"
                placeholder="First Name*"
              />
              <input
                className="w-full border border-gray-200 rounded px-4 py-3 text-sm bg-gray-50  outline-none"
                placeholder="Company Name"
              />
              <input
                className="w-full border border-gray-200 rounded px-4 py-3 text-sm bg-gray-50  outline-none"
                placeholder="Street Address*"
              />
              <input
                className="w-full border border-gray-200 rounded px-4 py-3 text-sm bg-gray-50  outline-none"
                placeholder="Apartment, floor, etc. (optional)"
              />
              <input
                className="w-full border border-gray-200 rounded px-4 py-3 text-sm bg-gray-50  outline-none"
                placeholder="Town/City*"
              />
              <input
                className="w-full border border-gray-200 rounded px-4 py-3 text-sm bg-gray-50  outline-none"
                placeholder="Phone Number*"
              />
              <input
                className="w-full border border-gray-200 rounded px-4 py-3 text-sm bg-gray-50  outline-none"
                placeholder="Email Address*"
              />
            </div>

            <div className="flex items-center gap-2 mt-4">
              <Label className=" flex items-center gap-3 cursor-pointer">
                <Checkbox
                  id="toggle-2"
                  // defaultChecked
                  className="data-[state=checked]:border-primaryColor data-[state=checked]:bg-primaryColor data-[state=checked]:text-white dark:data-[state=checked]:border-primaryColor dark:data-[state=checked]:bg-blue-700 cursor-pointer"
                />
                Save this information for faster check-out next time
              </Label>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-white p-6 rounded-md shadow-sm h-fit">
            {/* PRODUCTS */}
            <div className="space-y-5">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <img
                    src="https://i.ibb.co/0jqHpnp/gamepad.png"
                    className="w-12 h-12 object-contain"
                  />
                  <p className="text-sm">LCD Monitor</p>
                </div>
                <p className="text-sm">$650</p>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <img
                    src="https://i.ibb.co/XzW5X8B/monitor.png"
                    className="w-12 h-12 object-contain"
                  />
                  <p className="text-sm">H1 Gamepad</p>
                </div>
                <p className="text-sm">$1100</p>
              </div>
            </div>

            {/* PRICE */}
            <div className="mt-6 border-t pt-4 text-sm space-y-3">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>$1750</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between border-t pt-3 font-medium mb-3">
                <span>Total:</span>
                <span>$1750</span>
              </div>
            </div>

            {/* PAYMENT */}
            {/* <div className="mt-5 space-y-3 text-sm">
            <label className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input type="radio" name="payment" className="accent-primaryColor" />
                Bank
              </div>
              <div className="flex gap-2 text-xs">
                <span className="px-2 py-1 bg-primaryColor text-white rounded">bKash</span>
                <span className="px-2 py-1 bg-primaryColor text-white rounded">Visa</span>
                <span className="px-2 py-1 bg-primaryColor text-white rounded">Master</span>
              </div>
            </label>

            <label className="flex items-center gap-2">
              <input type="radio" name="payment" defaultChecked className="accent-primaryColor" />
              Cash on delivery
            </label>
          </div> */}
            <RadioGroup defaultValue="option-one">
              <div className="flex items-center gap-3 cursor-pointer">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one" className="cursor-pointer">
                  Online Payment
                </Label>
              </div>
              <div className="flex items-center gap-3 cursor-pointer">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two" className="cursor-pointer">
                  Cash on Delivery
                </Label>
              </div>
            </RadioGroup>

            {/* COUPON */}
            {/* <div className="flex mt-6 gap-3">
            <input
              className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primaryColor"
              placeholder="Coupon Code"
            />
            <button className="bg-primaryColor text-white px-5 rounded-md">
              Apply Coupon
            </button>
          </div> */}

            {/* BUTTON */}
            <button className="w-full mt-6 cursor-pointer bg-primaryColor text-white py-3 rounded font-medium">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default page;
