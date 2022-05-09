import React from 'react';
import { useSelector } from 'react-redux';
import Categories from '../components/Categories.jsx';
import SortPopup from '../components/SortPopup.jsx';
import PizzaBlock from '../components/PizzaBlock.jsx';

function Home() {
  const { items } = useSelector(({ pizzas }) => {
    return {
      items: pizzas.items,
    };
  });

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories
          onClick={(name) => console.log(name)}
          items={['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']}
        />
        <SortPopup
          items={[
            { name: 'популярности', type: 'popular' },
            { name: 'цене', type: 'price' },
            { name: 'алфавиту', type: 'alphabet' },
          ]}
        />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {items && items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
}

export default Home;
