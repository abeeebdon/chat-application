import BottomTabNav from "@/components/layout/BottomTabNav";
import Sidebar from "@/components/layout/Sidebar";
import { ReactNode } from "react";
export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen flex-col-reverse sm:flex-row">
      {/* aside on desktop  */}
      <aside className="hidden sm:block flex w-20  items-center bg-gray-100 dark:bg-gray-800">
        <Sidebar />
      </aside>
      {/* tablet mode */}
      {/* bottom tab nav on mobile */}
      <div className="sm:hidden">
        <BottomTabNav />
      </div>
      <div className="overflow-y-auto w-full">{children}</div>
    </div>
  );
}
