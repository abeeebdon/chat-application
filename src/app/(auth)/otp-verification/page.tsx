"use client";

import { useState } from "react";
import OtpInput from "react-otp-input";
import { useRouter } from "next/navigation";

const OtpVerification = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (value: string) => {
    setOtp(value);
    if (error) setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length !== 4) {
      setError("Please enter all 4 digits");
      return;
    }

    console.log("OTP submitted:", otp);
    // You can make a request here to your backend to verify
    router.push("/reset-password");
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-center mb-2">
          OTP Verification
        </h2>
        <p className="text-sm text-gray-600 text-center mb-6">
          Enter the 4-digit code sent to your email
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <OtpInput
            value={otp}
            onChange={handleChange}
            numInputs={4}
            inputType="tel"
            shouldAutoFocus
            renderInput={(props) => <input {...props} />}
            containerStyle="flex justify-center gap-2"
            inputStyle="!w-12 !h-12 !text-lg !text-center !border !border-gray-300 !rounded-md focus:!outline-none focus:!ring-2 focus:!ring-blue-500"
          />
          {error && <p className="text-red-500 text-center text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Verify OTP
          </button>
          <p className="text-sm text-center text-gray-500">
            Didn’t receive the code?{" "}
            <button
              type="button"
              onClick={() => console.log("Resend")}
              className="text-blue-600 hover:underline"
            >
              Resend
            </button>
          </p>
        </form>
      </div>
    </section>
  );
};

export default OtpVerification;
