import React, { useState } from "react";

import {
  User,
  Phone,
  Mail,
  MapPin,
  Building2,
  Hash,
  CreditCard,
  ShoppingBag,
  FileText,
  CheckCircle2,
  Truck,
  Minus,
  Plus,
} from "lucide-react";

import { useCart } from "./CartContext";


// =====================================================
// PRICE FORMAT
// =====================================================
const formatPrice = (value) => {
  return `Rs. ${Number(value || 0).toLocaleString("en-PK")}`;
};


// =====================================================
// CHECKOUT
// =====================================================
const Checkout = () => {

  // ===================================================
  // CART
  // ===================================================
  const {
    items,
    updateQuantity,
  } = useCart();


  // ===================================================
  // FORM STATE
  // ===================================================
  const [formData, setFormData] = useState({

    fullName: "",
    phone: "",
    email: "",

    address: "",
    city: "",
    area: "",
    postalCode: "",

    paymentMethod: "Cash on Delivery",

    notes: "",

    terms: false,

  });


  // ===================================================
  // INPUT CHANGE
  // ===================================================
  const handleChange = (e) => {

    const {
      name,
      value,
      type,
      checked,
    } = e.target;


    setFormData((previous) => ({

      ...previous,

      [name]:
        type === "checkbox"
          ? checked
          : value,

    }));

  };


  // ===================================================
  // DELIVERY CHARGES
  // ===================================================
  const deliveryCharges = 200;


  // ===================================================
  // SUBTOTAL
  // ===================================================
  const subtotal = items.reduce(
    (total, item) => {

      return (
        total +
        Number(item.price || 0) *
          Number(item.quantity || 1)
      );

    },
    0
  );


  // ===================================================
  // TOTAL
  // ===================================================
  const total =
    subtotal + deliveryCharges;


  // ===================================================
  // PLACE ORDER
  // ===================================================
  const handleSubmit = (e) => {

    e.preventDefault();


    // -----------------------------------------------
    // EMPTY CART
    // -----------------------------------------------
    if (items.length === 0) {

      alert(
        "Your cart is empty. Please add a product first."
      );

      return;
    }


    // -----------------------------------------------
    // TERMS
    // -----------------------------------------------
    if (!formData.terms) {

      alert(
        "Please accept the Terms & Conditions."
      );

      return;
    }


    // -----------------------------------------------
    // ORDER DATA
    // -----------------------------------------------
    const orderData = {

      customer: {

        fullName:
          formData.fullName,

        phone:
          formData.phone,

        email:
          formData.email,

      },


      delivery: {

        address:
          formData.address,

        city:
          formData.city,

        area:
          formData.area,

        postalCode:
          formData.postalCode,

      },


      paymentMethod:
        formData.paymentMethod,


      notes:
        formData.notes,


      products:
        items,


      subtotal:
        subtotal,


      deliveryCharges:
        deliveryCharges,


      total:
        total,

    };


    // Console
    console.log(
      "ORDER DATA:",
      orderData
    );


    // Success
    alert(
      "🎉 Your order has been placed successfully!"
    );


    // =================================================
    // BAAD MEIN BACKEND API YAHAN LAGEGI
    // =================================================
    //
    // axios.post(
    //   "http://localhost:5000/api/orders",
    //   orderData
    // );
    //
    // =================================================

  };


  // ===================================================
  // EMPTY CART
  // ===================================================
  if (items.length === 0) {

    return (

      <div className="min-h-screen bg-[#f7f7f5] flex items-center justify-center px-4">

        <div className="w-full max-w-md bg-white rounded-3xl shadow-sm border border-gray-100 p-10 text-center">

          <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto">

            <ShoppingBag size={28} />

          </div>


          <h1 className="mt-5 text-2xl font-bold text-gray-900">
            Your Cart Is Empty
          </h1>


          <p className="mt-2 text-gray-500">
            Please add a product before going to checkout.
          </p>


          <a
            href="/collections"
            className="mt-6 inline-block rounded-xl bg-black px-7 py-3 font-semibold text-white hover:bg-[#C5A059] transition"
          >
            Continue Shopping
          </a>

        </div>

      </div>

    );
  }


  // ===================================================
  // MAIN CHECKOUT
  // ===================================================
  return (

    <div className="min-h-screen bg-[#f7f7f5] py-10 px-4">

      <div className="max-w-6xl mx-auto">


        {/* =================================================
            HEADER
        ================================================= */}
        <div className="text-center mb-10">

          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-black text-white mb-4">

            <ShoppingBag size={25} />

          </div>


          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Complete Your Order
          </h1>


          <p className="text-gray-500 mt-2">
            Enter your details below to place your order
          </p>

        </div>


        {/* =================================================
            FORM
        ================================================= */}
        <form
          onSubmit={handleSubmit}
          className="grid lg:grid-cols-3 gap-7"
        >


          {/* =================================================
              LEFT SIDE
          ================================================= */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-8">


            {/* =================================================
                CUSTOMER INFORMATION
            ================================================= */}
            <div className="mb-8">

              <div className="flex items-center gap-3 mb-6">

                <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">

                  <User size={19} />

                </div>


                <div>

                  <h2 className="text-xl font-semibold text-gray-900">
                    Customer Information
                  </h2>

                  <p className="text-sm text-gray-500">
                    Tell us how we can contact you
                  </p>

                </div>

              </div>


              <div className="grid md:grid-cols-2 gap-5">


                {/* FULL NAME */}
                <div>

                  <label className="text-sm font-medium text-gray-700">
                    Full Name *
                  </label>


                  <div className="relative mt-2">

                    <User
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />


                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 outline-none focus:border-black focus:ring-2 focus:ring-black/5 transition"
                    />

                  </div>

                </div>


                {/* PHONE */}
                <div>

                  <label className="text-sm font-medium text-gray-700">
                    Phone Number *
                  </label>


                  <div className="relative mt-2">

                    <Phone
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />


                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="03XX XXXXXXX"
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 outline-none focus:border-black focus:ring-2 focus:ring-black/5 transition"
                    />

                  </div>

                </div>


                {/* EMAIL */}
                <div className="md:col-span-2">

                  <label className="text-sm font-medium text-gray-700">
                    Email Address
                  </label>


                  <div className="relative mt-2">

                    <Mail
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />


                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@gmail.com"
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 outline-none focus:border-black focus:ring-2 focus:ring-black/5 transition"
                    />

                  </div>

                </div>

              </div>

            </div>


            {/* =================================================
                DELIVERY
            ================================================= */}
            <div className="mb-8">

              <div className="flex items-center gap-3 mb-6">

                <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">

                  <Truck size={19} />

                </div>


                <div>

                  <h2 className="text-xl font-semibold">
                    Delivery Information
                  </h2>

                  <p className="text-sm text-gray-500">
                    Where should we deliver your order?
                  </p>

                </div>

              </div>


              <div className="space-y-5">


                {/* ADDRESS */}
                <div>

                  <label className="text-sm font-medium text-gray-700">
                    Complete Address *
                  </label>


                  <div className="relative mt-2">

                    <MapPin
                      size={18}
                      className="absolute left-4 top-4 text-gray-400"
                    />


                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      rows="3"
                      placeholder="House #, Street, Road, Building..."
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 outline-none focus:border-black focus:ring-2 focus:ring-black/5 transition resize-none"
                    />

                  </div>

                </div>


                {/* CITY / AREA / POSTAL */}
                <div className="grid md:grid-cols-3 gap-5">


                  {/* CITY */}
                  <div>

                    <label className="text-sm font-medium text-gray-700">
                      City *
                    </label>


                    <div className="relative mt-2">

                      <Building2
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />


                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        placeholder="Rawalpindi"
                        className="w-full pl-11 pr-3 py-3.5 rounded-xl border border-gray-200 outline-none focus:border-black focus:ring-2 focus:ring-black/5 transition"
                      />

                    </div>

                  </div>


                  {/* AREA */}
                  <div>

                    <label className="text-sm font-medium text-gray-700">
                      Area *
                    </label>


                    <input
                      type="text"
                      name="area"
                      value={formData.area}
                      onChange={handleChange}
                      required
                      placeholder="Saddar"
                      className="w-full mt-2 px-4 py-3.5 rounded-xl border border-gray-200 outline-none focus:border-black focus:ring-2 focus:ring-black/5 transition"
                    />

                  </div>


                  {/* POSTAL CODE */}
                  <div>

                    <label className="text-sm font-medium text-gray-700">
                      Postal Code
                    </label>


                    <div className="relative mt-2">

                      <Hash
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />


                      <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                        placeholder="46000"
                        className="w-full pl-11 pr-3 py-3.5 rounded-xl border border-gray-200 outline-none focus:border-black focus:ring-2 focus:ring-black/5 transition"
                      />

                    </div>

                  </div>

                </div>

              </div>

            </div>


            {/* =================================================
                PAYMENT
            ================================================= */}
            <div className="mb-8">

              <div className="flex items-center gap-3 mb-5">

                <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">

                  <CreditCard size={19} />

                </div>


                <div>

                  <h2 className="text-xl font-semibold">
                    Payment Method
                  </h2>

                  <p className="text-sm text-gray-500">
                    Select your preferred payment method
                  </p>

                </div>

              </div>


              <div className="grid md:grid-cols-2 gap-4">


                {/* COD */}
                <label
                  className={`cursor-pointer border rounded-2xl p-4 transition ${
                    formData.paymentMethod ===
                    "Cash on Delivery"
                      ? "border-black bg-gray-50"
                      : "border-gray-200"
                  }`}
                >

                  <div className="flex items-center gap-3">

                    <input
                      type="radio"
                      name="paymentMethod"
                      value="Cash on Delivery"
                      checked={
                        formData.paymentMethod ===
                        "Cash on Delivery"
                      }
                      onChange={handleChange}
                    />


                    <div>

                      <p className="font-semibold">
                        Cash on Delivery
                      </p>

                      <p className="text-sm text-gray-500">
                        Pay when your order arrives
                      </p>

                    </div>

                  </div>

                </label>


                {/* BANK TRANSFER */}
                <label
                  className={`cursor-pointer border rounded-2xl p-4 transition ${
                    formData.paymentMethod ===
                    "Bank Transfer"
                      ? "border-black bg-gray-50"
                      : "border-gray-200"
                  }`}
                >

                  <div className="flex items-center gap-3">

                    <input
                      type="radio"
                      name="paymentMethod"
                      value="Bank Transfer"
                      checked={
                        formData.paymentMethod ===
                        "Bank Transfer"
                      }
                      onChange={handleChange}
                    />


                    <div>

                      <p className="font-semibold">
                        Bank Transfer
                      </p>

                      <p className="text-sm text-gray-500">
                        Pay directly through bank
                      </p>

                    </div>

                  </div>

                </label>

              </div>

            </div>


            {/* =================================================
                NOTES
            ================================================= */}
            <div className="mb-7">

              <label className="text-sm font-medium text-gray-700">
                Order Notes
              </label>


              <div className="relative mt-2">

                <FileText
                  size={18}
                  className="absolute left-4 top-4 text-gray-400"
                />


                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Any special instructions for your order?"
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 outline-none focus:border-black focus:ring-2 focus:ring-black/5 transition resize-none"
                />

              </div>

            </div>


            {/* =================================================
                TERMS
            ================================================= */}
            <label className="flex items-start gap-3 cursor-pointer mb-6">

              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                className="mt-1 w-4 h-4"
              />


              <span className="text-sm text-gray-600">

                I agree to the{" "}

                <span className="font-semibold text-black">
                  Terms & Conditions
                </span>

                {" "}and{" "}

                <span className="font-semibold text-black">
                  Privacy Policy
                </span>

                .

              </span>

            </label>


            {/* =================================================
                PLACE ORDER
            ================================================= */}
            <button
              type="submit"
              className="w-full bg-black text-white py-4 rounded-xl font-semibold text-lg hover:bg-[#C5A059] transition duration-300 flex items-center justify-center gap-2"
            >

              <CheckCircle2 size={20} />

              Place Order

            </button>

          </div>


          {/* =================================================
              RIGHT SIDE ORDER SUMMARY
          ================================================= */}
          <div className="lg:col-span-1">

            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 sticky top-6">


              {/* HEADER */}
              <div className="flex items-center gap-3 mb-6">

                <ShoppingBag size={20} />

                <h2 className="text-xl font-semibold">
                  Order Summary
                </h2>

              </div>


              {/* =================================================
                  ALL CART PRODUCTS
              ================================================= */}
              <div className="space-y-5 pb-6 border-b border-gray-100">

                {items.map((item) => (

                  <div
                    key={item.id}
                    className="flex gap-4"
                  >


                    {/* IMAGE */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-24 object-cover rounded-xl"
                    />


                    {/* DETAILS */}
                    <div className="flex-1">

                      <h3 className="font-semibold text-gray-900">
                        {item.name}
                      </h3>


                      <p className="text-gray-500 text-sm mt-1">
                        {item.category ||
                          "Premium Collection"}
                      </p>


                      <p className="text-xs text-gray-500 mt-1">
                        Size: {item.size || "Standard"}
                      </p>


                      <p className="font-bold mt-2">
                        {formatPrice(item.price)}
                      </p>


                      {/* QUANTITY */}
                      <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden w-fit mt-3">


                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.quantity - 1
                            )
                          }
                          className="px-3 py-2 hover:bg-gray-100"
                        >

                          <Minus size={13} />

                        </button>


                        <span className="px-3 font-semibold text-sm">
                          {item.quantity}
                        </span>


                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.quantity + 1
                            )
                          }
                          className="px-3 py-2 hover:bg-gray-100"
                        >

                          <Plus size={13} />

                        </button>

                      </div>

                    </div>

                  </div>

                ))}

              </div>


              {/* =================================================
                  PRICE
              ================================================= */}
              <div className="space-y-4 pt-5">


                {/* SUBTOTAL */}
                <div className="flex justify-between text-gray-600">

                  <span>
                    Subtotal
                  </span>

                  <span>
                    {formatPrice(subtotal)}
                  </span>

                </div>


                {/* DELIVERY */}
                <div className="flex justify-between text-gray-600">

                  <span>
                    Delivery
                  </span>

                  <span>
                    {formatPrice(deliveryCharges)}
                  </span>

                </div>


                {/* TOTAL */}
                <div className="border-t border-gray-100 pt-4 flex justify-between">

                  <span className="font-bold text-lg">
                    Total
                  </span>

                  <span className="font-bold text-xl">
                    {formatPrice(total)}
                  </span>

                </div>

              </div>


              {/* =================================================
                  SECURE CHECKOUT
              ================================================= */}
              <div className="mt-6 p-4 bg-gray-50 rounded-2xl">

                <div className="flex gap-3">

                  <CheckCircle2
                    size={20}
                    className="text-green-600 mt-0.5"
                  />


                  <div>

                    <p className="font-semibold text-sm">
                      Secure Checkout
                    </p>

                    <p className="text-xs text-gray-500 mt-1">
                      Your information is safe and protected.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </form>

      </div>

    </div>

  );
};


export default Checkout;