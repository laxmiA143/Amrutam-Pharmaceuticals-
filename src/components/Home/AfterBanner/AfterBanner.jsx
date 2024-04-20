const AfterBanner = ({ img, heading }) => {
  return (
    <div className="lg:flex justify-center items-center gap-4 border-[1px] bg-[#FFF7E2]  h-44 lg:p-0 p-4">
      <div className="w-[80px] h-[80px] p-2">
        <figure>
          <img
            className=" bg-white rounded-full p-3 border border-[#3A643B] mx-3"
            src={img}
            alt="Shoes"
          />
        </figure>
      </div>
      <div>
        <h1 className="text-xl font-bold my-3 text-[#3A643B]">{heading}</h1>
      </div>
    </div>
  );
};

export default AfterBanner;
