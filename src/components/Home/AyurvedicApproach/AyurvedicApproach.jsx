import SectionTitle from "../../Shared/SectionTitle";
import ApproachCard from "./ApproachCard";

const AyurvedicApproach = () => {
  return (
    <div className="my-5 lg:h-[420px]">
      <SectionTitle
        heading={"Our ayurvedic approach"}
        subtitle={
          "At Amrutam we follow a unique and personalized approach to healing. Our expert practitioners begin each treatment process by conducting a thorough analysis of the patient’s body type, medical history, and current health conditions."
        }
      ></SectionTitle>

      <div className="lg:flex justify-center items-center gap-3 space-y-3 p-3">
        <ApproachCard
          number={"1"}
          heading={"Make Appointment"}
          paragraph={
            "You must make an appointment in advance, to choose the service and date."
          }
        ></ApproachCard>
        <ApproachCard
          number={"2"}
          heading={"Consultations"}
          paragraph={
            "The next stage involves a thorough consultation with an Ayurveda practitioner."
          }
        ></ApproachCard>
        <ApproachCard
          number={"3"}
          heading={"Treatment Planning"}
          paragraph={
            "The Ayurvedic practitioner creates a personalized treatment plan for you"
          }
        ></ApproachCard>
        <ApproachCard
          number={"4"}
          heading={"Maintenance"}
          paragraph={
            "These visits allow for assessment of progress, adjustments to the treatment."
          }
        ></ApproachCard>
      </div>
    </div>
  );
};

export default AyurvedicApproach;
