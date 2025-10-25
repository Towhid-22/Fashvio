import React from "react";
import { GrLocation } from "react-icons/gr";
import { BsHeadphones } from "react-icons/bs";
import { BsSend } from "react-icons/bs";
import { IoIosTimer } from "react-icons/io";
import { account, company, corporate, popular } from "../../../public";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="container">
      <div className="flex justify-between mt-20">
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
            <GrLocation className="text-primaryColor text-base" /> Address: 5171
            W Campbell Ave <br /> undefined Kent, Utah 53127 United States
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
  );
};

export default Footer;
