"use client";
import { signIn } from "next-auth/react";
import Credentials from "next-auth/providers/credentials";
import Image from "next/image";
import { useState } from "react";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logingUser, setLogingUser] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmitForm(e) {
    e.preventDefault();
    setLoggedIn(false);
    setError(false);
    setLogingUser(true);

    const result = await signIn("credentials", {
      redirect: false, // don't redirect automatically
      email,
      password,
    });
    if (result?.ok) {
      setLoggedIn(true);
    } else {
      setError(true);
    }

    setLogingUser(false);
  }

  return (
    <section>
      {!loggedIn ? (
        <>
          <h1 className="text-center text-4xl font-bold logo-color mt-8">
            Login
          </h1>
          <form
            className="block max-w-xs mx-auto mt-6"
            onSubmit={handleSubmitForm}
          >
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={logingUser}
              className="w-full mb-4 p-2 border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={logingUser}
              className="w-full mb-4 p-2 border rounded"
            />

            <button
              type="submit"
              className="logo-bg w-full py-2 text-white rounded disabled:opacity-70"
              disabled={logingUser}
            >
              {logingUser ? "please wait..." : "Login"}
            </button>

            {error && (
              <p className="text-center text-red-500 font-medium mb-4">
                ❌ Failed to Log In. Please try again.
              </p>
            )}

            <div className="my-2 text-center py-2 border rounded-xl">
              Login with other provider
            </div>

            <button
              type="button"
              className="flex gap-4 justify-center items-center w-full py-2 border rounded disabled:opacity-70"
              disabled={logingUser}
            >
              <Image
                src="/google.png"
                alt="login google"
                width={24}
                height={24}
              />
              Login with Google
            </button>
            <p className="text-center mt-2">
              Don&apos;t have account?{" "}
              <a href="/login" className="logo-color underline">
                SignUp
              </a>
            </p>
          </form>
        </>
      ) : (
        <div>
          <p>hello</p>
        </div>
      )}
    </section>
  );
}

export default LogIn;
