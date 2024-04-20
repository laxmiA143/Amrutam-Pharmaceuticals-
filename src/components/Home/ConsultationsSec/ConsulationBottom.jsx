import girl from "../../../assets/girl.jpg";
import product from "../../../assets/product.png";

const ConsulationBottom = () => {
  return (
    <div className="lg:flex justify-center gap-3 mt-3 space-y-3">
      <div>
        <div className="bg-[#FFFFFF] rounded-[20px] w-[285px] h-[200px] p-4 flex justify-center items-center border-0 border-t-[5px] border-[#3A643B]">
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
      <div>
        <img
          src={product}
          className="h-[200px] rounded-[20px] object-cover w-[285px]"
          alt=""
        />
      </div>
      <div>
        <div className="bg-[#FFFFFF] rounded-[20px] w-[285px] h-[200px] p-4 flex justify-center items-center border-0 border-t-[5px] border-[#3A643B]">
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
      <div>
        <img
          src={girl}
          className="h-[200px] rounded-[20px] object-cover w-[285px]"
          alt=""
        />
      </div>
    </div>
  );
};

export default ConsulationBottom;
