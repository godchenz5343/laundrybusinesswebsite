"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from 'next-intl'
import { FaFacebook } from "react-icons/fa";
import { FaLine } from "react-icons/fa6";



const Footer = () => {
    const t = useTranslations("navbar");
    const a = useTranslations("footer");
    const sl = useTranslations("slogan");
    const locale = useLocale();  // ดึงค่า locale
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Section 1: Company Info */}
          <div>
            <div className="  items-center">
              <Image alt="Laundry Business Logo" src="/LogoB.png" width={100} height={100} />
              <div className="ml-3">
                <h2 className="text-xl font-bold">Laundry Business</h2>
                <p className="text-sm text-gray-300 mt-2">
                    {sl("slogan")}
                </p>
                <div className="flex items-center pt-3 text-3xl space-x-4">
                    <Link href="https://www.facebook.com/profile.php?id=100086992610350" passHref legacyBehavior>
                        <a target="_blank"  rel="noopener noreferrer">
                        <FaFacebook />
                        </a>
                    </Link>
                    <Link href="https://line.me/R/ti/p/~@267picqk" passHref legacyBehavior>
                        <a target="_blank"  rel="noopener noreferrer">
                            <FaLine />
                        </a>
                    </Link>
                    
                   
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Navigation Links */}
          <div className="ml-3">
            <h3 className="text-lg font-semibold mb-4">{a("quicklink")}</h3>
            <ul className="space-y-2">
              <li>
                <Link  href={`/${locale}/`} className="text-gray-300 hover:text-orange-500">
                {t("home")}
                </Link>
              </li>
              <li>
              <Link  href={`/${locale}/about`} className="text-gray-300 hover:text-orange-500">
                {t("about")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/activity`} className="text-gray-300 hover:text-orange-500">
                {t("activity")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services`} className="text-gray-300 hover:text-orange-500">
                {t("services")}
                </Link>
              </li>
              <li>
              <Link href={`/${locale}/contact`} className="text-gray-300 hover:text-orange-500">
                {t("contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 3: Contact Info */}
          <div className="ml-3">
            <h3 className="text-lg font-semibold mb-4">{a("contactus")}</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <p>{a("address1")}</p>
                <p>{a("address2")}</p>
              </li>
              <li>
                <p>{a("mobile")}</p>
                <p>{a("mobile2")}</p>
              </li>
              <li>
                <p>{a("email")}</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Laundry Business. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;