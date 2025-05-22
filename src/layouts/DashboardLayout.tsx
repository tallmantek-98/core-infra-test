import type { ReactNode } from "react";
import Sidebar from "../components/Sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="grid grid-cols-[250px_1fr] h-screen overflow-hidden ">
      <Sidebar />
      <div className="overflow-y-auto h-full ">{children}</div>
    </div>
  );
};

export default DashboardLayout;
