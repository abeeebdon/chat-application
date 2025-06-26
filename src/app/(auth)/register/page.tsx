"use client";
import CustomInput from "@/components/CustomInput";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as yup from "yup";
interface FormValue {
  email: string;
  fullName: string;
  password: string;
  confirm_password: string;
}

const loginSchema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  fullName: yup.string().required("Full name is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});
const page = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: FormValue) => {
    const formData = {
      fullName: data.fullName,
      email: data.email,
      password: data.password,
    };
    const response = await fetch(`${process.env.NEXT_BASEURL}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const result = await response.json();
    if (!response.ok) {
      console.error("Login failed:", result);
      return;
    }
    router.push("/login");
    console.log("Form submitted with data:", response, data);
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
            name="fullName"
            register={register}
            label="Full Name"
            placeholder="Enter your full name"
            error={errors.fullName}
          />
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
          <CustomInput
            name="confirm_password"
            register={register}
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
            error={errors.confirm_password}
          />

          <button
            type="submit"
            className="mt-4 w-full rounded-md bg-primary px-4 py-2 text-white"
          >
            Submit
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-500">
          Already have an account?
          <Link href="/login" className="text-primary hover:underline">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default page;
