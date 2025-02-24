import { Mail, Send, Pinterest, Share2 } from "lucide-react";
import {
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaTelegram,
  FaPinterest,
} from "react-icons/fa";
import Link from "next/link";

const SocialShare = ({ url, title }) => {
  const socialLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      url
    )}&text=${encodeURIComponent(title)}`,
    email: `mailto:?subject=${encodeURIComponent(
      title
    )}&body=${encodeURIComponent(url)}`,
    telegram: `https://t.me/share/url?url=${encodeURIComponent(
      url
    )}&text=${encodeURIComponent(title)}`,
    pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
      url
    )}&description=${encodeURIComponent(title)}`,
  };

  return (
    <div className="flex items-center space-x-3 mt-4">
      {/* Share Button */}
      <div>
        <Link
          href="#"
          className="flex items-center px-3 py-1 border rounded-lg  text-foreground bg-background"
        >
          <Share2 size={20} className="mr-2" />
          Share
        </Link>
      </div>

      {/* Social Media Icons */}
      <div className="flex space-x-3">
        <Link href={socialLinks.facebook} target="_blank">
          <FaFacebook size={24} className="text-blue-600 hover:opacity-75" />
        </Link>
        <Link href={socialLinks.twitter} target="_blank">
          <FaTwitter className="text-blue-400 hover:opacity-75" size={24} />
        </Link>
        <Link href={socialLinks.email} target="_blank">
          <Mail className="text-gray-700 hover:opacity-75" size={24} />
        </Link>
        <Link href={socialLinks.telegram} target="_blank">
          <Send className="text-blue-500 hover:opacity-75" size={24} />
        </Link>
        <Link href={socialLinks.pinterest} target="_blank">
          <FaPinterest className="text-red-600 hover:opacity-75" size={24} />
        </Link>
      </div>
    </div>
  );
};

export default SocialShare;
