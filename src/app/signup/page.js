"use client";

import { signIn } from "next-auth/react";
import TopRight from "../../components/icons/TopRight";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [creatingUser, setCreatingUser] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmitForm(e) {
    e.preventDefault();
    setError("");

    if (!email || !password || !username) {
      setError("Please fill in all fields before signing up.");
      return;
    }

    setCreatingUser(true);

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        body: JSON.stringify({ email, password, username }),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        router.push("/");
      } else {
        setError("Failed to create user. Please try again.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    }

    setCreatingUser(false);
  }

  return (
    <section>
      <h1 className="text-center logo-color text-4xl mt-8 mb-4 font-semibold">
        Sign Up
      </h1>
      <form className="block max-w-xs mx-auto" onSubmit={handleSubmitForm}>
        <input
          type="text"
          placeholder="User name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          disabled={creatingUser}
          className="w-full mb-4 p-2 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={creatingUser}
          className="w-full mb-4 p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={creatingUser}
          className="w-full mb-4 p-2 border rounded"
        />

        <button
          type="submit"
          className="logo-bg w-full py-2 text-white rounded mb-4 disabled:opacity-70"
          disabled={creatingUser}
        >
          {creatingUser ? "Creating..." : "Sign Up"}
        </button>

        {error && (
          <p className="text-center text-red-500 font-medium mb-4">{error}</p>
        )}

        <div className="my-4 text-center">Login with other provider</div>

        <button
          type="button"
          className="flex gap-4 justify-center items-center w-full py-2 border rounded disabled:opacity-70"
          disabled={creatingUser}
          onClick={() => signIn("google", { callbackUrl: "/" })}
        >
          <Image src="/google.png" alt="login google" width={24} height={24} />
          Sign up with Google
        </button>
      </form>
    </section>
  );
}

export default SignUp;
