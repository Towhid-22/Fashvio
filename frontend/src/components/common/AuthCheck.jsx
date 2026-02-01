"use client";
import { setUserInfo } from "@/store/features/auth/authSlice";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const AuthCheck = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_URL}/api/authentication/authuser`, {
        withCredentials: true,
      })
      .then((res) => {
        dispatch(setUserInfo(res.data.data));
      })
      .catch((error) => {
        dispatch(setUserInfo(null));
      });
  }, []);

  return <>{children}</>;
};

export default AuthCheck;
