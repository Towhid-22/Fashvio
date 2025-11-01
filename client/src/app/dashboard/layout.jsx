import Sidebar from "@/components/dashboard/Sidebar";
import React from "react";

export const metadata = {
  title: "Dashboard",
  description: "Admin Dashboard Page",
};

const layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      {children}
    </div>
  );
};

export default layout;
