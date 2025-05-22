interface SidebarItemProps {
  icon: string;
  title: string;
  isActive?: boolean;
  onClick?: () => void;
}

const SidebarItem = ({ icon, title, isActive, onClick }: SidebarItemProps) => {
  return (
    <button
      type="button"
      className={`gap-3 flex items-center ${
        isActive ? "bg-[#E4F0FF] text-[#014DAF] font-[500]" : "text-[#D0D5DD]"
      } py-[10px] px-3 text-[12px] rounded-[8px]`}
      onClick={onClick}
    >
      <img src={icon} alt="list item button" className="w-[16px]" />
      <p>{title}</p>
    </button>
  );
};

export default SidebarItem;
