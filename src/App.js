import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/index.js';
import { Home, Cart } from './pages/index.js';

function App() {
  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3000/db.json').then((resp) => resp.json()).then(json => {
      setPizzas(json.pizzas);
    });
  }, []);

  console.log(pizzas);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
