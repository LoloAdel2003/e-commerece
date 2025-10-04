import React from "react";
// افترض أن لديك خط Poppins متاح في مشروعك

// تم استخدام مسار وهمي للصور (QR code, App Store, Google Play) وشعارات التواصل الاجتماعي (SVG)
// ستحتاج إلى استبدال هذه المسارات والأيقونات بملفاتك الحقيقية.

// أيقونات التواصل الاجتماعي (مكونات وهمية بسيطة لتوضيح التخطيط)
const SocialIcon = ({ children }) => (
  <a href="#" className="hover:text-gray-400 transition-colors duration-200">
    {children}
  </a>
);

// المكون الرئيسي للفوتر
const Footer = () => {
  return (
    // الخلفية: سوداء (Black)
    <footer className="bg-black text-white font-poppins pt-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        
       
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 lg:gap-x-8 pb-16">
          
          {/* العمود 1: Exclusive & Subscribe */}
          <div>
            <h3 className="text-[24px] font-700 font-bold mb-6">Exclusive</h3>
            <h4 className="text-[20px] font-medium mb-4">Subscribe</h4>
            <p className="text-[16px] font-400 font-regular mb-4">Get 10% off your first order</p>
            
            {/* حقل الإدخال للاشتراك */}
            <div className="relative border-b border-white w-full md:w-52 py-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent text-white text-xs w-full focus:outline-none placeholder-gray-400"
              />
              <button type="submit" className="absolute right-0 top-1/2 transform -translate-y-1/2">
                
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white hover:text-red-500 transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* العمود 2: Support */}
          <div>
            <h3 className="text-[20px] font-medium font-500 mb-6">Support</h3>
            <ul className="space-y-4 font-regular font-400 text-sm">
              <li>
                111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
              </li>
              <li>exclusive@gmail.com</li>
              <li>+88015-8888-9999</li>
            </ul>
          </div>
          
          {/* العمود 3: Account */}
          <div>
            <h3 className="text-[20px] font-medium font-500 mb-6">Account</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-gray-400 transition-colors font-regular font-400 text-sm">My Account</a></li>
              <li><a href="#" className="hover:text-gray-400 transition-colors font-regular font-400 text-sm">Login / Register</a></li>
              <li><a href="#" className="hover:text-gray-400 transition-colors font-regular font-400 text-sm">Cart</a></li>
              <li><a href="#" className="hover:text-gray-400 transition-colors font-regular font-400 text-sm">Wishlist</a></li>
              <li><a href="#" className="hover:text-gray-400 transition-colors font-regular font-400 text-sm">Shop</a></li>
            </ul>
          </div>
          
          {/* العمود 4: Quick Link */}
          <div>
            <h3 className="text-[20px] font-medium font-500 mb-6">Quick Link</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-gray-400 transition-colors font-regular font-400 text-sm">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-400 transition-colors font-regular font-400 text-sm">Terms Of Use</a></li>
              <li><a href="#" className="hover:text-gray-400 transition-colors font-regular font-400 text-sm">FAQ</a></li>
              <li><a href="#" className="hover:text-gray-400 transition-colors font-regular font-400 text-sm">Contact</a></li>
            </ul>
          </div>
          
          {/* العمود 5: Download App */}
          <div>
            <h3 className="text-[20px] font-medium font-500 mb-6">Download App</h3>
            <p className=" mb-2 text-gray-400 font-500 text-[12px] font-medium">Save $3 with App New User Only</p>
            
            <div className="flex flex-row gap-2">
              {/* QR Code */}
              <div className="w-20 h-20 bg-white p-1 rounded">
                {/* مسار وهمي للـ QR Code */}
                <img src="/imges/Qrcode 1.png" alt="QR Code" className="w-full h-full object-cover" />
              </div>

             
              <div className="">
                
                
               
                   
                    <img src="/imges/Frame 718.png" alt="App Store" className="w-full h-full object-cover" />
               
              </div>
            </div>

            {/* أيقونات التواصل الاجتماعي */}
            <div className="flex gap-6 mt-6 text-xl">
              <SocialIcon><i className="fab fa-facebook-f">f</i></SocialIcon>
              <SocialIcon><i className="fab fa-twitter">t</i></SocialIcon>
              <SocialIcon><i className="fab fa-instagram">i</i></SocialIcon>
              <SocialIcon><i className="fab fa-linkedin-in">in</i></SocialIcon>
            </div>
          </div>

        </div>
      </div>
      
      {/* 2. القسم السفلي (حقوق النشر) */}
      <div className="border-t border-gray-700 mt-8">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 py-4 text-center">
          <p className="text-gray-500 text-sm">
            &copy; Copyright Rimel 2022. All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;