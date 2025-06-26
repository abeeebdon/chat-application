"use client";
import ChangeTheme from "@/components/ChangeTheme";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex h-screen w-full">
      <article className="hidden md:flex w-full  bg-gradient-to-br p-4 lg:p-6 from-primary-100 to-blue-50 flex-col justify-between">
        <h2 className="text-primary-100 font-semibold text-3xl dark:text-white">
          devChat
        </h2>
        <p className="text-2xl  font-medium">
          Communicate like no other, bridge it and feel the presence
        </p>
      </article>
      <div className="w-full relative">
        <div className="absolute top-4 right-4 z-10">
          <ChangeTheme />
        </div>
        {children}
      </div>
    </main>
  );
}
