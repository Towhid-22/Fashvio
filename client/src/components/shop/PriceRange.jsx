"use client";
import { useState, useRef } from "react";

export default function PriceRange() {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1000);
  const trackRef = useRef(null);

  const handleTrackClick = (e) => {
    const track = trackRef.current;
    const rect = track.getBoundingClientRect();

    const clickPosition = ((e.clientX - rect.left) / rect.width) * 100;

    const clickedValue = Math.round((clickPosition / 100) * 1000);


    const diffMin = Math.abs(clickedValue - min);
    const diffMax = Math.abs(clickedValue - max);

    if (diffMin < diffMax) {
      setMin(Math.min(clickedValue, max - 0));
    } else {
      setMax(Math.max(clickedValue, min + 0));
    }
  };

  return (
    <div className="w-[290px] px-4 py-3 select-none border rounded">
      <h3 className="border-b mb-3 text-xl font-quicksand font-bold py-2">
        Price Range
      </h3>
      <div className="text-center mb-4 font-semibold text-sm flex gap-2 justify-between items-center">
        <span className="border px-5 py-1">{min}</span>
        <span className="border px-5 py-1">{max}</span>
      </div>

      <div
        ref={trackRef}
        onClick={handleTrackClick}
        className="relative w-full h-6 cursor-pointer"
      >
        {/* Gray Track */}
        <div className="absolute top-1/2 -translate-y-1/2 w-full h-1 bg-gray-300 rounded"></div>

        {/* Orange Active Track */}
        <div
          className="absolute top-1/2 -translate-y-1/2 h-1 bg-primaryColor rounded"
          style={{
            left: `${(min / 1000) * 100}%`,
            right: `${100 - (max / 1000) * 100}%`,
          }}
        ></div>

        {/* MIN Slider */}
        <input
          type="range"
          min="0"
          max="1000"
          value={min}
          onChange={(e) => setMin(Math.min(Number(e.target.value), max - 20))}
          className="absolute w-full h-1 bg-transparent appearance-none pointer-events-none"
        />

        {/* MAX Slider */}
        <input
          type="range"
          min="0"
          max="1000"
          value={max}
          onChange={(e) => setMax(Math.max(Number(e.target.value), min + 20))}
          className="absolute w-full h-1 bg-transparent appearance-none pointer-events-none"
        />
      </div>

      <style>{`
        input[type="range"] {
          -webkit-appearance: none;
        }

        input[type="range"]::-webkit-slider-thumb {
          pointer-events: all;
          height: 22px;
          width: 22px;
          margin-top: 19px;
          background: white;
          border: 4px solid #3bb77e;
          border-radius: 50%;
          appearance: none;
        }
      `}</style>
    </div>
  );
}
