import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Message from './components/Message';
import Home from './components/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/message" element={<Message />} />
    </Routes>
  );
}
export default App;
