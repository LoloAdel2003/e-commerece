import React from "react";
import {
  FaStore,
  FaDollarSign,
  FaUser,
  FaShoppingBag,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const TeamSection = () => {
  const stats = [
    { id: 1, number: "10.5k", label: "Sellers active on our site", icon: FaStore },
    { id: 2, number: "33k", label: "Monthly Product Sale", icon: FaDollarSign },
    { id: 3, number: "45.5k", label: "Customer active in our site", icon: FaUser },
    { id: 4, number: "25k", label: "Annual gross sale in our site", icon: FaShoppingBag },
  ];

  const team = [
    {
      name: "Tom Cruise",
      role: "Founder & Chairman",
      img: "/imges/image 46.png",
    },
    {
      name: "Emma Watson",
      role: "Managing Director",
      img: "/imges/image 51.png",
    },
    {
      name: "Will Smith",
      role: "Product Designer",
      img: "/imges/image 47.png",
    },
    {
      name: "Scarlett Johansson",
      role: "Marketing Lead",
      img: "/imges/image 51.png",
    },
    {
      name: "Chris Evans",
      role: "Senior Developer",
      img: "/imges/image 46.png",
    },
    {
      name: "Jennifer Lawrence",
      role: "UI/UX Designer",
      img: "/imges/image 47.png",
    },
  ];

  return (
    <section className="px-4 py-10 md:py-20 max-w-7xl mx-auto">
      {/* ===== الإحصائيات (Stats) ===== */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
        {stats.map((stat) => {
          const IconComponent = stat.icon;
          return (
            <div
              key={stat.id}
              className="group flex flex-col items-center justify-center text-center py-6 px-4 rounded-md border border-gray-200 bg-white text-gray-800 transition-all duration-300 cursor-pointer hover:bg-[#DB4444] hover:text-white"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-3 bg-black text-white transition-all duration-300 group-hover:bg-white group-hover:text-[#DB4444]">
                <IconComponent className="text-3xl" />
              </div>
              <h3 className="text-2xl md:text-[32px] font-bold">{stat.number}</h3>
              <p className="text-xs mt-2">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* ===== فريق العمل (Team Carousel) ===== */}
     

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        spaceBetween={30}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-10 pt-[80px]"
      >
        {team.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col bg-white w-full max-w-xs mx-auto">
              <div className="relative flex items-end justify-center w-full h-[430px] bg-[#F5F5F5] mb-4">
                <img
                  src={member.img}
                  alt={member.name}
                  className=" "
                />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{member.role}</p>
                <div className="flex gap-4 text-black text-lg">
                  <a href="#" className="hover:text-[#DB4444]">
                    <FaTwitter />
                  </a>
                  <a href="#" className="hover:text-[#DB4444]">
                    <FaInstagram />
                  </a>
                  <a href="#" className="hover:text-[#DB4444]">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TeamSection;
