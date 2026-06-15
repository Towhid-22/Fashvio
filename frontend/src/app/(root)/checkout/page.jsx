"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Breadcrumb from "@/components/common/Breadcrumb";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import axios from "axios";
import Container from "@/components/common/Container";
import toast, { Toaster } from "react-hot-toast";
const page = () => {
  const [cartList, setCartList] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [billingData, setBillingData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    address: "",
  });
  const user = useSelector((state) => state.authentication.userInfo);

  // cart items fetch
  useEffect(() => {
    if (!user?._id) return;
    axios
      .get(
        `${process.env.NEXT_PUBLIC_URL}/api/cart/get-cartbyuserid/${user._id}`,
        { withCredentials: true },
      )
      .then((res) => {
        setCartList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);
  const handleDeleteCart = (id) => {
    axios
      .delete(`${process.env.NEXT_PUBLIC_URL}/api/cart/delete-cartbyid/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleIncrement = (id, currentQty) => {
    axios
      .patch(
        `${process.env.NEXT_PUBLIC_URL}/api/cart/update-cartbyid/${id}`,
        {
          quantity: currentQty + 1,
        },
        { withCredentials: true },
      )
      .then(() => {
        setCartList((prev) =>
          prev.map((item) =>
            item._id === id ? { ...item, quantity: currentQty + 1 } : item,
          ),
        );
        window.location.reload(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleDecrement = (id, currentQty) => {
    if (currentQty <= 1) return;
    axios
      .patch(
        `${process.env.NEXT_PUBLIC_URL}/api/cart/update-cartbyid/${id}`,
        {
          quantity: currentQty - 1,
        },
        { withCredentials: true },
      )
      .then(() => {
        setCartList((prev) =>
          prev.map((item) =>
            item._id === id ? { ...item, quantity: currentQty - 1 } : item,
          ),
        );
        window.location.reload(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const subtotal = cartList.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const tax = subtotal * 0.005;
  const shippingFee = 0;
  const total = subtotal + tax + shippingFee;
  const handleChange = (e) => {
    setBillingData({ ...billingData, [e.target.name]: e.target.value });
  };
  const handlePlaceOrder = async () => {
    if (
      !billingData.name ||
      !billingData.email ||
      !billingData.phone ||
      !billingData.city ||
      !billingData.address
    ) {
      return alert("All field is required");
    }
    const order = {
      user: user?._id,
      cartItems: cartList.map((item) => ({
        product: item.product._id,
        quantity: item.quantity,
      })),
      name: billingData.name,
      email: billingData.email,
      phone: billingData.phone,
      city: billingData.city,
      address: billingData.address,
      totalPrice: total,
      paymentMethod: paymentMethod.toUpperCase(),
      paymentStatus: paymentMethod === "online" ? "paid" : "notpaid",
    };
    try {
      const res = await axios
        .post(`${process.env.NEXT_PUBLIC_URL}/api/order/place-order`, order)
        .then((res) => {
          if (res.data.success) {
            toast.success("Order Placed Successfull!");
          }
          // console.log(res.data.data);
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Breadcrumb />
      <Toaster position="top-center" reverseOrder={false} />
      <div className="min-h-screen py-6 px-3 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Mobile Card View */}
          <div className="md:hidden space-y-4">
            {cartList.map((item) => (
              <div
                key={item._id}
                className="border rounded-md p-3 flex items-start gap-3"
              >
                <img
                  src={item?.product?.image}
                  alt={item?.product?.name}
                  className="w-20 h-20 rounded object-cover"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <p className="font-medium text-gray-800 text-sm">
                      {item?.product?.name}
                    </p>
                    <button className="text-gray-500 hover:text-red-500 text-lg">
                      ✕
                    </button>
                  </div>

                  <div className="mt-2 text-sm text-gray-600">
                    <p>
                      Price:
                      <span className="font-semibold text-gray-800">
                        ${item?.product?.price}
                      </span>
                    </p>
                    <div className="p-1">
                      Size:{" "}
                      <span className="text-gray-700 font-semibold">
                        {item?.variant?.size || "N/A"}
                      </span>
                    </div>
                    <div className="p-1">
                      <div className="flex items-center gap-1">
                        Color:
                        {item?.variant?.color ? (
                          <>
                            <span
                              className="w-4 h-4 rounded-full border"
                              style={{
                                backgroundColor: item.variant.color,
                              }}
                            ></span>
                            <span className="text-gray-700 font-semibold">
                              {item.variant.color}
                            </span>
                          </>
                        ) : (
                          <span className="text-gray-400">N/A</span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <button className="px-2 border rounded text-gray-600 hover:text-black">
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button className="px-2 border rounded text-gray-600 hover:text-black">
                        +
                      </button>
                    </div>
                    <p className="mt-2 font-semibold text-gray-800">
                      Subtotal: ${item.price * item.quantity}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* TOP Section */}
          <div className="hidden md:block overflow-x-auto mt-3 lg:col-span-3">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50 text-gray-600 uppercase text-xs border-y">
                  <th className="p-3 text-left">Products</th>
                  <th className="p-3 text-left">Price</th>
                  <th className="p-3 text-left">Size</th>
                  <th className="p-3 text-left">Color</th>
                  <th className="p-3 text-center">Quantity</th>
                  <th className="p-3 text-right">Sub-Total</th>
                </tr>
              </thead>

              <tbody>
                {cartList?.map((item) => (
                  <tr className="border-b hover:bg-gray-50" key={item._id}>
                    <td className="flex items-center gap-3 p-3">
                      <button
                        onClick={() => handleDeleteCart(item._id)}
                        className="text-gray-500 hover:text-red-500 text-lg border rounded-full size-8 cursor-pointer hover:border-red-400 duration-300"
                      >
                        ✕
                      </button>
                      <img
                        src={item?.product?.image}
                        alt={item?.product?.name}
                        className="w-16 h-16 rounded object-cover"
                      />
                      <p className="text-gray-700 font-medium text-sm w-[280px]">
                        {item?.product?.name}
                      </p>
                    </td>
                    <td className="p-3">
                      <span className="text-gray-700">
                        ৳{item?.product?.price}
                      </span>
                    </td>
                    <td className="p-3">
                      <span className="text-gray-700">
                        {item?.variant?.size || "N/A"}
                      </span>
                    </td>
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        {item?.variant?.color ? (
                          <>
                            <span
                              className="w-4 h-4 rounded-full border"
                              style={{
                                backgroundColor: item.variant.color,
                              }}
                            ></span>
                            <span className="text-gray-700">
                              {item.variant.color}
                            </span>
                          </>
                        ) : (
                          <span className="text-gray-400">N/A</span>
                        )}
                      </div>
                    </td>
                    <td className="p-3 text-center">
                      <div className="flex items-center justify-center border rounded-md w-24 mx-auto">
                        <button
                          onClick={() =>
                            handleDecrement(item._id, item.quantity)
                          }
                          className="px-2 py-1 text-gray-600 hover:text-black cursor-pointer text-2xl"
                        >
                          −
                        </button>
                        <span className="w-8 text-center text-base">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            handleIncrement(item._id, item.quantity)
                          }
                          className="px-2 py-1 text-gray-600 hover:text-black cursor-pointer text-2xl"
                        >
                          +
                        </button>
                      </div>
                    </td>

                    <td className="p-3 text-right font-medium text-gray-700">
                      ৳{item.price * item.quantity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* LEFT SIDE */}
          <div className="lg:col-span-2 border shadow rounded-md p-5">
            <h2 className="text-3xl font-semibold mb-6">Billing Details</h2>
            <div className="space-y-4">
              <input
                onChange={handleChange}
                name="name"
                type="text"
                value={billingData.name}
                className="w-full border border-gray-200 rounded px-4 py-3 text-sm bg-gray-50  outline-none"
                placeholder="Full Name*"
              />
              <input
                onChange={handleChange}
                name="address"
                type="text"
                value={billingData.address}
                className="w-full border border-gray-200 rounded px-4 py-3 text-sm bg-gray-50  outline-none"
                placeholder="Address*"
              />
              <input
                onChange={handleChange}
                name="city"
                type="text"
                value={billingData.city}
                className="w-full border border-gray-200 rounded px-4 py-3 text-sm bg-gray-50  outline-none"
                placeholder="City"
              />
              <input
                onChange={handleChange}
                name="phone"
                type="text"
                value={billingData.phone}
                className="w-full border border-gray-200 rounded px-4 py-3 text-sm bg-gray-50  outline-none"
                placeholder="Phone Number*"
              />
              <input
                onChange={handleChange}
                name="email"
                type="email"
                value={billingData.email}
                className="w-full border border-gray-200 rounded px-4 py-3 text-sm bg-gray-50  outline-none"
                placeholder="Email Address*"
              />
            </div>
            <div className="flex items-center gap-2 mt-4">
              <Label className=" flex items-center gap-3 cursor-pointer">
                <Checkbox
                  id="toggle-2"
                  // defaultChecked
                  className="data-[state=checked]:border-primaryColor data-[state=checked]:bg-primaryColor data-[state=checked]:text-white dark:data-[state=checked]:border-primaryColor dark:data-[state=checked]:bg-blue-700 cursor-pointer"
                />
                Save this information for faster check-out next time
              </Label>
            </div>
          </div>
          {/* RIGHT SIDE */}
          <div className="bg-white p-6 border rounded-md shadow-sm h-full flex justify-between flex-col">
            <div>
              <div className="pt- text-sm space-y-3">
                <h2 className="text-3xl font-semibold mb-6">Billing Details</h2>
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>${subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax:</span>
                  <span>${tax}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping:</span>
                  <span>{shippingFee}</span>
                </div>
                <div className="flex justify-between border-t pt-3 font-medium mb-3">
                  <span>Total:</span>
                  <span>${total}</span>
                </div>
              </div>
              <RadioGroup defaultValue="COD">
                <div className="flex items-center gap-3 cursor-pointer">
                  <RadioGroupItem
                    name="paymentMethod"
                    checked={paymentMethod === "COD"}
                    onChange={() => setPaymentMethod("COD")}
                    value="COD"
                    id="option-one"
                  />
                  <Label htmlFor="option-one" className="cursor-pointer">
                    COD
                  </Label>
                </div>
                <div className="flex items-center gap-3 cursor-pointer">
                  <RadioGroupItem
                    name="paymentMethod"
                    checked={paymentMethod === "online"}
                    onChange={() => setPaymentMethod("online")}
                    value="Online Payment"
                    id="option-two"
                  />
                  <Label htmlFor="option-two" className="cursor-pointer">
                    Online Payment
                  </Label>
                </div>
              </RadioGroup>
            </div>
            {/* BUTTON */}
            <button
              onClick={handlePlaceOrder}
              className="w-full mt-6 cursor-pointer bg-primaryColor text-white py-3 rounded font-medium"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default page;
