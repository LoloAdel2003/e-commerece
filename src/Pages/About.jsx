import React from 'react';
import PageSeq from '../components/PageSeq';
import FeaturesSection from '../components/FeaturesSection.jsx'
// import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import TeamSection from "../components/TeamSection"
const About = () => {
  return (
    <div className="w-full px-3 sm:px-4 lg:px-[135px] pt-[40px] lg:pt-[80px] font-poppins">
      {/* Breadcrumb */}
      <PageSeq />
     <div className="flex flex-col md:flex-row items-center justify-between mt-[42px] mb-[140px] overflow-hidden">
  {/* النص */}
  <div className="w-full md:w-1/2  text-center md:text-left">
    <h2 className="text-[36px] md:text-[54px] font-semibold text-gray-900">
      Our Story
    </h2>

    <p className="text-sm md:text-base text-gray-700 mt-6 mb-6 md:w-[505px]">
      Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace 
      with an active presence in Bangladesh. Supported by a wide range of tailored 
      marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands 
      and serves 3 million customers across the region.
    </p>

    <p className="text-sm md:text-base text-gray-700 md:w-[505px]">
      Exclusive has more than 1 million products to offer, growing very fast. 
      Exclusive offers a diverse assortment in categories ranging from consumer.
    </p>
  </div>

  {/* الصورة */}
  <div className="w-full md:w-1/2 h-[300px] md:h-[500px] overflow-hidden flex justify-center items-center mt-10 md:mt-0">
    <img
      src="/imges/girl.png" />
      </div>
      </div>
<TeamSection />

       <FeaturesSection />
    </div>
  );
};

export default About;






