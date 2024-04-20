import love from "../../../assets/love.png";
import hand from "../../../assets/hand.png";
import prayer from "../../../assets/prayer.png";

const LeftSection = () => {
  return (
    <div className="space-y-9">
      <div className="flex gap-2 items-center justify-end">
        <div className="text-right">
          <h1 className="text-[#000000] font-bold text-[20px]">
            Perspmalized Wellness
          </h1>
          <p className="text-[#515151] my-2">
            Get treatments made just for you based on your individual doshas (
            body type)
          </p>
        </div>
        <img
          src={love}
          className="w-[80px] bg-[#EDF5FA] p-4 rounded-full"
          alt=""
        />
      </div>

      <div className="flex gap-2 items-center justify-end mr-8">
        <div className="text-right">
          <h1 className="text-[#000000] font-bold text-[20px]">
            Focus on prevention
          </h1>
          <p className="text-[#515151] my-2">
            Stop problems even before they start.
          </p>
        </div>
        <img
          src={hand}
          className="w-[80px] bg-[#EAF2EA] p-4 rounded-full"
          alt=""
        />
      </div>

      <div className="flex gap-2 items-center justify-end">
        <div className="text-right">
          <h1 className="text-[#000000] font-bold text-[20px]">
            Mind-Body Connection
          </h1>
          <p className="text-[#515151] my-2">
            Keep your mind and body in sync for a happy life.
          </p>
        </div>
        <img
          src={prayer}
          className="w-[80px] bg-[#FCF1F1] p-4 rounded-full"
          alt=""
        />
      </div>
    </div>
  );
};

export default LeftSection;
