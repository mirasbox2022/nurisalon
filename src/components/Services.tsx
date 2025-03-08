import React from 'react';
import { Scissors, Sparkles, Heart, Wand2, Palette } from 'lucide-react';

const services = [
  { name: 'Парикмахерские услуги', price: 'от 1500 тг и выше', icon: Scissors },
  { name: 'Маникюр гель', price: 'от 3000 тг', icon: Sparkles },
  { name: 'Ресницы', price: 'от 3000 тг', icon: Heart },
  { name: 'Шугаринг на все зоны', price: 'Уточняйте у мастера', icon: Wand2 },
  { name: 'Перманент', price: 'Уточняйте у мастера', icon: Palette },
  { name: 'Макияж, коррекция бровей', price: 'Уточняйте у мастера', icon: Sparkles },
];

export default function Services() {
  return (
    <div className="min-h-screen pt-20 px-4 bg-gradient-to-b from-rose-50 to-white">
      <h2 className="text-3xl font-bold text-rose-800 text-center mb-12">Наши услуги</h2>
      <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.name}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center space-x-4">
              <service.icon className="w-8 h-8 text-rose-600" />
              <h3 className="text-lg font-semibold text-gray-800">{service.name}</h3>
            </div>
            <p className="mt-2 text-gray-600">{service.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
