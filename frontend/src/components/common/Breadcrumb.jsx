"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";
import Container from "./Container";
import { IoHomeOutline } from "react-icons/io5";

const Breadcrumb = () => {
  const pathname = usePathname();

  const pathSegments = pathname.split("/").filter((item) => item !== "");
  const bredcrumbItems = pathSegments.map((name, index) => ({
    name: name,
    href: `/${pathSegments.slice(0, index + 1).join("/")}`,
  }));
  return (
    <div className="bg-gray-100 px-4 md:px-0 py-3">
      <Container>
        <ul className="flex gap-1 text-sm  font-semibold">
          <li className="flex items-center gap-1">
            <IoHomeOutline className="text-base" />
            <Link href="/">Home</Link>
          </li>
          {bredcrumbItems.map((item, index) => (
            <li
              key={index}
              className={`capitalize flex items-center gap-1 ${
                index === bredcrumbItems.length - 1 ? "text-primaryColor" : ""
              }`}
            >
              <span>
                <RiArrowRightSLine className="text-black" />
              </span>
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default Breadcrumb;
