import React from "react";

const page = () => {
  return (
    <div className="flex items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 max-w-md w-full text-center">
        {/* Icon */}
        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Text */}
        <p className="text-green-600 text-sm font-medium uppercase tracking-widest mb-2">
          Payment Successful
        </p>
        <h1 className="text-2xl font-semibold text-gray-800 mb-3">
          Thank you for your order!
        </h1>
        <p className="text-gray-500 text-sm mb-8">
          আপনার অর্ডার সফলভাবে সম্পন্ন হয়েছে। শীঘ্রই আপনার কাছে পৌঁছে দেওয়া
          হবে।
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <a
            href="/"
            className="bg-green-50 text-green-700 border border-green-200 rounded-lg py-2.5 text-sm font-medium hover:bg-green-100 transition"
          >
            হোম পেজে যান
          </a>
          <a
            href="/orders"
            className="border border-gray-200 text-gray-500 rounded-lg py-2.5 text-sm font-medium hover:bg-gray-50 transition"
          >
            আমার অর্ডার দেখুন
          </a>
        </div>
      </div>
    </div>
  );
};

export default page;
