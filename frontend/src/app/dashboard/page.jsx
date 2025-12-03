"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const page = () => {
  return (
    <div className="max-w-[1580px] mx-auto">
      <main className="">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold">Overview</h1>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700">
            Select Date
          </button>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
          <div className="p-6 bg-white rounded-2xl shadow">
            Total Revenue: $3564
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            Products Sold: 564
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">Growth: +5%</div>
          <div className="p-6 bg-white rounded-2xl shadow">Visitors: 249</div>
        </section>

        <section className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">
          <div className="p-6 bg-white rounded-2xl shadow col-span-2 h-80">
            {/* Revenue Chart */}
            <LineChart
              width={600}
              height={250}
              data={[
                { name: "Jan", uv: 400, pv: 240 },
                { name: "Feb", uv: 300, pv: 456 },
              ]}
            >
              <Line type="monotone" dataKey="uv" stroke="#8884d8" />
              <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow h-80">
            {/* Progress Circle */}
            <div className="flex flex-col items-center justify-center h-full">
              <div className="w-40 h-40 rounded-full border-[9px] border-blue-500 flex items-center justify-center text-2xl font-bold">
                75%
              </div>
              <p className="mt-4 text-lg font-semibold">Progress</p>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">
          <div className="p-6 bg-white rounded-2xl shadow col-span-2">
            Company Table
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">Recent Activity</div>
        </section>

        <section className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
          <div className="p-6 bg-white rounded-2xl shadow">World Map Sales</div>
          <div className="p-6 bg-white rounded-2xl shadow">
            Financial Overview
          </div>
        </section>
      </main>
    </div>
  );
};

export default page;
