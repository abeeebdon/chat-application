"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Page = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);
    setErrorMessage("");

    if (!email.trim()) {
      setErrorMessage("Email is required");
      setError(true);
      return;
    }

    // Simulate loading
    setLoading(true);
    setTimeout(() => {
      router.push("/otp-verification");
    }, 1000);
  };

  return (
    <section className="flex items-center justify-center h-screen w-full bg-gray-50">
      <div className="w-full max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold">Forgot Password?</h2>
          <p className="text-sm text-gray-500">
            Enter your email to receive a reset code.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className={`border ${
                error ? "border-red-500" : "border-gray-300"
              } p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && (
              <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-600 text-white p-2 w-full rounded-md transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send verification code"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Remembered your password?{" "}
            <Link href="/login" className="text-blue-500 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Page;
