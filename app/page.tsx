'use client'
import React from "react";
import {useState} from 'react'
import { FaUserGroup } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { CiChat1 } from "react-icons/ci";
import { BsFileEarmarkText } from "react-icons/bs";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Link from "next/link";

type Props = {};
const pages = [
  { href: "/SignUp", label: "Sign Up" },
  { href: "/LogIn", label: "Log In" },
];


const page = (props: Props) => {
  return (
    <>
      <div className="px-4 py-4 sm:px-0 sm:py-0">
        <div className="sm:bg-[#E9F9FF] mt-10 sm:py-10 sm:mt-0 sm:pb-28 relative">
          <p className="border-2 sm:bg-white sm:border sm:mx-20 sm:py-1 rounded-[10px]  p-5 font-bold text-[30px] capitalize">
            deji___ <br />
            school
          </p>
          <div className="sm:mx-20 sm:mt-10 mt-5 sm:flex justify-between">
            <div className="sm:mt-10 mt-0 ">
              <p className="py-16 sm:py-0 uppercase w-[70%] font-bold text-[20px] sm:w-[100%]">
                need some help with your career ?
              </p>
              <p className="font-bold text-[40px]">
                Career AI is <br />{" "}
                <span className="capitalize text-[#2F80ED]">
                  your best friend
                </span>
              </p>
            </div>
            {/* mobile screen sign up component */}
            <div className="border hidden sm:flex">
              <p>sign in</p>
            </div>
          </div>
        </div>

        <div className="border mt-20 rounded-[10px] pb-3 sm:w-[400px] sm:mx-20 sm:absolute sm:top-[380px] bg-white">
          <p className="px-5  text-[20px] py-3">
            some of our services you'll need
          </p>
          <div className="border mt-3"></div>
          <div className="flex flex-col px-5 gap-y-5 mt-2 py-3">
            <div className="flex items-center gap-x-5">
              <FaUserGroup />
              <p className="text-[20px] font-bold capitalize">interview prep</p>
            </div>
            <div className="flex items-center gap-x-5">
              <FaLinkedin />
              <p className="text-[20px] font-bold capitalize">
                linkedIn profile review
              </p>
            </div>
            <div className="flex items-center gap-x-5">
              <BsFileEarmarkText />
              <p className="text-[20px] font-bold capitalize">
                cv/resume review
              </p>
            </div>
            <div className="flex items-center gap-x-5 ">
              <CiChat1 />
              <p className="text-[20px] font-bold capitalize">
                career advisor chat
              </p>
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
                    className="text-white bg-[#2F80ED] px-5 py-2 rounded-[10px]"
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

export default page;
