"use client";
import Breadcrumb from "@/components/common/Breadcrumb";
import React, { useState } from "react";
import { ImUserPlus } from "react-icons/im";
import { FaUser, FaEnvelope, FaLock, FaSignOutAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import axios from "axios";
const page = () => {
  const user = useSelector((state) => state.authentication.userInfo);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const handleChangePassword = () => {
    console.log(oldPassword + "  " + newPassword);
    axios
      .post(
        `${process.env.NEXT_PUBLIC_URL}/api/authentication/reset-password`,
        { email: user?.email, oldPassword, newPassword },
        {
          withCredentials: true,
        },
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Breadcrumb />
      <div className=" bg-gray-50 flex items-center justify-center p-4">
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow p-6">
          {/* Header */}
          <div className="border-b pb-4 mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Manage Account</h1>
            <p className="text-gray-500 text-sm">
              Update your personal information and security settings
            </p>
          </div>

          {/* Profile Section */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">
              Profile Information
            </h2>

            <div className="">
              <div className="flex items-center gap-3  p-3 font-semibold">
                <FaUser className="text-gray-500 text-lg" />
                <p>Name: {user?.username}</p>
              </div>
              <div className="flex items-center gap-3 p-3 font-semibold">
                <FaEnvelope className="text-gray-500 text-lg" />
                <p>Email: {user?.email}</p>
              </div>
              <div className="flex items-center gap-3 p-3 font-semibold">
                <ImUserPlus className="text-gray-500 text-lg" />
                <p className="capitalize">Role: {user?.role}</p>
              </div>
            </div>
          </div>

          {/* Security Section */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">
              Security
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 border rounded-lg p-3">
                <FaLock className="text-gray-500 text-lg" />
                <input
                  onChange={(e) => {
                    setOldPassword(e.target.value);
                  }}
                  type="password"
                  placeholder="Current Password"
                  className="w-full outline-none"
                />
              </div>

              <div className="flex items-center gap-3 border rounded-lg p-3">
                <FaLock className="text-gray-500 text-lg" />
                <input
                  onChange={(e) => {
                    setNewPassword(e.target.value);
                  }}
                  type="password"
                  placeholder="New Password"
                  className="w-full outline-none"
                />
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <button
              onClick={handleChangePassword}
              className="bg-primaryColor text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90"
            >
              Save Changes
            </button>

            <button className="flex items-center justify-center gap-2 border border-red-400 text-red-500 px-6 py-2 rounded-lg hover:bg-red-50">
              <FaSignOutAlt />
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
