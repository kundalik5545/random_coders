import Link from "next/link";
import React from "react";
import { FaFacebook, FaTwitter, FaWhatsapp, FaTelegram } from "react-icons/fa";
import { Button } from "../ui/button";

const SocialSharePage = () => {
  return (
    <div className="p-4 grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 gap-4 dark:text-white mx-auto max-w-xs">
      <Link
        href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_WEBSITE_NAME}`}
        passHref
      >
        <Button className="flex items-center justify-center space-x-2 px-2 py-2 bg-gray-900 hover:bg-blue-600 text-white transition-colors rounded shadow">
          <FaFacebook size={20} />
        </Button>
      </Link>
      <Link
        href={`https://twitter.com/intent/tweet?url=${process.env.NEXT_PUBLIC_WEBSITE_NAME}`}
        passHref
      >
        <Button className="flex items-center justify-center space-x-2 px-2 py-2 bg-gray-900 hover:bg-blue-600 text-white transition-colors rounded shadow">
          <FaTwitter size={20} />
        </Button>
      </Link>
      <Link
        href={`https://t.me/share/url?url=${process.env.NEXT_PUBLIC_WEBSITE_NAME}`}
        passHref
      >
        <Button className="flex items-center justify-center space-x-2 px-2 py-2 bg-gray-900 hover:bg-blue-600 text-white transition-colors rounded shadow">
          <FaTelegram size={20} />
        </Button>
      </Link>
      <Link
        href={`https://wa.me/?text=${process.env.NEXT_PUBLIC_WEBSITE_NAME}`}
        passHref
      >
        <Button className="flex items-center justify-center space-x-2 px-2 py-2 bg-gray-900 hover:bg-blue-600 text-white transition-colors rounded shadow">
          <FaWhatsapp size={20} />
        </Button>
      </Link>
    </div>
  );
};

export default SocialSharePage;
