import complaintsPassiveLogo from "../assets/svgs/complaints_passive.svg";
import notification from "../assets/svgs/notification.svg";
import avatar from "../assets/svgs/Avatar.svg";
import ComplaintStateSwitch from "./ComplaintStateSwitch";
import complaintIcon from "../assets/svgs/log_complaint_icon.svg";
import search from "../assets/svgs/search.svg";
import filter from "../assets/svgs/filter.svg";
import date from "../assets/svgs/date.svg";
import ComplaintItem from "./ComplaintItem";

const ComplaintsView = () => {
  const complaints = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <section className="w-full ">
      <div className="sticky top-0 z-10 bg-white flex justify-between px-5 py-[5px] border-b border-[#DEE6E2]">
        <div className="flex gap-[12px] items-center">
          <img
            src={complaintsPassiveLogo}
            alt="complaints logo"
            className="w-[16px]"
          />
          <p className="text-[12px] font-[500]">Complaints: Log</p>
        </div>
        <div className="flex gap-[26px]">
          <img src={notification} alt="notification icon" />
          <img src={avatar} alt="Avatar icon" />
        </div>
      </div>
      <hr className="text-[#DEE6E2]" />
      <div className="px-5 pt-[10px] pb-[66px] bg-[#F8FBFF] min-h-screen">
        <p className="text-[18px] font-[500] text-[#101828]">Complaints: Log</p>
        <p className="text-[14px] text-[#475467] mt-1 mb-[11px]">
          View details of logged complaints and log new ones here.
        </p>
        <hr className="text-[#98A2B3] mb-4" />
        <div className="flex justify-between items-center">
          <ComplaintStateSwitch />
          <button
            type="button"
            className="bg-[#014DAF] text-white text-[12px] font-[500] py-[9px] px-[14px] rounded-[4px] flex items-center gap-[10.5px]"
          >
            <img src={complaintIcon} alt="complaint icon" />
            <p>Log Complaint</p>
          </button>
        </div>
        <div className="bg-[#F9FAFB] border border-[#EAECF0] w-full mt-4">
          <div className="flex justify-between p-[6px] border-b border-[#EAECF0]">
            <div className="bg-white flex gap-2 w-[20%] px-[14px] py-[11.5px] rounded-[4px]">
              <img src={search} alt="search icon" className="w-[10px]" />
              <input
                type="text"
                placeholder="Search complaint"
                className="text-[12px] w-full"
              />
            </div>
            <div className="flex gap-4">
              <button
                type="button"
                className="flex gap-2 text-[12px] border border-[#D0D5DD] py-2 px-[14px] rounded-[4px] items-center"
              >
                <img src={date} alt="date icon" className="w-[20px]" />
                <p>Date</p>
              </button>
              <button
                type="button"
                className="flex gap-2 text-[12px] border border-[#D0D5DD] py-2 px-[14px] rounded-[4px] items-center"
              >
                <img src={filter} alt="filter icon" className="w-[20px]" />
                <p>Filter</p>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4 text-[#475467] text-[12px] border-b border-[#D0D5DD]">
            <div className="col-span-1 py-2 pl-6">
              <p className="font-[500]">Account Number</p>
            </div>
            <div className="col-span-1 py-2 border-l border-[#EAECF0]">
              <p className="font-[500] text-center">Customer Name</p>
            </div>
            <div className="col-span-1 py-2 border-l border-[#EAECF0]">
              <p className="font-[500] text-center">Submission Date</p>
            </div>
            <div className="col-span-1 py-2 border-l border-[#EAECF0]">
              <p className="font-[500] text-center">Category</p>
            </div>
          </div>
          {complaints.map((_, i) => (
            <ComplaintItem key={i} />
          ))}
          <div className="flex justify-between bg-white px-6 py-4">
            <p className="text-[14px] font-[500] text-[#344054]">
              Page 1 of 20
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                className="border border-[#D0D5DD] py-2 px-[14px] text-[#344054] text-[14px] font-[500] rounded-[4px]"
              >
                Previous
              </button>
              <button
                type="button"
                className="border border-[#D0D5DD] py-2 px-[14px] text-[#344054] text-[14px] font-[500] rounded-[4px]"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplaintsView;
