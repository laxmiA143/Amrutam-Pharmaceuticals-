const ApproachCard = ({ number, heading, paragraph }) => {
  return (
    <div className="bg-[#FFF7E2] rounded-[20px] lg:w-[285px] h-[200px] p-4 flex justify-center items-center border-0 border-t-[5px] border-[#3A643B]">
      <div className="text-center">
        <h1 className="text-[40px] font-medium text-white bg-[#3A643BA8] p-5 rounded-full h-14 w-14 flex justify-center items-center mx-auto">
          {number}
        </h1>
        <h2 className="my-3 text-[#3A643B] text-[18px] font-bold">{heading}</h2>
        <p className="text-[#2E2E2E]">{paragraph}</p>
      </div>
    </div>
  );
};

export default ApproachCard;
