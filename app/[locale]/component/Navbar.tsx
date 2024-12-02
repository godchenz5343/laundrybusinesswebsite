"use client";
import React, { useState, useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoClose } from 'react-icons/io5'; // ไอคอนปิดเมนู

const Navbar = () => {
  const t = useTranslations("navbar");
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleCloseMenu = () => {
    setIsOpen(false); // ปิด mobile menu
    setIsDropdownOpen(false); // ปิด dropdown
  };

  const handleToggleDropdown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // ป้องกัน dropdown ปิดเมื่อคลิกปุ่ม toggle
    setIsDropdownOpen((prev) => !prev); // สลับสถานะการเปิด/ปิด dropdown
  };

  const changeLanguage = (newLocale: 'th' | 'en') => {
    window.location.href = `/${newLocale}`;
  };

  return (
    <div className='bg-white shadow-md'>
      <div className='max-w-7xl mx-auto px-2 sm:px-4 lg:px-8'>
        <div className="flex items-center justify-between h-full">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href={`/${locale}/`} className="flex items-center">
              <Image alt='logo' src="/LogoB.png" width={80} height={150} />
              <div className="flex space-x-1 ml-2 text-xl font-bold text-blue-500">
                <div>Laundry</div>
                <div className="text-orange-500">Business</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navbar */}
          <div className="hidden md:flex items-center space-x-4">
            {['home', 'about', 'activity', 'services', 'contact'].map((page) => (
              <Link
                key={page}
                className='px-3 py-2 rounded-md text-xl font-semibold text-blue-500 hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105'
                href={`/${locale}/${page === 'home' ? '' : page}`}
              >
                {t(page)}
              </Link>
            ))}

            {/* Language Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button onClick={handleToggleDropdown} className="flex items-center justify-center px-3 py-2 rounded-md text-xl font-medium hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105">
                <Image
                  alt='flag'
                  src={locale === 'th' ? '/flag08.jpg' : '/depositphotos_144970693-stock-illustration-flag-of-united-kingdom-uk.jpg'}
                  width={30}
                  height={30}
                  className="mr-2"
                />
                {locale.toUpperCase()}
                <RiArrowDropDownLine className="text-2xl" />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50 transform opacity-100 transition-all duration-300 ease-in-out">
                  <button
                    className="block px-4 py-2 text-base text-gray-700 hover:bg-orange-500 hover:text-white w-full text-left"
                    onClick={() => changeLanguage('en')}
                  >
                    <div className="flex items-center">
                      <Image alt='flag' src="/depositphotos_144970693-stock-illustration-flag-of-united-kingdom-uk.jpg" width={20} height={20} className="mr-2" />
                      EN
                    </div>
                  </button>
                  <button
                    className="block px-4 py-2 text-base text-gray-700 hover:bg-orange-500 hover:text-white w-full text-left"
                    onClick={() => changeLanguage('th')}
                  >
                    <div className="flex items-center">
                      <Image alt='flag' src="/flag08.jpg" width={20} height={20} className="mr-2" />
                      TH
                    </div>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Navbar Toggle Button */}
          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-blue-500">
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-black bg-opacity-40 z-40 ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-all duration-500 ease-in-out`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white z-50">
          {/* Close Button */}
          <button onClick={handleCloseMenu} className="absolute top-4 right-4 text-2xl text-blue-500">
            <IoClose />
          </button>

          {['home', 'about', 'activity', 'services', 'contact'].map((page) => (
            <Link
              key={page}
              onClick={handleCloseMenu}
              className='block px-3 py-2 rounded-md text-base font-medium text-blue-500 hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105'
              href={`/${locale}/${page === 'home' ? '' : page}`}
            >
              {t(page)}
            </Link>
          ))}

          {/* Mobile Language Dropdown */}
          <div className="relative z-10">
            <button onClick={handleToggleDropdown} className="block px-4 py-2 text-base text-gray-700 hover:bg-orange-500 hover:text-white w-full text-left">
              <div className="flex items-center">
                <Image
                  alt='flag'
                  src={locale === 'th' ? '/flag08.jpg' : '/depositphotos_144970693-stock-illustration-flag-of-united-kingdom-uk.jpg'}
                  width={20}
                  height={20}
                  className="mr-2"
                />
                {locale.toUpperCase()}
                <RiArrowDropDownLine className="text-lg ml-auto" />
              </div>
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-full bg-white rounded-md shadow-lg z-20 transform opacity-100 transition-all duration-300 ease-in-out">
                <button
                  onClick={() => {
                    changeLanguage('en');
                    handleCloseMenu();
                  }}
                  className="block px-4 py-2 text-base text-gray-700 hover:bg-orange-500 hover:text-white w-full text-left"
                >
                  <div className='flex items-center'>
                    <Image alt='flag' src="/depositphotos_144970693-stock-illustration-flag-of-united-kingdom-uk.jpg" width={20} height={10} className="mr-2" />
                    EN
                  </div>
                </button>
                <button
                  onClick={() => {
                    changeLanguage('th');
                    handleCloseMenu();
                  }}
                  className="block px-4 py-2 text-base text-gray-700 hover:bg-orange-500 hover:text-white w-full text-left"
                >
                  <div className='flex items-center'>
                    <Image alt='flag' src="/flag08.jpg" width={20} height={10} className="mr-2" />
                    TH
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
