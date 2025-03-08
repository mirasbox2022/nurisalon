import React from 'react';
import { Scissors, Sparkles } from 'lucide-react';

const HairdresserCourse = () => {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-rose-50 to-white">
      <div className="relative h-[50vh] overflow-hidden">
        <img
          src="/hairdresser-course.jpg"
          alt="Парикмахерский курс"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-rose-900/30 backdrop-blur-sm" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl font-bold">Курс на Парикмахера</h1>
          <p className="text-lg mt-2">Освойте парикмахерское искусство с нуля!</p>
        </div>
      </div>

      <div className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Чему вы научитесь:</h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-center gap-2"><Scissors className="text-rose-600" /> Основы парикмахерского дела</li>
          <li className="flex items-center gap-2"><Sparkles className="text-rose-600" /> Техники окрашивания</li>
          <li className="flex items-center gap-2">🧴 Уход за волосами</li>
        </ul>
      </div>
    </div>
  );
};

export default HairdresserCourse;
