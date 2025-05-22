import lapoLogo from "../assets/svgs/lapo_logo.svg";
import dashboard from "../assets/svgs/dashboard.svg";
import logout from "../assets/svgs/logout.svg";
import cardInfra from "../assets/png/card_infra.png";
import SidebarItem from "./SidebarItem";
import { menuItems } from "../constants";
import { useState } from "react";

const Sidebar = () => {
  const [active, setActive] = useState("Complaints: Log");
  return (
    <aside className="bg-[#002F6C] h-full overflow-y-auto px-[13px] text-[#D0D5DD] pb-[23px]">
      <div className="mt-[27px] mb-9">
        <img src={lapoLogo} alt="lapo logo" />
      </div>
      <div className="pl-[16px]">
        <SidebarItem title="Dashboard" icon={dashboard} />
        <p className="text-[8.5px] text-[#7E8B9C] font-[500] mt-[26px] ml-2">
          MAIN MENU
        </p>
        <div className="flex flex-col gap-[14px] mt-[18px] mb-[44px]">
          {menuItems.map((item) => (
            <SidebarItem
              key={item.id}
              title={item.title}
              icon={item.icon}
              isActive={item.title == active}
              onClick={() => setActive(item.title)}
            />
          ))}
        </div>
        <SidebarItem title="Logout" icon={logout} />
        <p className="mt-[37px] font-[500] text-[8.5px] text-[#7E8B9C] ml-4">
          POWERED BY
        </p>
        <img src={cardInfra} alt="card infra logo" className="w-[93.3px]" />
      </div>
    </aside>
  );
};

export default Sidebar;
