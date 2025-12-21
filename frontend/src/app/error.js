"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="font-lato font-bold text-5xl text-textPrimary">Something went wrong!</h2>
      <button
      className="text-3xl font-lato mt-5 bg-primaryColor text-white px-5 py-2 rounded cursor-pointer"
        onClick={
         
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
