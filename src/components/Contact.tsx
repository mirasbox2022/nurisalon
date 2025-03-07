import React from 'react';
import { Instagram, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen pt-20 px-4 bg-gradient-to-b from-rose-50 to-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-rose-800 text-center mb-12">Контакты</h2>
        
        <div className="space-y-8">
          <a
            href="https://wa.me/77073427373"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-4 bg-green-500 text-white p-4 rounded-xl hover:bg-green-600 transition-colors"
          >
            <Phone className="w-6 h-6" />
            <span className="text-lg font-medium">WhatsApp: +7 707 342 7373</span>
          </a>

          <a
            href="https://www.instagram.com/nuri_salon73/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-xl hover:from-purple-600 hover:to-pink-600 transition-colors"
          >
            <Instagram className="w-6 h-6" />
            <span className="text-lg font-medium">Instagram: @nuri_salon73</span>
          </a>
        </div>
      </div>
    </div>
  );
}