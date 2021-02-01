import React from 'react';
import cookAppReques from '../../api/cook-app'
import './create-recipe-form.scss'
import InputIngredients from '../input-ingredients/input-ingredients'
import ButtonSubmit from '../button-submit/button-submit'
import ImgUploader from '../img-uploader/img-uploader'

import { withRouter} from "react-router-dom";

class CreateRecipeForm extends React.Component{
  constructor() {
    super();
    this.state = {
      recipes: [],
      errors: {},
      ingredients: [],
      loading: false,
      message: null,
      fileInfo: null,
      inputIngredients:[]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onIngredientsChange = this.onIngredientsChange.bind(this);
  }

  addInputField = (e) => {
    const inputIngredients = this.state.inputIngredients;
    const size = inputIngredients.length + 1;
    inputIngredients.push(size);
    this.setState({
      inputIngredients
    });
    e.preventDefault();
  }

  onChangeFile = (fileInfo) => {
    this.setState({ fileInfo });
  };

  onIngredientsChange(ingredient) {
    const ingredients = [...this.state.ingredients];
    const ingr = ingredients.find((value, index) => {
      return value.id === ingredient.id
    })
    if (!ingr) {
      ingredients.push(ingredient)
    } else {
      ingr.name = ingredient.name;
      ingr.qty = ingredient.qty
    }
    this.setState({ingredients})
  }

  handleChange(event) {
    let recipes = this.state.recipes;
    recipes[event.target.name] = event.target.value;
    this.setState({
      recipes
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.validate()) {
      let recipe = {};
      recipe["title"] = this.state.recipes.title;
      recipe["calories"] = this.state.recipes.calories;
      recipe["time"] = this.state.recipes.time;
      recipe["description"] = this.state.recipes.description;
      recipe["img"] = this.state.fileInfo.img;
      recipe["difficulty"] = this.state.recipes.difficulty;
      recipe["ingredients"] = this.state.ingredients
      this.setState({ recipes: [recipe] })

      cookAppReques.post('/recipes', recipe)

      this.props.history.push(`/add-modal`);
    }
  }

  validate(){
    let recipes = this.state.recipes;
    let errors = {};
    let isValid = true;

    if (!recipes["title"]) {
      isValid = false;
      errors["title"] = "Пожалуйста, укажите название блюда";
    }
    if (!recipes["time"]) {
      isValid = false;
      errors["time"] = "Пожалуйста, укажите время приготовления";
    }
    if (!recipes["description"]) {
      isValid = false;
      errors["description"] = "Пожалуйста, опишите стадии приготовления ";
    }
    if (!recipes["calories"]) {
      isValid = false;
      errors["calories"] = "Пожалуйста, укажите колличество калорий";
    }
    if (!recipes["difficulty"]) {
      isValid = false;
      errors["difficulty"] = "Пожалуйста, укажите сложность приготовления";
    }
    if (this.state.ingredients.length === 0) {
      isValid = false;
      errors["ingredients"] = "Пожалуйста, добавьте минимум один ингредиент";
    }
    if (this.state.fileInfo == null) {
      isValid = false;
      errors["img"] = "Пожалуйста, добавьте фотографию";
    }

    this.setState({
      errors: errors
    });
    return isValid;
  }

  render() {
    return (
      <div className="create-recipe__container">
        <h2 className="recipe-title">Создать рецепт</h2>
        <form action="" onSubmit={this.handleSubmit} >
          <ul className="create-recipe__list" >
            <li className="create-recipe__item ">
              <label className="recipe-label" htmlFor="title">Название рецепта:</label>
              <input className=" input input-title" name="title" type="text" value={this.state.recipes.title} onChange={this.handleChange} />
              <div className="text-danger">{this.state.errors.title}</div>
            </li>
            <li className="create-recipe__item ">
              <label className="recipe-label" htmlFor="time">Время приготовления (в минутах):</label>
              <input className="input input-number" name="time" type="number" value={this.state.recipes.time} onChange={this.handleChange} />
              <div className="text-danger">{this.state.errors.time}</div>
            </li>
            <li className="create-recipe__item ">
              <label  className="recipe-label" htmlFor="calories">Колличество каллорий (на 100 гр):</label>
              <input className="input input-number" name="calories" type="number" value={this.state.recipes.calories} onChange={this.handleChange} />
              <div className="text-danger">{this.state.errors.calories}</div>
            </li>
            <li className="create-recipe__item">
              <label  className="recipe-label" htmlFor="difficulty">Сложность приготовления:</label>
              <select className="input input-difficulty" name="difficulty" value={this.state.recipes.difficulty} onChange={this.handleChange}>
                <option value="сложно">сложно</option>
                <option value="средняя">средняя</option>
                <option value="легко">легко</option>
              </select>
              <div className="text-danger">{this.state.errors.difficulty}</div>
            </li>
            <li className="create-recipe__item create-recipe__item-description">
              <label className="recipe-label" htmlFor="description">Процесс приготовления:</label>
              <textarea className="input input-description" name="description" type="text" value={this.state.recipes.description} onChange={this.handleChange} />
              <div className="text-danger">{this.state.errors.description}</div>
            </li>
            <li className="create-recipe__item create-recipe__item-ingredients">
              <label className="recipe-label" htmlFor="ingredients">Ингредиенты:</label>
              <ul className="ingredients-list" >
                <InputIngredients id='1' key="1" onIngredientsChange={this.onIngredientsChange} />
                <div className="text-danger">{this.state.errors.ingredients}</div>
                {this.state.inputIngredients.map(index => {
                  return (
                  <>
                    <InputIngredients id={String(index += 1)} key={index} onIngredientsChange={this.onIngredientsChange} />

                  </>
                  )
                })}
                <button className="add-field" onClick={this.addInputField}> + ингредиент</button>

              </ul>
            </li>
            <li className="create-recipe__item">
              <ImgUploader onChange={this.onChangeFile} />
              <div className="text-danger">{this.state.errors.img}</div>
            </li>
          </ul>
          <ButtonSubmit />
        </form>

      </div>
    )
  }
}

export default withRouter(CreateRecipeForm)

