import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const PageSeq = () => {
  const location = useLocation();
  
  // تقسيم المسار إلى أجزاء
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <nav className="text-sm font-poppins mb-4">
      <ol className="flex flex-wrap items-center space-x-2 sm:space-x-3">
        {/* Home دائماً أول عنصر */}
        <li>
          <Link to="/" className="text-gray-500 hover:text-gray-700">
            Home
          </Link>
        </li>

        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={routeTo} className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              {isLast ? (
                <span className="text-gray-800 font-medium capitalize">
                  {name.replace(/-/g, ' ')}
                </span>
              ) : (
                <Link to={routeTo} className="text-gray-500 hover:text-gray-700 capitalize">
                  {name.replace(/-/g, ' ')}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default PageSeq;
