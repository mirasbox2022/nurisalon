import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import Models from './components/Models';
import HairdresserCourse from './components/HairdresserCourse';
import './index.css';

function App() {
  const [currentPage, setCurrentPage] = useState('Главная');

  const renderPage = () => {
    switch (currentPage) {
      case 'Главная':
        return <Home />;
      case 'Услуги':
        return <Services />;
      case 'Контакты':
        return <Contact />;
      case 'Модели':
        return <Models />;
      case 'Курс на Парикмахера':
        return <HairdresserCourse />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Navbar setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;
