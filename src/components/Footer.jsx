import React from 'react';
import { FaFacebookSquare,FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        
       
        <div>
          <h2 className="text-xl font-bold mb-2">Tozel Bilgisayar</h2>
          <p className="text-gray-400">
            Teknik servis, donanım satışı ve profesyonel destek hizmetleriyle yanınızdayız.
          </p>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-2">Menü</h3>
          <ul className="space-y-1 text-gray-400">
            <li><a href="#home" className="hover:text-white">Anasayfa</a></li>
            <li><a href="#about" className="hover:text-white">Hakkımızda</a></li>
            <li><a href="#services" className="hover:text-white">Hizmetler</a></li>
            <li><a href="#contact" className="hover:text-white">İletişim</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-2">Bizi Takip Edin</h3>
          <div className="flex space-x-4">
            <FaSquareInstagram size={24}/>
            <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
            <FaFacebookSquare size={24}/>
            <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
            <FaLinkedin size={24} />
            <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
          </div>
        </div>

      </div>

      <div className="mt-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Tozel Bilgisayar. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
