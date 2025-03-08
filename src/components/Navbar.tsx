import React, { useState } from 'react';
import { Menu, X, Instagram, Phone } from 'lucide-react';

interface NavbarProps {
  setCurrentPage: (page: string) => void;
}

export default function Navbar({ setCurrentPage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = ['Главная', 'Услуги', 'Контакты', 'Модели для стрижки', 'Курс на Парикмахера'];

  return (
    <nav className="fixed top-0 left-0 w-full bg-rose-50 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex-shrink-0 cursor-pointer" 
            onClick={() => {
              setCurrentPage('Главная');
              setIsOpen(false);
            }}
          >
            <h1 className="text-2xl font-bold text-rose-600">NuriSalon</h1>
          </div>
          
          <button 
            onClick={toggleMenu} 
            className="text-rose-600 hover:text-rose-700 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`
          fixed top-16 right-0 h-screen w-full bg-rose-50/95 backdrop-blur-sm
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex flex-col items-center pt-8 space-y-8">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                setCurrentPage(item);
                setIsOpen(false);
              }}
              className="text-xl font-medium text-rose-800 hover:text-rose-600 transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
