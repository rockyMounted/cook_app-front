import React from "react";
import { Link } from "react-router-dom";

import "./favorite-recipes-box.scss";

class FavoriteRecipesBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      saveRecipes: []
    }
    this.removeItem = this.removeItem.bind(this)
  }



  removeItem(e) {
    let id = e.target.dataset.id
    localStorage.removeItem(id)

    this.forceUpdate()
    e.preventDefault()
  }

  render() {
    var visibility = "hide";
    if (this.props.boxVisibility){
      visibility = "show";
    }
    var archive = [],
      keys = Object.keys(localStorage),
      i = keys.length;

    while ( i-- ) {
      archive.push(JSON.parse(localStorage.getItem( keys[i] )));
    }
    return (
      <div id="favorite-recipe__box" className={visibility}>
        <h3 className="favorite-recipe__title">Любимые рецепты</h3>
        <button className='close-box__button' onClick={this.props.handleMouseDown}></button>
        {archive.length === 0 &&
          <div className='favorite-recipe__text'>Список пуст</div>}
        {archive.length > 0 &&
          <ul className='favorite-recipe__container'>
          {archive.map((recipe, index) => (
            <Link to={`/recipes/${recipe.id}`} key={index}>
              <li className='favorite-recipe__item' >
                <div className='favorite-recipe__img-wrapper'>
                  <img className='favorite-recipe__img'src={recipe.img} alt="" />
                </div>
                <div className="favorite-recipe__info">
                  <h3 className='favorite-recipe__subtitle'>{recipe.title}</h3>
                  <ul className="favorite-recipe__details">
                    <li>Время: {recipe.time} минут</li>
                    <li>Калорийность: {recipe.calories} ккал</li>
                  </ul>
                  <button className="favorite-recipe__button-delete" onClick={this.removeItem} data-id={recipe.id}></button>
                </div>
              </li>
            </Link>
          ))}
        </ul>
        }
      </div>
    );
  }
}

export default FavoriteRecipesBox;