import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageSeq from '../components/PageSeq';
import Button from '../components/Button';
import ButtonAlt from '../components/ButtonAlt';
import { FiMenu, FiX } from "react-icons/fi";

const SidebarLink = ({ to = "#", label, active, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`block text-sm font-medium ${active ? 'text-red-500 font-bold' : 'text-gray-500'} hover:text-red-500`}
  >
    {label}
  </Link>
);

const InputField = ({ id, label, type = 'text', defaultValue, placeholder }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-normal text-gray-700 mb-2">{label}</label>
    <input
      type={type}
      id={id}
      defaultValue={defaultValue}
      placeholder={placeholder}
      className="w-full p-3 bg-gray-100 border-none focus:ring-0 focus:border-red-500"
    />
  </div>
);

const Profile = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarSections = [
    {
      title: "Manage My Account",
      links: [
        { label: "My Profile", to: "/profile", active: true },
        { label: "Address Book", to: "/address" },
        { label: "My Payment Options", to: "/payment" },
      ],
    },
    {
      title: "My Orders",
      links: [
        { label: "My Returns", to: "/returns" },
        { label: "My Cancellations", to: "/cancellations" },
      ],
    },
    {
      title: "My Wishlist",
      links: [
        { label: "Wishlist", to: "/wishlist" },
      ],
    },
  ];

  const userFields = [
    { id: "firstName", label: "First Name", defaultValue: "Md" },
    { id: "lastName", label: "Last Name", defaultValue: "Rimel" },
    { id: "email", label: "Email", type: "email", defaultValue: "rimel111@gmail.com" },
    { id: "address", label: "Address", defaultValue: "Kingston, 5236, United State" },
  ];

  const passwordFields = [
    { id: "currentPassword", label: "Current Password", type: "password", placeholder: "Current Password" },
    { id: "newPassword", label: "New Password", type: "password", placeholder: "New Password" },
    { id: "confirmNewPassword", label: "Confirm New Password", type: "password", placeholder: "Confirm New Password" },
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-[135px] pt-[40px] lg:pt-[70px] font-poppins relative">

      {/* رأس الصفحة */}
      <div className="flex justify-between items-center mb-6">
        <PageSeq />
        <div className="flex items-center gap-4">
          <div className="text-sm font-semibold">
            Welcome! <span className="text-red-500">Md Rimel</span>
          </div>
          <button
            className="block md:hidden text-2xl text-gray-700"
            onClick={() => setSidebarOpen(true)}
          >
            <FiMenu />
          </button>
          
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-10">

        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-30 md:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        <aside
          className={`fixed md:static top-6 left-0 h-full w-64 bg-white md:bg-transparent z-40 p-6 shadow-md md:shadow-none transform transition-transform duration-300 
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          ${sidebarOpen ? 'pt-[70px]' : 'pt-0'} md:pt-0`}
        >
          <button
            className="absolute top-4 right-4 text-2xl text-gray-600 md:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <FiX />
          </button>

          {sidebarSections.map((section, idx) => (
            <div key={idx} className="mb-8 mt-8 md:mt-0">
              <h3 className="text-base font-bold text-black mb-4">{section.title}</h3>
              <nav className="space-y-2">
                {section.links.map((link, index) => (
                  <SidebarLink
                    key={index}
                    {...link}
                    onClick={() => setSidebarOpen(false)}
                  />
                ))}
              </nav>
            </div>
          ))}
        </aside>

        <main className="flex-grow bg-white p-4 sm:p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-red-500 mb-6">Edit Your Profile</h2>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {userFields.map((field) => (
                <InputField key={field.id} {...field} />
              ))}
            </div>

            <h3 className="text-lg font-semibold text-gray-800 pt-4">Password Changes</h3>
            <div className="space-y-6">
              {passwordFields.map((field) => (
                <InputField key={field.id} {...field} />
              ))}
            </div>

            <div className="flex justify-end pt-8 space-x-4 rtl:space-x-reverse">
              <ButtonAlt name="Cancel" />
              <Button name='Save Changes' />
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Profile;
