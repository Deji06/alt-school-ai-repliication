'use client'
import React from "react";
import {useState} from 'react'
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link'
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
import auth from '@/app/firebase/config'

type Props = {};

const SignUp = () => {
  // states
  // const [name, setName] = useState('')
  const[email, setEmail]= useState('');
  const[password, setPassword]= useState('');  

  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth)
  
  const handleSignUp = async () => {
    try {
      const resp = await createUserWithEmailAndPassword(email, password)
      console.log('user response:' , resp);
      setEmail('')
      setPassword('')
    } catch (error) {
      console.error('error during sign up:',error);
      
      
    }
  }

  return (
    <div className="px-4 py-4 sm:px-0 sm:py-0 mt-10 mx-">
      <p className="border-2 sm:bg-white sm:border sm:mx-20 sm:py-1 rounded-[10px]  p-5 font-bold text-[30px] capitalize">
        deji___ <br />
        school
      </p>
      <div className="mx-10">
        <p className="capitalize font-bold text-[30px] mt-10 mx-1">sign up</p>
        <a
          className="border flex gap-x-3 items-center py-3 justify-center capitalize mt-3"
          href="https://accounts.google.com.ng"
        >
          <FcGoogle /> sign up with Google
        </a>
        <p className="mt-5 capitalize">or sign up with email</p>
        <form action="" className="flex flex-col gap-y-5 mt-5">
          {/* <div className="flex flex-col gap-y-2">
            <label htmlFor="">Full Name*</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}  placeholder="Deji Olawuni" className="border py-2 rounded-[10px] px-2"/>
          </div> */}
          <div className="flex flex-col gap-y-2" >
            <label htmlFor="">Email*</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}  placeholder="example@gmail.com" className="border py-2 rounded-[10px] px-2"/>
          </div>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="">Password*</label>
            <input type="text"  value={password} onChange={(e) => setPassword(e.target.value)} placeholder="************" className="border py-2 rounded-[10px] px-2"/>
          </div>
          {/* <div className="flex flex-col gap-y-2">
            <label htmlFor="">Confirm Password*</label>
            <input type="text"  placeholder="*******" className="border py-2 rounded-[10px] px-2"/>
          </div> */}
        </form>
        <button type="submit"  className="text-white bg-[#2F80ED] px-5 py-2 rounded-[10px] mt-5" onClick={handleSignUp}>sign up</button>
        <div className="flex items-center gap-x-1 mt-2">
          <Link href='/LogIn' className="underline">Login</Link>
          <p>if you already have an account</p>
        </div>

      </div>

    </div>
  );
};

export default SignUp;


// const handleSignUp = async (email, password) => {
  //   try {
  //     const userCredential = await signInWithEmailAndPassword(auth, email, password);
  //     console.log('User signed in:', userCredential.user);
  //   } catch (error) {
  //     console.error('Error signing in:', error);
  //   }
  // };