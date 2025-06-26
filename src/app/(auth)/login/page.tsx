"use client";

import CustomInput from "@/components/CustomInput";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as yup from "yup";

interface FormValue {
  email: string;
  password: string;
}

const loginSchema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: FormValue) => {
    console.log("Form submitted with data:", data);
    // e.g., send data to API
  };

  return (
    <section className="flex items-center justify-center h-full w-full ">
      <div className="w-full max-w-md mx-auto p-4">
        <div className="text-center ">
          <h2 className="text-xl font-semibold">Sign in to continue</h2>
          <p>Let's signin and start </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <CustomInput
            name="email"
            register={register}
            label="Email"
            placeholder="Enter your email"
            error={errors.email}
          />
          <CustomInput
            name="password"
            register={register}
            label="Password"
            type="password"
            placeholder="Enter your password"
            error={errors.password}
          />
          <Link href="/forgot-password" className="text-sm hover:underline">
            Forgot password?
          </Link>
          <button
            type="submit"
            className="mt-4 w-full rounded-md bg-primary px-4 py-2 text-white"
          >
            Submit
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-500">
          Don't have an account?
          <Link href="/register" className="text-primary hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Page;
