import React from 'react'
import {getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth"
import { useState } from "react";
import {app} from "../firebaseConfig.js"
export default function LoginAuth() {
    const [email,setEmail]= useState("");
    const [password,setPassword]=useState("");
    const auth=getAuth();
    const handleSignIn=async()=>{
        await signInWithEmailAndPassword(auth,email,password).then((response)=>{
            console.log(response.user);
        })
        .catch((err)=>{
             console.log(err.code)
             console.log(err.message)
        })
    }
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
    <form onSubmit={handleSignIn} className="p-10 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">Sign In</h2>
      
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Email"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="******************"
        />
      </div>

      <div className="flex items-center justify-between">
        <button
          type="submit" onClick={handleSignIn}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Sign In
        </button>
      </div>
    </form>
  </div>
  )
}

