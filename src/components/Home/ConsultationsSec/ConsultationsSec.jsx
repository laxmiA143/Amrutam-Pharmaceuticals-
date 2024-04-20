import SectionTitle from "../../Shared/SectionTitle";
import ConsulationBottom from "./ConsulationBottom";
import ConsulationTop from "./ConsulationTop";

const ConsultationsSec = () => {
  return (
    <div className="lg:h-screen w-full bg-gradient-to-r from-[#FFF7E2] to-[#FFFAEE] p-4">
      <SectionTitle
        heading={"What sets Ayurvedic consultations apart?"}
      ></SectionTitle>
      <ConsulationTop></ConsulationTop>
      <ConsulationBottom></ConsulationBottom>
    </div>
  );
};

export default ConsultationsSec;
