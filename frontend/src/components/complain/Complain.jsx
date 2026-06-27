"use client";
import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Complain = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [details, setDetails] = useState("");

  const submitComplainBtn = (e) => {
    e.preventDefault();
    try {
      axios
        .post(
          `${process.env.NEXT_PUBLIC_URL}/api/complain/add-complain`,
          {
            name,
            phone,
            email,
            subject,
            details,
          },
          { withCredentials: true },
        )
        .then((res) => {
          toast.success("Complain submitted successfully!");
          setName("");
          setPhone("");
          setEmail("");
          setSubject("");
          setDetails("");
        });
    } catch (error) {
      console.error("Error submitting complain:", error);
    }
  };
  return (
    <>
      <Toaster />
      <div className="max-w-[1580px] mx-auto px-4 my-20">
        <div className="shadow rounded-[5px] p-3 sm:p-10 ">
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-textPrimary font-semibold">
                Full Name
              </label>
              <input
                value={name}
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
                value={phone}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                className="w-full outline-none border border-textPrimary/20 rounded p-2"
                placeholder="Type Your Email Address"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="subject"
                className="text-textPrimary font-semibold"
              >
                Subject
              </label>
              <input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                type="text"
                id="subject"
                className="w-full outline-none border border-textPrimary/20 rounded p-2"
                placeholder="Type Your Subject"
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-2 mt-3">
              <label
                htmlFor="details"
                className="text-textPrimary font-semibold"
              >
                Details
              </label>
              <textarea
                value={details}
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
    </>
  );
};

export default Complain;
