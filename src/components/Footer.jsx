import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left">
        
       
        <div>
          <h2 className="text-xl font-bold mb-2">Tozel Bilgisayar</h2>
          <p className="text-sm text-gray-400">
            Teknik servis ve donanım alanında güvenilir hizmet sunar.
          </p>
        </div>

        
        <div>
          <h3 className="text-md font-semibold mb-2">Menü</h3>
          <ul className="space-y-1 text-gray-400">
            <li><a href="#" className="hover:text-white">Anasayfa</a></li>
            <li><a href="#" className="hover:text-white">Hakkımızda</a></li>
            <li><a href="#" className="hover:text-white">Hizmetler</a></li>
            <li><a href="#" className="hover:text-white">İletişim</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-md font-semibold mb-2">İletişim</h3>
          <ul className="space-y-1 text-gray-400 mb-4">
            <li>📍 Lefkoşa</li>
            <li>📞 +90 555 123 4567</li>
            <li>✉️ info@tozelbilgisayar.com</li>
          </ul>
          <div className="flex justify-center md:justify-start gap-4 text-xl text-gray-400">
            <a href="#" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-500">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Tozel Bilgisayar. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
