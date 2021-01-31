import React from 'react';

import './recipe-modal.scss'

class RecipeModal extends React.Component{

  componentWillMount(){
    setTimeout(() => {
        this.props.history.push('/recipes');
    }, 2000)
  }

  render(){
    return (
      <div className="save-recipe__container ">
        <div className="save-recipe__modal ">
          <h2 className="save-recipe__text">Спасибо, Ваш рецепт сохранен!</h2>
        </div>
      </div>
    )
  }
}

export default RecipeModal