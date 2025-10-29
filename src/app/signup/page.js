"use client";

import Image from "next/image";
import React, { useState } from "react";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmitForm(e) {
    e.preventDefault(); // prevent page reload
    fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  console.log("hello");
  return (
    <section>
      <h1 className="text-center logo-color text-4xl mt-8 mb-4 font-semibold">
        Sign Up
      </h1>
      <form className="block max-w-xs mx-auto" onSubmit={handleSubmitForm}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        />

        <button
          type="submit"
          className="logo-bg w-full py-2 text-white rounded mb-4"
        >
          Sign Up
        </button>

        <div className="my-4 text-center">Login with other provider</div>

        <button
          type="button" // important!
          className="flex gap-4 justify-center items-center w-full py-2 border rounded"
        >
          <Image src="/google.png" alt="login google" width={24} height={24} />
          Login with Google
        </button>
      </form>
    </section>
  );
}

export default SignUp;
