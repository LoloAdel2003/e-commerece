import React from 'react';
import PageSeq from '../components/PageSeq';
import Button from '../components/Button';
import { BiPhoneCall } from "react-icons/bi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// تعريف Schema للتحقق
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  phone: z.string().min(1, "Phone is required"),
  message: z.string().min(5, "Message must be at least 5 characters")
});

const ContactUs = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = (data) => {
    console.log("Contact Form Data:", data);
    alert("Message sent successfully!");
  };

  return (
    <div className="w-full px-3 sm:px-4 lg:px-[135px] pt-[40px] lg:pt-[80px] font-poppins">
      <PageSeq />

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 my-[80px]">
        <aside className="w-full lg:w-96 flex-shrink-0 bg-white shadow-sm p-6 rounded-md border border-gray-100">
          {/* Call To Us */}
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

          {/* Write To Us */}
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
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col">
                <input 
                  type="text"
                  placeholder="Your Name *"
                  {...register("name")}
                  className="w-full p-3 bg-gray-100 border-none rounded-sm focus:ring-0 focus:border-red-500 placeholder-gray-500 text-sm"
                />
                {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>}
              </div>

              <div className="flex flex-col">
                <input 
                  type="email"
                  placeholder="Your Email *"
                  {...register("email")}
                  className="w-full p-3 bg-gray-100 border-none rounded-sm focus:ring-0 focus:border-red-500 placeholder-gray-500 text-sm"
                />
                {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>}
              </div>

              <div className="flex flex-col">
                <input 
                  type="tel"
                  placeholder="Your Phone *"
                  {...register("phone")}
                  className="w-full p-3 bg-gray-100 border-none rounded-sm focus:ring-0 focus:border-red-500 placeholder-gray-500 text-sm"
                />
                {errors.phone && <span className="text-red-500 text-sm mt-1">{errors.phone.message}</span>}
              </div>
            </div>

            <div className="flex flex-col">
              <textarea
                placeholder="Your Message"
                rows="8"
                {...register("message")}
                className="w-full p-4 bg-gray-100 border-none rounded-sm focus:ring-0 focus:border-red-500 placeholder-gray-500 text-sm resize-none"
              ></textarea>
              {errors.message && <span className="text-red-500 text-sm mt-1">{errors.message.message}</span>}
            </div>

            <div className="flex justify-end">
              <Button type="submit" name="Send Message" />
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default ContactUs;
