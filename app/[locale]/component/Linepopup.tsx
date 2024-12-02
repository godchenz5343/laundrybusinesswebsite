"use client";
import React, { useState } from "react";
import { FaLine, FaFacebook } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";

const SocialMediaPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [userMessage, setUserMessage] = useState<string>("");

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const openSocialMedia = (platform: string) => {
    let url = "";
    switch (platform) {
      case "line":
        url = `https://line.me/R/ti/p/@267picqk?message=${encodeURIComponent(userMessage)}`;
        break;
      case "facebook":
        url = `https://m.me/100086992610350?message=${encodeURIComponent(userMessage)}`;
        break;
    }
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* ปุ่มเปิด/ปิดแชท */}
      <button
        onClick={togglePopup}
        className="bg-gradient-to-r from-green-400 to-green-600 text-white rounded-full p-3 shadow-xl hover:scale-110 transform transition-all duration-300"
        style={{ width: "48px", height: "48px", zIndex: 1001 }}
      >
        <AiOutlineMessage size={24} />
      </button>

      {/* Popup ช่องทางโซเชียลมีเดีย */}
      <div
        className={`absolute bottom-12 right-8 p-2 bg-gray-50 rounded-lg shadow-lg flex space-x-4 transition-all duration-500 ease-in-out transform ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        style={{
          width: "130px", // ขนาดที่เหมาะสม
          pointerEvents: isOpen ? "auto" : "none", // เพิ่มความลื่นไหล
        }}
      >
        {/* ปุ่มช่องทางการติดต่อ */}
        <div className="flex space-x-3 justify-center items-center">
          <button
            onClick={() => openSocialMedia("line")}
            className="bg-green-600 p-3 rounded-full text-white shadow-lg hover:bg-green-700 transform transition-all duration-300 flex items-center justify-center"
            title="LINE"
            style={{ width: "48px", height: "48px" }}
          >
            <FaLine size={24} />
          </button>
          <button
            onClick={() => openSocialMedia("facebook")}
            className="bg-blue-600 p-3 rounded-full text-white shadow-lg hover:bg-blue-700 transform transition-all duration-300 flex items-center justify-center"
            title="Facebook"
            style={{ width: "48px", height: "48px" }}
          >
            <FaFacebook size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaPopup;
