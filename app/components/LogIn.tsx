"use client";
import React from "react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "@/app/firebase/config";
import { useRouter } from "next/navigation";

type Props = {};

const LogIn = () => {
  // states
  // const [name, setName] = useState('')
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleLogIn = async () => {
    try {
      const resp = await signInWithEmailAndPassword(email, password);
      console.log("user response:", resp);
      setEmail("");
      setPassword("");
      // link to next page if password and email are correct for now linkimh to
      if (resp) {
        router.push("/");
      }
      // router.push('/SignUp')
    } catch (error) {
      console.error("error during sign up:", error);
    }
  };

  return (
    <div className="px-4 py-4 sm:px-0 sm:py-0 bg-white rounded-[10px] sm:border">
      <div className="mx-10">
        <p className="capitalize font-bold text-[25px] mt-10 mx-1">login</p>
        <a
          className="border flex gap-x-3 items-center py-3 justify-center capitalize mt-3 rounded-[10px] text-[#8392A7]"
          href="https://accounts.google.com.ng"
        >
          <FcGoogle /> log in with Google
        </a>
        <p className="mt-5 capitalize text-[#8392A7] font-bold">
          or login with email
        </p>
        <form action="" className="flex flex-col gap-y-5 mt-5">
          {/* <div className="flex flex-col gap-y-2">
            <label htmlFor="">Full Name*</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}  placeholder="Deji Olawuni" className="border py-2 rounded-[10px] px-2"/>
          </div> */}
          <div className="flex flex-col gap-y-2">
            <label htmlFor="" className="text-[#8392A7]">
              Email*
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@gmail.com"
              className={`border ${
                error ? "border-red-600" : "border"
              }  py-2 rounded-[10px] px-2`}
            />
            {error && (
              <p style={{ color: "red" }}>please enter valid email address</p>
            )}
          </div>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="" className="text-[#8392A7]">
              Password*
            </label>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="************"
              className={`border ${
                error ? "border-red-600" : "border"
              } py-2 rounded-[10px] px-2`}
            />
            {error && (
              <p style={{ color: "red" }}>
                password must be at least 6 characters
              </p>
            )}
          </div>
          {/* <div className="flex flex-col gap-y-2">
            <label htmlFor="">Confirm Password*</label>
            <input type="text"  placeholder="*******" className="border py-2 rounded-[10px] px-2"/>
          </div> */}
        </form>
        <button
          type="submit"
          className="text-white bg-[#3056EC] px-5 py-2 rounded-[10px] mt-5"
          onClick={handleLogIn}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Log In"}
        </button>
        <div className="flex items-center gap-x-1 mt-5 pb-5">
          <Link
            href="/"
            className="underline text-[#8392A7] font-bold hover:text-[#2F80ED]"
          >
            sign up
          </Link>
          <p className="text-[#8392A7]">if you already have an account</p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
