"use client";
import React, { useState } from "react";

const Complain = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [details, setDetails] = useState("");

  const submitComplainBtn = (e) => {
    console.log(name, phone, email, subject, details);
  };
  return (
    <div className="max-w-[1580px] mx-auto px-4 my-20">
      <div className="shadow rounded-[5px] p-3 sm:p-10 ">
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-textPrimary font-semibold">
              Full Name
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="name"
              className="w-full outline-none border border-textPrimary/20 rounded p-2"
              placeholder="Type Your Full Name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="text-textPrimary font-semibold">
              Phone No.
            </label>
            <input
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              id="phone"
              className="w-full outline-none border border-textPrimary/20 rounded p-2"
              placeholder="Type Your Phone No."
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-textPrimary font-semibold">
              Email Address
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              className="w-full outline-none border border-textPrimary/20 rounded p-2"
              placeholder="Type Your Full Name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="subject" className="text-textPrimary font-semibold">
              Subject
            </label>
            <input
              onChange={(e) => setSubject(e.target.value)}
              type="text"
              id="subject"
              className="w-full outline-none border border-textPrimary/20 rounded p-2"
              placeholder="Type Your Full Name"
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-2 mt-3">
            <label htmlFor="details" className="text-textPrimary font-semibold">
              Details
            </label>
            <textarea
              onChange={(e) => setDetails(e.target.value)}
              type="text"
              id="details"
              className="w-full outline-none border border-textPrimary/20 rounded p-2"
              placeholder="Write Your Problem In Details"
            />
          </div>
          <button
            onClick={submitComplainBtn}
            className="bg-primaryColor text-white py-2 rounded w-full mt-5 cursor-pointer font-quicksand font-semibold"
          >
            Submit Your Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default Complain;
