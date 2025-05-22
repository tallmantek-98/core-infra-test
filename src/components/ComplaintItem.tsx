const ComplaintItem = () => {
  return (
    <div className="grid grid-cols-4 text-[#475467] text-[10px] bg-white border-b border-[#EAECF0]">
      <div className="col-span-1 py-3 pl-6">
        <p>0123456789</p>
      </div>
      <div className="col-span-1 py-3 border-l border-[#EAECF0]">
        <p className="text-center">Nazeer Ajibola</p>
      </div>
      <div className="col-span-1 py-3 border-l border-[#EAECF0]">
        <p className="text-center">11/14/2024 10:27:43</p>
      </div>
      <div className="col-span-1 py-3 border-l border-[#EAECF0]">
        <p className="text-center">Card Dispute</p>
      </div>
    </div>
  );
};

export default ComplaintItem;
