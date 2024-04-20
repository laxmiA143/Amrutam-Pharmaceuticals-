const SectionTitle = ({ heading, subtitle }) => {
  return (
    <div className="md:w-5/12 mx-auto text-center my-8 ">
      <h3 className=" text-3xl underline-one text-[#3A643B]">{heading}</h3>
      <p className="text-[#666666] mt-3">{subtitle}</p>
    </div>
  );
};

export default SectionTitle;
