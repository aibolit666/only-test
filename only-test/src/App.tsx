import React from 'react';
import { NotFound } from './pages/NotFound/NotFound';
import { Route, Routes } from 'react-router-dom';
import Main from 'pages/Main/Main';
import './App.css';

const App = () => {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
