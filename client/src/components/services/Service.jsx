import React from "react";
import { BiMessageSquareError } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";
import { GiReturnArrow } from "react-icons/gi";
import { ImHeadphones } from "react-icons/im";

const Service = () => {
  return (
    <div className="mx-auto max-w-[1580px] px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center xl:px-20">
        <div className="flex gap-2.5 bg-white shadow-xs rounded-[5px] cursor-pointer w-[298px] border p-4 mt-3 sm:mt-2">
          <div className="flex items-center justify-center bg-primaryColor text-white rounded-full w-12 h-12">
            <BiMessageSquareError className="text-2xl" />
          </div>
          <div className="text-textPrimary">
            <h3 className="text-xl font-semibold font-lato">
              Raise a Complain
            </h3>
            <p className="font-lato">Share your exprerience</p>
          </div>
        </div>
        <div className="flex gap-2.5 bg-white shadow-xs rounded-[5px] cursor-pointer w-[298px] border p-4 mt-3 sm:mt-2">
          <div className="flex items-center justify-center bg-primaryColor text-white rounded-full w-12 h-12">
            <TbTruckDelivery className="text-2xl" />
          </div>
          <div className="text-textPrimary">
            <h3 className="text-xl font-semibold font-lato">Fasted Delivery</h3>
            <p className="font-lato">Delivery in 24/H</p>
          </div>
        </div>
        <div className="flex gap-2.5 bg-white shadow-xs rounded-[5px] cursor-pointer w-[298px] border p-4 mt-3 sm:mt-2">
          <div className="flex items-center justify-center bg-primaryColor text-white rounded-full w-12 h-12">
            <GiReturnArrow className="text-2xl" />
          </div>
          <div className="text-textPrimary">
            <h3 className="text-xl font-semibold font-lato">24 Hours Return</h3>
            <p className="font-lato">100% money-back guarantee</p>
          </div>
        </div>
        <div className="flex gap-2.5 bg-white shadow-xs rounded-[5px] cursor-pointer w-[298px] border p-4 mt-3 sm:mt-2">
          <div className="flex items-center justify-center bg-primaryColor text-white rounded-full w-12 h-12">
            <ImHeadphones className="text-2xl" />
          </div>
          <div className="text-textPrimary">
            <h3 className="text-xl font-semibold font-lato">Support 24/7</h3>
            <p className="font-lato">Live contact/message</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
