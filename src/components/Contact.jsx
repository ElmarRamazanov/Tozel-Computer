import React from 'react';

export default function Contact() {
  return (
    <section className="bg-gray-100 py-16 px-4" id="contact">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        <div>
          <h2 className="text-4xl font-bold mb-6">Bizimle İletişime Geçin</h2>
          <p className="text-gray-700 mb-4">
            Aşağıdaki formu doldurarak bize ulaşabilirsiniz. En kısa sürede sizinle iletişime geçeceğiz.
          </p>
          <ul className="text-gray-800 space-y-2">
            <li>📍 Adres: Dereboyu,Lefkoşa</li>
            <li>📞 Telefon: +90 555 123 4567</li>
            <li>📧 E-posta: destek@bilgisayarteknik.com</li>
          </ul>
        </div>

       
        <form className="bg-white shadow-md rounded-lg p-8 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Adınız</label>
            <input
              type="text"
              className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ad Soyad"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">E-posta</label>
            <input
              type="email"
              className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="ornek@mail.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Mesajınız</label>
            <textarea
              rows="4"
              className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Mesajınızı buraya yazın..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gray-400 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Gönder
          </button>
        </form>
      </div>
    </section>
  );
}
