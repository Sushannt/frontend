import { categories } from "../data.js";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Categories = () => {
  return (
    <>
      <div className="grid grid-cols-4 md:grid-cols-7 gap-4 mt-[12vh] w-11/12 mx-auto z-20">
        {categories.map((category, index) => (
          <ul key={index}>
            <li className="menu menu-horizontal rounded-box">
              <div className="flex flex-col">
                <img
                  src={category.img}
                  alt="product image"
                  className="object-cover flex-1 h-[100px] aspect-square rounded-md hover:brightness-50"
                  loading="lazy"
                />
                <h3 className="text-md font-semibold text-slate-900">
                  {category.list ? (
                    <div className="dropdown dropdown-hover">
                      <div tabIndex={0} role="button">
                        {category.name}
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-60"
                      >
                        {Object.entries(category.list).map(
                          ([listName, items]) => (
                            <li key={listName}>
                              <p className="font-semibold">{listName}</p>
                              <ul className="list-disc pl-4">
                                {items.map((item) => (
                                  <li key={item} className="text-sm">
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  ) : (
                    category.name
                  )}
                </h3>
              </div>
            </li>
          </ul>
        ))}
      </div>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper z-0"
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index} className="h-[50vh] mt-[5vh]">
            <img
              src={category.img}
              alt="product image"
              className="w-[90vw] h-full mx-auto z-0"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Categories;
