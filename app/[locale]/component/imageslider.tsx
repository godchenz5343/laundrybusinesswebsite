"use client";
import React, { useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";

const ImageSlider: React.FC = () => {
  const images: string[] = ["/รูปหน้าปก.png", "/LogoB.png"];
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full mx-auto overflow-hidden h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px] mt-4 sm:mt-8">
      {/* แสดงภาพในรูปแบบสไลด์ */}
      <div
        className="flex transition-transform duration-500 h-full"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="w-full h-full object-contain flex-shrink-0"
          />
        ))}
      </div>

      {/* ปุ่มเลื่อน */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 md:text-5xl  bg-gray-100  rounded-full text-blue-500 p-2 sm:p-2"
      >
        <MdNavigateBefore />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 md:text-5xl  bg-gray-100 rounded-full text-blue-500 p-2 sm:p-2"
      >
        <MdNavigateNext />
      </button>

      {/* จุดบอกสถานะ */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 sm:w-4 sm:h-4 rounded-full ${
              index === currentIndex ? "bg-orange-500" : "bg-gray-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
