import React from 'react';
import { Scissors, Star } from 'lucide-react';

export default function Models() {
  return (
    <div className="min-h-screen pt-20 px-4 bg-gradient-to-b from-rose-50 to-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-rose-800 mb-8">Модели для стрижки</h2>
        
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="flex justify-center mb-6">
            <Scissors className="w-16 h-16 text-rose-600" />
          </div>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Ищем моделей для бесплатной стрижки!
          </h3>
          
          <p className="text-gray-600 mb-6">
            Хотите обновить свой образ совершенно бесплатно? Мы приглашаем вас стать моделью для наших талантливых стилистов! Это отличная возможность получить профессиональную стрижку без затрат.
          </p>
          
          <div className="space-y-4 text-left">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-rose-600" />
              <p>Все работы выполняются опытными мастерами</p>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-rose-600" />
              <p>Используем только профессиональную косметику</p>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-rose-600" />
              <p>Индивидуальный подход к каждому клиенту</p>
            </div>
          </div>
          
          <div className="mt-8">
            <a
              href="https://wa.me/77073427373"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-rose-600 text-white px-8 py-3 rounded-full hover:bg-rose-700 transition-colors"
            >
              Записаться
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}