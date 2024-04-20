import ring from "../../../assets/ring.png";
import woman from "../../../assets/woman.png";

const CenterSection = () => {
  return (
    <div className="flex justify-center">
      <div className="relative inline-block">
        <img src={ring} alt="Pattern" className="w-full" />
        <div className="absolute inset-0 flex justify-center items-center">
          <img
            src={woman}
            alt="Person"
            className="h-32 sm:h-48 md:h-64 lg:h-[500px] self-center"
          />
        </div>
      </div>
    </div>
  );
};

export default CenterSection;
