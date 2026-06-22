import React from "react";

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 max-w-md w-full text-center">
        {/* Icon */}
        <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        {/* Text */}
        <p className="text-red-500 text-sm font-medium uppercase tracking-widest mb-2">
          Payment Failed
        </p>
        <h1 className="text-2xl font-semibold text-gray-800 mb-3">
          পেমেন্ট সম্পন্ন হয়নি!
        </h1>
        <p className="text-gray-500 text-sm mb-6">
          দুঃখিত, আপনার পেমেন্ট প্রক্রিয়া করা সম্ভব হয়নি। অনুগ্রহ করে আবার
          চেষ্টা করুন।
        </p>

        {/* Warning box */}
        <div className="bg-red-50 border border-red-100 rounded-lg p-3 mb-8 text-left flex gap-2">
          <span className="text-red-400 mt-0.5">⚠</span>
          <p className="text-red-600 text-sm">
            সম্ভাব্য কারণ: অপর্যাপ্ত ব্যালেন্স, ভুল কার্ড তথ্য, অথবা নেটওয়ার্ক
            সমস্যা।
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <a
            href="/checkout"
            className="bg-red-50 text-red-600 border border-red-200 rounded-lg py-2.5 text-sm font-medium hover:bg-red-100 transition"
          >
            আবার চেষ্টা করুন
          </a>
          <a
            href="/"
            className="border border-gray-200 text-gray-500 rounded-lg py-2.5 text-sm font-medium hover:bg-gray-50 transition"
          >
            হোম পেজে যান
          </a>
        </div>
      </div>
    </div>
  );
};

export default page;
