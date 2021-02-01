import React from 'react';
import cookAppReques from '../../api/cook-app'
import { confirmAlert } from 'react-confirm-alert'

import './recipe-page.scss';
import 'react-confirm-alert/src/react-confirm-alert.css';
class Recipe extends React.Component{
  constructor(props) {
    super()
    this.state = {
      id: '',
      title: '',
      calories: '',
      time: '',
      description: '',
      difficulty: '',
      img: '',
      ingredients: [],
      archive: []
    };
    this.addFavorite = this.addFavorite.bind(this)
    this.deleteRecipe = this.deleteRecipe.bind(this)
  }

  async componentDidMount() {
    const { data } = await cookAppReques.get(
      `/recipes/${this.props.match.params.id}`
    )

    this.setState({
      id: data.data.id,
      title: data.data.title,
      calories: data.data.calories,
      completed: data.data.completed,
      time: data.data.time,
      description: data.data.description,
      difficulty: data.data.difficulty,
      img: data.data.img,
      ingredients: data.data.ingredients,
      msg: "Добавить в избранное"
    })
    var archive = this.state.archive,
      keys = Object.keys(localStorage),
      i = keys.length;

    while ( i-- ) {
      archive.push(JSON.parse(localStorage.getItem( keys[i] )));
    }
    this.setState({ archive })
  }

  async componentDidUpdate() {
    if (this.props.match.params.id !== this.state.id) {
      const { data } = await cookAppReques.get(
        `/recipes/${this.props.match.params.id}`
      )
      this.setState({
        id: data.data.id,
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
  }

  addFavorite() {
    const id = this.props.match.params.id;
    localStorage.setItem(id, JSON.stringify(this.state))
    let i = this.state.archive.some(el => el.id !== this.state.id)
    if (i) {
      this.setState({msg: "В избранном" })
    }
    this.forceUpdate()
  }

  deleteRecipe() {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='modal-delete'>
            <p className='modal-delete__title'>Вы действительно хотите удалить рецепт?</p>
              <button className='modal-delete__button'
              onClick={() => {
                cookAppReques.delete(`/recipes/${this.props.match.params.id}`);
                onClose()
                this.props.history.push(`/delete-modal`);
              }}
              >
              Да
            </button>
            <button className='modal-delete__button' onClick={onClose}>Нет</button>
          </div>
        );
      }
    });
  }

  render() {
    return (
      <div className="recipe-container">
        <h2 className="recipe-title">{this.state.title}</h2>
        {this.state.archive.some(el => el.id === this.state.id) ?
          <button className="recipe__button" onClick={this.addFavorite} >В избранном</button> :
          <button className="recipe__button" onClick={this.addFavorite} >{this.state.msg}</button>
        }

        <button className="recipe__button recipe__button-delete" onClick={this.deleteRecipe} >Удалить рецепт</button>
        <div className="recipe__info-box">
          <div className="recipe-img__wrapper">
            <img className="recipe-img" src={this.state.img} alt="фотография блюда"/>
          </div>
          <div className="recipe__info-box__ingredients">
            <h3 className="recipe__ingredients-title">Ингредиенты:</h3>
            <ol className="recipe__ingredients">
              {this.state.ingredients.map((ing, index) =>
                <li className="recipe__ingredients-item" key={index} >
                  {ing.name}.......................{ing.qty} </li>)}
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