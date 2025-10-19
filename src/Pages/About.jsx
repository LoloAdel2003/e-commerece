import React from 'react';
import PageSeq from '../components/PageSeq';

const About = () => {
  return (
    <div className="w-full px-3 sm:px-4 lg:px-[135px] pt-[40px] lg:pt-[80px] font-poppins">
      {/* Breadcrumb */}
      <PageSeq />

      <h1 className="text-2xl font-semibold mt-4">About</h1>
    </div>
  );
};

export default About;
