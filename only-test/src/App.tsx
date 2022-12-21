import React from 'react';
import Main from './pages/Main/Main';
import { NotFound } from './pages/NotFound/NotFound';
import { Route, Routes } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
