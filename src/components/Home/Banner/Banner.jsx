import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="hero relative overflow-hidden  bg-no-repeat text-center bg-[url('https://i.ibb.co/gTysBcg/59afa656e21f9a1b7496b9a959580857.png')] h-[500px] lg:h-[700px] bg-cover">
        <div className="flex justify-start items-center h-full w-full text-center bg-gradient-to-r from-[#000000c7] to-[#eceee81b] absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed">
          <div className="lg:max-w-2xl lg:ml-20 p-3 text-left mt-10">
            <h1 className="text-[#FFF7E2] lg:text-2xl">
              Namaste, Welcome to Amrutam{" "}
            </h1>
            <h1 className="text-[#FFFFFF] lg:text-4xl mt-4">
              Step into Holistic Healing with{" "}
              <span className="text-[#FFF7E2] underline">Ayurveda</span> Book
              Consultation with certified Experts.{" "}
            </h1>
            <p className="text-[#C9C9C9] lg:text-[18px] mt-4">
              Dive into the world of ayurveda and Experience Personalized Health
              Solutions and Holistic Guidance from Trusted Ayurvedic Doctors
              Anytime, anywhere.
            </p>
            <button
              style={{ borderRadius: "16px", padding: "13px 18px 13px 18px" }}
              className="bg-[#3A643B] text-white font-bold mt-4"
            >
              Book an Appointment
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
