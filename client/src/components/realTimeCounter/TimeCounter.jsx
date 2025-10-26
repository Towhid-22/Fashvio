"use client";
import React, { useEffect, useState } from "react";

const TimeCounter = () => {
  const targetDate = new Date("2025-12-31T23:59:59"); // 🗓️ Set your target date here
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

    const now = new Date();
    // console.log(now)
  return (
    <div className="container">
      <div className="flex flex-col  py-8 font-lato">
        <h1 className="text-3xl font-semibold mb-4">
          Countdown to New Year 🎉
        </h1>
        <div className="flex gap-4 text-center text-2xl">
          <div>
            <p className="text-4xl font-bold">{timeLeft.days}</p>
            <p>Days</p>
          </div>
          <div>
            <p className="text-4xl font-bold">{timeLeft.hours}</p>
            <p>Hours</p>
          </div>
          <div>
            <p className="text-4xl font-bold">{timeLeft.minutes}</p>
            <p>Minutes</p>
          </div>
          <div>
            <p className="text-4xl font-bold">{timeLeft.seconds}</p>
            <p>Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeCounter;
