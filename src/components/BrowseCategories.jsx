import React from 'react';
import CategoryCard from './Card2'; 
// استيراد أيقونات React (تم اختيار أيقونات عامة من مجموعة Fa أو Io)
import { IoPhonePortraitOutline, IoWatchOutline } from 'react-icons/io5';
import { FaLaptop, FaCamera, FaHeadphonesAlt, FaGamepad, FaClock } from 'react-icons/fa';
import Title from './Title';

// ----------------------------------------------------
// مصفوفة بيانات الفئات
// ----------------------------------------------------
const categoriesData = [
  { 
    id: 1, 
    name: "Phones", 
    icon: <IoPhonePortraitOutline />,
    isActive: false
  },
  { 
    id: 2, 
    name: "Computers", 
    icon: <FaLaptop />,
    isActive: false
  },
  { 
    id: 3, 
    name: "SmartWatch", 
    icon: <FaClock />, // استبدلنا FaWatch بـ FaClock
    isActive: false
  },
  { 
    id: 4, 
    name: "Camera", 
    icon: <FaCamera />,
    // البطاقة النشطة (المظللة بالأحمر)
    isActive: false 
  },
  { 
    id: 5, 
    name: "HeadPhones", 
    icon: <FaHeadphonesAlt />,
    isActive: false
  },
  { 
    id: 6, 
    name: "Gaming", 
    icon: <FaGamepad />,
    isActive: false
  },
];

// ----------------------------------------------------
// المكون الذي يعرض الشريط
// ----------------------------------------------------
const BrowseCategories = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 pt-[70px] ">
      
      {/* العنوان */}
      <Title type="Categories" title="Browse By Category" slides="true" className="flex-shrink-0" />

      {/* شريط الفئات */}
      <div 
        className="flex gap-16 pt-[60px] pb-4 overflow-x-auto scrollbar-hide"
      >
        {categoriesData.map((category) => (
          <div key={category.id} className="flex-shrink-0">
            <CategoryCard name={category.name} isActive={category.isActive}>
              {category.icon}
            </CategoryCard>
          </div>
        ))}
      </div>
      
      {/* خط فاصل */}
      <div className="w-full h-[1px] bg-gray-200 mt-6"></div>
    </div>
  );
};

export default BrowseCategories;
