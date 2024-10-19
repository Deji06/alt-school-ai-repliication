"use client";
import React from "react";
import { useState } from "react";
import { FaUserGroup } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { CiChat1 } from "react-icons/ci";
import { BsFileEarmarkText } from "react-icons/bs";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "@/app/components/LogIn";
// import SignUp from "./components/SignUp";
import Link from "next/link";

type Props = {};
const pages = [
  { href: "/SignUp", label: "Sign Up" },
  { href: "/LogIn", label: "Log In" },
];

const LogIn = (props: Props) => {
  return (
    <>
      <div className="px-4 py-4 sm:px-0 sm:py-0">
        <div className="sm:bg-[#E9F9FF] mt-10 sm:py-10 sm:mt-0 sm:pb-28 relative">
          <p className="border-2 sm:bg-white sm:border sm:w-[70%] sm:mt-10 sm:mx-auto  sm:py-1 rounded-[10px]  p-5 font-bold text-[30px] capitalize">
            deji___ <br />
            school
          </p>
          <div className="sm:mx-20 sm:mt-10 mt-5 sm:flex justify-between">
            <div className="sm:mt-5 mt-0 sm:ml-32 ">
              <p className="py-16 sm:py-0 uppercase  w-[70%] font-bold  sm:w-[100%]">
                need some help with your career ?
              </p>
              <p className="font-bold mt-2 text-[30px]">
                Career AI is <br />{" "}
                <span className="capitalize text-[#2F80ED]">
                  your best friend
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* mobile screen sign up component */}
        <div className="hidden sm:flex absolute left-[780px] top-[240px] ">
          <Login />
        </div>

        <div className="border mt-20 rounded-[10px] pb-3 sm:w-[400px] sm:mx-20 sm:absolute sm:top-[350px] sm:left-24 bg-white">
          <p className="mx-4 font-black py-4">
            some of our services you'll need
          </p>
          <div className="border "></div>
          <div className="flex flex-col px-5 gap-y-5 mt-2 py-3">
            <div className="flex items-center gap-x-5">
              <FaUserGroup />
              <p className=" capitalize">interview prep</p>
            </div>
            <div className="flex items-center gap-x-5">
              <FaLinkedin />
              <p className=" capitalize">linkedIn profile review</p>
            </div>
            <div className="flex items-center gap-x-5">
              <BsFileEarmarkText />
              <p className="capitalize">cv/resume review</p>
            </div>
            <div className="flex items-center gap-x-5 ">
              <CiChat1 />
              <p className= "capitalize">career advisor chat</p>
            </div>
          </div>
        </div>
        <div className="flex sm:hidden mt-10 justify-between pb-5 ">
          {pages.map((page) => {
            return (
              <div className="flex " key={page.href}>
                <Link href={page.href}>
                  <button
                    type="submit"
                    className="text-white bg-[#3056EC] px-5 py-2 rounded-[10px]"
                  >
                    {page.label}
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default LogIn;
