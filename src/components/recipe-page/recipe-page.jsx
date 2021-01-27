import React from 'react';
import cookAppReques from '../../api/cook-app'

import './recipe-page.scss'
class Recipe extends React.Component{
  state = { title: '', calories: '', time: '', description: '', difficulty: '', img: '', ingredients: [] };

  async componentDidMount() {
    const { data } = await cookAppReques.get(
      `/recipes/${this.props.match.params.id}`
    )

    this.setState({
      title: data.data.title,
      calories: data.data.calories,
      completed: data.data.completed,
      time: data.data.time,
      description: data.data.description,
      difficulty: data.data.difficulty,
      img: data.data.img,
      ingredients: data.data.ingredients,
    })
  }
  render() {
    return (
      <div className="recipe-container">
        <h2 className="recipe-title">{this.state.title}</h2>
        <div className="recipe__info-box">
          <div className="recipe-img__wrapper">
            <img className="recipe-img" src={this.state.img} alt="фотография блюда"/>
          </div>
          <div className="recipe__info-box__ingredients">
            <h3 className="recipe__ingredients-title">Ингредиенты:</h3>
            <ol className="recipe__ingredients">
              {this.state.ingredients.map((ing, index) =>
                <li className="recipe__ingredients-item" key={index} >
                  {ing.name}.................{ing.qty} </li>)}
            </ol>
          </div>
        </div>
        <div className="recipe-description__box">
          <div className="recipe-description__info">
            <div className="recipe-info__item">
              <span className="recipe-info__text" >Время приготовления: </span>
              <span className="recipe-info__value" >{this.state.time} минут</span>
            </div>
            <div className="recipe-info__item">
              <span className="recipe-info__text" >Калорийность блюда (на 100 гр): </span>
              <span className="recipe-info__value" >{this.state.calories} ккал</span>
            </div>
            <div className="recipe-info__item">
              <span className="recipe-info__text" >Сложность приготовления: </span>
              <span className="recipe-info__value" >{this.state.difficulty}</span>
              </div>
          </div>
          <h3 className="recipe-description__title">Инструкция: </h3>
          <div className="recipe-description">
            {this.state.description}
          </div>
        </div>
      </div>
    )
  }
}

export default Recipe