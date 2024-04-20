import AfterBanner from "./AfterBanner";
import img1 from "../../../assets/msg.png";
import img2 from "../../../assets/shld.png";
import img3 from "../../../assets/dctr.png";
import img4 from "../../../assets/mdcn.png";

const AfterBannerSection = () => {
  return (
    <div className="lg:flex justify-evenly items-center w-full">
      <AfterBanner
        img={img1}
        heading={"convenient online & Inclinic consultations"}
      ></AfterBanner>
      <AfterBanner
        img={img2}
        heading={"Safe and effective treatment"}
      ></AfterBanner>
      <AfterBanner
        img={img3}
        heading={"Experienced Ayurvedic Practitioners"}
      ></AfterBanner>
      <AfterBanner
        img={img4}
        heading={"personalized Treatment Plans & Guidance"}
      ></AfterBanner>
    </div>
  );
};

export default AfterBannerSection;
