// import React from 'react';
import PageSeq from '../components/PageSeq';
import Button from '../components/Button'
// const Contact = () => {
//   return (
//     <div className="w-full px-3 sm:px-4 lg:px-[135px] pt-[40px] lg:pt-[80px] font-poppins">
//       {/* Breadcrumb */}
//       <PageSeq />

//       <h1 className="text-2xl font-semibold mt-4">Contact Us</h1>
//       <p className="mt-2 text-gray-600">This is the contact page content.</p>
//     </div>
//   );
// };

// export default Contact;
import React from 'react';
// تم تعديل الاستيراد لضمان التوافق وتجنب أخطاء التجميع
import { BiPhoneCall } from "react-icons/bi";
import { HiOutlineMailOpen } from "react-icons/hi";

const ContactUs = () => {
  return (
    <div className="w-full px-3 sm:px-4 lg:px-[135px] pt-[40px] lg:pt-[80px] font-poppins ">
      {/* مسار التنقل (Breadcrumb) */}
      <PageSeq />

      {/* المحتوى الرئيسي: معلومات الاتصال + نموذج الإرسال */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 my-[80px]">

        <aside className="w-full lg:w-96 flex-shrink-0 bg-white shadow-sm p-6 rounded-md border border-gray-100">
          
         
          <div className="pb-6 border-b border-gray-200">
            <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
              
              <div className="p-2 bg-red-500 rounded-full">
                <BiPhoneCall className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base font-semibold text-black">Call To Us</h3>
            </div>
            
            <p className="text-sm text-gray-600 mb-2">We are available 24/7, 7 days a week.</p>
            <p className="text-sm font-semibold text-gray-900">Phone: +8801611112222</p>
          </div>

          {/* قسم Write To Us */}
          <div className="pt-6">
            <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
              <div className="p-2 bg-red-500 rounded-full">
                <HiOutlineMailOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base font-semibold text-black">Write To Us</h3>
            </div>
            
            <p className="text-sm text-gray-600 mb-4">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="text-sm font-semibold text-gray-900 mb-1">Emails: customer@exclusive.com</p>
            <p className="text-sm font-semibold text-gray-900">Emails: support@exclusive.com</p>
          </div>
        </aside>

        <main className="flex-grow bg-white shadow-sm p-6 md:p-8 rounded-md border border-gray-100">
          <form className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input 
                type="text" 
                placeholder="Your Name *" 
                required
                className="w-full p-3 bg-gray-100 border-none rounded-sm focus:ring-0 focus:border-red-500 placeholder-gray-500 text-sm"
              />
              
              <input 
                type="email" 
                placeholder="Your Email *" 
                required
                className="w-full p-3 bg-gray-100 border-none rounded-sm focus:ring-0 focus:border-red-500 placeholder-gray-500 text-sm"
              />
              
              <input 
                type="tel" 
                placeholder="Your Phone *" 
                required
                className="w-full p-3 bg-gray-100 border-none rounded-sm focus:ring-0 focus:border-red-500 placeholder-gray-500 text-sm"
              />
            </div>

            <div>
              <textarea
                placeholder="Your Message"
                rows="8"
                className="w-full p-4 bg-gray-100 border-none rounded-sm focus:ring-0 focus:border-red-500 placeholder-gray-500 text-sm resize-none"
              ></textarea>
            </div>

            <div className="flex justify-end">
              <Button  name="Send Massage" />
              
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default ContactUs;

