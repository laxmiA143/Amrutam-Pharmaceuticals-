import handPlus from "../../../assets/handPlus.png";
import peyala from "../../../assets/peyala.png";
import strong from "../../../assets/strong.png";

const RightSection = () => {
  return (
    <div>
      <div className="space-y-9">
        <div className="flex gap-2 justify-start items-center">
          <img
            src={handPlus}
            className="w-[80px] bg-[#F5F3FC] p-4 rounded-full"
            alt=""
          />
          <div className="text-left">
            <h1 className="text-[#000000] font-bold text-[20px]">
              Holistic Healing
            </h1>
            <p className="text-[#515151] my-2">
              Fix the root problem for long-lasting health.
            </p>
          </div>
        </div>

        <div className="flex gap-2 justify-start items-center ">
          <img
            src={peyala}
            className="w-[80px] bg-[#FEF6ED] p-4 rounded-full ml-7"
            alt=""
          />
          <div className="text-left">
            <h1 className="text-[#000000] font-bold text-[20px]">
              Natural Remedies
            </h1>
            <p className="text-[#515151] my-2">
              Using herbs and natural therapies for healing.
            </p>
          </div>
        </div>

        <div className="flex gap-2 justify-start items-center">
          <img
            src={strong}
            className="w-[80px] bg-[#EAF2EA] p-4 rounded-full"
            alt=""
          />
          <div className="text-left">
            <h1 className="text-[#000000] font-bold text-[20px]">
              Boosting immunity
            </h1>
            <p className="text-[#515151] my-2">
              Stay strong and healthy for life, not just for today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
