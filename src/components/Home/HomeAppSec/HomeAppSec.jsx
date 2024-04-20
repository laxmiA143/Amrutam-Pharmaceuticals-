import android from "../../../assets/android.jpg";
import googlePlay from "../../../assets/googlePlay.png";
import appStore from "../../../assets/appStore.png";

const HomeAppSec = () => {
  return (
    <div className="lg:h-screen w-full bg-[#FFF7E2]  lg:flex justify-center items-center">
      <div className="flex flex-1 justify-center items-center">
        <div className="w-3/4">
          <h1 className="text-[#3A643B] text-4xl font-semibold">
            Amrutam home App
          </h1>
          <p className="text-[#676767] text-[15px] my-4">
            The Amrutam Home App is your one-stop app for all things Ayurveda!
            Apart from mimicking the significant characteristics of our website,
            this app offers a wide range of additional features.
          </p>
          <h2 className="text-[#000000] text-3xl font-semibold">
            Get a diet & lifestyle consultation with ayurvedic experts across
            the globe{" "}
          </h2>
          <h1 className="text-[#000000] text-[24px] font-bold mt-7">
            Get the App now
          </h1>
          <div className="lg:flex gap-4 my-7 space-y-3">
            <img className="w-[170px]" src={googlePlay} alt="" />
            <img className="w-[170px]" src={appStore} alt="" />
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={android} className="w-3/4" alt="" />
      </div>
    </div>
  );
};

export default HomeAppSec;
