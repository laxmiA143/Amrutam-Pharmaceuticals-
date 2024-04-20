import AfterBannerSection from "../../components/Home/AfterBanner/AfterBannerSection";
import AyurvedaExperts from "../../components/Home/AyurvedaExperts/AyurvedaExperts";
import AyurvedicApproach from "../../components/Home/AyurvedicApproach/AyurvedicApproach";
import Banner from "../../components/Home/Banner/Banner";
import BookConsulation from "../../components/Home/BookConsulation/BookConsulation";
import ConsultationsSec from "../../components/Home/ConsultationsSec/ConsultationsSec";
import FeaturedSection from "../../components/Home/FeaturedSection/FeaturedSection";
import HomeAppSec from "../../components/Home/HomeAppSec/HomeAppSec";
import ValuedCustomers from "../../components/Home/ValuedCustomers/ValuedCustomers";

const Home = () => {
  return (
    <div>
      <Banner />
      <AfterBannerSection />
      <FeaturedSection />
      <ConsultationsSec />
      <BookConsulation />
      <AyurvedicApproach />
      <ValuedCustomers />
      <AyurvedaExperts />
      <HomeAppSec />
    </div>
  );
};

export default Home;
