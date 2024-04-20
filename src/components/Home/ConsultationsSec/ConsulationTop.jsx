import oil from "../../../assets/oil.jpg";

const ConsulationTop = () => {
  return (
    <div className="lg:flex justify-center gap-3 space-y-3">
      <div className="bg-[#FFFFFF] rounded-[20px] lg:w-[500px] h-[300px] p-4 flex justify-center items-center border-0 border-t-[5px] border-[#3A643B]">
        <div className="text-center">
          <h1 className="text-[40px] font-medium text-[#3A643B]">
            स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं
          </h1>
          <p className="text-[#3A643B] my-4">
            [ Meaning: The Goal of Ayurveda is to maintain the health of a
            healthy person and to cure the disease of a diseased person. ]
          </p>
        </div>
      </div>
      <div>
        <img
          src={oil}
          className="h-[300px] rounded-[20px] object-cover w-[360px]"
          alt=""
        />
      </div>
      <div>
        <div className="bg-[#FFFFFF] rounded-[20px] w-[300px] h-[300px] p-4 flex justify-center items-center border-0 border-t-[5px] border-[#3A643B]">
          <div className="text-center">
            <h1 className="text-[30px] font-medium text-[#3A643B]">
              precise diagnosis
            </h1>
            <p className="text-[#3A643B] my-4">
              Ayurvedas core principles revolve around Vata, Pitta, and Kapha
              doshas, guiding you with precise diagnosis and treatment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsulationTop;
