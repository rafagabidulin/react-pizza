import React from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import setPizzas from './redux/actions/pizzas.js';

import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import Cart from './pages/Cart.jsx';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      dispatch(setPizzas(data.pizzas));
    });
  }, []);

  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
