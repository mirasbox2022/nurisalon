import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-rose-50 to-white">
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/nurisalon.png"
          alt="Salon interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-rose-900/30 backdrop-blur-sm" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
              NuriSalon
            </h1>
            <p className="text-xl md:text-2xl animate-slide-up">
              Ваша красота - наше призвание
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-white p-6 rounded-xl shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <Sparkles className="w-8 h-8 text-rose-600" />
              <h3 className="text-xl font-semibold">Профессионализм</h3>
            </div>
            <p className="text-gray-600">
              Наши мастера - настоящие профессионалы своего дела, которые постоянно совершенствуют свои навыки
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <Sparkles className="w-8 h-8 text-rose-600" />
              <h3 className="text-xl font-semibold">Качество</h3>
            </div>
            <p className="text-gray-600">
              Мы используем только профессиональную косметику и современное оборудование
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}