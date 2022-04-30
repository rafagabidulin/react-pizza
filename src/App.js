import React from 'react';
import { Header } from './components/index.js';
import Home from './pages/Home.jsx';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
      <Home />
      </div>
    </div>
  );
}

export default App;
