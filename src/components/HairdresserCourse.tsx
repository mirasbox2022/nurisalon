import React from 'react';
import { Sparkles } from 'lucide-react';

const HairdresserCourse = () => {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-rose-50 to-white flex flex-col items-center">
      <div className="relative w-full h-[50vh] overflow-hidden">
        <img
          src="/nurisalon.png"
          alt="Парикмахерский курс"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-rose-900/30 backdrop-blur-sm" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl font-bold">Курс на Парикмахера</h1>
          <p className="text-lg mt-2">Освойте парикмахерское искусство с нуля!</p>
        </div>
      </div>

      <div className="p-6 max-w-4xl w-full text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Чему вы научитесь:</h2>
        <ul className="space-y-3 text-gray-700 inline-block text-center">
          <li className="flex items-center gap-2"><Sparkles className="text-rose-600" /> Основы парикмахерского дела</li>
          <li className="flex items-center gap-2"><Sparkles className="text-rose-600" /> Техники окрашивания</li>
          <li className="flex items-center gap-2"><Sparkles className="text-rose-600" /> Уход за волосами</li>
        </ul>
        <div className="mt-6">
          <a 
            href="https://wa.me/77073427373"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 text-white bg-green-500 rounded-lg shadow-lg hover:bg-green-600 transition-all"
          >
            Записаться в WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default HairdresserCourse;
