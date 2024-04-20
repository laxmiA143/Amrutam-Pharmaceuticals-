import SectionTitle from "../../Shared/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { LuPill } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";

import girlImage from "../../../assets/girlImage.png";

const AyurvedaExperts = () => {
  return (
    <div className="lg:h-[600px] bg-white p-3">
      <SectionTitle heading={"Meet our Ayurveda experts "}></SectionTitle>
      <Swiper
        // slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        grabCursor={true}
        modules={[Pagination]}
        className="mySwiper"
        style={{
          height: "400px",
        }}
        breakpoints={{
          640: {
            width: 640,
            slidesPerView: 1,
          },

          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
      >
        <SwiperSlide>
          <div className="lg:w-[330px] rounded-3xl bg-[#FFF7E2] mt-6 text-center">
            <div className="relative inline-block my-4">
              <img
                src={girlImage}
                alt="Profile"
                className="rounded-full w-28 h-28 object-cover"
              />
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white px-2 py-1 rounded-full flex items-center space-x-1">
                <span>4.5</span>
                <span>
                  <FaStar className="text-orange-400"></FaStar>
                </span>
              </div>
            </div>
            <div>
              <h1>Dr. Vaishali sharma</h1>
              <p>
                Ayurveda Practitioner <span>(BAMS, MD)</span>
              </p>
              <div className="flex items-center gap-2 justify-center">
                <FaGraduationCap></FaGraduationCap>
                <p>25 years of experience</p>
              </div>
              <p className="flex items-center gap-1 bg-[#3A643B1F] rounded-3xl px-2 py-1 w-1/2 mx-auto text-[#3A643B] font-semibold my-5">
                <LuPill></LuPill>Skin Specialist
              </p>
            </div>
            <div className="w-full h-16 bg-[#3A643B] rounded-b-3xl flex justify-center items-center">
              <h1 className="text-white text-lg">Book a session</h1>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="lg:w-[330px] rounded-3xl bg-[#FFF7E2] mt-6 text-center">
            <div className="relative inline-block my-4">
              <img
                src={girlImage}
                alt="Profile"
                className="rounded-full w-28 h-28 object-cover"
              />
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white px-2 py-1 rounded-full flex items-center space-x-1">
                <span>4.5</span>
                <span>
                  <FaStar className="text-orange-400"></FaStar>
                </span>
              </div>
            </div>
            <div>
              <h1>Dr. Vaishali sharma</h1>
              <p>
                Ayurveda Practitioner <span>(BAMS, MD)</span>
              </p>
              <div className="flex items-center gap-2 justify-center">
                <FaGraduationCap></FaGraduationCap>
                <p>25 years of experience</p>
              </div>
              <p className="flex items-center gap-1 bg-[#3A643B1F] rounded-3xl px-2 py-1 w-1/2 mx-auto text-[#3A643B] font-semibold my-5">
                <LuPill></LuPill>Skin Specialist
              </p>
            </div>
            <div className="w-full h-16 bg-[#3A643B] rounded-b-3xl flex justify-center items-center">
              <h1 className="text-white text-lg">Book a session</h1>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="lg:w-[330px] rounded-3xl bg-[#FFF7E2] mt-6 text-center">
            <div className="relative inline-block my-4">
              <img
                src={girlImage}
                alt="Profile"
                className="rounded-full w-28 h-28 object-cover"
              />
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white px-2 py-1 rounded-full flex items-center space-x-1">
                <span>4.5</span>
                <span>
                  <FaStar className="text-orange-400"></FaStar>
                </span>
              </div>
            </div>
            <div>
              <h1>Dr. Vaishali sharma</h1>
              <p>
                Ayurveda Practitioner <span>(BAMS, MD)</span>
              </p>
              <div className="flex items-center gap-2 justify-center">
                <FaGraduationCap></FaGraduationCap>
                <p>25 years of experience</p>
              </div>
              <p className="flex items-center gap-1 bg-[#3A643B1F] rounded-3xl px-2 py-1 w-1/2 mx-auto text-[#3A643B] font-semibold my-5">
                <LuPill></LuPill>Skin Specialist
              </p>
            </div>
            <div className="w-full h-16 bg-[#3A643B] rounded-b-3xl flex justify-center items-center">
              <h1 className="text-white text-lg">Book a session</h1>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="lg:w-[330px] rounded-3xl bg-[#FFF7E2] mt-6 text-center">
            <div className="relative inline-block my-4">
              <img
                src={girlImage}
                alt="Profile"
                className="rounded-full w-28 h-28 object-cover"
              />
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white px-2 py-1 rounded-full flex items-center space-x-1">
                <span>4.5</span>
                <span>
                  <FaStar className="text-orange-400"></FaStar>
                </span>
              </div>
            </div>
            <div>
              <h1>Dr. Vaishali sharma</h1>
              <p>
                Ayurveda Practitioner <span>(BAMS, MD)</span>
              </p>
              <div className="flex items-center gap-2 justify-center">
                <FaGraduationCap></FaGraduationCap>
                <p>25 years of experience</p>
              </div>
              <p className="flex items-center gap-1 bg-[#3A643B1F] rounded-3xl px-2 py-1 w-1/2 mx-auto text-[#3A643B] font-semibold my-5">
                <LuPill></LuPill>Skin Specialist
              </p>
            </div>
            <div className="w-full h-16 bg-[#3A643B] rounded-b-3xl flex justify-center items-center">
              <h1 className="text-white text-lg">Book a session</h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="flex justify-center items-center my-7">
        <button className="bg-[#DBE3DC63] px-4 py-3 text-[#3A643B] font-semibold flex items-center gap-3 outline outline-[#3A643B] rounded-md">
          Find more experts <IoIosArrowForward></IoIosArrowForward>
        </button>
      </div>
    </div>
  );
};

export default AyurvedaExperts;
