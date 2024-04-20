import SectionTitle from "../../Shared/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const ValuedCustomers = () => {
  return (
    <div className="lg:h-[550px] w-full bg-gradient-to-r from-[#FFF7E2] to-[#FFFAEE] p-4">
      <SectionTitle
        heading={"STORIES FROM OUR VALUED CUSTOMERS!"}
      ></SectionTitle>
      <div className="">
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
            <div className="lg:w-[350px] bg-base-100 shadow-xl mt-6 rounded-xl">
              <div>
                <div className="w-full h-[50px] bg-[#ECE7FF] rounded-t-xl flex items-center">
                  <h1 className=" ml-5 text-[#000000] text-[18px] font-semibold">
                    Consulted for Skin
                  </h1>
                </div>
                <div className="flex justify-between p-4">
                  <div className="flex gap-2">
                    <div className="avatar">
                      <div className="w-14 rounded-full">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <h1 className="text-[#414141] text-lg font-semibold">
                        Sophie Moore
                      </h1>
                      <p className="text-[#414141]">Chennai</p>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-base text-[#000000]">17/02/24</h1>
                  </div>
                </div>
                <div className="px-4">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </div>
                <div className="p-4">
                  <h1 className="text-[#333333] text-lg font-bold">
                    “One of a kind service”
                  </h1>
                  <p className="text-[#555555] text-base">
                    Ultrices eros in cursus turpis massa tincidunt sem nulla
                    pharetra diam sit amet nisl suscipit adipis.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="lg:w-[350px] bg-base-100 shadow-xl mt-6 rounded-xl">
              <div>
                <div className="w-full h-[50px] bg-[#ECFEE7] rounded-t-xl flex items-center">
                  <h1 className=" ml-5 text-[#000000] text-[18px] font-semibold">
                    Consulted for hair
                  </h1>
                </div>
                <div className="flex justify-between p-4">
                  <div className="flex gap-2">
                    <div className="avatar">
                      <div className="w-14 rounded-full">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <h1 className="text-[#414141] text-lg font-semibold">
                        Sophie Moore
                      </h1>
                      <p className="text-[#414141]">Mumbai</p>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-base text-[#000000]">17/02/24</h1>
                  </div>
                </div>
                <div className="px-4">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </div>
                <div className="p-4">
                  <h1 className="text-[#333333] text-lg font-bold">
                    “One of a kind service”
                  </h1>
                  <p className="text-[#555555] text-base">
                    Ultrices eros in cursus turpis massa tincidunt sem nulla
                    pharetra diam sit amet nisl suscipit adipis.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="lg:w-[350px] bg-base-100 shadow-xl mt-6 rounded-xl">
              <div>
                <div className="w-full h-[50px] bg-[#ECE7FF] rounded-t-xl flex items-center">
                  <h1 className=" ml-5 text-[#000000] text-[18px] font-semibold">
                    Consulted for Skin
                  </h1>
                </div>
                <div className="flex justify-between p-4">
                  <div className="flex gap-2">
                    <div className="avatar">
                      <div className="w-14 rounded-full">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <h1 className="text-[#414141] text-lg font-semibold">
                        Sophie Moore
                      </h1>
                      <p className="text-[#414141]">Chennai</p>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-base text-[#000000]">17/02/24</h1>
                  </div>
                </div>
                <div className="px-4">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </div>
                <div className="p-4">
                  <h1 className="text-[#333333] text-lg font-bold">
                    “One of a kind service”
                  </h1>
                  <p className="text-[#555555] text-base">
                    Ultrices eros in cursus turpis massa tincidunt sem nulla
                    pharetra diam sit amet nisl suscipit adipis.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="lg:w-[350px] bg-base-100 shadow-xl mt-6 rounded-xl">
              <div>
                <div className="w-full h-[50px] bg-[#ECFEE7] rounded-t-xl flex items-center">
                  <h1 className=" ml-5 text-[#000000] text-[18px] font-semibold">
                    Consulted for hair
                  </h1>
                </div>
                <div className="flex justify-between p-4">
                  <div className="flex gap-2">
                    <div className="avatar">
                      <div className="w-14 rounded-full">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <h1 className="text-[#414141] text-lg font-semibold">
                        Sophie Moore
                      </h1>
                      <p className="text-[#414141]">Mumbai</p>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-base text-[#000000]">17/02/24</h1>
                  </div>
                </div>
                <div className="px-4">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </div>
                <div className="p-4">
                  <h1 className="text-[#333333] text-lg font-bold">
                    “One of a kind service”
                  </h1>
                  <p className="text-[#555555] text-base">
                    Ultrices eros in cursus turpis massa tincidunt sem nulla
                    pharetra diam sit amet nisl suscipit adipis.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ValuedCustomers;
