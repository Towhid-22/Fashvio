import React from "react";
import { GrLocation } from "react-icons/gr";
import { BsHeadphones } from "react-icons/bs";
import { BsSend } from "react-icons/bs";
import { IoIosTimer } from "react-icons/io";
import { account, company, corporate, popular } from "../../../public";
import Link from "next/link";
import { PiPhoneCallThin } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSkype } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="mx-auto max-w-[1580px] px-4">
        <div className="sm:flex justify-between sm:flex-wrap sm:gap-5 mt-20">
          <ul>
            <li>
              <Link href="/">
                <img src="/logo.png" alt="logo" />
              </Link>
            </li>
            <li className="font-lato text-[17px] leading-6 text-textPrimary mt-[22px]">
              Awesome IT gadget website template
            </li>
            <li className="font-lato text-[17px] leading-6 text-textPrimary mt-[22px] flex items-center gap-2">
              <GrLocation className="text-primaryColor text-base" /> Address:
              5171 W Campbell Ave <br /> undefined Kent, Utah 53127 United
              States
            </li>
            <li className="font-lato text-[17px] leading-6 text-textPrimary mt-3 flex items-center gap-2">
              <BsHeadphones className="text-primaryColor text-base" /> Call
              Us:(+91) - 540-025-124553
            </li>
            <li className="font-lato text-[17px] leading-6 text-textPrimary mt-3 flex items-center gap-2">
              <BsSend className="text-primaryColor text-base" />
              Email:sale@Nest.com
            </li>
            <li className="font-lato text-[17px] leading-6 text-textPrimary mt-3 flex items-center gap-2">
              <IoIosTimer className="text-primaryColor text-base" />
              Hours:10:00 - 18:00, Mon - Sat
            </li>
          </ul>
          <ul>
            <li className="text-textPrimary font-bold text-2xl leading-7 font-quicksand mb-5">
              Company
            </li>
            {company.map((item) => (
              <li
                key={item.id}
                className="mb-3.5 text-textPrimary font-lato text-[15px] leading-6"
              >
                <Link href="#">{item.name}</Link>
              </li>
            ))}
          </ul>
          <ul>
            <li className="text-textPrimary font-bold text-2xl leading-7 font-quicksand mb-5">
              Account
            </li>
            {account.map((item) => (
              <li
                key={item.id}
                className="mb-3.5 text-textPrimary font-lato text-[15px] leading-6"
              >
                <Link href="#">{item.name}</Link>
              </li>
            ))}
          </ul>
          <ul>
            <li className="text-textPrimary font-bold text-2xl leading-7 font-quicksand mb-5">
              Corporate
            </li>
            {corporate.map((item) => (
              <li
                key={item.id}
                className="mb-3.5 text-textPrimary font-lato text-[15px] leading-6"
              >
                <Link href="#">{item.name}</Link>
              </li>
            ))}
          </ul>
          <ul>
            <li className="text-textPrimary font-bold text-2xl leading-7 font-quicksand mb-5">
              Popular
            </li>
            {popular.map((item) => (
              <li
                key={item.id}
                className="mb-3.5 text-textPrimary font-lato text-[15px] leading-6"
              >
                <Link href="#">{item.name}</Link>
              </li>
            ))}
          </ul>
          <ul>
            <li className="text-textPrimary font-bold text-2xl leading-7 font-quicksand mb-5">
              Install App
            </li>
            <li className="flex gap-1 my-20">
              <Link href="#">
                <img src="/footer/appstore.png" alt="appstore" />
              </Link>
              <Link href="#">
                <img src="/footer/playstore.png" alt="playstore" />
              </Link>
            </li>
            <li className="mb-3.5 text-textPrimary font-lato text-[15px] leading-6">
              <Link href="#">Secured Payment Gateways</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primaryColor/20">
        <div className="sm:flex sm:flex-wrap items-center justify-between mx-auto max-w-[1580px] px-4 py-6">
          <p className="font-lato leading-7 text-base text-secondaryColor">
            © 2022, Nest – WordPress Ecommerce Template <br /> All rights
            reserved
          </p>
          <div className="sm:flex sm:gap-10 items-center mt-4 sm:mt-0">
            <div className="flex gap-2">
              <PiPhoneCallThin className="size-8" />
              <div className="">
                <h3 className="font-quicksand font-bold text-[26px] leading-6.5 text-primaryColor">
                  1900646666
                </h3>
                <p className="font-lato text-[12px] leading-3 tracking-[0.9px] text-secondaryColor">
                  Working 8:00 - 22:00
                </p>
              </div>
            </div>
            <div className="flex gap-2 mt-2">
              <PiPhoneCallThin className="size-8" />
              <div className="">
                <h3 className="font-quicksand font-bold text-[26px] leading-6.5 text-primaryColor">
                  1900646666
                </h3>
                <p className="font-lato text-[12px] leading-3 tracking-[0.9px] text-secondaryColor">
                  24/7 Support Center
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 mt-4 sm:mt-0">
            <h4 className="font-quicksand text-base font-bold text-textPrimary leading-5">
              Follow Us:
            </h4>

            <ul className="flex gap-2">
              <li className="size-9 bg-primaryColor rounded-full flex items-center justify-center cursor-pointer text-white">
                <FaFacebookF className="text-xl" />
              </li>
              <li className="size-9 bg-primaryColor rounded-full flex items-center justify-center cursor-pointer text-white">
                <FaTwitter className="text-xl" />
              </li>
              <li className="size-9 bg-primaryColor rounded-full flex items-center justify-center cursor-pointer text-white">
                <FaSkype className="text-xl" />
              </li>
              <li className="size-9 bg-primaryColor rounded-full flex items-center justify-center cursor-pointer text-white">
                <FaInstagram className="text-xl" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
