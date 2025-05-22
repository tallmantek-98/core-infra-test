import { useState } from "react";

const ComplaintStateSwitch = () => {
  const [active, setActive] = useState("pending");

  return (
    <div className="inline-block">
      <div className="border border-[#D0D5DD] flex rounded-[12px]">
        <button
          type="button"
          className={`py-[10px] px-[16px] text-[14px] font-[500] flex gap-[6px] items-center cursor-pointer rounded-l-[12px] ${
            active == "pending" ? "bg-[#F9FAFB]" : "bg-white"
          }`}
          onClick={() => setActive("pending")}
        >
          {active == "pending" && (
            <div className="w-[8px] h-[8px] rounded-full bg-[#014DAF]"></div>
          )}
          <p>Pending</p>
        </button>
        <button
          type="button"
          className={`border-l border-l-[#D0D5DD]  rounded-r-[12px] py-[10px] px-[16px] text-[14px] font-[500] flex gap-[6px] cursor-pointer items-center ${
            active == "resolved" ? "bg-[#F9FAFB]" : "bg-white"
          }`}
          onClick={() => setActive("resolved")}
        >
          {active == "resolved" && (
            <div className="w-[8px] h-[8px] rounded-full bg-[#014DAF]"></div>
          )}
          <p>Resolved</p>
        </button>
      </div>
    </div>
  );
};

export default ComplaintStateSwitch;
