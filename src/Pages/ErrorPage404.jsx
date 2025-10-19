import React from 'react';
import { Link } from 'react-router-dom';
import PageSeq from '../components/PageSeq';
import Button from '../components/Button';

const ErrorPage404 = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-[135px] pt-[40px] lg:pt-[80px] font-poppins">
      {/* Breadcrumb */}
      <PageSeq />

      <div className="flex justify-center items-center pb-[140px] flex-col text-center">
        <h1
          className="mt-4 text-[60px] sm:text-[80px] lg:text-[110px]"
          style={{
            fontFamily: 'Inter',
            fontWeight: 500,
            fontStyle: 'normal',
            lineHeight: '1.05',
            letterSpacing: '3%',
          }}
        >
          404 Not Found
        </h1>

        <span className="mt-6 sm:mt-8 lg:mt-[40px] mb-6 sm:mb-8 lg:mb-[80px] text-base sm:text-lg lg:text-xl font-normal">
          Your visited page not found. You may go home page.
        </span>

        <Link to="/">
          <Button name="Back to home page" padding="2" />
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage404;
