import React from "react";
import { FaFacebook, FaTwitter, FaWhatsapp, FaTelegram } from "react-icons/fa";

const SocialSharePage = () => {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 dark:bg-black dark:text-white mx-auto max-w-xs">
      <button className="flex items-center justify-center space-x-2 px-2 py-2 bg-gray-900 hover:bg-blue-600 text-white transition-colors rounded shadow">
        <FaFacebook size={20} />
      </button>
      <button className="flex items-center justify-center space-x-2 px-2 py-2 bg-gray-900 hover:bg-blue-600 text-white transition-colors rounded shadow">
        <FaTwitter size={20} />
      </button>
      <button className="flex items-center justify-center space-x-2 px-2 py-2 bg-gray-900 hover:bg-blue-600 text-white transition-colors rounded shadow">
        <FaWhatsapp size={20} />
      </button>
      <button className="flex items-center justify-center space-x-2 px-2 py-2 bg-gray-900 hover:bg-blue-600 text-white transition-colors rounded shadow">
        <FaTelegram size={20} />
      </button>
    </div>
  );
};

export default SocialSharePage;
