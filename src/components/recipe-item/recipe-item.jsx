import React from 'react';

import './recipe-item.scss'

const RecipeItem = (props) => {
  return (
    <div className="recipe-item__wrapper">
      <div className="recipe-item">
        <h2 className="recipe-item__title">
        {props.title}
      </h2>
        <div className="recipe-item__img-wrapper">
          <img className="recipe-item__img" src='https://static.1000.menu/img/content/33992/sup-lapshichnyi-s-kuricei_1554575213_1_max.jpg' alt=""/>
        </div>
        <div className="recipe-item__info">
          <div className="recipe-item__details">
            <span className="recipe-details__item">Время: {props.time} минут</span>
            <span className="recipe-details__item">Сложность: {props.difficulty}</span>
          </div>
          <div className="recipe-item__description">
            {props.description}
          </div>
        </div>
      </div>
    </div>
  )
};

export default RecipeItem;