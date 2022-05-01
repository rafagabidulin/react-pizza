import React from 'react'
import { Categories, SortPopup, PizzaBlock } from '../components/index.js';

function Home() {
  return (
    <div className="container">
    <div className="content__top">
      <Categories
      onClick={(name) => console.log(name)}
      items={[
        'Мясные',
        'Вегетарианские',
        'Гриль',
        'Острые',
        'Закрытые'
      ]} />
      <SortPopup items={['популярности', 'цене', 'алфавиту']} />
    </div>
    <h2 className="content__title">Все пиццы</h2>
    <div className="content__items">
      <PizzaBlock />
      <PizzaBlock />
      <PizzaBlock />
      <PizzaBlock />
      <PizzaBlock />
      <PizzaBlock />
    </div>
  </div>
  )
}

export default Home