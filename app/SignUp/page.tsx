"use client";
import React from "react";
import Signup from "../components/SignUp";
// import {useState} from 'react'
// import { FcGoogle } from "react-icons/fc";
// import Link from 'next/link'
// import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
// import auth from '@/app/firebase/config'
// import {useRouter} from 'next/navigation'

type Props = {};

const SignUp = () => {
  // states
  // const [name, setName] = useState('')
  // const router = useRouter()
  // const[email, setEmail]= useState('');
  // const[password, setPassword]= useState('');

  // const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth)

  // const handleSignUp = async () => {
  //   try {
  //     const resp = await createUserWithEmailAndPassword(email, password)
  //     console.log('user response:' , resp);
  //     setEmail('')
  //     setPassword('')
  //     if(resp) {
  //       router.push('/Login')
  //     }
  //   } catch (error) {
  //     console.error('error during sign up:',error);

  //   }
  // }

  return (
    <div className="px-4 py-4 sm:pb-32 sm:px-0 mt-10 sm:mt-0  sm:bg-[#E9F9FF] relative">
      <p className="border-2 sm:bg-white sm:border sm:mx-auto sm:my-10 rounded-[10px] sm:py-0 sm:w-[70%] p-5 font-bold text-[30px] capitalize">
        deji___ <br />
        school
      </p>
      <div className="sm:absolute sm:left-48 sm:pb-10">
        <Signup />
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
