import SectionTitle from "../../Shared/SectionTitle";
import CenterSection from "./CenterSection";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const FeaturedSection = () => {
  return (
    <div>
      <SectionTitle
        heading={"Discover Ayurveda’s magic with us"}
        subtitle={
          "Ayurvedic treatment aims to balance your body and mind, bringing harmony and vitality. Its like a journey to better health using ancient wisdom, a totally effective approach for a better life. "
        }
      ></SectionTitle>
      <div className="grid lg:grid-cols-3 grid-cols-1 items-center justify-center p-4">
        <LeftSection></LeftSection>
        <CenterSection></CenterSection>
        <RightSection></RightSection>
      </div>
    </div>
  );
};

export default FeaturedSection;
