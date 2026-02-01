"use client";
import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaShieldAlt,
  FaEdit,
  FaTrash,
  FaSignOutAlt,
} from "react-icons/fa";

const page = () => {
  return (
    // <div className=" bg-gray-50 flex items-center justify-center p-4">
    //   <div className="w-full max-w-3xl bg-white rounded-2xl shadow p-6">
    //     {/* Header */}
    //     <div className="border-b pb-4 mb-6">
    //       <h1 className="text-2xl font-bold text-gray-800">Manage Account</h1>
    //       <p className="text-gray-500 text-sm">
    //         Update your personal information and security settings
    //       </p>
    //     </div>

    //     {/* Profile Section */}
    //     <div className="mb-8">
    //       <h2 className="text-lg font-semibold mb-4 text-gray-700">
    //         Profile Information
    //       </h2>

    //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    //         <div className="flex items-center gap-3 border rounded-lg p-3">
    //           <FaUser className="text-gray-500 text-lg" />
    //           <input
    //             type="text"
    //             placeholder="Full Name"
    //             className="w-full outline-none"
    //           />
    //         </div>

    //         <div className="flex items-center gap-3 border rounded-lg p-3">
    //           <FaEnvelope className="text-gray-500 text-lg" />
    //           <input
    //             type="email"
    //             placeholder="Email Address"
    //             className="w-full outline-none"
    //           />
    //         </div>
    //       </div>
    //     </div>

    //     {/* Security Section */}
    //     <div className="mb-8">
    //       <h2 className="text-lg font-semibold mb-4 text-gray-700">Security</h2>

    //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    //         <div className="flex items-center gap-3 border rounded-lg p-3">
    //           <FaLock className="text-gray-500 text-lg" />
    //           <input
    //             type="password"
    //             placeholder="Current Password"
    //             className="w-full outline-none"
    //           />
    //         </div>

    //         <div className="flex items-center gap-3 border rounded-lg p-3">
    //           <FaLock className="text-gray-500 text-lg" />
    //           <input
    //             type="password"
    //             placeholder="New Password"
    //             className="w-full outline-none"
    //           />
    //         </div>
    //       </div>
    //     </div>

    //     {/* Actions */}
    //     <div className="flex flex-col sm:flex-row justify-between gap-4">
    //       <button className="bg-primaryColor text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90">
    //         Save Changes
    //       </button>

    //       <button className="flex items-center justify-center gap-2 border border-red-400 text-red-500 px-6 py-2 rounded-lg hover:bg-red-50">
    //         <FaSignOutAlt />
    //         Logout
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "30px", color: "#333" }}>
        <FaUser style={{ marginRight: "10px" }} />
        Manage Account
      </h1>

      {/* Personal Information Section */}
      <section
        style={{
          marginBottom: "30px",
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <h2 style={{ color: "#555", marginBottom: "15px" }}>
          <FaUser style={{ marginRight: "10px" }} />
          Personal Information
        </h2>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <FaUser style={{ marginRight: "10px", color: "#007bff" }} />
          <label style={{ marginRight: "10px", fontWeight: "bold" }}>
            Name:
          </label>
          <input
            type="text"
            defaultValue="John Doe"
            style={{
              flex: 1,
              padding: "5px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
          <FaEdit
            style={{ marginLeft: "10px", cursor: "pointer", color: "#28a745" }}
            title="Edit"
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <FaEnvelope style={{ marginRight: "10px", color: "#007bff" }} />
          <label style={{ marginRight: "10px", fontWeight: "bold" }}>
            Email:
          </label>
          <input
            type="email"
            defaultValue="john.doe@example.com"
            style={{
              flex: 1,
              padding: "5px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
          <FaEdit
            style={{ marginLeft: "10px", cursor: "pointer", color: "#28a745" }}
            title="Edit"
          />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <FaUser style={{ marginRight: "10px", color: "#007bff" }} />
          <label style={{ marginRight: "10px", fontWeight: "bold" }}>
            Profile Picture:
          </label>
          <input type="file" style={{ flex: 1 }} />
          <FaEdit
            style={{ marginLeft: "10px", cursor: "pointer", color: "#28a745" }}
            title="Upload"
          />
        </div>
      </section>

      {/* Security Section */}
      <section
        style={{
          marginBottom: "30px",
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <h2 style={{ color: "#555", marginBottom: "15px" }}>
          <FaShieldAlt style={{ marginRight: "10px" }} />
          Security
        </h2>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <FaLock style={{ marginRight: "10px", color: "#dc3545" }} />
          <label style={{ marginRight: "10px", fontWeight: "bold" }}>
            Change Password:
          </label>
          <input
            type="password"
            placeholder="New Password"
            style={{
              flex: 1,
              padding: "5px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
          <button
            style={{
              marginLeft: "10px",
              padding: "5px 10px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Update
          </button>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <FaShieldAlt style={{ marginRight: "10px", color: "#ffc107" }} />
          <label style={{ marginRight: "10px", fontWeight: "bold" }}>
            Two-Factor Authentication:
          </label>
          <span style={{ flex: 1 }}>Enabled</span>
          <button
            style={{
              marginLeft: "10px",
              padding: "5px 10px",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Manage
          </button>
        </div>
      </section>

      {/* Account Actions Section */}
      <section
        style={{
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <h2 style={{ color: "#555", marginBottom: "15px" }}>Account Actions</h2>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#ffc107",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            <FaEdit style={{ marginRight: "5px" }} />
            Edit Profile
          </button>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#dc3545",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            <FaTrash style={{ marginRight: "5px" }} />
            Delete Account
          </button>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#6c757d",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            <FaSignOutAlt style={{ marginRight: "5px" }} />
            Logout
          </button>
        </div>
      </section>
    </div>
  );
};

export default page;
