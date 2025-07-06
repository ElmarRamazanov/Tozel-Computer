import React from 'react';
import { FaFacebookSquare,FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
    
    <div>
      <h2 className="text-lg font-bold mb-2">Tozel Bilgisayar</h2>
      <p className="text-sm text-gray-400">Teknik servis ve donanım satışı</p>
    </div>

    <div>
      <h3 className="text-md font-semibold mb-2">Menü</h3>
      <ul className="space-y-1 text-gray-400">
        <li><a href="#">Anasayfa</a></li>
        <li><a href="#">Hakkımızda</a></li>
        <li><a href="#">Hizmetler</a></li>
      </ul>
    </div>

    <div>
      <h3 className="text-md font-semibold mb-2">İletişim</h3>
      <ul className="space-y-1 text-gray-400">
        <li>📍 İstanbul</li>
        <li>📞 +90 555 000 0000</li>
        <li>✉️ info@tozel.com</li>
      </ul>
    </div>
  </div>
</footer>
  );
}
