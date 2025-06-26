"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

const ChangeTheme = () => {
  const { setTheme, theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="relative w-30 flex justify-end group">
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
        aria-label="Toggle theme"
      >
        {isDark ? <SunIcon size={20} /> : <MoonIcon size={20} />}
      </button>

      <span className="absolute top-full mt-1 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black text-white text-[10px] px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
        Switch to {isDark ? "Light" : "Dark"} Mode
      </span>
    </div>
  );
};

export default ChangeTheme;
