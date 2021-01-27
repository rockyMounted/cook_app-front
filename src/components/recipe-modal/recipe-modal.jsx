import React from 'react';

import './recipe-modal.scss'

class RecipeModal extends React.Component{
  render(){
    return (
      <div className="save-recipe__modal">
        <h2 className="save-recipe__text">Спасибо, Ваш рецепт сохранен!</h2>
      </div>
    )
  }
}

export default RecipeModal